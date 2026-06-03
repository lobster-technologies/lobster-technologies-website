import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    num: "Step 01",
    title: "We understand your operation",
    desc: "We sit with you, walk through your workflows, and map how your business actually runs — the unofficial processes, the workarounds, the friction points no software doc would capture.",
  },
  {
    num: "Step 02",
    title: "We design around your workflow",
    desc: "No forcing your team into a foreign system. The software is built to match how your people work — so adoption is natural, not a training burden.",
  },
  {
    num: "Step 03",
    title: "We build and deliver it with you",
    desc: "We stay close throughout the build. You see progress, give feedback, and launch a system that already feels like yours — because it was built with your input every step of the way.",
  },
  {
    num: "Step 04",
    title: "We stay with you as you grow",
    desc: "The system grows with your business. New branches, new workflows, new data — we're your technology partner for the long run, not a one-time build shop.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how"
      style={{
        padding: "100px 0",
        background: "var(--ink)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-40%", right: "-20%",
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,82,10,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal style={{ marginBottom: 20 }}>
            <span className="tag tag-dark">Our Approach</span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "white",
                marginBottom: 20,
              }}
            >
              We start with
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent-mid)" }}>your reality,</em> not a template.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              We don't sell off-the-shelf software and hope it fits. We study
              how your business actually runs — then build technology around it.
            </p>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            background: "rgba(255,255,255,0.06)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
          className="steps-grid"
        >
          {steps.map(({ num, title, desc }, i) => (
            <Reveal key={title} delay={i * 100} as="div">
              <div
                className="step-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "44px 40px",
                  position: "relative",
                  height: "100%",
                  transition: "background 0.3s",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 13,
                    color: "var(--accent-mid)",
                    marginBottom: 16,
                    letterSpacing: "0.04em",
                  }}
                >
                  {num}
                </div>
                <div style={{ fontSize: 20, fontWeight: 500, color: "white", marginBottom: 12, lineHeight: 1.3 }}>
                  {title}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>
                  {desc}
                </div>
                <div
                  style={{
                    position: "absolute", bottom: 24, right: 24,
                    width: 32, height: 32, borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.3)", fontSize: 14,
                  }}
                >
                  →
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .step-card:hover { background: rgba(255,255,255,0.06) !important; }
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
