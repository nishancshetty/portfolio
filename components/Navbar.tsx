import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 bg-black p-4 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/health">Health</Link>
    </nav>
  );
}