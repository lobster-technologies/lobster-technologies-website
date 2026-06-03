import Link from "next/link";

const LobsterMark = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M12 2C8.5 2 6 5 6 8c0 2 1 3.5 2.5 5L12 22l3.5-9C17 11.5 18 10 18 8c0-3-2.5-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "white", padding: "60px 0 40px" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 28, height: 28,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <LobsterMark />
              </div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>Lobster Technologies</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, fontWeight: 300, maxWidth: 240 }}>
              Custom software for growing businesses in Kenya. Built for the way this market actually works.
            </p>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Company
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, padding: 0 }}>
              {[
                { href: "/about", label: "About" },
                { href: "/case-studies", label: "Our work" },
                { href: "/#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                    className="footer-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Solutions
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, padding: 0 }}>
              {["Restaurant systems", "Retail & distribution", "Custom builds"].map((item) => (
                <li key={item}>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Contact
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, padding: 0 }}>
              <li>
                <a
                  href="mailto:lobster.technologies.africa@gmail.com"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  lobster.technologies.africa@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254113176613"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            © 2025 Lobster Technologies. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", gap: 6 }}>
            📍 Nairobi, Kenya
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: white !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
