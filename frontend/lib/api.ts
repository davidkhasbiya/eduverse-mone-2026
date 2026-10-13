import { supabase } from "./supabase";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) { super(message); this.status = status; }
}

export async function apiFetch<T>(path: string, init: RequestInit = {}, authenticated = false): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");
  if (authenticated) {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) throw new ApiError("Sesi login tidak ditemukan. Silakan login kembali.", 401);
    headers.set("Authorization", `Bearer ${token}`);
  }
  const response = await fetch(`${API_URL}${path}`, { ...init, headers });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) await supabase.auth.signOut();
    throw new ApiError(body.message ?? "Permintaan ke server gagal.", response.status);
  }
  return body as T;
}

export function isAuthError(error: unknown) { return error instanceof ApiError && error.status === 401; }
