"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      role: "user" as const,
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [
            ...messages.map((message) => ({
              role: message.role,
              parts: [{ text: message.text }],
            })),
            {
              role: "user",
              parts: [{ text: input }],
            },
          ],
        }),
      });

      if (!response.ok) {
  throw new Error("Failed to get response from AI");
}

const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);

      setInput("");
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error(error);

setMessages((prev) => [
  ...prev,
  {
    role: "assistant",
    text: "⚠️ The AI service is busy right now. Please try again in a few moments.",
  },
]);
      }
    } finally {
      setLoading(false);
      controllerRef.current = null;
    }
  }

  function stopGeneration() {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="border rounded-2xl bg-gray-50 p-4 h-[500px] overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-md ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-900"
              }`}
            >
              <div className="text-xs opacity-70 mb-1">
                {message.role === "user"
                  ? "You"
                  : "Nishan AI"}
              </div>

              <p className="whitespace-pre-wrap">
                {message.text}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="mb-3">
            <div className="inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-600 animate-pulse">
              🤖 Thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2"
      >
        <input
          className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />

        {loading ? (
          <button
            type="button"
            onClick={stopGeneration}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}