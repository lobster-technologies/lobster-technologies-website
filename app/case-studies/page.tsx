import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies — Lobster Technologies",
  description: "Real software, real businesses, real results. See how Lobster Technologies has helped growing companies in Kenya.",
};

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

const projects = [
  {
    client: "Wendo Coffee Bistro",
    location: "Nyeri, Kenya",
    industry: "Food & Beverage",
    built: "Restaurant Management System",
    status: "live",
    statusLabel: "Live in production",
    headline: "From two branches run on paper to three branches on a live dashboard.",
    metrics: ["10,000+ orders processed", "3 branches synced in real time", "0 system failures"],
    href: "/case-studies/wendo-rms",
    featured: true,
  },
  {
    client: "Washan Groceries",
    location: "Nyeri, Kenya",
    industry: "B2B Wholesale & Grocery",
    built: "B2B Order & Credit Management System",
    status: "discovery",
    statusLabel: "In discovery",
    headline: "Replacing WhatsApp orders and manual credit tracking with a proper system.",
    metrics: ["Credit & invoice tracking", "Order management", "Customer ledger"],
    href: null,
    featured: false,
  },
  {
    client: "Lobster RMS",
    location: "Kenya",
    industry: "Restaurant & Café Chains",
    built: "Productised Restaurant Management Platform",
    status: "development",
    statusLabel: "In development",
    headline: "The productised version of Wendo RMS. For any multi-branch café or restaurant.",
    metrics: ["26-sprint build order locked", "M-Pesa native", "Multi-branch from day one"],
    href: null,
    featured: false,
  },
];

const statusStyles: Record<string, React.CSSProperties> = {
  live: { background: "rgba(22,163,74,0.1)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.25)" },
  discovery: { background: "rgba(37,99,235,0.08)", color: "#2563eb", border: "1px solid rgba(37,99,235,0.2)" },
  development: { background: "rgba(212,82,10,0.1)", color: "var(--accent)", border: "1px solid rgba(212,82,10,0.2)" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "calc(var(--nav-h) + 80px)",
            paddingBottom: 80,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              background: "radial-gradient(ellipse 60% 50% at 50% 40%, #fff6ef 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <Reveal style={{ marginBottom: 20 }}>
              <span className="tag">Our work</span>
            </Reveal>
            <Reveal delay={100}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  marginBottom: 24,
                  maxWidth: 700,
                }}
              >
                Proof that it
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>actually works.</em>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 18, fontWeight: 300, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 500 }}>
                We don&rsquo;t pitch theory. We point to real businesses, running real
                systems we built, with real results.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Project cards */}
        <section style={{ padding: "0 0 100px" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              {projects.map(({ client, location, industry, built, status, statusLabel, headline, metrics, href, featured }, i) => (
                <Reveal key={client} delay={i * 100} as="div">
                  <div
                    style={{
                      background: featured ? "var(--surface)" : "var(--surface-2)",
                      padding: "48px 40px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 64,
                      alignItems: "center",
                      transition: "background 0.2s",
                    }}
                    className="project-row"
                  >
                    {/* Left */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: 11, fontWeight: 500,
                            padding: "4px 12px", borderRadius: 100,
                            ...statusStyles[status],
                          }}
                        >
                          {statusLabel}
                        </span>
                        <span style={{ fontSize: 12, color: "var(--ink-4)" }}>{industry}</span>
                      </div>

                      <div style={{ fontSize: 22, fontWeight: 500, color: "var(--ink)", marginBottom: 8, lineHeight: 1.25 }}>
                        {client}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--ink-4)", marginBottom: 20 }}>{location}</div>

                      <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
                        {headline}
                      </p>

                      <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
                        What was built
                      </div>
                      <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 400 }}>{built}</div>
                    </div>

                    {/* Right */}
                    <div>
                      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                        {metrics.map((m) => (
                          <li key={m} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--ink-2)" }}>
                            <span
                              style={{
                                width: 20, height: 20, borderRadius: "50%",
                                background: status === "live" ? "rgba(22,163,74,0.1)" : "var(--surface-3)",
                                border: `1px solid ${status === "live" ? "rgba(22,163,74,0.2)" : "var(--border)"}`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0,
                                fontSize: 10,
                                color: status === "live" ? "#16a34a" : "var(--ink-4)",
                              }}
                            >
                              {status === "live" ? "✓" : "·"}
                            </span>
                            {m}
                          </li>
                        ))}
                      </ul>

                      {href ? (
                        <Link href={href} className="btn-primary" style={{ display: "inline-flex" }}>
                          Read the case study <ArrowRight />
                        </Link>
                      ) : (
                        <div
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            fontSize: 14, color: "var(--ink-4)",
                            padding: "10px 0",
                          }}
                        >
                          Case study coming soon
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      <style>{`
        .project-row { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .project-row { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
}
