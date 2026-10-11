import { Router } from "express";
import { requireAuth } from "../middleware/require-auth.js";
import { supabase } from "../lib/supabase.js";

const authRouter = Router();

authRouter.get("/me", requireAuth, async (req, res) => {
    const user = req.authUser;
    if (!user) {
        res.status(401).json({ message: "Authentication required" });
        return;
    }

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("id, display_name, avatar, created_at, updated_at")
        .eq("id", user.id)
        .maybeSingle();

    if (error) {
        console.error("Failed to load authenticated profile", error.message);
        res.status(500).json({ message: "Unable to load profile" });
        return;
    }

    res.json({
        user: { id: user.id, email: user.email ?? null },
        profile,
    });
});

export default authRouter;
