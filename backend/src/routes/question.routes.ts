import { Router } from "express";
import { quests } from "../data/quests.js";
import { questions } from "../data/questions.js";
import { requireAuth } from "../middleware/require-auth.js";
import { supabase } from "../lib/supabase.js";

const questionRouter = Router();

questionRouter.get("/:slug/questions", (req, res) => {
    const quest = quests.find((item) => item.slug === req.params.slug);
    if (!quest) {
        res.status(404).json({ message: "Quest not found" });
        return;
    }

    const questQuestions = questions.filter((item) => item.questSlug === quest.slug);
    if (questQuestions.length === 0) {
        res.status(404).json({ message: "Questions not found" });
        return;
    }

    res.json({
        quest: { slug: quest.slug, title: quest.title },
        questions: questQuestions.map(({ id, question, options, difficulty, topic }) => ({ id, question, options, difficulty, topic })),
    });
});

questionRouter.post("/:slug/submit", requireAuth, async (req, res) => {
    const user = req.authUser;
    if (!user) {
        res.status(401).json({ message: "Authentication required" });
        return;
    }

    const quest = quests.find((item) => item.slug === req.params.slug);
    if (!quest) {
        res.status(404).json({ message: "Quest not found" });
        return;
    }

    const { answers } = req.body ?? {};
    if (!Array.isArray(answers)) {
        res.status(400).json({ message: "Invalid answers" });
        return;
    }

    const questQuestions = questions.filter((item) => item.questSlug === quest.slug);
    if (answers.length !== questQuestions.length) {
        res.status(400).json({ message: "All questions must be answered" });
        return;
    }
    const submittedIds = new Set<string>();
    for (const submitted of answers) {
        if (!submitted || typeof submitted.questionId !== "string" || !questQuestions.some((item) => item.id === submitted.questionId)) {
            res.status(400).json({ message: "Invalid question" });
            return;
        }
        if (submittedIds.has(submitted.questionId)) {
            res.status(400).json({ message: "Duplicate question" });
            return;
        }
        submittedIds.add(submitted.questionId);
        if (typeof submitted.answer !== "string" || submitted.answer.trim() === "") {
            res.status(400).json({ message: "Invalid answer" });
            return;
        }
    }

    const correctAnswers = answers.reduce((total: number, submitted: { questionId: string; answer: string }) => {
        const question = questQuestions.find((item) => item.id === submitted.questionId);
        return total + (question?.correctOption === submitted.answer ? 1 : 0);
    }, 0);

    const score = correctAnswers * 20;
    const xpEarned = correctAnswers * 10;
    const { data: storedQuest, error: questError } = await supabase
        .from("quests")
        .select("id")
        .eq("slug", quest.slug)
        .maybeSingle();

    if (questError) {
        console.error("Failed to find quest for quiz attempt", questError.message);
        res.status(500).json({ message: "Unable to save quiz attempt" });
        return;
    }
    if (!storedQuest) {
        res.status(404).json({ message: "Quest not found in database" });
        return;
    }

    const { error: attemptError } = await supabase.from("quiz_attempts").insert({
        user_id: user.id,
        quest_id: storedQuest.id,
        score,
        correct_answers: correctAnswers,
        total_questions: questQuestions.length,
        xp_earned: xpEarned,
    });

    if (attemptError) {
        console.error("Failed to save quiz attempt", attemptError.message);
        res.status(500).json({ message: "Unable to save quiz attempt" });
        return;
    }

    res.json({ result: {
        questSlug: quest.slug,
        totalQuestions: questQuestions.length,
        correctAnswers,
        incorrectAnswers: questQuestions.length - correctAnswers,
        score,
        xpEarned,
    } });
});

export default questionRouter;
