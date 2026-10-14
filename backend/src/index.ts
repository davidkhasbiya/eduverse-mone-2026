
import express from "express";
import cors from "cors";
import "./lib/supabase.js";
import questRouter from "./routes/quest.routes.js";
import questionRouter from "./routes/question.routes.js";
import authRouter from "./routes/auth.routes.js";
import aiRouter from "./routes/ai.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/quests", questionRouter);
app.use("/api/quests", questRouter);
app.use("/api/auth", authRouter);
app.use("/api/ai", aiRouter);
app.use("/api/me", userRouter);

app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "EduVerse backend is running!",
    });
});

export default app;

// Jalankan server hanya ketika dijalankan secara lokal.
if (process.env.NODE_ENV !== "production") {
    const PORT = Number(process.env.PORT) || 4000;

    app.listen(PORT, () => {
        console.log(`Backend running at http://localhost:${PORT}`);
    });
}
