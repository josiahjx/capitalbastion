import Link from "next/link";

const pillars = [
  {
    kicker: "Core service",
    title: "Recover",
    text: "Trace stolen or inaccessible assets, build a recovery plan, and coordinate the steps that can bring funds back.",
    href: "/services",
    cta: "Submit your case",
  },
  {
    kicker: "Forensics",
    title: "Investigate",
    text: "Cross-chain tracing, wallet analysis, and a documented record you can share with counsel, exchanges, or insurers.",
    href: "/services#hacked-accounts",
    cta: "See investigations",
  },
  {
    kicker: "Guidance",
    title: "Advise",
    text: "Clear assessments for families, companies, and legal teams before a case moves into tracing or court.",
    href: "/contact",
    cta: "Talk to the team",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="site-wrap">
        <p className="eyebrow-dark">How we work</p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold text-navy md:text-5xl">
          Recover. Investigate. Advise.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          One team covers the life of a digital-asset case, from the first wallet review to the recovery work that follows.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title} className="soft-card flex flex-col p-7 md:p-8">
              <p className="text-sm font-medium text-iris">{item.kicker}</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
              <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-iris hover:text-iris-dark">
                {item.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
