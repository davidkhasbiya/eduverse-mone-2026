import express from "express";
import cors from "cors";
import questRouter from "./routes/quest.routes.js";
import questionRouter from "./routes/question.routes.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use("/api/quests", questionRouter);
app.use("/api/quests", questRouter);

app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "EduVerse backend is running!",
    });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
