import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Keep builds deterministic when env files have not been created yet. Auth calls
// will fail with a normal client error until the real public values are supplied.
export const supabase = createClient(supabaseUrl ?? "https://placeholder.supabase.co", supabaseKey ?? "placeholder-public-key", {
  auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true },
});
