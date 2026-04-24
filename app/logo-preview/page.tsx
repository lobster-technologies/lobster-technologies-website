/* ─────────────────────────────────────────────────────────────────────────────
   Logo Preview — /logo-preview
   Tune the SVG paths here, then copy to Navbar once approved.
───────────────────────────────────────────────────────────────────────────── */

/* ── Shared mark component ───────────────────────────────────────────────── */
function LogoMark({
  size = 32,
  onDark = false,
  onRed = false,
}: {
  size?: number;
  onDark?: boolean;
  onRed?: boolean;
}) {
  const primary = onDark || onRed ? "#FCFCFA" : "#E63946";
  const arc1Opacity = onDark || onRed ? 0.28 : 0.32;
  const arc2Opacity = onDark || onRed ? 0.58 : 0.62;
  const dotColor = onDark || onRed ? "#FCFCFA" : "#E63946";
  const arc3Color = onDark || onRed ? "#FCFCFA" : "#E63946";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/*
        Design intent:
        - Origin dot anchored bottom-left (8, 32)
        - All arcs start from same origin, sweep upward-right
        - Tighter vertical spread — arcs stay as a compact family
        - Inner arc: short, tight, heavy → immediate foreground
        - Middle arc: medium reach, medium weight
        - Outer arc: longest reach, lightest → receding into distance
        - Clockwise rotation bias: arcs curve upward then right (not left)
      */}

      {/*
        - Wide vertical spread preserved (outer arc reaches high)
        - More pronounced curve: control points pulled further left to deepen the bend
        - All arcs terminate sweeping rightward, no droop
        - Origin at (9, 33)
      */}

      {/* Outer arc — tallest reach, most spread, lightest */}
      <path
        d="M 9 33 C 8 18, 20 8, 34 9"
        stroke={primary}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity={arc1Opacity}
      />

      {/* Middle arc — medium spread */}
      <path
        d="M 9 33 C 8 22, 20 14, 30 16"
        stroke={primary}
        strokeWidth="2.0"
        strokeLinecap="round"
        fill="none"
        opacity={arc2Opacity}
      />

      {/* Inner arc — tightest curve, heaviest */}
      <path
        d="M 9 33 C 9 25, 19 19, 26 22"
        stroke={arc3Color}
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Origin dot */}
      <circle cx="9" cy="33" r="1.9" fill={dotColor} />
    </svg>
  );
}

/* ── Wordmark component ──────────────────────────────────────────────────── */
function LogoWordmark({
  size = "md",
  onDark = false,
}: {
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
}) {
  const nameColor = onDark ? "rgba(252,252,250,0.92)" : "#1A1A1B";
  const subColor = onDark ? "rgba(252,252,250,0.30)" : "rgba(26,26,27,0.38)";

  const nameSizes = { sm: "1.05rem", md: "1.3rem", lg: "2.8rem" };
  const subSizes = { sm: "0.52rem", md: "0.58rem", lg: "0.72rem" };
  const gaps = { sm: 1, md: 2, lg: 4 };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: gaps[size] }}>
      <LogoMark
        size={size === "lg" ? 88 : size === "md" ? 40 : 28}
        onDark={onDark}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: size === "lg" ? 2 : 0 }}>
        <span
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            fontSize: nameSizes[size],
            color: nameColor,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Sofia
        </span>
        <span
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: subSizes[size],
            color: subColor,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1.2,
          }}
        >
          by Lobster Technologies
        </span>
      </div>
    </div>
  );
}

/* ── Label ───────────────────────────────────────────────────────────────── */
function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      style={{
        fontSize: "0.65rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: dark ? "rgba(252,252,250,0.28)" : "rgba(26,26,27,0.32)",
        marginBottom: "1.5rem",
        textAlign: "center",
      }}
    >
      {children}
    </p>
  );
}

/* ── Divider ─────────────────────────────────────────────────────────────── */
function Divider() {
  return (
    <div
      style={{ width: 280, height: 1, background: "rgba(26,26,27,0.08)", margin: "1rem 0" }}
    />
  );
}

/* ── Main page ───────────────────────────────────────────────────────────── */
export default function LogoPreview() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FCFCFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        gap: "3rem",
      }}
    >

      {/* ── Light background ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Label>On light background</Label>

        {/* Large */}
        <div style={{ marginBottom: "2.5rem" }}>
          <LogoWordmark size="lg" />
        </div>

        {/* Medium */}
        <div style={{ marginBottom: "2rem" }}>
          <LogoWordmark size="md" />
        </div>

        {/* Small — navbar */}
        <LogoWordmark size="sm" />
      </section>

      <Divider />

      {/* ── Icon only at all sizes ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Label>Icon only (favicon sizes)</Label>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2.5rem" }}>
          {[96, 64, 48, 32, 24, 16].map((s) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <LogoMark size={s} />
              <span style={{ fontSize: "0.58rem", color: "rgba(26,26,27,0.32)" }}>{s}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Dark background ── */}
      <section
        style={{
          background: "#1A1A1B",
          borderRadius: 24,
          padding: "3rem 4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Label dark>On dark background</Label>
        <LogoWordmark size="lg" onDark />
        <LogoWordmark size="sm" onDark />
      </section>

      {/* ── Red background ── */}
      <section
        style={{
          background: "#E63946",
          borderRadius: 24,
          padding: "3rem 4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Label dark>On red (CTA context)</Label>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LogoMark size={52} onRed />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: "italic", fontSize: "1.8rem", color: "#FCFCFA", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Sofia
            </span>
            <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: "0.6rem", color: "rgba(252,252,250,0.50)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              by Lobster Technologies
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
