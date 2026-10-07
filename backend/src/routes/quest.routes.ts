import { Router } from "express";
import { quests } from "../data/quests.js";

const questRouter = Router();

questRouter.get("/", (_req, res) => {
    res.json({ quests });
});

questRouter.get("/:slug", (req, res) => {
    const quest = quests.find((item) => item.slug === req.params.slug);

    if (!quest) {
        res.status(404).json({ message: "Quest not found" });
        return;
    }

    res.json({ quest });
});

export default questRouter;
