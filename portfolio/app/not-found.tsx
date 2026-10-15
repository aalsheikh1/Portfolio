import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="text-5xl">🛡️</div>
      <h1 className="font-mono text-5xl font-bold text-green-400">404</h1>
      <p className="font-mono text-lg">ACCESS DENIED</p>
      <p className="text-sm text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-green-500 px-5 py-1.5 text-sm font-semibold text-black hover:bg-green-400"
      >
        ← Back to About
      </Link>
    </main>
  );
}
