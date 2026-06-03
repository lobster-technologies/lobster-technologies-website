import Reveal from "@/components/ui/Reveal";

const problems = [
  {
    num: "01",
    icon: "👁️",
    title: "No real-time visibility",
    desc: "You can't see what's happening across your branches unless you're physically there. Growth means losing control, not gaining it.",
  },
  {
    num: "02",
    icon: "📋",
    title: "Operations still run manually",
    desc: "Orders on paper. Inventory on a spreadsheet. Payments reconciled at end of day. Every manual step is a place where things go wrong.",
  },
  {
    num: "03",
    icon: "📊",
    title: "Decisions made without data",
    desc: "You know your business is growing — but you don't know which products drive it, which hours are most profitable, or where you're leaking margin.",
  },
];

export default function Problem() {
  return (
    <section style={{ padding: "100px 0 80px" }} id="problem">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal style={{ marginBottom: 20 }}>
            <span className="tag">The Problem</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-headline">
              Growth should feel good.
              <br />
              <em>Why does it feel like chaos?</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-sub">
              Most growing businesses in Kenya hit the same wall. The operation
              that worked at one branch breaks at two. The system that worked at
              50 orders breaks at 200.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
          className="problem-grid"
        >
          {problems.map(({ num, icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100} as="div">
              <div
                style={{
                  background: "var(--surface)",
                  padding: "36px 32px",
                  position: "relative",
                  height: "100%",
                }}
              >
                {/* Ghost number */}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 80,
                    color: "var(--surface-3)",
                    position: "absolute",
                    top: 16, right: 24,
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    width: 44, height: 44,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--accent-light)",
                    border: "1px solid #fcd9c0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                    fontSize: 20,
                  }}
                >
                  {icon}
                </div>

                <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 10, color: "var(--ink)" }}>
                  {title}
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.65, fontWeight: 300 }}>
                  {desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
