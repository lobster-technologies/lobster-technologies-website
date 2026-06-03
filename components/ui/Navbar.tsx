"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LobsterMark = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M12 2C8.5 2 6 5 6 8c0 2 1 3.5 2.5 5L12 22l3.5-9C17 11.5 18 10 18 8c0-3-2.5-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "var(--nav-h)",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "var(--max)",
            margin: "0 auto",
            padding: "0 32px",
            height: "100%",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: "var(--ink)",
            }}
          >
            <div
              style={{
                width: 36, height: 36,
                background: "var(--ink)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <LobsterMark />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>
                Lobster Technologies
              </div>
              <div style={{ fontSize: 10, fontWeight: 400, color: "var(--ink-3)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                Nairobi, Kenya
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }}
            className="nav-desktop"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: pathname === href ? "var(--ink)" : "var(--ink-2)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/#contact" className="btn-dark" style={{ fontSize: 14, padding: "10px 22px" }}>
              Work with us
              <ArrowRight />
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="nav-mobile-btn"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: 4, display: "none",
              }}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed", top: "var(--nav-h)", left: 0, right: 0, bottom: 0,
            zIndex: 99,
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "32px 24px",
            display: "flex", flexDirection: "column", gap: 8,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 22, fontWeight: 400,
                color: "var(--ink)", textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 24 }}>
            <Link href="/#contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Work with us <ArrowRight />
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
