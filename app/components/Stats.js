import CountUp from "./CountUp";

const stats = [
  { value: "$5M+", label: "Assets recovered", detail: "Across accepted recovery matters" },
  { value: "count", label: "Investigations", detail: "Cases worked worldwide", count: 141 },
  { value: "95%", label: "On accepted cases", detail: "When we take the matter on" },
  { value: "1–24h", label: "First assessment", detail: "Typical time to an initial review" },
];

export default function Stats() {
  return (
    <section className="bg-paper pb-8 pt-4">
      <div className="site-wrap">
        <p className="eyebrow-dark">The record so far</p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl font-semibold text-navy md:text-5xl">
                {stat.value === "count" ? (
                  <>
                    <CountUp to={stat.count} />+
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <div className="mt-2 text-sm font-semibold text-ink">{stat.label}</div>
              <div className="mt-1 text-sm text-muted">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
