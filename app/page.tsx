import Link from "next/link";
export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Home</h1>
      <p>Welcome to my portfolio website.</p>
      <Link
  href="/chat"
  className="mt-6 inline-flex items-center gap-3 rounded-2xl border bg-white px-6 py-4 shadow-md transition hover:shadow-xl"
>
  <span className="text-2xl">🤖</span>

  <div>
    <h3 className="font-semibold text-lg">
      AI Portfolio Assistant
    </h3>

    <p className="text-sm text-gray-600">
      Ask me anything about Nishan's skills, projects, and experience.
    </p>
  </div>
</Link>
    </main>
  );
}