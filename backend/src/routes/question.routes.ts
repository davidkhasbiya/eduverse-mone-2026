import { Router } from "express";
import { quests } from "../data/quests.js";
import { questions } from "../data/questions.js";

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

questionRouter.post("/:slug/submit", (req, res) => {
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
    for (const submitted of answers) {
        if (!submitted || typeof submitted.questionId !== "string" || !questQuestions.some((item) => item.id === submitted.questionId)) {
            res.status(400).json({ message: "Invalid question" });
            return;
        }
        if (typeof submitted.answer !== "string" || submitted.answer.trim() === "") {
            res.status(400).json({ message: "Invalid answer" });
            return;
        }
    }

    const correctAnswers = answers.reduce((total: number, submitted: { questionId: string; answer: string }) => {
        const question = questQuestions.find((item) => item.id === submitted.questionId);
        return total + (question?.correctOption === submitted.answer ? 1 : 0);
    }, 0);

    res.json({ result: {
        questSlug: quest.slug,
        totalQuestions: questQuestions.length,
        correctAnswers,
        incorrectAnswers: questQuestions.length - correctAnswers,
        score: correctAnswers * 20,
        xpEarned: correctAnswers * 10,
    } });
});

export default questionRouter;
