import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

export default function FeaturedProject() {
  return (
    <section
      id="proof"
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="proof-inner"
        >
          {/* Quote side */}
          <div>
            <Reveal>
              <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-4)", marginBottom: 32 }}>
                Client Story — Wendo Coffee Bistro, Nyeri
              </div>
            </Reveal>

            <Reveal delay={100}>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  lineHeight: 1.35,
                  color: "var(--ink)",
                  marginBottom: 32,
                }}
              >
                <span style={{ color: "var(--accent)" }}>&ldquo;</span>
                We went from running two branches manually to managing three —
                and the owner sees everything from his phone.
                <span style={{ color: "var(--accent)" }}>&rdquo;</span>
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
                <div
                  style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--accent)", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 500, flexShrink: 0,
                  }}
                >
                  GK
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>Gideon Kamau</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>Co-owner, Wendo Coffee Bistro</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <Link href="/case-studies/wendo-rms" className="btn-secondary" style={{ display: "inline-flex" }}>
                Read the full case study <ArrowRight />
              </Link>
            </Reveal>
          </div>

          {/* Metrics side */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            className="metrics-grid"
          >
            <Reveal as="div" style={{ gridColumn: "1 / -1" }}>
              <div
                style={{
                  background: "var(--ink)",
                  border: "1px solid var(--ink)",
                  borderRadius: "var(--radius-md)",
                  padding: 24,
                  gridColumn: "1 / -1",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 40, color: "white",
                    lineHeight: 1, marginBottom: 6,
                  }}
                >
                  10,000+
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Orders processed</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 8, fontWeight: 300 }}>
                  Fully live across all branches. M-Pesa integrated. Kitchen
                  displays running. Zero system failures in three months of
                  production.
                </div>
              </div>
            </Reveal>

            {[
              { num: "3", label: "Branches scaled from 2" },
              { num: "0", label: "Manual reconciliation steps" },
            ].map(({ num, label }, i) => (
              <Reveal key={label} delay={(i + 1) * 100} as="div">
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: 24,
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--ink)", lineHeight: 1, marginBottom: 6 }}>
                    {num}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proof-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
          .metrics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
