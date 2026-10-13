"use client";

export default function Contact() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <form
        className="flex w-full max-w-md flex-col gap-4 px-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="rounded border border-green-500/40 bg-black/40 px-4 py-2 placeholder-zinc-500 focus:border-green-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded border border-green-500/40 bg-black/40 px-4 py-2 placeholder-zinc-500 focus:border-green-400 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          maxLength={2000}
          required
          className="rounded border border-green-500/40 bg-black/40 px-4 py-2 placeholder-zinc-500 focus:border-green-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-green-500 px-4 py-2 font-semibold text-black hover:bg-green-400"
        >
          Send
        </button>
      </form>
    </main>
  );
}
