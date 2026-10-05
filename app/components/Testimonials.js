const audiences = [
  {
    title: "Individuals & families",
    text: "Scam losses, locked wallets, inheritance matters, and funds sent to the wrong address or network.",
  },
  {
    title: "Companies & platforms",
    text: "Fraud investigations, frozen exchange accounts, insider reviews, and claims that need a forensic record.",
  },
  {
    title: "Law firms & investigators",
    text: "Tracing support, expert material, and coordination when a case needs to move into a legal process.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f6f4f8] py-20 md:py-28">
      <div className="site-wrap">
        <p className="eyebrow-dark">Who we support</p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold text-navy md:text-5xl">
          Built for complex cases
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          CapitalBastion works with private clients, companies, and legal teams that need more than a wallet screenshot.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((item) => (
            <article key={item.title} className="soft-card p-7 md:p-8">
              <div className="mb-5 h-1 w-10 rounded-full bg-iris" />
              <h3 className="text-2xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
