import { ai, systemPrompt } from "@/lib/ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const lastMessage = messages[messages.length - 1]?.parts?.[0]?.text || "";

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: lastMessage,
    config: {
      systemInstruction: systemPrompt,
    },
  });

  return Response.json({
    reply: response.text,
  });
}