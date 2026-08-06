import { ai, systemPrompt } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    // Check if the API key exists
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  return Response.json(
    { error: "API key missing." },
    { status: 500 }
  );
}

    const { messages } = await req.json();

    const lastMessage =
      messages[messages.length - 1]?.parts?.[0]?.text || "";

    if (!lastMessage.trim()) {
      return Response.json(
        { error: "Message cannot be empty." },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: lastMessage,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    if (!response.text) {
      return Response.json(
        { error: "No response received from AI." },
        { status: 500 }
      );
    }

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return Response.json(
      {
        error: "Something went wrong while contacting the AI.",
      },
      {
        status: 500,
      }
    );
  }
}