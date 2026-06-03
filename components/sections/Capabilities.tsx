import Reveal from "@/components/ui/Reveal";

const caps = [
  {
    icon: "⚙️",
    title: "Operations Management",
    desc: "End-to-end systems that run your day-to-day — from orders to staff, inventory to payments — without you having to touch every detail.",
    items: [
      "Order & kitchen management",
      "Inventory tracking & restocking alerts",
      "Staff scheduling & attendance",
      "M-Pesa & multi-channel payments",
    ],
  },
  {
    icon: "📡",
    title: "Real-Time Visibility",
    desc: "See everything happening across all your branches from a single dashboard — in real time, from anywhere. No more calling your manager to know what's going on.",
    items: [
      "Multi-branch live dashboards",
      "Real-time sync across locations",
      "Instant alerts on key events",
      "Mobile-friendly owner view",
    ],
  },
  {
    icon: "📈",
    title: "Business Analytics",
    desc: "Every transaction is data. We turn it into clear, visual reports that show you what's driving your business — and where you're leaving money on the table.",
    items: [
      "Revenue & profitability breakdowns",
      "Best-selling products & peak hours",
      "Branch-level performance comparison",
      "Trend analysis & forecasting",
    ],
  },
  {
    icon: "🔗",
    title: "Seamless Integrations",
    desc: "Your new system connects with the tools your business already uses — M-Pesa, WhatsApp, printers, hardware — so nothing is disrupted and everything works together.",
    items: [
      "M-Pesa & mobile money integration",
      "WhatsApp order intake",
      "Receipt & kitchen printer support",
      "Hardware & POS device support",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "100px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal style={{ marginBottom: 20 }}>
            <span className="tag">What we build</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-headline">
              Software that does the
              <br />
              <em>heavy lifting</em> for you.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-sub">
              Every system we build gives you back control — and gives you the
              data to run your business with confidence.
            </p>
          </Reveal>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginTop: 64 }}
          className="caps-grid"
        >
          {caps.map(({ icon, title, desc, items }, i) => (
            <Reveal key={title} delay={i * 100} as="div">
              <div
                className="cap-card"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 40,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 52, height: 52,
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, marginBottom: 24,
                  }}
                >
                  {icon}
                </div>
                <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 12, color: "var(--ink)" }}>
                  {title}
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.7, fontWeight: 300 }}>
                  {desc}
                </div>
                <ul style={{ listStyle: "none", marginTop: 16, display: "flex", flexDirection: "column", gap: 8, padding: 0 }}>
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 400, display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{ width: 5, height: 5, background: "var(--accent)", borderRadius: "50%", flexShrink: 0, display: "inline-block" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .caps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
