import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="site-wrap pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="eyebrow">Forensic cryptocurrency recovery</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
          Cryptocurrency tracing, forensic investigations, and recovery support
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          CapitalBastion Forensics traces lost and stolen cryptocurrency across wallets and chains.
          We combine forensic analysis, recovery planning, and coordination with exchanges and counsel
          from the first assessment through the close of the case.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">Submit Your Case</Link>
          <Link href="/services" className="btn-ghost">View Services</Link>
        </div>
      </div>
      <div className="hero-fade" />
    </section>
  );
}
