const steps = [
  {
    number: "01",
    title: "Case assessment",
    description: "We review the wallets, the transaction history, and how the loss happened before recommending a path.",
  },
  {
    number: "02",
    title: "Blockchain tracing",
    description: "Funds are followed across addresses, chains, and services to see where they sit now.",
  },
  {
    number: "03",
    title: "Legal coordination",
    description: "Findings are prepared so counsel, exchanges, and law enforcement can act on them.",
  },
  {
    number: "04",
    title: "Asset hold",
    description: "Where funds reach a regulated venue, we support requests to stop further movement.",
  },
  {
    number: "05",
    title: "Recovery support",
    description: "We stay with the matter through the return process and keep you updated at each step.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-8 pb-24">
      <div className="site-wrap">
        <p className="eyebrow-dark">Methodology</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold text-navy md:text-5xl">
          From first review to recovery
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Investigations follow a set sequence so the evidence gathered at the start still holds up when recovery begins.
        </p>

        <ol className="mt-12 grid gap-4">
          {steps.map((step) => (
            <li key={step.number} className="soft-card grid gap-3 p-6 sm:grid-cols-[88px_1fr] sm:items-center sm:gap-6 md:p-7">
              <span className="font-display text-3xl font-semibold text-iris">{step.number}</span>
              <div>
                <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
