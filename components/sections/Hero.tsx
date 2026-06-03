"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

function DashboardMockup() {
  const bars = [30, 45, 60, 90, 100, 75, 55, 40, 50, 35, 20, 15];
  const highlightIndex = 4;

  return (
    <div style={{ position: "relative" }}>
      {/* Floating badge — top */}
      <div
        style={{
          position: "absolute", top: -16, right: -16, zIndex: 2,
          background: "white",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",
          padding: "12px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          fontSize: 13, fontWeight: 500,
          color: "var(--ink)",
          whiteSpace: "nowrap",
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        <span style={{ fontSize: 18 }}>📍</span> Wendo Coffee — Nyeri
      </div>

      {/* Dashboard card */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: "var(--surface-2)",
            borderBottom: "1px solid var(--border)",
            padding: "14px 20px",
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            {["#e4e2dc", "#e4e2dc", "#e4e2dc"].map((c, i) => (
              <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />
            ))}
          </div>
          <span style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 500, letterSpacing: "0.03em" }}>
            Wendo RMS — Live Dashboard
          </span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#16a34a", fontWeight: 500 }}>
            <span className="live-dot" />
            All branches live
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 20 }}>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Today's Orders", value: "247", delta: "↑ 18% vs yesterday", color: "#16a34a" },
              { label: "Revenue", value: "KSh 84k", delta: "↑ 12% this week", color: "#16a34a" },
              { label: "Branches", value: "3 / 3", delta: "All online", color: "#2563eb" },
            ].map(({ label, value, delta, color }) => (
              <div
                key={label}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: 14,
                }}
              >
                <div style={{ fontSize: 10, color: "var(--ink-3)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontSize: 20, fontWeight: 500, color: "var(--ink)", lineHeight: 1.2 }}>{value}</div>
                <div style={{ fontSize: 11, color, fontWeight: 500, marginTop: 2 }}>{delta}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontWeight: 500, marginBottom: 12 }}>Hourly order volume</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "4px 4px 0 0",
                    background: i === highlightIndex
                      ? "var(--accent)"
                      : i === highlightIndex - 1 || i === highlightIndex + 1
                      ? "rgba(212,82,10,0.5)"
                      : "var(--surface-3)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Orders */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { dot: "#16a34a", name: "Cappuccino × 2", table: "Table 4 · Branch 1", amount: "KSh 600" },
              { dot: "#d97706", name: "Breakfast Set", table: "Takeaway · Branch 2", amount: "KSh 850" },
              { dot: "#2563eb", name: "Lunch Special", table: "Table 7 · Branch 3", amount: "KSh 1,200" },
            ].map(({ dot, name, table, amount }) => (
              <div
                key={name}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "10px 12px",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 500, flex: 1, color: "var(--ink-2)" }}>{name}</span>
                <span style={{ fontSize: 11, color: "var(--ink-4)" }}>{table}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--ink)" }}>{amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge — bottom */}
      <div
        style={{
          position: "absolute", bottom: -12, left: -20,
          background: "var(--ink)", color: "white",
          borderRadius: "var(--radius-md)",
          padding: "10px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          fontSize: 12, fontWeight: 500,
          whiteSpace: "nowrap",
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        ✓ 10,000+ orders processed
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRefs.current.forEach((el) => el?.classList.add("visible"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !heroRefs.current.includes(el)) heroRefs.current.push(el);
  };

  return (
    <section
      style={{
        paddingTop: "calc(var(--nav-h) + 80px)",
        paddingBottom: 80,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle background tint */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 70% 60% at 60% 40%, #fff6ef 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-inner"
        >
          {/* Left — copy */}
          <div>
            <div ref={addRef} className="reveal" style={{ marginBottom: 24 }}>
              <span className="tag">Custom Business Software</span>
            </div>

            <h1
              ref={addRef}
              className="reveal reveal-d1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 5vw, 64px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: 24,
              }}
            >
              Your business,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>finally</em> running
              <br />
              the way it should.
            </h1>

            <p
              ref={addRef}
              className="reveal reveal-d2"
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "var(--ink-2)",
                lineHeight: 1.65,
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              We build custom software that gives growing businesses in Kenya
              real-time visibility, clean data, and the operational clarity to
              scale — without the chaos.
            </p>

            <div
              ref={addRef}
              className="reveal reveal-d3"
              style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
            >
              <Link href="/#contact" className="btn-primary">
                Talk to us <ArrowRight />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See our work
              </Link>
            </div>
          </div>

          {/* Right — dashboard */}
          <div ref={addRef} className="reveal reveal-d2 hero-visual">
            <DashboardMockup />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
