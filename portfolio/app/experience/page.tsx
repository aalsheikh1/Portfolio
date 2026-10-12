const jobs = [
  {
    title: "Registrar",
    company: "Corewell Outpatient Imaging Center",
    dates: "10/2024 – Present",
    location: "Dearborn, United States",
    bullets: [
      "Actively engaged with CHAMPS, NAVINET, and other payer websites to verify insurance eligibility, process claims, and resolve discrepancies, ensuring compliance with billing requirements",
      "Developed expertise in hospital billing processes, ensuring that patient accounts were accurately handled and claims processed in a timely manner",
      "Managed insurance collections and worked with third-party payers to resolve denied claims and billing issues, improving the accuracy of reimbursement and minimizing financial discrepancies",
      "Maintained confidentiality of patient information and adhered to all HIPAA regulations and Corewell Health policies",
      "Manage Medicare/Medicaid documentation, including consent forms, ABNs, and compliance paperwork.",
    ],
  },
  {
    title: "Registrar",
    company: "Corewell Hospital",
    dates: "01/2024 – 10/2024",
    location: "Royal Oak, United States",
    bullets: [
      "Preceptor to new team members",
      "Facilitated scheduling and inputting accurate patient data into EPIC software",
      "Collaborated with team members to maintain or exceed the Corewell Health Customer Service Standards",
      "Demonstrated expertise in Microsoft 365 applications to streamline administrative tasks and enhance workplace productivity",
      "Obtain information required to build a comprehensive patient electronic medical record (EMR) profile that includes personal demographics and billing information",
    ],
  },
];

export default function Experience() {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 px-4 py-12">
      <h1 className="text-4xl font-semibold">Experience</h1>
      {jobs.map((job) => (
        <section
          key={job.company + job.dates}
          className="w-full max-w-3xl rounded border border-green-500/40 bg-black/40 p-6"
        >
          <div className="flex flex-col justify-between gap-1 sm:flex-row">
            <div>
              <span className="font-semibold">{job.title}</span>,{" "}
              <span className="italic">{job.company}</span>
            </div>
            <div className="text-sm text-green-400 sm:text-right">
              <div>{job.dates}</div>
              <div>{job.location}</div>
            </div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
