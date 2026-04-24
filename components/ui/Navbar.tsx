"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();

  // As user scrolls 0→60px: background opacity 0.72→0.97, border opacity 0.08→0.14, blur stays
  const bgOpacity = useTransform(scrollY, [0, 60], [0.72, 0.97]);
  const borderOpacity = useTransform(scrollY, [0, 60], [0.06, 0.14]);
  const shadowOpacity = useTransform(scrollY, [0, 60], [0.04, 0.10]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-8 lg:px-16 py-4">
        <motion.div
          className="flex items-center justify-between rounded-2xl px-6 py-3"
          style={{
            backgroundColor: useTransform(
              bgOpacity,
              (v) => `rgba(252, 252, 250, ${v})`
            ),
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: useTransform(
              borderOpacity,
              (v) => `1px solid rgba(26, 26, 27, ${v})`
            ),
            boxShadow: useTransform(
              shadowOpacity,
              (v) => `0 2px 20px rgba(26, 26, 27, ${v})`
            ),
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-0.5">
            {/* Signal arc mark — three curved arcs suggesting broadcast + lobster claw */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M 9 33 C 8 18, 20 8, 34 9" stroke="#E63946" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.32"/>
              <path d="M 9 33 C 8 22, 20 14, 30 16" stroke="#E63946" strokeWidth="2.0" strokeLinecap="round" fill="none" opacity="0.62"/>
              <path d="M 9 33 C 9 25, 19 19, 26 22" stroke="#E63946" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
              <circle cx="9" cy="33" r="1.9" fill="#E63946"/>
            </svg>

            {/* Wordmark */}
            <div className="flex flex-col" style={{ gap: 0, lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "#1A1A1B",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Sofia
              </span>
              <span
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "0.58rem",
                  color: "rgba(26,26,27,0.38)",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                by Lobster Technologies
              </span>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="#waitlist"
            whileHover={{ opacity: 0.85 }}
            whileTap={{ opacity: 0.7 }}
            className="text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            style={{
              background: "#1A1A1B",
              color: "#FCFCFA",
              fontFamily: "Satoshi, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Join Waitlist
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
}
