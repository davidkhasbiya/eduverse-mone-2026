const timeoutMs = 12_000;
const apiBaseUrl = "https://generativelanguage.googleapis.com/v1beta/models";

type GeminiResponse = {
    candidates?: Array<{
        content?: {
            parts?: Array<{ text?: unknown }>;
        };
    }>;
};

export async function generateGeminiJson<T>(prompt: string): Promise<T> {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL;
    if (!apiKey || !model) throw new Error("Gemini is not configured");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    let response: Response;
    try {
        response = await fetch(`${apiBaseUrl}/${encodeURIComponent(model)}:generateContent`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json", maxOutputTokens: 700, temperature: 0.2 },
            }),
            signal: controller.signal,
        });
    } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") throw new Error("Gemini timeout");
        throw new Error("Gemini request failed");
    } finally {
        clearTimeout(timeout);
    }

    if (!response.ok) throw new Error("Gemini request failed");

    let payload: GeminiResponse;
    try {
        payload = await response.json() as GeminiResponse;
    } catch {
        throw new Error("Invalid Gemini response");
    }

    const text = payload.candidates?.[0]?.content?.parts
        ?.map((part) => part.text)
        .filter((part): part is string => typeof part === "string")
        .join("")
        .trim();
    if (!text || text.length > 12_000) throw new Error("Invalid Gemini response");
    try {
        return JSON.parse(text) as T;
    } catch {
        throw new Error("Invalid Gemini response");
    }
}
