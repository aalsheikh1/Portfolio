"use client";

const field =
  "w-full rounded-xl border border-green-500/30 bg-black/40 px-3 py-2 text-sm placeholder-zinc-500 focus:border-green-400 focus:outline-none";

export default function Contact() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <form
        className="flex w-full max-w-lg flex-col gap-3 rounded-3xl border border-green-500/30 bg-green-500/5 p-6 shadow-lg shadow-green-500/10 backdrop-blur-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="mb-2 text-center text-2xl font-semibold">
          Get in touch
        </h1>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className={field}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={field}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          maxLength={2000}
          required
          className={field}
        />
        <button
          type="submit"
          className="self-end rounded-full bg-green-500 px-5 py-1.5 text-sm font-semibold text-black hover:bg-green-400"
        >
          Send →
        </button>
        <p className="mt-2 text-center text-sm text-zinc-400">
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/adnan-alsheikh-945666387"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </form>
    </main>
  );
}
