import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Lobster Technologies. We build custom software for growing businesses in Kenya, closing the gap between how companies operate today and what technology can make possible.",
  alternates: {
    canonical: "https://lobstertechnologies.co.ke/about",
  },
  openGraph: {
    title: "About Lobster Technologies — Custom Software Built for Kenya",
    description:
      "Meet Edwinfred Kamau and the Lobster Technologies team. We build software that fits the reality of how business is done in Kenya.",
    url: "https://lobstertechnologies.co.ke/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Lobster Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lobster Technologies",
    description:
      "Meet the team building custom software for growing companies in Kenya.",
    images: ["/og-image.png"],
  },
};

const pillars = [
  {
    label: "Software",
    status: "active",
    desc: "Custom builds that become products. We study operations, build to match them, and turn what we learn into software that can serve entire industries.",
  },
  {
    label: "R&D",
    status: "coming",
    desc: "Staying at the frontier of AI and automation so our clients never fall behind.",
  },
  {
    label: "Education",
    status: "coming",
    desc: "Teaching African businesses how to leverage AI — not as a buzzword, but as a practical operating tool.",
  },
  {
    label: "Societal Impact",
    status: "coming",
    desc: "Working with government, NGOs, and critical infrastructure to build technology for people who need it most.",
  },
];

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
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
          <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
            <Reveal style={{ marginBottom: 20 }}>
              <span className="tag">About us</span>
            </Reveal>
            <Reveal delay={100}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  marginBottom: 28,
                }}
              >
                We exist to close
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>the gap.</em>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: 20, fontWeight: 300, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 580 }}>
                The gap between how businesses in Kenya operate today — manually,
                reactively, without data — and what technology can make possible.
                That gap is our reason for existing.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Mission ── */}
        <section
          style={{
            padding: "80px 0",
            background: "var(--surface-2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container" style={{ maxWidth: 860 }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
              className="mission-grid"
            >
              <Reveal>
                <div style={{ paddingTop: 8 }}>
                  <span className="tag">The Mission</span>
                </div>
              </Reveal>
              <div>
                <Reveal delay={100}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(26px, 3vw, 38px)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      color: "var(--ink)",
                      marginBottom: 24,
                    }}
                  >
                    Africa doesn&rsquo;t need to wait for technology built elsewhere.
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                    The best software for a Kenyan restaurant isn&rsquo;t going to come
                    from Silicon Valley. It&rsquo;s going to come from someone who
                    understands M-Pesa, knows how a kitchen supervisor actually
                    communicates, and has seen the chaos of managing three branches
                    from a phone call.
                  </p>
                  <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, fontWeight: 300 }}>
                    That&rsquo;s what we are. We build software that fits the reality of
                    how business is done here — not software that demands businesses
                    adapt to a foreign model.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 700px) {
              .mission-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </section>

        {/* ── Methodology ── */}
        <section style={{ padding: "100px 0" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Reveal style={{ marginBottom: 20 }}>
                <span className="tag">How we think</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="section-headline">
                  The compounding loop.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="section-sub">
                  Every client we work with teaches us something. That knowledge
                  compounds into better software, faster delivery, and deeper
                  understanding of the industries we serve.
                </p>
              </Reveal>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                position: "relative",
              }}
              className="loop-grid"
            >
              {[
                { num: "01", step: "Find a business", desc: "An owner-operated business at a growth inflection — feeling the chaos of scale." },
                { num: "02", step: "Understand it deeply", desc: "Sit inside the operation. Map the real workflows, not the ideal ones." },
                { num: "03", step: "Build to match", desc: "Build software that fits the operation — not the other way around." },
                { num: "04", step: "Productise & repeat", desc: "Turn what we learned into products that serve entire industries." },
              ].map(({ num, step, desc }, i) => (
                <Reveal key={step} delay={i * 100} as="div">
                  <div
                    style={{
                      padding: "32px 28px",
                      borderTop: i === 0 ? "2px solid var(--accent)" : "2px solid var(--border)",
                      position: "relative",
                    }}
                    className="loop-step"
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: 13,
                        color: "var(--accent)",
                        marginBottom: 12,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {num}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)", marginBottom: 10 }}>{step}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-3)", lineHeight: 1.65, fontWeight: 300 }}>{desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .loop-grid { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 500px) {
              .loop-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Pillars ── */}
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
              position: "absolute", top: "-30%", left: "-10%",
              width: 500, height: 500, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,82,10,0.10) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Reveal style={{ marginBottom: 20 }}>
                <span className="tag tag-dark">What we&rsquo;re building</span>
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
                  Four pillars.
                  <br />
                  <em style={{ fontStyle: "italic", color: "var(--accent-mid)" }}>One mission.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                  We&rsquo;re building a technology company for Africa, not just a
                  software shop. The four pillars reflect the full scope of that
                  ambition.
                </p>
              </Reveal>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}
              className="pillars-grid"
            >
              {pillars.map(({ label, status, desc }, i) => (
                <Reveal key={label} delay={i * 100} as="div">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      padding: "40px 36px",
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{ fontSize: 18, fontWeight: 500, color: "white" }}>{label}</div>
                      {status === "active" ? (
                        <span
                          style={{
                            fontSize: 11, fontWeight: 500,
                            background: "rgba(22,163,74,0.15)",
                            color: "#4ade80",
                            border: "1px solid rgba(22,163,74,0.3)",
                            padding: "3px 10px", borderRadius: 100,
                          }}
                        >
                          Active
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: 11, fontWeight: 500,
                            background: "rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.35)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            padding: "3px 10px", borderRadius: 100,
                          }}
                        >
                          Coming
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 700px) {
              .pillars-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Team ── */}
        <section style={{ padding: "100px 0" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Reveal style={{ marginBottom: 20 }}>
                <span className="tag">The team</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="section-headline">
                  People who care about
                  <br />
                  <em>building it right.</em>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "240px 1fr",
                  gap: 48,
                  alignItems: "start",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 40,
                }}
                className="founder-card"
              >
                {/* Photo */}
                <div>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      marginBottom: 16,
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/edwinfred-kamau.jpg"
                      alt="Edwinfred Kamau — Founder & CEO, Lobster Technologies"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                      sizes="240px"
                      priority
                    />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)" }}>Edwinfred Kamau</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>Founder &amp; CEO</div>
                  <div style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 4 }}>Nairobi, Kenya</div>
                </div>

                {/* Bio */}
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11, fontWeight: 500,
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      color: "var(--ink-4)",
                      marginBottom: 20,
                    }}
                  >
                    Founder
                  </div>
                  <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                    Edwinfred Kamau is the founder and CEO of Lobster Technologies.
                    With a background in electrical and electronics engineering —
                    spanning hardware design and software development — he has spent
                    his career at the intersection of how things work and how they
                    could work better.
                  </p>
                  <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                    He started Lobster because he believes technology should do
                    something real: create genuine value for the people and
                    businesses it touches. That belief shapes everything Lobster
                    builds — systems that fit the way a business actually operates,
                    not the other way around.
                  </p>
                  <p style={{ fontSize: 15, color: "var(--ink-3)", lineHeight: 1.7, fontWeight: 300, fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: 16 }}>
                    &ldquo;Build it right, or don&rsquo;t build it at all.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 700px) {
              .founder-card { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
