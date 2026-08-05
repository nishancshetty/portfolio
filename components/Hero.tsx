import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between gap-24 px-8 py-6">
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="mb-5 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
          Nishan C Shetty
        </h1>

        <p className="mb-10 text-xl leading-9 text-slate-600">
          I build practical web applications that people can use.
        </p>

        <div className="flex flex-wrap gap-5 mt-8">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Resume
          </Link>

          <Link
            href="https://github.com/nishancshetty"
            target="_blank"
            className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/nishan-shetty-1526b8387"
            target="_blank"
            className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
          >
            LinkedIn
          </Link>

          <Link
            href="/chat"
            className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Talk to my AI →
          </Link>
        </div>
      </div>

      {/* Right */}
      {/* Right */}
<div className="relative flex justify-center">
  {/* Blue Glow */}
  <div className="absolute inset-0 scale-110 rounded-[40px] bg-blue-500/10 blur-3xl"></div>

  {/* Image Card */}
  <div className="relative h-[520px] w-[400px] overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-2xl">
    <Image
      src="/profile.jpeg"
      alt="Nishan C Shetty"
      fill
      priority
      className="rounded-[24px] object-cover object-top"
    />
  </div>
</div>
    </section>
  );
}