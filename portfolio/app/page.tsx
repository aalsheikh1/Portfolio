const skills = [
  "Linux",
  "SQL",
  "C++",
  "Java",
  "Security Awareness",
  "Microsoft 365",
  "EPIC Software",
  "MyChart",
  "CHAMPS",
  "NaviNet",
  "Availity",
  "WPS",
  "MIHealth",
  "Priority Health",
  "Data Entry",
  "Next.js",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
];

const languages = ["English", "Arabic"];

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex max-w-3xl flex-wrap justify-center gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-green-500/40 bg-black/40 px-4 py-1 text-sm text-green-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-12">
      <h1 className="text-4xl font-semibold">Adnan Alsheikh</h1>
      <p className="text-lg text-green-400">Cybersecurity & Info Assurance</p>
      <p className="mt-4 max-w-md text-center text-zinc-400">
        Information assurance graduate transitioning into cloud security. Eager
        to learn, build, and grow in securing the cloud.
      </p>
      <div className="mt-4 flex gap-6 text-sm">
        <a
          href="https://www.linkedin.com/in/adnan-alsheikh-945666387"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aalsheikh1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          GitHub
        </a>
      </div>
      <h2 className="mt-10 mb-2 text-2xl font-semibold">Skills</h2>
      <Tags items={skills} />
      <h2 className="mt-6 mb-2 text-2xl font-semibold">Languages</h2>
      <Tags items={languages} />
    </main>
  );
}
