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
      {degrees.map((d) => (
        <section
          key={d.degree}
          className="flex w-full max-w-3xl flex-col justify-between gap-1 rounded border border-green-500/40 bg-black/40 p-6 sm:flex-row"
        >
          <div>
            <span className="font-semibold">{d.degree}</span>,{" "}
            <span className="italic">{d.school}</span>
          </div>
          <div className="text-sm text-green-400">{d.year}</div>
        </section>
      ))}
      <h2 className="mt-6 text-2xl font-semibold">Certifications</h2>
      {certs.map((c) => (
        <section
          key={c.name}
          className="flex w-full max-w-3xl flex-col justify-between gap-1 rounded border border-green-500/40 bg-black/40 p-6 sm:flex-row"
        >
          <span className="font-semibold">{c.name}</span>
          <div className="text-sm text-green-400">{c.status}</div>
        </section>
      ))}
    </main>
  );
}
