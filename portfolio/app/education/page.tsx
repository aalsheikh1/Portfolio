const degrees = [
  {
    degree: "Bachelors - Cybersecurity & Info Assurance",
    school: "University of Michigan - Dearborn",
    year: "2026",
  },
  {
    degree: "Associate - Cybersecurity",
    school: "Henry Ford College",
    year: "2023",
  },
];

const certs = [{ name: "CompTIA Security+", status: "In Progress" }];

export default function Education() {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 px-4 py-12">
      <h1 className="text-4xl font-semibold">Education</h1>
      <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
        {degrees.map((d) => (
          <section
            key={d.degree}
            className="overflow-hidden rounded-xl border border-green-500/40 bg-black/60 text-center shadow-lg shadow-green-500/10 transition hover:-translate-y-1 hover:border-green-400"
          >
            <div className="bg-green-500 py-2 font-mono text-xs font-bold tracking-widest text-black">
              {d.year}
            </div>
            <div className="flex flex-col items-center gap-2 p-6">
              <div className="text-4xl">🎓</div>
              <div className="font-semibold">{d.degree}</div>
              <div className="text-sm italic text-zinc-400">{d.school}</div>
            </div>
          </section>
        ))}
      </div>
      <h2 className="mt-6 text-2xl font-semibold">Certifications</h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {certs.map((c) => (
          <li
            key={c.name}
            className="rounded-full border border-green-500/40 bg-black/40 px-4 py-1 text-sm"
          >
            <span className="font-semibold">{c.name}</span>
            <span className="text-green-400"> · {c.status}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
