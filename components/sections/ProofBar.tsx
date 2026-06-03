const items = [
  { value: "100%",        label: "Built around your workflow" },
  { value: "Weeks",       label: "Live in weeks, not months" },
  { value: "On-call",     label: "Support through launch and beyond" },
  { value: "Multi-branch", label: "Built to scale from day one" },
  { value: "10,000+",     label: "Orders processed in production" },
  { value: "0",           label: "System failures at Wendo" },
  { value: "100%",        label: "Built around your workflow" },
  { value: "Weeks",       label: "Live in weeks, not months" },
  { value: "On-call",     label: "Support through launch and beyond" },
  { value: "Multi-branch", label: "Built to scale from day one" },
  { value: "10,000+",     label: "Orders processed in production" },
  { value: "0",           label: "System failures at Wendo" },
];

export default function ProofBar() {
  return (
    <div
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "32px 0",
        overflow: "hidden",
      }}
    >
      {/* Fade masks */}
      <div style={{ position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: 120, zIndex: 2,
            background: "linear-gradient(to right, var(--surface-2), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: 120, zIndex: 2,
            background: "linear-gradient(to left, var(--surface-2), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Scrolling track */}
        <div className="marquee-track" style={{ display: "flex", gap: 0 }}>
          {items.map(({ value, label }, i) => (
            <div
              key={`${label}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  padding: "0 52px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexShrink: 0,
                }}
              >
                {/* Accent dot */}
                <span
                  style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--accent)", flexShrink: 0,
                  }}
                />

                <div style={{ display: "flex", flex: "column", gap: 2, whiteSpace: "nowrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      color: "var(--ink)",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--ink-3)",
                      display: "block",
                      marginTop: 4,
                      fontWeight: 400,
                    }}
                  >
                    {label}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: 1, height: 44, background: "var(--border)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
