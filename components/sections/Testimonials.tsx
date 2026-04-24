"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Testimonial data ────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "I used to spend 4 hours a day on WhatsApp. Now Sofia handles 80% of my messages and I'm getting more sales, not fewer.",
    name: "Amina W.",
    role: "Fashion Seller",
    city: "Nairobi",
    flag: "🇰🇪",
  },
  {
    quote:
      "Customers message at 2am and get a reply immediately. I didn't realise how many sales I was losing just because I was asleep.",
    name: "Brian O.",
    role: "Electronics Reseller",
    city: "Mombasa",
    flag: "🇰🇪",
  },
  {
    quote:
      "My Instagram DMs used to be a graveyard. Sofia cleared the backlog in the first week and three of those old leads converted.",
    name: "Cynthia M.",
    role: "Beauty & Skincare Seller",
    city: "Kisumu",
    flag: "🇰🇪",
  },
];

/* ─── Slide variants ──────────────────────────────────────────────────────── */
const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > active ? 1 : -1);
      setActive(next);
    },
    [active]
  );

  const prev = useCallback(() => {
    go((active - 1 + testimonials.length) % testimonials.length);
  }, [active, go]);

  const next = useCallback(() => {
    go((active + 1) % testimonials.length);
  }, [active, go]);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#FCFCFA", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* ── Section header ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            color: "rgba(26,26,27,0.4)",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Early sellers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#1A1A1B",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          What early sellers are saying
        </motion.h2>
      </div>

      {/* ── Carousel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative max-w-3xl mx-auto px-8 lg:px-16"
        style={{ minHeight: 320 }}
      >
        {/* Oversized faint quotation mark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -48,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "clamp(14rem, 22vw, 20rem)",
            lineHeight: 1,
            color: "#E63946",
            opacity: 0.04,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          &ldquo;
        </div>

        {/* Sliding quote */}
        <div className="relative z-10" style={{ overflow: "hidden", paddingBottom: "0.5rem" }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Quote text */}
              <blockquote
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: "clamp(1.45rem, 2.8vw, 2rem)",
                  lineHeight: 1.45,
                  letterSpacing: "-0.02em",
                  color: "#1A1A1B",
                  fontStyle: "italic",
                  textAlign: "center",
                  margin: "0 0 2.5rem",
                }}
              >
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              {/* Business ID card */}
              <div className="flex flex-col items-center gap-1">
                {/* Thin divider */}
                <div
                  style={{
                    width: 32,
                    height: 1,
                    background: "rgba(26,26,27,0.15)",
                    marginBottom: "0.75rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#1A1A1B",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {testimonials[active].name}
                </p>
                <p
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(26,26,27,0.45)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {testimonials[active].role} &middot; {testimonials[active].city}{" "}
                  {testimonials[active].flag}
                </p>
                <span
                  style={{
                    marginTop: "0.5rem",
                    background: "rgba(238,245,240,1)",
                    border: "1px solid rgba(26,26,27,0.08)",
                    borderRadius: 9999,
                    padding: "3px 10px",
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "rgba(26,26,27,0.4)",
                  }}
                >
                  Pilot customer
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Controls ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex items-center justify-center gap-6 mt-14"
      >
        {/* Prev */}
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          aria-label="Previous testimonial"
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(26,26,27,0.12)",
            background: "rgba(252,252,250,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(26,26,27,0.06)",
          }}
        >
          <ChevronLeft size={18} strokeWidth={1.5} style={{ color: "rgba(26,26,27,0.55)" }} />
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2.5">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              animate={{
                width: i === active ? 20 : 6,
                background: i === active ? "#E63946" : "rgba(26,26,27,0.18)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              style={{
                height: 6,
                borderRadius: 9999,
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Next */}
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          aria-label="Next testimonial"
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(26,26,27,0.12)",
            background: "rgba(252,252,250,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(26,26,27,0.06)",
          }}
        >
          <ChevronRight size={18} strokeWidth={1.5} style={{ color: "rgba(26,26,27,0.55)" }} />
        </motion.button>
      </motion.div>
    </section>
  );
}
