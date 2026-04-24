"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

/* ─── Word-split headline ─────────────────────────────────────────────────── */
const headlineWords = [
  { text: "Your", italic: false, red: false },
  { text: "Business", italic: false, red: false },
  { text: "Deserves", italic: false, red: false },
  { text: "a", italic: false, red: false },
  { text: "Sales", italic: false, red: false },
  { text: "Agent", italic: false, red: false },
  { text: "That", italic: false, red: false },
  { text: "Never", italic: true, red: true },
  { text: "Sleeps", italic: true, red: true },
];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.08 + i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

/* last word ("Sleeps") — spring settle, no scale overshoot */
const sleepsVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.08 + 8 * 0.05,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

/* ─── Container stagger ───────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Shimmer keyframes (CSS-in-JS via motion) ────────────────────────────── */
const shimmerVariants: Variants = {
  idle: { backgroundPosition: "200% center" },
  sweep: {
    backgroundPosition: ["-200% center", "200% center"],
    transition: {
      duration: 1.0,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2.8,
    },
  },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(238,245,240,0.6) 0%, transparent 50%), " +
            "radial-gradient(circle at 80% 20%, rgba(244,244,241,0.8) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase"
              style={{
                background: "#EEF5F0",
                color: "#1A1A1B",
                border: "1px solid rgba(26,26,27,0.08)",
                fontFamily: "Satoshi, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#E63946" }}
                animate={prefersReduced ? {} : { opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              AI Sales Agent for African E-Commerce
            </span>
          </motion.div>

          {/* ── Word-by-word headline ── */}
          <h1
            className="mx-auto flex flex-wrap justify-center gap-x-[0.28em] gap-y-1"
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#1A1A1B",
              maxWidth: "16ch",
            }}
          >
            {headlineWords.map((word, i) => {
              const isLast = i === headlineWords.length - 1;
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={isLast ? sleepsVariants : wordVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: "inline-block",
                    fontStyle: word.italic ? "italic" : "normal",
                    color: word.red ? "#E63946" : "#1A1A1B",
                  }}
                >
                  {word.text}
                </motion.span>
              );
            })}
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "rgba(26,26,27,0.55)",
              maxWidth: "44rem",
              margin: "1.75rem auto 0",
            }}
          >
            Sofia is an AI sales agent for African e-commerce businesses. She
            responds to your customers on WhatsApp and Instagram — instantly,
            24/7 — so you never lose a sale to a slow reply again.
          </motion.p>

          {/* ── Shimmer CTA ── */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center"
          >
            <motion.a
              id="waitlist"
              href="#waitlist"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 font-semibold rounded-full overflow-hidden"
              style={{
                color: "#FCFCFA",
                fontFamily: "Satoshi, sans-serif",
                fontSize: "1rem",
                padding: "1.1rem 2.5rem",
                letterSpacing: "-0.01em",
                background: "#E63946",
                boxShadow:
                  "0 4px 24px rgba(230,57,70,0.30), 0 1px 4px rgba(230,57,70,0.20)",
              }}
            >
              {/* Shimmer layer */}
              <motion.span
                variants={shimmerVariants}
                initial="idle"
                animate="sweep"
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.30) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                }}
              />
              {/* Label */}
              <span className="relative flex items-center gap-3">
                Join the Waitlist
                <ArrowRight
                  size={17}
                  strokeWidth={2.2}
                  className="transition-transform group-hover:translate-x-1"
                />
                <span className="ml-1 text-sm opacity-70 font-normal" style={{ letterSpacing: 0 }}>
                  — Free Early Access
                </span>
              </span>
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <div className="flex -space-x-2">
              {(["#E63946", "#1A1A1B", "#EEF5F0"] as const).map((bg, i) => (
                <div
                  key={i}
                  className="rounded-full border-2 border-[#FCFCFA] flex items-center justify-center text-[9px] font-bold"
                  style={{
                    width: 26,
                    height: 26,
                    background: bg,
                    color: i === 2 ? "#1A1A1B" : "#FCFCFA",
                  }}
                >
                  {["A", "B", "C"][i]}
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.82rem",
                color: "rgba(26,26,27,0.45)",
              }}
            >
              Join other Kenyan e-commerce sellers already on the waitlist
            </p>
          </motion.div>
        </motion.div>

        {/* Phone visual */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
          className="mt-20 flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
