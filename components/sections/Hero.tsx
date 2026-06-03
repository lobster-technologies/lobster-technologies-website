"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

/* ── Main dashboard panel ─────────────────────────────────────── */
function DashboardPanel() {
  const bars = [30, 45, 60, 90, 100, 75, 55, 40, 50, 35, 20, 15];
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      {/* Top bar */}
      <div style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)", padding: "12px 18px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#e4e2dc","#e4e2dc","#e4e2dc"].map((c,i) => (
            <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "block" }} />
          ))}
        </div>
        <span style={{ fontSize: 11, color: "var(--ink-3)", fontWeight: 500, letterSpacing: "0.03em" }}>
          Wendo RMS — Live Dashboard
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#16a34a", fontWeight: 500 }}>
          <span className="live-dot" /> All branches live
        </div>
      </div>

      <div style={{ padding: "16px 18px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
          {[
            { label: "Today's Orders", value: "247", delta: "↑ 18%", color: "#16a34a" },
            { label: "Revenue", value: "KSh 84k", delta: "↑ 12%", color: "#16a34a" },
            { label: "Branches", value: "3 / 3", delta: "All online", color: "#2563eb" },
          ].map(({ label, value, delta, color }) => (
            <div key={label} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "12px 10px" }}>
              <div style={{ fontSize: 9, color: "var(--ink-3)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3 }}>{label}</div>
              <div style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", lineHeight: 1.2 }}>{value}</div>
              <div style={{ fontSize: 10, color, fontWeight: 500, marginTop: 2 }}>{delta}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "12px 14px", marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: "var(--ink-3)", fontWeight: 500, marginBottom: 10 }}>Hourly order volume</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 50 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 4 ? "var(--accent)" : i === 3 || i === 5 ? "rgba(212,82,10,0.45)" : "var(--surface-3)" }} />
            ))}
          </div>
        </div>

        {/* Orders */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {[
            { dot: "#16a34a", name: "Cappuccino × 2", table: "Table 4 · Branch 1", amount: "KSh 600" },
            { dot: "#d97706", name: "Breakfast Set", table: "Takeaway · Branch 2", amount: "KSh 850" },
            { dot: "#2563eb", name: "Lunch Special", table: "Table 7 · Branch 3", amount: "KSh 1,200" },
          ].map(({ dot, name, table, amount }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "8px 10px" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: dot, flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 500, flex: 1, color: "var(--ink-2)" }}>{name}</span>
              <span style={{ fontSize: 10, color: "var(--ink-4)" }}>{table}</span>
              <span style={{ fontSize: 11, fontWeight: 500, color: "var(--ink)" }}>{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Phone mockup — owner mobile view ────────────────────────── */
function PhoneMockup() {
  return (
    <div
      style={{
        width: 140,
        background: "var(--ink)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Phone notch */}
      <div style={{ background: "#0a0a09", padding: "10px 16px 6px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: 40, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
      </div>

      <div style={{ padding: "12px 12px 16px" }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontWeight: 500, marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Owner View
        </div>

        {/* Mini stat cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "10px 10px" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>Live Revenue</div>
            <div style={{ fontSize: 17, fontWeight: 500, color: "white" }}>KSh 84k</div>
            <div style={{ fontSize: 9, color: "#4ade80", marginTop: 2 }}>↑ 12% today</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              { label: "Orders", value: "247" },
              { label: "Tables", value: "18/24" },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 8px" }}>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "white" }}>{value}</div>
              </div>
            ))}
          </div>
          {/* Branch status pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {["Branch 1 — Town", "Branch 2 — Kiganjo", "Branch 3 — New"].map((b, i) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "5px 8px" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Kitchen display card ─────────────────────────────────────── */
function KitchenCard() {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        minWidth: 180,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Kitchen Display
        </span>
        <span style={{ fontSize: 9, background: "rgba(22,163,74,0.1)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.2)", padding: "2px 8px", borderRadius: 100, fontWeight: 500 }}>
          Branch 1
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {[
          { ticket: "#A12", item: "Avocado Toast + OJ", status: "cooking", time: "4m" },
          { ticket: "#A13", item: "Cappuccino × 3", status: "ready",   time: "1m" },
          { ticket: "#A14", item: "Full Breakfast Set", status: "new",    time: "just in" },
        ].map(({ ticket, item, status, time }) => {
          const colors: Record<string, { bg: string; text: string }> = {
            cooking: { bg: "rgba(234,179,8,0.12)",  text: "#ca8a04" },
            ready:   { bg: "rgba(22,163,74,0.12)",  text: "#16a34a" },
            new:     { bg: "rgba(37,99,235,0.10)",  text: "#2563eb" },
          };
          const c = colors[status];
          return (
            <div key={ticket} style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--surface-2)", borderRadius: 7, padding: "7px 10px" }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: "var(--ink-4)", minWidth: 24 }}>{ticket}</span>
              <span style={{ fontSize: 10, color: "var(--ink-2)", flex: 1, fontWeight: 400 }}>{item}</span>
              <span style={{ fontSize: 9, fontWeight: 600, background: c.bg, color: c.text, padding: "2px 7px", borderRadius: 100, whiteSpace: "nowrap" }}>
                {status === "new" ? time : time + " ago"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Hero section ─────────────────────────────────────────────── */
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
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 70% 60% at 60% 40%, #fff6ef 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-inner">

          {/* ── Left: copy ── */}
          <div>
            <div ref={addRef} className="reveal" style={{ marginBottom: 24 }}>
              <span className="tag">Custom Business Software</span>
            </div>
            <h1
              ref={addRef}
              className="reveal reveal-d1"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 24 }}
            >
              Your business,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>finally</em> running
              <br />
              the way it should.
            </h1>
            <p ref={addRef} className="reveal reveal-d2" style={{ fontSize: 18, fontWeight: 300, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 480, marginBottom: 40 }}>
              We build custom software that gives growing businesses in Kenya
              real-time visibility, clean data, and the operational clarity to
              scale — without the chaos.
            </p>
            <div ref={addRef} className="reveal reveal-d3" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary">Talk to us <ArrowRight /></Link>
              <Link href="/case-studies" className="btn-secondary">See our work</Link>
            </div>
          </div>

          {/* ── Right: multi-mockup layout ── */}
          <div ref={addRef} className="reveal reveal-d2 hero-visual">
            <div style={{ position: "relative", height: 480 }}>

              {/* Main dashboard — centred, slight left offset */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 80, zIndex: 2 }}>
                <DashboardPanel />
              </div>

              {/* Phone — bottom-right, overlapping dashboard */}
              <div style={{ position: "absolute", bottom: -24, right: 0, zIndex: 4 }}>
                <PhoneMockup />
              </div>

              {/* Kitchen card — top-right, floating above dashboard */}
              <div
                style={{
                  position: "absolute",
                  top: -20, right: -16,
                  zIndex: 3,
                  filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.10))",
                }}
              >
                <KitchenCard />
              </div>

              {/* Floating location badge */}
              <div
                style={{
                  position: "absolute", bottom: 60, left: -20, zIndex: 5,
                  background: "white", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)", padding: "10px 14px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  fontSize: 12, fontWeight: 500, color: "var(--ink)",
                  whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 7,
                }}
              >
                <span style={{ fontSize: 16 }}>📍</span> Wendo Coffee — Nyeri
              </div>

              {/* Orders badge */}
              <div
                style={{
                  position: "absolute", bottom: -8, left: 80, zIndex: 5,
                  background: "var(--ink)", color: "white",
                  borderRadius: "var(--radius-md)", padding: "9px 14px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  fontSize: 11, fontWeight: 500,
                  whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 7,
                }}
              >
                ✓ 10,000+ orders processed
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
