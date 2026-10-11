import type { NextFunction, Request, Response } from "express";
import { supabase } from "../lib/supabase.js";

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const header = req.header("authorization");
    const match = header?.match(/^Bearer\s+(\S+)$/i);

    if (!match) {
        res.status(401).json({ message: "Authentication required" });
        return;
    }

    const { data, error } = await supabase.auth.getUser(match[1]);
    if (error || !data.user) {
        res.status(401).json({ message: "Invalid or expired authentication token" });
        return;
    }

    req.authUser = data.user;
    next();
}
