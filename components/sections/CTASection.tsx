import Reveal from "@/components/ui/Reveal";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.099 1.509 5.823L.057 23.887a.5.5 0 00.624.601l6.282-1.645A11.936 11.936 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.843a9.816 9.816 0 01-5.007-1.369l-.36-.214-3.724.976.995-3.635-.234-.374A9.788 9.788 0 012.157 12C2.157 6.561 6.561 2.157 12 2.157c5.438 0 9.843 4.404 9.843 9.843 0 5.438-4.405 9.843-9.843 9.843z"/>
  </svg>
);

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 400,
          background: "radial-gradient(ellipse, rgba(212,82,10,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal style={{ marginBottom: 24 }}>
          <span className="tag" style={{ display: "inline-flex" }}>Let&rsquo;s build something</span>
        </Reveal>

        <Reveal delay={100}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 62px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 20,
            }}
          >
            Your business deserves
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>better than a spreadsheet.</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "var(--ink-2)",
              maxWidth: 440,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Tell us about your business. No pitch — just a real conversation
            about your operation and how technology can make it better.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/254113176613"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Message us on WhatsApp
            </a>
            <a href="mailto:lobster.technologies.africa@gmail.com" className="btn-secondary">
              lobster.technologies.africa@gmail.com <ArrowRight />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p style={{ fontSize: 13, color: "var(--ink-4)", marginTop: 20 }}>
            Based in Nairobi, Kenya · Working with growing businesses across the country
          </p>
        </Reveal>
      </div>
    </section>
  );
}
