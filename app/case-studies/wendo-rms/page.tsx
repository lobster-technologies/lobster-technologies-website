import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Wendo RMS — Restaurant Management System Case Study",
  description:
    "How Lobster Technologies built a custom restaurant management system for Wendo Coffee Bistro in Nyeri, Kenya — taking them from paper orders and manual M-Pesa reconciliation to three branches running live on one dashboard.",
  alternates: {
    canonical: "https://lobstertechnologies.co.ke/case-studies/wendo-rms",
  },
  openGraph: {
    title: "Wendo RMS — From Manual Chaos to Three Branches on One Dashboard",
    description:
      "10,000+ orders processed. 3 branches synced in real time. 0 system failures. See how Lobster Technologies built Wendo Coffee Bistro's restaurant management system.",
    url: "https://lobstertechnologies.co.ke/case-studies/wendo-rms",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wendo RMS — Restaurant Management System by Lobster Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendo RMS — From Manual Chaos to Three Branches on One Dashboard",
    description:
      "10,000+ orders. 3 branches. 0 failures. See how Lobster Technologies built a custom restaurant management system for Wendo Coffee Bistro.",
    images: ["/og-image.png"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://lobstertechnologies.co.ke/case-studies/wendo-rms#article",
      headline: "Wendo RMS — From Manual Chaos to Three Branches on One Dashboard",
      description:
        "How Lobster Technologies built a custom restaurant management system for Wendo Coffee Bistro in Nyeri, Kenya — taking them from paper orders and manual M-Pesa reconciliation to three branches running live on one dashboard.",
      url: "https://lobstertechnologies.co.ke/case-studies/wendo-rms",
      author: { "@id": "https://lobstertechnologies.co.ke/#organization" },
      publisher: { "@id": "https://lobstertechnologies.co.ke/#organization" },
      about: {
        "@type": "LocalBusiness",
        name: "Wendo Coffee Bistro",
        description: "A growing café and restaurant chain based in Nyeri, Kenya.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nyeri",
          addressRegion: "Nyeri County",
          addressCountry: "KE",
        },
      },
      inLanguage: "en-KE",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lobstertechnologies.co.ke" },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://lobstertechnologies.co.ke/case-studies" },
        { "@type": "ListItem", position: 3, name: "Wendo RMS", item: "https://lobstertechnologies.co.ke/case-studies/wendo-rms" },
      ],
    },
  ],
};

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

const features = [
  { icon: "📱", title: "Order Management", desc: "Waitstaff take orders on tablets. Orders hit the kitchen display instantly — no paper, no shouting." },
  { icon: "👨‍🍳", title: "Kitchen Display System", desc: "Kitchen staff see live order queues per station. Status updates flow back to the front of house in real time." },
  { icon: "💳", title: "M-Pesa Integration", desc: "Payments via M-Pesa, card, and cash — all reconciled automatically. No end-of-day headache." },
  { icon: "📦", title: "Inventory Tracking", desc: "Stock deductions happen on every sale. Low-stock alerts fire before you run out, not after." },
  { icon: "👥", title: "Staff Management", desc: "Shift scheduling, attendance tracking, and role-based access. Every action tied to a user." },
  { icon: "🏢", title: "Multi-Branch Sync", desc: "All three branches live on one dashboard. The owner sees consolidated revenue, orders, and stock from anywhere." },
];

const results = [
  { num: "10,000+", label: "Orders processed", sub: "Across all branches since launch" },
  { num: "3", label: "Branches on one system", sub: "Scaled from 2 without rebuilding" },
  { num: "0", label: "System failures", sub: "In three months of live production" },
  { num: "100%", label: "M-Pesa reconciled automatically", sub: "No manual end-of-day tallying" },
];

export default function WendoCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <Navbar />
      <main>
        {/* Back link */}
        <div
          style={{
            paddingTop: "calc(var(--nav-h) + 32px)",
            paddingBottom: 0,
          }}
        >
          <div className="container">
            <Link
              href="/case-studies"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, color: "var(--ink-3)", textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="back-link"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 8H3M8 13l-5-5 5-5" />
              </svg>
              All case studies
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section
          style={{
            paddingTop: 48,
            paddingBottom: 80,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              background: "radial-gradient(ellipse 70% 60% at 50% 40%, #fff6ef 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <Reveal style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span className="tag">Case Study</span>
                <span
                  style={{
                    fontSize: 11, fontWeight: 500,
                    background: "rgba(22,163,74,0.1)", color: "#16a34a",
                    border: "1px solid rgba(22,163,74,0.25)",
                    padding: "4px 12px", borderRadius: 100,
                  }}
                >
                  Live in production
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 5.5vw, 68px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  marginBottom: 24,
                  maxWidth: 800,
                }}
              >
                From manual chaos to
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>three branches on one dashboard.</em>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  flexWrap: "wrap",
                  paddingTop: 8,
                }}
              >
                {[
                  { label: "Client", val: "Wendo Coffee Bistro" },
                  { label: "Location", val: "Nyeri, Kenya" },
                  { label: "System", val: "Wendo RMS" },
                  { label: "Status", val: "Live · 3+ months" },
                ].map(({ label, val }) => (
                  <div key={label} style={{ fontSize: 13 }}>
                    <span style={{ color: "var(--ink-4)", fontWeight: 400 }}>{label}: </span>
                    <span style={{ color: "var(--ink-2)", fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Context */}
        <section
          style={{
            padding: "80px 0",
            background: "var(--surface-2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container" style={{ maxWidth: 800 }}>
            <Reveal style={{ marginBottom: 20 }}>
              <span className="tag">Context</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                  marginBottom: 28,
                }}
              >
                Who is Wendo Coffee Bistro?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
                Wendo Coffee Bistro is a growing café and restaurant chain based
                in Nyeri, Kenya. Founded by Gideon Kamau and his co-owner, Wendo
                started as a single location and expanded to two branches on the
                strength of its food, atmosphere, and community in Nyeri town.
              </p>
              <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.8, fontWeight: 300 }}>
                By the time Gideon came to Lobster Technologies, Wendo was scaling
                — but the operations hadn&rsquo;t scaled with it. They were managing
                two busy branches the way they&rsquo;d always managed one: manually,
                with paper, WhatsApp, and end-of-day tallies. It worked. Until it
                didn&rsquo;t.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Problem */}
        <section style={{ padding: "100px 0" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}
              className="two-col"
            >
              <div>
                <Reveal style={{ marginBottom: 20 }}>
                  <span className="tag">The Problem</span>
                </Reveal>
                <Reveal delay={100}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(26px, 3vw, 38px)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      color: "var(--ink)",
                    }}
                  >
                    Running manually
                    <br />
                    <em style={{ fontStyle: "italic", color: "var(--accent)" }}>while growing fast.</em>
                  </h2>
                </Reveal>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  {
                    title: "No visibility without being present",
                    desc: "Gideon had to physically visit each branch to know what was happening. Revenue figures came at end of day, by phone. Mistakes weren't caught until they became losses.",
                  },
                  {
                    title: "Orders and payments were all manual",
                    desc: "Tables were tracked on paper. M-Pesa payments were reconciled manually. When it got busy, things got lost — orders, payments, stock.",
                  },
                  {
                    title: "No data to make decisions with",
                    desc: "Which menu items were most profitable? Which branch was underperforming? Which hours needed more staff? Gideon had instincts. He didn't have data.",
                  },
                ].map(({ title, desc }, i) => (
                  <Reveal key={title} delay={i * 100} as="div">
                    <div style={{ display: "flex", gap: 16 }}>
                      <div
                        style={{
                          width: 8, height: 8,
                          borderRadius: "50%",
                          background: "var(--accent)",
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)", marginBottom: 6 }}>{title}</div>
                        <div style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            .two-col { grid-template-columns: 1fr 1.5fr; }
            @media (max-width: 800px) { .two-col { grid-template-columns: 1fr !important; gap: 48px !important; } }
          `}</style>
        </section>

        {/* What was built */}
        <section
          style={{
            padding: "100px 0",
            background: "var(--ink)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "-30%", right: "-15%",
              width: 600, height: 600, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,82,10,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Reveal style={{ marginBottom: 20 }}>
                <span className="tag tag-dark">What we built</span>
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
                  Wendo RMS —
                  <br />
                  <em style={{ fontStyle: "italic", color: "var(--accent-mid)" }}>the whole operation, in one system.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                  We didn&rsquo;t slot Wendo into an off-the-shelf system. We sat in
                  the operation, learned how it ran, and built software that fit
                  it exactly.
                </p>
              </Reveal>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                background: "rgba(255,255,255,0.05)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
              className="features-grid"
            >
              {features.map(({ icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 80} as="div">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      padding: "36px 32px",
                      height: "100%",
                      transition: "background 0.3s",
                    }}
                    className="feature-cell"
                  >
                    <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "white", marginBottom: 10 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            .feature-cell:hover { background: rgba(255,255,255,0.06) !important; }
            @media (max-width: 900px) { .features-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Results */}
        <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Reveal style={{ marginBottom: 20 }}>
                <span className="tag">The results</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="section-headline">
                  Numbers that
                  <br />
                  <em>actually mean something.</em>
                </h2>
              </Reveal>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                background: "var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
              className="results-grid"
            >
              {results.map(({ num, label, sub }, i) => (
                <Reveal key={label} delay={i * 80} as="div">
                  <div
                    style={{
                      background: "var(--surface)",
                      padding: "40px 32px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(32px, 3vw, 48px)",
                        color: "var(--ink)",
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {num}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)", marginBottom: 6 }}>{label}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-4)", fontWeight: 300 }}>{sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .results-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 500px) { .results-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Quote */}
        <section
          style={{
            padding: "100px 0",
            background: "var(--surface-2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container" style={{ maxWidth: 760 }}>
            <Reveal>
              <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-4)", marginBottom: 40 }}>
                In Gideon&rsquo;s words
              </div>
            </Reveal>
            <Reveal delay={100}>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(24px, 3.5vw, 40px)",
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  marginBottom: 40,
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "1.2em" }}>&ldquo;</span>
                Lobster took the time to understand exactly how we operate —
                then built a system around it. Managing our branches is a
                different experience now. Every decision we make is backed
                by real-time data, right at our fingertips.
                <span style={{ color: "var(--accent)", fontSize: "1.2em" }}>&rdquo;</span>
              </blockquote>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "var(--surface-3)", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, flexShrink: 0,
                  }}
                >
                  ☕
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)" }}>Director</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 3 }}>
                    Wendo Coffee Bistro · Nyeri, Kenya
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 640 }}>
            <Reveal style={{ marginBottom: 24 }}>
              <span className="tag" style={{ display: "inline-flex" }}>Want this for your business?</span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                  marginBottom: 20,
                }}
              >
                Your operation deserves a system
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>built around it.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 17, fontWeight: 300, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 40 }}>
                Tell us about your business. We&rsquo;ll tell you what&rsquo;s possible. No
                pitch — just a real conversation.
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
                  Message us on WhatsApp <ArrowRight />
                </a>
                <a href="mailto:lobster.technologies.africa@gmail.com" className="btn-secondary">
                  Send us an email
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .back-link:hover { color: var(--ink) !important; }
      `}</style>
    </>
  );
}
