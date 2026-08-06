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
        const error = await response.json();
        throw new Error(error.error || "Unable to contact AI.");
      }

      const data = await response.json();

      if (!data.reply) {
        throw new Error("No response received.");
      }

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
        let message = "Something went wrong.";

        if (error instanceof TypeError) {
          message = "Network error. Check your connection.";
        } else {
          message = error.message;
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: message,
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

        {messages.length === 0 && !loading && (
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md rounded-2xl border bg-white p-6 text-center shadow-lg">
              <div className="text-5xl mb-4">👋</div>

              <h2 className="text-2xl font-bold mb-3">
                Ask me anything about Nishan
              </h2>

              <p className="text-gray-600 mb-6">
                I can answer questions about my portfolio,
                skills, projects, education and experience.
              </p>

              <div className="rounded-xl bg-gray-100 p-4 text-left">
                <h3 className="font-semibold mb-2">
                  Try asking:
                </h3>

                <ul className="space-y-2 text-gray-700">
                  <li>• What projects have you built?</li>
                  <li>• Tell me about your skills.</li>
                  <li>• Where did you intern?</li>
                  <li>• How can I contact you?</li>
                </ul>
              </div>
            </div>
          </div>
        )}

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
          <div className="mb-4">
            <div className="inline-block rounded-xl bg-gray-200 px-4 py-3 animate-pulse">
              <p className="font-medium">
                🤖 Still thinking...
              </p>
              <p className="text-sm text-gray-600">
                This is taking longer than expected.
              </p>
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
            className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            className="rounded-xl bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-800"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}