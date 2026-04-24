"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

/* ─── Perks data ──────────────────────────────────────────────────────────── */
const perks = [
  { text: "First access when we launch" },
  { text: "Founding member pricing — locked in for life" },
  { text: "Direct input into Sofia's features" },
  { text: "1-on-1 onboarding support from our team" },
];

/* ─── Dropdown options ────────────────────────────────────────────────────── */
const SELL_OPTIONS = [
  "Fashion",
  "Beauty & Skincare",
  "Electronics",
  "Food & FMCG",
  "Other",
];
const PLATFORM_OPTIONS = ["WhatsApp", "Instagram", "Both"];

/* ─── FloatingInput ───────────────────────────────────────────────────────── */
function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative" style={{ paddingTop: "1.25rem" }}>
      {/* Floating label */}
      <motion.label
        animate={{
          y: lifted ? -22 : 0,
          fontSize: lifted ? "0.68rem" : "0.95rem",
          color: lifted
            ? focused
              ? "#E63946"
              : "rgba(26,26,27,0.4)"
            : "rgba(26,26,27,0.45)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 0,
          top: "1.35rem",
          fontFamily: "Satoshi, sans-serif",
          letterSpacing: lifted ? "0.06em" : "0",
          textTransform: lifted ? "uppercase" : "none",
          pointerEvents: "none",
          transformOrigin: "left center",
        }}
      >
        {label}
      </motion.label>

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(26,26,27,0.15)",
          outline: "none",
          padding: "0.5rem 0",
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.95rem",
          color: "#1A1A1B",
          position: "relative",
          zIndex: 1,
        }}
      />

      {/* Animated red focus line — grows from center */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1.5,
          background: "#E63946",
          transformOrigin: "center",
          borderRadius: 1,
        }}
      />
    </div>
  );
}

/* ─── GlassDropdown ───────────────────────────────────────────────────────── */
function GlassDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lifted = open || value.length > 0;

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative" style={{ paddingTop: "1.25rem" }}>
      {/* Floating label */}
      <motion.label
        animate={{
          y: lifted ? -22 : 0,
          fontSize: lifted ? "0.68rem" : "0.95rem",
          color: lifted
            ? open
              ? "#E63946"
              : "rgba(26,26,27,0.4)"
            : "rgba(26,26,27,0.45)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 0,
          top: "1.35rem",
          fontFamily: "Satoshi, sans-serif",
          letterSpacing: lifted ? "0.06em" : "0",
          textTransform: lifted ? "uppercase" : "none",
          pointerEvents: "none",
        }}
      >
        {label}
      </motion.label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(26,26,27,0.15)",
          outline: "none",
          padding: "0.5rem 0",
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.95rem",
          color: value ? "#1A1A1B" : "transparent",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <span>{value || " "}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={15} strokeWidth={1.5} style={{ color: "rgba(26,26,27,0.35)" }} />
        </motion.span>
      </button>

      {/* Animated red focus line */}
      <motion.div
        animate={{ scaleX: open ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1.5,
          background: "#E63946",
          transformOrigin: "center",
          borderRadius: 1,
        }}
      />

      {/* Glassmorphic panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.92 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.92 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              right: 0,
              zIndex: 50,
              background: "rgba(252,252,250,0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(26,26,27,0.09)",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(26,26,27,0.10)",
              overflow: "hidden",
              transformOrigin: "top center",
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "0.7rem 1rem",
                  background: "transparent",
                  border: "none",
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "0.9rem",
                  color: opt === value ? "#E63946" : "#1A1A1B",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(26,26,27,0.04)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
                }
              >
                {opt}
                {opt === value && (
                  <Check size={13} strokeWidth={2} style={{ color: "#E63946" }} />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── MagneticButton ──────────────────────────────────────────────────────── */
function MagneticButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 18 });
  const y = useSpring(rawY, { stiffness: 200, damping: 18 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawX.set((e.clientX - cx) * 0.28);
      rawY.set((e.clientY - cy) * 0.28);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
        background: "#E63946",
        color: "#FCFCFA",
        border: "none",
        borderRadius: 9999,
        padding: "1.1rem 2.8rem",
        fontFamily: "Satoshi, sans-serif",
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        cursor: "pointer",
        boxShadow: "0 4px 24px rgba(230,57,70,0.30)",
        width: "100%",
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

/* ─── Founding Member Card ────────────────────────────────────────────────── */
function FoundingMemberCard({ name, business }: { name: string; business: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className="flex flex-col items-center text-center"
      style={{ padding: "3rem 2rem" }}
    >
      {/* Pulsing glow ring */}
      <div className="relative mb-8" style={{ width: 88, height: 88 }}>
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.12, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: -14,
            borderRadius: "50%",
            background: "rgba(230,57,70,0.25)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: "50%",
            background: "rgba(230,57,70,0.1)",
            border: "1.5px solid rgba(230,57,70,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Simple "S" monogram for Sofia */}
          <span
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: "2.2rem",
              color: "#E63946",
              fontStyle: "italic",
            }}
          >
            S
          </span>
        </div>
      </div>

      {/* Founding Member badge */}
      <span
        style={{
          background: "rgba(230,57,70,0.08)",
          border: "1px solid rgba(230,57,70,0.2)",
          borderRadius: 9999,
          padding: "4px 14px",
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.68rem",
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "#E63946",
          marginBottom: "1.5rem",
          display: "inline-block",
        }}
      >
        Founding Member
      </span>

      <p
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: "#1A1A1B",
          marginBottom: "0.35rem",
        }}
      >
        {name || "You're in."}
      </p>

      {business && (
        <p
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "0.9rem",
            color: "rgba(26,26,27,0.5)",
            marginBottom: "2rem",
          }}
        >
          {business}
        </p>
      )}

      <p
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.88rem",
          lineHeight: 1.65,
          color: "rgba(26,26,27,0.55)",
          maxWidth: "26rem",
        }}
      >
        We&rsquo;ll be in touch on WhatsApp before launch. Your founding member pricing is
        locked in for life.
      </p>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function WaitlistCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* Form state */
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sells, setSells] = useState("");
  const [platform, setPlatform] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    if (!name || !whatsapp || !sells || !platform) return;
    setSubmitted(true);
  }, [name, whatsapp, sells, platform]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#FAF9F6", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Subtle radial warm glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(230,57,70,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">

        {/* ── Section header ── */}
        <div className="text-center mb-16 lg:mb-20">
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
              marginBottom: "1rem",
            }}
          >
            Private pilot · Limited spots
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
              marginBottom: "1rem",
            }}
          >
            Be First.{" "}
            <em style={{ color: "#E63946" }}>Join the Waitlist.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "rgba(26,26,27,0.6)",
              maxWidth: "38rem",
              margin: "0 auto",
            }}
          >
            Sofia is in private pilot. We&rsquo;re onboarding a small group of Kenyan
            e-commerce sellers to shape the product before public launch.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >

          {/* Left: perks */}
          <div>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(26,26,27,0.35)",
                marginBottom: "1.75rem",
              }}
            >
              Waitlist members get
            </p>

            <ul className="flex flex-col gap-5">
              {perks.map((perk, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.09, ease: "easeOut" }}
                  className="flex items-start gap-4"
                >
                  {/* Thin-line check icon in red circle */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(230,57,70,0.35)",
                      background: "rgba(230,57,70,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <Check size={12} strokeWidth={2} style={{ color: "#E63946" }} />
                  </span>
                  <p
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: "rgba(26,26,27,0.72)",
                    }}
                  >
                    {perk.text}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Pricing teaser */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.72, ease: "easeOut" }}
              style={{
                marginTop: "2.75rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(26,26,27,0.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(26,26,27,0.4)",
                  lineHeight: 1.65,
                }}
              >
                Plans starting from{" "}
                <span style={{ color: "#1A1A1B", fontWeight: 600 }}>Ksh 5,000/month</span>
                {" "}— less than the cost of one week of part-time help.
                <br />
                <span style={{ fontStyle: "italic" }}>
                  Full pricing revealed at launch.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Right: form or confirmation card */}
          <div
            style={{
              background: "rgba(255,255,255,0.72)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(26,26,27,0.07)",
              borderRadius: 24,
              boxShadow: "0 4px 40px rgba(26,26,27,0.07)",
              overflow: "hidden",
              minHeight: 480,
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FoundingMemberCard name={name} business={business} />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  style={{ padding: "2.5rem 2rem 2rem" }}
                >
                  <div className="flex flex-col gap-6">
                    <FloatingInput label="Your Name" value={name} onChange={setName} />
                    <FloatingInput label="Business Name" value={business} onChange={setBusiness} />
                    <FloatingInput
                      label="WhatsApp Number"
                      type="tel"
                      value={whatsapp}
                      onChange={setWhatsapp}
                    />
                    <GlassDropdown
                      label="What do you sell?"
                      options={SELL_OPTIONS}
                      value={sells}
                      onChange={setSells}
                    />
                    <GlassDropdown
                      label="Where do you sell most?"
                      options={PLATFORM_OPTIONS}
                      value={platform}
                      onChange={setPlatform}
                    />
                  </div>

                  <div style={{ marginTop: "2.25rem" }}>
                    <MagneticButton onClick={handleSubmit}>
                      Join the Waitlist — It&rsquo;s Free
                    </MagneticButton>
                  </div>

                  <p
                    style={{
                      marginTop: "1.1rem",
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "0.75rem",
                      fontStyle: "italic",
                      color: "rgba(26,26,27,0.35)",
                      textAlign: "center",
                    }}
                  >
                    No spam. No commitments. Just early access to the tool built for your
                    business.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
