import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lobster Technologies — Business Software for Growing Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111110",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: 64,
            height: 4,
            background: "#d4520a",
            borderRadius: 2,
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Lobster Technologies
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 860,
            }}
          >
            Business Software for{" "}
            <span style={{ color: "#d4520a" }}>Growing Companies</span>
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Custom software built for how Kenya does business. Real-time
            visibility, M-Pesa integration, and operational clarity — without
            the chaos.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            lobstertechnologies.co.ke
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#d4520a",
              background: "rgba(212,82,10,0.12)",
              border: "1px solid rgba(212,82,10,0.3)",
              padding: "8px 20px",
              borderRadius: 100,
            }}
          >
            Nairobi, Kenya
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
