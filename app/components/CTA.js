import Link from "next/link";

const points = [
  "Initial assessments are confidential",
  "We never request private keys or seed phrases",
  "First forensic review typically within 1–24 hours",
  "Coverage across major chains and jurisdictions",
];

export default function CTA() {
  return (
    <section className="bg-paper pb-24">
      <div className="site-wrap">
        <div className="soft-card grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="eyebrow-dark">Get in touch</p>
            <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
              Speak with a CapitalBastion specialist
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
              Send the case details, or contact the team about an investigation, a partnership, or a general question.
            </p>
            <Link href="/contact" className="btn-primary mt-8">Submit Your Case</Link>
          </div>
          <ul className="space-y-4 self-center">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs text-iris">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
