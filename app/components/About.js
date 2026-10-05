import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="site-wrap grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-2xl bg-navy">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            alt="Analysts reviewing transaction data"
            className="h-full max-h-[460px] w-full object-cover opacity-90"
          />
        </div>
        <div>
          <p className="eyebrow-dark">The team</p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Forensics, cryptography, and legal follow-through
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            CapitalBastion Forensics was founded by blockchain security specialists. The team includes forensic analysts,
            cryptographers, and legal operators who work the same case from tracing through recovery.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            We do not ask for private keys or seed phrases. Cases are handled confidentially, and you get a straight
            assessment of what can and cannot be recovered before work begins.
          </p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-iris hover:text-iris-dark">
            About CapitalBastion
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
