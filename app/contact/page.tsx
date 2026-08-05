import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-bold">Contact Me</h1>

      <p className="mb-10 text-gray-600">
        I'm always open to discussing internships, projects, or opportunities
        to collaborate. Feel free to reach out through any of the options
        below.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6 rounded-2xl border p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <div>
            <p className="font-semibold">Email</p>
            <Link
              href="mailto:nishanchshetty2006@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nishanchshetty2006@gmail.com
            </Link>
          </div>

          <div>
            <p className="font-semibold">Phone</p>
            <Link
              href="tel:+919591684711"
              className="text-blue-600 hover:underline"
            >
              +91 9591684711
            </Link>
          </div>

          <div>
            <p className="font-semibold">GitHub</p>
            <Link
              href="https://github.com/nishancshetty"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              github.com/nishancshetty
            </Link>
          </div>

          <div>
            <p className="font-semibold">LinkedIn</p>
            <Link
              href="https://www.linkedin.com/in/nishan-shetty-1526b8387"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/nishan-shetty-1526b8387
            </Link>
          </div>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-block rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
          >
            Download Resume
          </Link>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}