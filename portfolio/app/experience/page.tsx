const jobs = [
  {
    title: "Registrar",
    company: "Corewell Outpatient Imaging Center",
    dates: "10/2024 – Present",
    location: "Dearborn, United States",
    bullets: [
      "Engage with CHAMPS, NAVINET, and other payer websites to verify insurance eligibility, process claims, and resolve discrepancies, ensuring compliance with billing requirements",
      "Apply expertise in hospital billing processes to ensure patient accounts are accurately handled and claims are processed in a timely manner",
      "Manage insurance collections and work with third-party payers to resolve denied claims and billing issues, improving the accuracy of reimbursement and minimizing financial discrepancies",
      "Maintain confidentiality of patient information and adhere to all HIPAA regulations and Corewell Health policies",
      "Manage Medicare/Medicaid documentation, including consent forms, ABNs, and compliance paperwork",
    ],
  },
  {
    title: "Registrar",
    company: "Corewell Hospital",
    dates: "01/2024 – 10/2024",
    location: "Royal Oak, United States",
    bullets: [
      "Served as a preceptor to new team members",
      "Facilitated scheduling and inputting accurate patient data into EPIC software",
      "Collaborated with team members to maintain or exceed the Corewell Health Customer Service Standards",
      "Demonstrated expertise in Microsoft 365 applications to streamline administrative tasks and enhance workplace productivity",
      "Obtained information required to build a comprehensive patient electronic medical record (EMR) profile that includes personal demographics and billing information",
    ],
  },
];

const projects = [
  {
    name: "Personal Portfolio Website",
    dates: "10/2026 – Present",
    link: "https://github.com/aalsheikh1/Portfolio",
    bullets: [
      "Built a responsive personal portfolio using Next.js, TypeScript, and CSS",
      "Managed source control with Git and GitHub, using a feature branch and pull request workflow with incremental commits",
      "Hardened the site against common web attacks with a strict, nonce-based Content-Security-Policy and security headers (HSTS, X-Frame-Options, COOP, Referrer-Policy, Permissions-Policy), aligned with the OWASP Secure Headers Project",
      "Reduced attack surface by hiding server details (X-Powered-By), protecting external links with noopener noreferrer, and keeping secrets in environment files out of version control",
      "Designed a mobile-friendly, cybersecurity-themed UI with reusable components",
    ],
  },
];

export default function Experience() {
  return (
    <main className="flex flex-1 flex-col items-center gap-4 px-4 py-12">
      <h1 className="text-4xl font-semibold">Experience</h1>
      {jobs.map((job) => (
        <section
          key={job.company + job.dates}
          className="w-full max-w-2xl rounded-3xl border border-green-500/30 bg-green-500/5 px-6 py-4 shadow-lg shadow-green-500/10 backdrop-blur-sm transition hover:border-green-400/60"
        >
          <div className="flex flex-col justify-between gap-1 sm:flex-row">
            <div>
              <span className="font-semibold">{job.title}</span>,{" "}
              <span className="italic">{job.company}</span>
            </div>
            <div className="text-xs text-green-400 sm:text-right">
              <div>{job.dates}</div>
              <div>{job.location}</div>
            </div>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
      <h2 className="mt-6 text-2xl font-semibold">Projects</h2>
      {projects.map((project) => (
        <section
          key={project.name}
          className="w-full max-w-2xl rounded-3xl border border-green-500/30 bg-green-500/5 px-6 py-4 shadow-lg shadow-green-500/10 backdrop-blur-sm transition hover:border-green-400/60"
        >
          <div className="flex flex-col justify-between gap-1 sm:flex-row">
            <div>
              <span className="font-semibold">{project.name}</span>
              {" · "}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="text-xs text-green-400">{project.dates}</div>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
