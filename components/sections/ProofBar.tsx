import Reveal from "@/components/ui/Reveal";

const stats = [
  { num: "10,000+", label: "Orders processed" },
  { num: "3", label: "Branches, one dashboard" },
  { num: "0", label: "System failures in production" },
  { num: "100%", label: "Built around your workflow" },
];

export default function ProofBar() {
  return (
    <div
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "28px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className="proof-bar-inner"
        >
          {stats.map(({ num, label }, i) => (
            <>
              {i > 0 && (
                <div
                  key={`div-${i}`}
                  className="proof-divider"
                  style={{ width: 1, height: 40, background: "var(--border)", flexShrink: 0 }}
                />
              )}
              <Reveal key={label} delay={i * 100} className="proof-stat" as="div">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 32,
                      color: "var(--ink)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>{label}</div>
                </div>
              </Reveal>
            </>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .proof-bar-inner { gap: 24px !important; }
          .proof-divider { display: none !important; }
        }
      `}</style>
    </div>
  );
}
