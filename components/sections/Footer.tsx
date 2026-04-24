"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";

/* ─── Nav links ───────────────────────────────────────────────────────────── */
const navLinks = ["About", "Contact", "Privacy Policy"];

/* ─── Link hover wrapper ──────────────────────────────────────────────────── */
function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ color: "rgba(252,252,250,0.9)" }}
      style={{
        fontFamily: "Satoshi, sans-serif",
        fontSize: "0.88rem",
        color: "rgba(252,252,250,0.52)",
        textDecoration: "none",
        display: "block",
        transition: "color 0.18s",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </motion.a>
  );
}

/* ─── Pulsing status dot ──────────────────────────────────────────────────── */
function StatusDot() {
  return (
    <span className="relative inline-flex" style={{ width: 10, height: 10, flexShrink: 0 }}>
      {/* Ping ring */}
      <motion.span
        animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#22c55e",
        }}
      />
      {/* Solid dot */}
      <span
        style={{
          position: "absolute",
          inset: 1,
          borderRadius: "50%",
          background: "#22c55e",
        }}
      />
    </span>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <footer
      ref={sectionRef}
      style={{ background: "#1A1A1B", paddingTop: "5rem", paddingBottom: "3rem" }}
    >
      {/* ── Massive SOFIA wordmark (texture) ── */}
      <div
        className="overflow-hidden"
        style={{ marginBottom: "0.5rem", lineHeight: 0.88 }}
        aria-hidden
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "clamp(7rem, 18vw, 16rem)",
            letterSpacing: "-0.04em",
            color: "#272727",
            textAlign: "center",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          SOFIA
        </motion.p>
      </div>

      {/* ── Hairline divider ── */}
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 2rem",
          borderTop: "1px solid rgba(252,252,250,0.07)",
          paddingTop: "3rem",
          marginTop: "1rem",
        }}
      >
        {/* ── 4-column grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 px-6 lg:px-8"
          style={{ marginBottom: "3.5rem" }}
        >
          {/* Col 1 — Mission */}
          <div>
            {/* Lobster wordmark */}
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: "1.1rem",
                  color: "rgba(252,252,250,0.85)",
                  letterSpacing: "-0.02em",
                  fontStyle: "italic",
                }}
              >
                Sofia
              </span>
              <span
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "0.68rem",
                  color: "rgba(252,252,250,0.3)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginLeft: 6,
                }}
              >
                by Lobster Technologies
              </span>
            </div>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.82rem",
                color: "rgba(252,252,250,0.4)",
                lineHeight: 1.65,
                letterSpacing: "-0.005em",
              }}
            >
              The AI Sales Agent Built for African E-Commerce.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(252,252,250,0.25)",
                marginBottom: "1rem",
              }}
            >
              Company
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(252,252,250,0.25)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@lobstertechnologies.com"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
              >
                <Mail
                  size={13}
                  strokeWidth={1.5}
                  style={{ color: "rgba(252,252,250,0.3)", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(252,252,250,0.52)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  hello@lobstertechnologies.com
                </span>
              </a>
              <a
                href="https://wa.me/254113176613"
                className="flex items-center gap-2.5"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle
                  size={13}
                  strokeWidth={1.5}
                  style={{ color: "rgba(252,252,250,0.3)", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(252,252,250,0.52)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  0113 176 613
                </span>
              </a>
            </div>
          </div>

          {/* Col 4 — Status */}
          <div>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(252,252,250,0.25)",
                marginBottom: "1rem",
              }}
            >
              System Status
            </p>
            <div className="flex items-start gap-2.5">
              <span style={{ marginTop: 3 }}>
                <StatusDot />
              </span>
              <p
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(252,252,250,0.52)",
                  lineHeight: 1.55,
                  letterSpacing: "-0.01em",
                }}
              >
                Sofia is currently in{" "}
                <span style={{ color: "#22c55e", fontWeight: 500 }}>Private Pilot</span>
                <br />
                <span style={{ color: "rgba(252,252,250,0.3)", fontSize: "0.75rem" }}>
                  Nairobi, Kenya
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom hairline + closing line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ paddingTop: "2rem", borderTop: "1px solid rgba(252,252,250,0.06)" }}
          className="px-6 lg:px-8"
        >
          <p
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "0.75rem",
              color: "rgba(252,252,250,0.22)",
              letterSpacing: "0.06em",
              textAlign: "center",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            Lobster Technologies is building the AI workforce for African business.
            Starting with Sofia.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
