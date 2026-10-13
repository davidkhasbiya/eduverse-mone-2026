import { Router } from "express";
import { requireAuth } from "../middleware/require-auth.js";
import { quests } from "../data/quests.js";
import { questions } from "../data/questions.js";
import { generateGeminiJson } from "../lib/gemini.js";

const router = Router();
const allowedTopics = ["arithmetic", "fractions", "patterns and variables"] as const;
const limits = new Map<string, { count: number; resetAt: number }>();
const maxInput = 500;

function rateLimit(userId: string) {
    const now = Date.now();
    const current = limits.get(userId);
    if (!current || current.resetAt <= now) limits.set(userId, { count: 1, resetAt: now + 60_000 });
    else if (current.count >= 10) return false;
    else current.count += 1;
    return true;
}

function validTutor(value: unknown): value is { answer: string; hints: string[]; topic: string } {
    return !!value && typeof value === "object" && typeof (value as any).answer === "string" &&
        Array.isArray((value as any).hints) && (value as any).hints.length <= 5 &&
        (value as any).hints.every((hint: unknown) => typeof hint === "string" && hint.length <= 240) &&
        typeof (value as any).topic === "string";
}

function validQuiz(value: unknown, topic: string): value is { questions: Array<{ question: string; options: string[]; correctOption: string; explanation: string; topic: string }> } {
    const list = (value as any)?.questions;
    return Array.isArray(list) && list.length >= 1 && list.length <= 5 && list.every((item: any) =>
        item && typeof item.question === "string" && item.question.length <= 300 && Array.isArray(item.options) && item.options.length === 4 &&
        item.options.every((option: unknown) => typeof option === "string" && option.length <= 100) &&
        typeof item.correctOption === "string" && item.options.includes(item.correctOption) &&
        typeof item.explanation === "string" && item.explanation.length <= 500 && item.topic === topic);
}

router.use(requireAuth);

router.post("/tutor", async (req, res) => {
    const userId = req.authUser!.id;
    const question = req.body?.question;
    const topic = req.body?.topic;
    if (!rateLimit(userId)) { res.status(429).json({ message: "Terlalu banyak permintaan. Coba lagi sebentar." }); return; }
    if (typeof question !== "string" || question.trim().length < 1 || question.length > maxInput || !allowedTopics.includes(topic)) {
        res.status(400).json({ message: "Question dan topic tidak valid" }); return;
    }
    try {
        const result = await generateGeminiJson<{ answer: string; hints: string[]; topic: string }>(`Kamu Kibo, tutor matematika ramah untuk siswa SD kelas 4-6. Jawab bahasa Indonesia sederhana dan beri petunjuk bertahap, jangan langsung membocorkan jawaban akhir. Topik harus ${topic}. Pertanyaan: ${question}. JSON tepat: {"answer": string, "hints": string[], "topic": string}`);
        if (!validTutor(result) || result.topic !== topic) throw new Error("Invalid tutor output");
        res.json({ tutor: { answer: result.answer.slice(0, 2_000), hints: result.hints, topic } });
    } catch { res.status(503).json({ message: "Tutor sedang tidak tersedia. Coba lagi nanti." }); }
});

router.post("/quiz/:slug", async (req, res) => {
    const userId = req.authUser!.id;
    const quest = quests.find((item) => item.slug === req.params.slug);
    const count = req.body?.count ?? 3;
    if (!rateLimit(userId)) { res.status(429).json({ message: "Terlalu banyak permintaan. Coba lagi sebentar." }); return; }
    if (!quest || !Number.isInteger(count) || count < 1 || count > 5) { res.status(400).json({ message: "Quest atau jumlah soal tidak valid" }); return; }
    const topic = quest.slug === "the-missing-numbers" ? "arithmetic" : quest.slug === "the-pizza-problem" ? "fractions" : "patterns and variables";
    try {
        const result = await generateGeminiJson<any>(`Buat ${count} soal pilihan ganda matematika baru untuk siswa SD kelas 4-6, topik ${topic}, berdasarkan quest ${quest.title}. JSON tepat {"questions":[{"question":string,"options":[4 string],"correctOption":string,"explanation":string,"topic":"${topic}"}]}.`);
        if (!validQuiz(result, topic)) throw new Error("Invalid quiz output");
        res.json({ source: "gemini", quest: { slug: quest.slug, title: quest.title }, questions: result.questions.map(({ correctOption, ...publicQuestion }: any, index: number) => ({ id: `ai-${quest.slug}-${index + 1}`, ...publicQuestion })) });
    } catch {
        const fallback = questions.filter((item) => item.questSlug === quest.slug).slice(0, count);
        res.json({ source: "static-fallback", quest: { slug: quest.slug, title: quest.title }, questions: fallback.map(({ correctOption, explanation, ...publicQuestion }) => publicQuestion) });
    }
});

export default router;
