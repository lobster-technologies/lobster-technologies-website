import Link from "next/link";
import Image from "next/image";

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
            <div style={{ marginBottom: 16 }}>
              <Image
                src="/LT-Primary_horizontal_logo-removebg.png"
                alt="Lobster Technologies"
                width={577}
                height={433}
                style={{ height: 57, width: "auto", display: "block", filter: "brightness(0) invert(1)", opacity: 0.92 }}
              />
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
