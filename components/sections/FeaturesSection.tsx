"use client";

import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";

/* ─── Shared types ────────────────────────────────────────────────────────── */
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  gridInView: boolean;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BENTO CARD — base card with 3D tilt + stagger entrance
   ═══════════════════════════════════════════════════════════════════════════ */
function BentoCard({ children, className = "", style = {}, delay = 0, gridInView }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  /* Spring-damped so the tilt feels physical, not snappy */
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 24 });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 24 });

  /* Parallax offset for inner macro-visual layer */
  const innerX = useTransform(rotateY, [-8, 8], [-7, 7]);
  const innerY = useTransform(rotateX, [-6, 6], [5, -5]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [rawX, rawY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        background: "#F4F4F1",
        border: "1px solid rgba(255,255,255,0.85)",
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        cursor: "default",
        boxShadow: "0 2px 20px rgba(26,26,27,0.06)",
        ...style,
      }}
      className={className}
    >
      {/* Inner parallax wrapper — children receive this as context via render prop pattern */}
      <motion.div
        style={{
          x: innerX,
          y: innerY,
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANCHOR CARD — Built for the Kenyan Market
   M-Pesa STK glassmorphic bottom sheet macro-visual
   ═══════════════════════════════════════════════════════════════════════════ */
function BuiltForKenyaCard({ gridInView }: { gridInView: boolean }) {
  const inView = gridInView;

  return (
    <BentoCard
      delay={0.04}
      gridInView={gridInView}
      style={{ gridArea: "kenya", minHeight: 340 }}
    >
      {/* Text block */}
      <div style={{ padding: "28px 28px 0" }}>
        <p style={{
          fontFamily: "Satoshi, sans-serif", fontSize: "0.65rem",
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "rgba(26,26,27,0.38)", marginBottom: 10,
        }}>
          Built for the Kenyan Market
        </p>
        <h3 style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "clamp(1.35rem, 2.2vw, 1.65rem)",
          lineHeight: 1.25, letterSpacing: "-0.02em",
          color: "#1A1A1B", margin: "0 0 10px",
          maxWidth: "22rem",
        }}>
          English & Swahili. M-Pesa built in. Pay-on-delivery ready.
        </h3>
        <p style={{
          fontFamily: "Satoshi, sans-serif", fontSize: "0.925rem",
          lineHeight: 1.65, color: "rgba(26,26,27,0.55)",
          maxWidth: "28rem", margin: 0,
        }}>
          Sofia understands how Kenyan commerce actually works — not how a Silicon Valley engineer imagines it.
        </p>
      </div>

      {/* Macro-visual: M-Pesa STK sheet */}
      <div style={{ padding: "20px 28px 28px", display: "flex", justifyContent: "flex-end" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 120, damping: 18 }}
          style={{
            width: 240,
            background: "rgba(252,252,250,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 18,
            border: "1px solid rgba(26,26,27,0.09)",
            boxShadow: "0 8px 40px rgba(26,26,27,0.13)",
            overflow: "hidden",
          }}
        >
          {/* Handle */}
          <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 6px" }}>
            <div style={{ width: 32, height: 4, borderRadius: 9999, background: "rgba(26,26,27,0.10)" }} />
          </div>

          {/* M-Pesa green header */}
          <div style={{
            background: "#006600",
            padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.06em", margin: 0 }}>M-PESA</p>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.65)", margin: 0 }}>Payment Request</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 14 }}>🇰🇪</span>
              <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.55)" }}>Safaricom</span>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "14px 16px" }}>
            <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "rgba(26,26,27,0.45)", margin: "0 0 3px" }}>Pay to</p>
            <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 13.5, fontWeight: 700, color: "#1A1A1B", margin: "0 0 14px" }}>
              Lobster Technologies · Ksh 2,500
            </p>

            {/* PIN label */}
            <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "rgba(26,26,27,0.45)", margin: "0 0 8px" }}>
              Enter PIN to pay Lobster Technologies
            </p>

            {/* PIN dots */}
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
                  style={{
                    width: 12, height: 12, borderRadius: "50%",
                    background: "#006600",
                  }}
                />
              ))}
              {[1, 2].map((_, i) => (
                <div key={i} style={{
                  width: 12, height: 12, borderRadius: "50%",
                  border: "1.5px solid rgba(26,26,27,0.20)",
                }} />
              ))}
            </div>

            {/* Confirm button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1 }}
              style={{
                background: "#006600",
                borderRadius: 9999,
                padding: "8px 0",
                textAlign: "center",
              }}
            >
              <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12, fontWeight: 700, color: "#fff" }}>
                Confirm Payment
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </BentoCard>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PERFORMANCE CARD — Sells, Doesn't Just Chat
   SVG funnel: 3 chat bubbles → converging path → "Paid ✓" pill
   ═══════════════════════════════════════════════════════════════════════════ */
const FUNNEL_BUBBLES = [
  { text: "Is this in stock?",           delay: 0.2 },
  { text: "Do you deliver to Kilimani?", delay: 0.45 },
  { text: "Bei gani? 🇰🇪",               delay: 0.7 },
];

function SalesFunnelCard({ gridInView }: { gridInView: boolean }) {
  return (
    <BentoCard
      delay={0.10}
      gridInView={gridInView}
      style={{ gridArea: "funnel", minHeight: 340 }}
    >
      <div style={{ padding: "28px 22px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Text */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.65rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(26,26,27,0.38)", marginBottom: 8,
          }}>
            Sells, Doesn&rsquo;t Just Chat
          </p>
          <h3 style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)",
            lineHeight: 1.25, letterSpacing: "-0.02em",
            color: "#1A1A1B", margin: "0 0 8px",
          }}>
            Qualifies leads, handles objections, closes sales.
          </h3>
          <p style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.875rem",
            lineHeight: 1.6, color: "rgba(26,26,27,0.52)", margin: 0,
          }}>
            Sofia isn&rsquo;t a FAQ bot. She guides every customer to payment.
          </p>
        </div>

        {/* Funnel macro-visual */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          {/* Incoming bubbles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", alignItems: "flex-start" }}>
            {FUNNEL_BUBBLES.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={gridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: 0.3 + b.delay, duration: 0.4, ease: "easeOut" }}
                style={{
                  background: "#fff",
                  borderRadius: "4px 12px 12px 12px",
                  padding: "5px 10px",
                  boxShadow: "0 1px 6px rgba(26,26,27,0.09)",
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, color: "#1A1A1B" }}>
                  {b.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Funnel SVG */}
          <svg width="100%" height="52" viewBox="0 0 200 52" preserveAspectRatio="xMidYMid meet" style={{ margin: "4px 0" }}>
            <motion.path
              d="M 20 0 L 100 48 L 180 0"
              fill="none"
              stroke="rgba(26,26,27,0.10)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={gridInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            />
            {/* Converging lines */}
            <motion.line x1="20" y1="0" x2="100" y2="48"
              stroke="rgba(230,57,70,0.25)" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={gridInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 0.95, duration: 0.6, ease: "easeOut" }}
            />
            <motion.line x1="180" y1="0" x2="100" y2="48"
              stroke="rgba(230,57,70,0.25)" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={gridInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 1.05, duration: 0.6, ease: "easeOut" }}
            />
          </svg>

          {/* Paid pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={gridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 1.35, type: "spring", stiffness: 200, damping: 16 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 9999,
              padding: "7px 16px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <motion.path
                d="M2.5 7L5.5 10L11.5 4"
                stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={gridInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
              />
            </svg>
            <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12, fontWeight: 700, color: "#16a34a" }}>
              Ksh 4,500 · Paid
            </span>
          </motion.div>
        </div>
      </div>
    </BentoCard>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SMALL CARD — Instant Response (2:01 AM pair)
   ═══════════════════════════════════════════════════════════════════════════ */
function InstantResponseCard({ gridInView }: { gridInView: boolean }) {
  return (
    <BentoCard delay={0.16} gridInView={gridInView} style={{ gridArea: "instant", minHeight: 180 }}>
      <div style={{ padding: "22px 22px 18px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <p style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.65rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(26,26,27,0.38)", marginBottom: 7,
          }}>Instant Response</p>
          <p style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "1.2rem", lineHeight: 1.25, letterSpacing: "-0.02em",
            color: "#1A1A1B", margin: 0,
          }}>
            Replies in seconds — day or night.
          </p>
        </div>

        {/* 2:01 AM macro-visual */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 14 }}>
          {/* Customer bubble */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={gridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ delay: 0.4, duration: 0.35, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div style={{
              background: "#DCF8C6", borderRadius: "12px 3px 12px 12px",
              padding: "5px 9px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, color: "#1A1A1B", margin: "0 0 2px", whiteSpace: "nowrap" }}>
                Still there? 👀
              </p>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9, color: "rgba(26,26,27,0.40)", margin: 0, textAlign: "right" }}>2:01 AM</p>
            </div>
          </motion.div>

          {/* Sofia reply */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={gridInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.65, duration: 0.35, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div style={{
              background: "#fff", borderRadius: "3px 12px 12px 12px",
              padding: "5px 9px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, color: "#1A1A1B", margin: "0 0 2px", whiteSpace: "nowrap" }}>
                Karibu! Yes, still in stock 🧥
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3 }}>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9, color: "rgba(26,26,27,0.40)", margin: 0 }}>2:01 AM</p>
                <span style={{ fontSize: 9, color: "#25D366" }}>✓✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </BentoCard>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SMALL CARD — WhatsApp & Instagram Native
   ═══════════════════════════════════════════════════════════════════════════ */
function NativeAppsCard({ gridInView }: { gridInView: boolean }) {
  return (
    <BentoCard delay={0.22} gridInView={gridInView} style={{ gridArea: "native", minHeight: 180 }}>
      <div style={{ padding: "22px 22px 18px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <p style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.65rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(26,26,27,0.38)", marginBottom: 7,
          }}>Native Platforms</p>
          <p style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "1.2rem", lineHeight: 1.25, letterSpacing: "-0.02em",
            color: "#1A1A1B", margin: 0,
          }}>
            Lives where your customers already are.
          </p>
        </div>

        {/* Platform badges */}
        <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={gridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 16 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "#25D366", borderRadius: 9999,
              padding: "7px 14px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11.5, fontWeight: 600, color: "#fff" }}>WhatsApp</span>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={gridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 16 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              borderRadius: 9999,
              padding: "7px 14px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11.5, fontWeight: 600, color: "#fff" }}>Instagram</span>
          </motion.div>
        </div>
      </div>
    </BentoCard>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SMALL CARD — Human Handoff (AI → human avatar morph on hover)
   ═══════════════════════════════════════════════════════════════════════════ */
function HumanHandoffCard({ gridInView }: { gridInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <BentoCard delay={0.28} gridInView={gridInView} style={{ gridArea: "handoff", minHeight: 180 }}>
      <div
        style={{ padding: "22px 22px 18px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          <p style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.65rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(26,26,27,0.38)", marginBottom: 7,
          }}>Human Handoff</p>
          <p style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "1.2rem", lineHeight: 1.25, letterSpacing: "-0.02em",
            color: "#1A1A1B", margin: 0,
          }}>
            Sofia knows when to step back.
          </p>
        </div>

        {/* Avatar morph macro-visual */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 16, position: "relative", height: 52 }}>
          {/* AI avatar */}
          <motion.div
            animate={{ x: hovered ? -6 : 0, opacity: hovered ? 0.35 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "linear-gradient(135deg, #E63946 0%, #c41c28 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              border: "2px solid rgba(252,252,250,0.9)",
              position: "relative", zIndex: 2,
            }}
          >
            {/* Geometric AI face */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
              <circle cx="8" cy="10" r="1.5" fill="rgba(255,255,255,0.9)" />
              <circle cx="14" cy="10" r="1.5" fill="rgba(255,255,255,0.9)" />
              <path d="M8 14 Q11 16.5 14 14" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>

          {/* Arrow */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.3, x: hovered ? 2 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ padding: "0 6px", zIndex: 3, position: "relative" }}
          >
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5H15M10 1L15 5L10 9" stroke="rgba(26,26,27,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Human avatar */}
          <motion.div
            animate={{ x: hovered ? 6 : 0, opacity: hovered ? 1 : 0.55, scale: hovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "linear-gradient(135deg, #F4A261 0%, #E76F51 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              border: "2px solid rgba(252,252,250,0.9)",
              position: "relative", zIndex: 2,
            }}
          >
            <span style={{ fontFamily: '"Instrument Serif"', fontSize: 17, color: "#fff", fontStyle: "italic", fontWeight: 400 }}>K</span>
          </motion.div>

          {/* "Taking over" label */}
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
            transition={{ duration: 0.3, delay: hovered ? 0.15 : 0 }}
            style={{
              fontFamily: "Satoshi, sans-serif", fontSize: 10.5,
              color: "rgba(26,26,27,0.55)", marginLeft: 10,
              whiteSpace: "nowrap",
            }}
          >
            Taking over…
          </motion.span>
        </div>
      </div>
    </BentoCard>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BOTTOM CARD — You Stay in Control (full-width dashboard bar)
   ═══════════════════════════════════════════════════════════════════════════ */
function AnimatedCounter({ to, suffix = "", inView }: { to: number; suffix?: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) { setVal(0); return; }
    let start: number | null = null;
    const dur = 1100;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <>{val}{suffix}</>;
}

const DASHBOARD_STATS = [
  { label: "Conversations handled", value: 1240, suffix: "", prefix: "" },
  { label: "Response rate",         value: 100,  suffix: "%", prefix: "" },
  { label: "Avg response time",     value: 3,    suffix: "s", prefix: "<" },
  { label: "Revenue attributed",    value: 284,  suffix: "K", prefix: "Ksh " },
];

function ControlDashboardCard({ gridInView }: { gridInView: boolean }) {
  return (
    <BentoCard delay={0.34} gridInView={gridInView} style={{ gridArea: "dashboard" }}>
      <div style={{ padding: "24px 28px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div>
            <p style={{
              fontFamily: "Satoshi, sans-serif", fontSize: "0.65rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(26,26,27,0.38)", margin: "0 0 5px",
            }}>You Stay in Control</p>
            <p style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", lineHeight: 1.25, letterSpacing: "-0.02em",
              color: "#1A1A1B", margin: 0,
            }}>
              Every conversation tracked. Every lead followed up.
            </p>
          </div>
          {/* Live dot */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <motion.span
              animate={gridInView ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }}
            />
            <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "rgba(26,26,27,0.40)" }}>Live</span>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {DASHBOARD_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4, ease: "easeOut" }}
              style={{
                background: "rgba(26,26,27,0.04)",
                border: "1px solid rgba(26,26,27,0.06)",
                borderRadius: 12,
                padding: "12px 14px",
              }}
            >
              <p style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)",
                lineHeight: 1, color: "#1A1A1B",
                margin: "0 0 4px", fontStyle: "italic",
              }}>
                {stat.prefix}<AnimatedCounter to={stat.value} suffix={stat.suffix} inView={gridInView} />
              </p>
              <p style={{
                fontFamily: "Satoshi, sans-serif", fontSize: 10.5,
                color: "rgba(26,26,27,0.40)", margin: 0, lineHeight: 1.3,
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
export default function FeaturesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative"
      style={{ background: "#EEF5F0", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Top hairline */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(to right, transparent, rgba(26,26,27,0.08), transparent)",
      }} />

      <div className="max-w-6xl mx-auto px-8 lg:px-16">

        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.72rem",
            letterSpacing: "0.12em", color: "rgba(26,26,27,0.4)",
            textTransform: "uppercase", marginBottom: "1.25rem",
          }}
        >
          What Sofia Does
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.07, ease: "easeOut" }}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            lineHeight: 1.15, letterSpacing: "-0.03em",
            color: "#1A1A1B", maxWidth: "28rem",
            marginBottom: "3.5rem",
          }}
        >
          Everything your sales conversations{" "}
          <em style={{ color: "#E63946" }}>need.</em>
        </motion.h2>

        {/* ── Bento grid ── */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas: `
              "kenya  kenya  funnel"
              "instant native handoff"
              "dashboard dashboard dashboard"
            `,
            gap: 14,
          }}
        >
          <BuiltForKenyaCard    gridInView={gridInView} />
          <SalesFunnelCard      gridInView={gridInView} />
          <InstantResponseCard  gridInView={gridInView} />
          <NativeAppsCard       gridInView={gridInView} />
          <HumanHandoffCard     gridInView={gridInView} />
          <ControlDashboardCard gridInView={gridInView} />
        </div>
      </div>
    </section>
  );
}
