"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

const RevenueSparkline = () => (
  <svg viewBox="0 0 96 22" preserveAspectRatio="none" style={{ width: "100%", height: 22, display: "block" }}>
    <polyline points="0,18 12,15 24,16 36,12 48,9 60,10 72,6 84,3 96,1"
      fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
    <polyline points="0,18 12,15 24,16 36,12 48,9 60,10 72,6 84,3 96,1 96,22 0,22"
      fill="rgba(255,255,255,0.08)" />
  </svg>
);

const FloatSparkline = () => (
  <svg viewBox="0 0 136 30" preserveAspectRatio="none" style={{ width: "100%", height: 30, display: "block" }}>
    <polyline points="0,26 17,22 34,24 51,18 68,13 85,15 102,8 119,4 136,1"
      fill="none" stroke="#d4520a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="0,26 17,22 34,24 51,18 68,13 85,15 102,8 119,4 136,1 136,30 0,30"
      fill="#d4520a" opacity={0.09} />
    <circle cx="136" cy="1" r="3" fill="#d4520a" />
  </svg>
);

const ChartSVG = () => (
  <svg width="100%" height="80" viewBox="0 0 230 80" preserveAspectRatio="none">
    <line x1="0" y1="20" x2="230" y2="20" stroke="#f0ede8" strokeWidth="0.5" />
    <line x1="0" y1="40" x2="230" y2="40" stroke="#f0ede8" strokeWidth="0.5" />
    <line x1="0" y1="60" x2="230" y2="60" stroke="#f0ede8" strokeWidth="0.5" />
    <polyline points="0,64 23,60 46,58 69,54 92,50 115,48 138,44 161,40 184,36 207,30 230,26"
      fill="none" stroke="#e4e2dc" strokeWidth="1.2" strokeDasharray="3 2" strokeLinecap="round" />
    <polyline points="0,68 23,62 46,56 69,50 92,44 115,38 138,30 161,24 184,16 207,10 230,4 230,80 0,80"
      fill="#d4520a" opacity={0.08} />
    <polyline points="0,68 23,62 46,56 69,50 92,44 115,38 138,30 161,24 184,16 207,10 230,4"
      fill="none" stroke="#d4520a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="230" cy="4" r="3.5" fill="#d4520a" />
    <circle cx="230" cy="4" r="6" fill="#d4520a" opacity={0.2} />
  </svg>
);

/* ── MacBook ──────────────────────────────────────────────────── */
function MacBookMockup() {
  const kpis = [
    { label: "Revenue",      value: "KSh 2.4M", delta: "↑ 31% growth",    color: "#16a34a" },
    { label: "Transactions", value: "8,294",    delta: "↑ 18% vs last mo", color: "#16a34a" },
    { label: "Customers",    value: "1,847",    delta: "↑ 22% new",        color: "#16a34a" },
    { label: "Locations",    value: "3 / 3",    delta: "All online",       color: "#2563eb" },
  ];
  const topSources = [
    { name: "Location A", pct: "42%", w: "100%", color: "#d4520a" },
    { name: "Location B", pct: "30%", w: "72%",  color: "#f0997b" },
    { name: "Location C", pct: "22%", w: "52%",  color: "#fcd9c0" },
    { name: "Online",     pct: "6%",  w: "14%",  color: "#e4e2dc" },
  ];
  const navItems = [
    { dot: "#d4520a", label: "Analytics",    active: true  },
    { dot: "#e4e2dc", label: "Overview",     active: false },
    { dot: "#16a34a", label: "Transactions", active: false },
    { dot: "#e4e2dc", label: "Inventory",    active: false },
    { dot: "#2563eb", label: "Customers",    active: false },
    { dot: "#e4e2dc", label: "Staff",        active: false },
    { dot: "#e4e2dc", label: "Reports",      active: false },
    { dot: "#e4e2dc", label: "Settings",     active: false },
  ];

  return (
    <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
      <div style={{
        width: 440,
        background: "#1e1e1e",
        borderRadius: "14px 14px 0 0",
        padding: "10px 10px 0",
        border: "1px solid #383838",
        boxShadow: "0 40px 100px rgba(0,0,0,0.26), 0 8px 28px rgba(0,0,0,0.14)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 18, marginBottom: 6 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#444", border: "1px solid #555" }} />
        </div>
        <div style={{ background: "#fff", borderRadius: 5, overflow: "hidden", border: "1px solid #2a2a2a" }}>
          {/* Browser bar */}
          <div style={{ background: "#f7f6f3", borderBottom: "1px solid #e4e2dc", padding: "8px 12px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {["#f0957a","#f0c97a","#8dca75"].map(c => (
                <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "block" }} />
              ))}
            </div>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #e4e2dc", borderRadius: 4, padding: "3px 8px", fontSize: 9, color: "#9a9a96", fontFamily: "monospace" }}>
              app.lobstertechnologies.co.ke/analytics
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "#16a34a", fontWeight: 600 }}>
              <span className="live-dot" style={{ width: 5, height: 5 }} /> Live
            </div>
          </div>
          {/* App */}
          <div style={{ display: "flex", height: 290 }}>
            {/* Sidebar */}
            <div style={{ width: 104, background: "#f7f6f3", borderRight: "1px solid #e4e2dc", padding: "12px 8px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 16 }}>
                <div style={{ width: 18, height: 18, background: "#111110", borderRadius: 4 }} />
                <span style={{ fontSize: 9, fontWeight: 700, color: "#111110" }}>Lobster</span>
              </div>
              {navItems.map(({ dot, label, active }) => (
                <div key={label} style={{ padding: "5px 6px", borderRadius: 5, marginBottom: 2, fontSize: 9, color: active ? "#111110" : "#6b6b68", display: "flex", alignItems: "center", gap: 5, ...(active ? { background: "#fff", fontWeight: 600, border: "1px solid #e4e2dc" } : {}) }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot, flexShrink: 0 }} />
                  {label}
                </div>
              ))}
            </div>
            {/* Main */}
            <div style={{ flex: 1, padding: 12, overflow: "hidden" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#111110", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                Business Analytics
                <span style={{ fontSize: 8, color: "#6b6b68", background: "#f7f6f3", border: "1px solid #e4e2dc", borderRadius: 4, padding: "2px 6px" }}>Last 30 days ▾</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: 10 }}>
                {kpis.map(({ label, value, delta, color }) => (
                  <div key={label} style={{ background: "#f7f6f3", border: "1px solid #e4e2dc", borderRadius: 6, padding: "8px 7px" }}>
                    <div style={{ fontSize: 7.5, color: "#9a9a96", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111110", lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: 7.5, marginTop: 2, fontWeight: 600, color }}>{delta}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 8 }}>
                <div style={{ background: "#fff", border: "1px solid #e4e2dc", borderRadius: 6, padding: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 600, color: "#111110" }}>Revenue trend</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      {[{ c: "#d4520a", l: "This month" }, { c: "#e4e2dc", l: "Last month" }].map(({ c, l }) => (
                        <div key={l} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 7.5, color: "#9a9a96" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: c }} />{l}
                        </div>
                      ))}
                    </div>
                  </div>
                  <ChartSVG />
                </div>
                <div style={{ background: "#fff", border: "1px solid #e4e2dc", borderRadius: 6, padding: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: "#111110", marginBottom: 7 }}>Top revenue sources</div>
                  {topSources.map(({ name, pct, w, color }) => (
                    <div key={name} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: "1px solid #f7f6f3", fontSize: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0 }} />
                      <span style={{ flex: 1, color: "#3a3a38" }}>{name}</span>
                      <div style={{ width: 40, background: "#f7f6f3", borderRadius: 2, height: 4 }}>
                        <div style={{ height: 4, borderRadius: 2, background: color, width: w }} />
                      </div>
                      <span style={{ fontWeight: 600, color: "#111110", width: 28, textAlign: "right" }}>{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Base */}
      <div style={{ width: 484, marginLeft: -22, height: 14, background: "linear-gradient(180deg, #d0d0d0 0%, #b8b8b8 100%)", borderRadius: "0 0 8px 8px", border: "1px solid #b0b0b0", borderTop: "none", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 88, height: 8, background: "#c4c4c4", borderRadius: "0 0 6px 6px", border: "1px solid #b0b0b0", borderTop: "none" }} />
      </div>
    </div>
  );
}

/* ── iPhone — proper proportions (190×412, ~2.17:1) ──────────── */
function IPhoneMockup() {
  const W = 220;
  const R = 52; // border radius

  return (
    <div style={{
      width: W,
      background: "#1c1c1e",
      borderRadius: R,
      border: "2.5px solid #3d3d3f",
      boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
      position: "relative",
      flexShrink: 0,
    }}>
      {/* Volume buttons */}
      <div style={{ position: "absolute", left: -4, top: 76,  width: 3.5, height: 30, background: "#3d3d3f", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -4, top: 116, width: 3.5, height: 30, background: "#3d3d3f", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -4, top: 156, width: 3.5, height: 30, background: "#3d3d3f", borderRadius: "2px 0 0 2px" }} />
      {/* Power button */}
      <div style={{ position: "absolute", right: -4, top: 108, width: 3.5, height: 58, background: "#3d3d3f", borderRadius: "0 2px 2px 0" }} />

      {/* Screen */}
      <div style={{ background: "#fff", borderRadius: R - 3, overflow: "hidden", margin: 3 }}>
        {/* Dynamic Island */}
        <div style={{ background: "#1c1c1e", width: 84, height: 16, borderRadius: 100, margin: "12px auto 0", position: "relative", zIndex: 5 }} />

        {/* Status bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 18px 0", fontSize: 8, fontWeight: 600, color: "#111110" }}>
          <span style={{ fontSize: 10, fontWeight: 700 }}>9:41</span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <svg width="11" height="9" viewBox="0 0 10 8" fill="#111110">
              <rect x="0"   y="5"   width="2" height="3" rx="0.5" />
              <rect x="2.5" y="3.5" width="2" height="4.5" rx="0.5" />
              <rect x="5"   y="2"   width="2" height="6" rx="0.5" />
              <rect x="7.5" y="0.5" width="2" height="7.5" rx="0.5" />
            </svg>
            <svg width="11" height="9" viewBox="0 0 10 8" fill="none" stroke="#111110" strokeWidth="1.2">
              <path d="M5 7h.01M1.5 4.5C2.5 3.2 3.7 2.5 5 2.5s2.5.7 3.5 2M0 2.5C1.3 1 3 0 5 0s3.7 1 5 2.5" />
            </svg>
            <svg width="16" height="9" viewBox="0 0 14 8">
              <rect x="0.5" y="0.5" width="11" height="7" rx="1.5" stroke="#111110" strokeWidth="1" fill="none" />
              <rect x="1.5" y="1.5" width="8"  height="5" rx="0.5" fill="#111110" />
              <path d="M12 2.5v3" stroke="#111110" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "10px 14px 4px" }}>
          <div style={{ fontSize: 9,  color: "#9a9a96" }}>Good morning,</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111110", marginBottom: 12 }}>Edwin</div>

          {/* Hero revenue card */}
          <div style={{ background: "#111110", borderRadius: 14, padding: "13px 14px", marginBottom: 10 }}>
            <div style={{ fontSize: 9,  color: "rgba(255,255,255,0.5)", marginBottom: 3 }}>Today&apos;s revenue</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1 }}>KSh 84k</div>
            <div style={{ fontSize: 9,  color: "#4ade80", marginTop: 4 }}>↑ 12% vs yesterday</div>
            <div style={{ marginTop: 8 }}><RevenueSparkline /></div>
          </div>

          {/* 2-col */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 10 }}>
            {[
              { label: "Transactions", value: "247", delta: "↑ 18%" },
              { label: "Customers",    value: "183", delta: "↑ 9%"  },
            ].map(({ label, value, delta }) => (
              <div key={label} style={{ background: "#f7f6f3", borderRadius: 12, padding: "10px 10px" }}>
                <div style={{ fontSize: 8.5, color: "#9a9a96", marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#111110", lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 8.5, fontWeight: 600, color: "#16a34a", marginTop: 3 }}>{delta}</div>
              </div>
            ))}
          </div>

          {/* Alert */}
          <div style={{ background: "#fff0e8", border: "1px solid #fcd9c0", borderRadius: 12, padding: "8px 10px", marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 7 }}>
            <div style={{ width: 15, height: 15, background: "#d4520a", borderRadius: "50%", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "white" }}>!</div>
            <div style={{ fontSize: 9, color: "#b84308", lineHeight: 1.5 }}>Stock alert — Item #14<br />Location B needs restocking</div>
          </div>

          {/* Branches */}
          <div style={{ fontSize: 10, fontWeight: 600, color: "#111110", marginBottom: 6 }}>Location performance</div>
          {[
            { name: "Location A", val: "KSh 38k" },
            { name: "Location B", val: "KSh 28k" },
            { name: "Location C", val: "KSh 18k" },
          ].map(({ name, val }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 0", borderTop: "1px solid #f0ede8", fontSize: 9 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", flexShrink: 0 }} />
              <span style={{ flex: 1, color: "#3a3a38" }}>{name}</span>
              <span style={{ fontWeight: 600, color: "#111110" }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Home bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 0 10px" }}>
          <div style={{ width: 60, height: 5, background: "#111110", borderRadius: 100, opacity: 0.2 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Floating insight card ────────────────────────────────────── */
function FloatCard() {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e4e2dc",
      borderRadius: 16,
      padding: "16px 18px",
      boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)",
      width: 180,
      flexShrink: 0,
    }}>
      <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#d4520a", background: "#fff0e8", border: "1px solid #fcd9c0", borderRadius: 100, padding: "3px 10px", display: "inline-block", marginBottom: 10 }}>
        This month
      </div>
      <div style={{ fontSize: 30, fontWeight: 700, color: "#111110", lineHeight: 1, marginBottom: 3 }}>+31%</div>
      <div style={{ fontSize: 11, color: "#6b6b68", lineHeight: 1.4, marginBottom: 10 }}>Revenue growth across all locations</div>
      <FloatSparkline />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
export default function Hero() {
  const heroRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRefs.current.forEach(el => el?.classList.add("visible"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !heroRefs.current.includes(el)) heroRefs.current.push(el);
  };

  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 80px)", paddingBottom: 80, overflow: "hidden", position: "relative" }}>
      {/* Hero background glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 70% at 65% 40%, #fff6ef 0%, transparent 65%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-inner">

          {/* ── Copy ── */}
          <div>
            <div ref={addRef} className="reveal" style={{ marginBottom: 24 }}>
              <span className="tag">Custom Business Software</span>
            </div>
            <h1 ref={addRef} className="reveal reveal-d1"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 24 }}>
              Your business,<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>finally</em> running<br />
              the way it should.
            </h1>
            <p ref={addRef} className="reveal reveal-d2"
              style={{ fontSize: 18, fontWeight: 300, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 480, marginBottom: 40 }}>
              We build custom software that gives growing businesses in Kenya
              real-time visibility, clean data, and the operational clarity to
              scale — without the chaos.
            </p>
            <div ref={addRef} className="reveal reveal-d3"
              style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary">Talk to us <ArrowRight /></Link>
              <Link href="/case-studies" className="btn-secondary">See our work</Link>
            </div>
          </div>

          {/* ── Free-floating mockups ── */}
          <div ref={addRef} className="reveal reveal-d2 hero-visual">
            {/*
              Diagonal composition:
              FloatCard  — top-left anchor, slight counter-clockwise tilt
              MacBook    — center, slight counter-clockwise tilt, main element
              iPhone     — bottom-right, clockwise tilt, overlaps MacBook corner
            */}
            <div style={{ position: "relative", height: 600 }}>

              {/* Float card — top-left, above all */}
              <div style={{
                position: "absolute", top: 0, left: 0, zIndex: 5,
                transform: "rotate(-2deg)",
                filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.13))",
              }}>
                <FloatCard />
              </div>

              {/* MacBook — anchored below-right of float card */}
              <div style={{
                position: "absolute", top: 60, left: 10, zIndex: 2,
                transform: "rotate(-1.5deg)",
              }}>
                <MacBookMockup />
              </div>

              {/* iPhone — bottom-right, overlaps MacBook lower-right corner */}
              <div style={{
                position: "absolute", bottom: 0, right: 0, zIndex: 4,
                transform: "rotate(2.5deg)",
              }}>
                <IPhoneMockup />
              </div>

            </div>
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
