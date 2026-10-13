import { Router } from "express";
import { requireAuth } from "../middleware/require-auth.js";
import { supabase } from "../lib/supabase.js";
import { quests } from "../data/quests.js";

const userRouter = Router();

userRouter.get("/dashboard", requireAuth, async (req, res) => {
    const user = req.authUser;
    if (!user) { res.status(401).json({ message: "Authentication required" }); return; }
    const [{ data: attempts, error }, { data: storedQuests, error: questError }] = await Promise.all([
        supabase.from("quiz_attempts").select("quest_id, score, xp_earned, created_at").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("quests").select("id, slug, title"),
    ]);
    if (error || questError) { console.error("Failed to load dashboard stats", error?.message ?? questError?.message); res.status(500).json({ message: "Unable to load dashboard" }); return; }
    const rows = attempts ?? [];
    const questIds = new Set(rows.map((attempt) => attempt.quest_id));
    const availableQuests = quests.map((quest) => ({ ...quest, id: storedQuests?.find((stored) => stored.slug === quest.slug)?.id ?? quest.id }));
    res.json({ stats: { xp: rows.reduce((sum, attempt) => sum + Number(attempt.xp_earned ?? 0), 0), questsCompleted: questIds.size, questsTotal: availableQuests.length }, quests: availableQuests });
});

userRouter.get("/progress", requireAuth, async (req, res) => {
    const user = req.authUser;
    if (!user) { res.status(401).json({ message: "Authentication required" }); return; }
    const [{ data: attempts, error }, { data: storedQuests, error: questError }] = await Promise.all([
        supabase.from("quiz_attempts").select("id, quest_id, score, correct_answers, total_questions, xp_earned, created_at").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("quests").select("id, slug, title"),
    ]);
    if (error || questError) { console.error("Failed to load progress", error?.message ?? questError?.message); res.status(500).json({ message: "Unable to load progress" }); return; }
    const rows = attempts ?? [];
    const questById = new Map((storedQuests ?? []).map((quest) => [quest.id, { slug: quest.slug, title: quest.title }]));
    res.json({ attempts: rows.map((attempt) => ({ ...attempt, quest: questById.get(attempt.quest_id) ?? null })), quests: quests.map((quest) => ({ ...quest, id: storedQuests?.find((stored) => stored.slug === quest.slug)?.id ?? quest.id })) });
});

export default userRouter;
