import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

const reasons = [
  {
    num: "01",
    title: "We understand the market",
    desc: "M-Pesa isn't an integration challenge — it's how business is done. WhatsApp isn't a workaround — it's the operating system. We build for that reality.",
  },
  {
    num: "02",
    title: "Custom means built for you",
    desc: "We don't ship you a generic SaaS and walk away. We study your operation, build to match it, and stay through the launch and beyond.",
  },
  {
    num: "03",
    title: "Your data stays yours",
    desc: "Every piece of data your system generates is yours — structured, accessible, and visualised so you can actually use it. Not locked in a vendor's black box.",
  },
  {
    num: "04",
    title: "We grow when you grow",
    desc: "The best outcome for us is a business that depends on what we built. We build for scale from day one — so adding a branch never means starting over.",
  },
];

export default function WhyLobster() {
  return (
    <section style={{ padding: "100px 0" }}>
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 80, alignItems: "start" }}
          className="why-grid"
        >
          {/* Left */}
          <div>
            <Reveal style={{ marginBottom: 24 }}>
              <span className="tag">Why Lobster</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                  marginBottom: 24,
                }}
              >
                Built for how
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Kenya</em> does business.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 15, color: "var(--ink-3)", lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>
                We're not a foreign software company adapting a Western product
                for the African market. We're here. We know this market — the
                payment rails, the workflows, the realities.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link href="/#contact" className="btn-primary" style={{ display: "inline-flex" }}>
                Start a conversation <ArrowRight />
              </Link>
            </Reveal>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {reasons.map(({ num, title, desc }, i) => (
              <Reveal key={title} delay={i * 100} as="div">
                <div style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: 15,
                      color: "var(--accent)",
                      paddingTop: 2,
                      flexShrink: 0,
                      minWidth: 24,
                    }}
                  >
                    {num}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)", marginBottom: 6 }}>{title}</div>
                    <div style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.65, fontWeight: 300 }}>{desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
