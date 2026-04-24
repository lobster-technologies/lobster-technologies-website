"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Mic, CheckCircle } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   VISUAL STATE 1 — THE SEMANTIC SYNTHESIS
   Scroll-triggered. Resets and replays each time Step 1 enters view.

   Timeline (all durations in ms):
     0        → fragments drift in, staggered
     2 000    → idle drift (fragments float gently)
     3 500    → scan line begins (2 500 ms sweep)
     6 000    → fragments snap away, Knowledge Card materialises
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Fragment definitions ─────────────────────────────────────────────────
   9 fragments across three categories:
   • Business data  (spreadsheet cells, stock, colors)
   • Raw assets     (fabric swatch, voice note)
   • Customer texts (WhatsApp-style inquiry bubbles in EN + SW)
   ──────────────────────────────────────────────────────────────────────── */
const FRAGMENTS = [
  /* ── Business data ── */
  {
    id: "price",
    scatterX: -155, scatterY: -115,
    rotate: -7,
    content: (
      <div style={{ fontFamily: "monospace", fontSize: 11, whiteSpace: "nowrap" }}>
        <span style={{ color: "rgba(26,26,27,0.35)", marginRight: 4 }}>B4</span>
        <span style={{ color: "#1A6B3A", fontWeight: 700 }}>Ksh 2,500</span>
      </div>
    ),
  },
  {
    id: "stock",
    scatterX: 155, scatterY: -95,
    rotate: 5,
    content: (
      <div style={{ fontFamily: "monospace", fontSize: 11, whiteSpace: "nowrap" }}>
        <span style={{ color: "rgba(26,26,27,0.35)", marginRight: 4 }}>C7</span>
        <span style={{ color: "#1A1A1B", fontWeight: 600 }}>Stock: 14 units</span>
      </div>
    ),
  },
  {
    id: "colors",
    scatterX: 160, scatterY: 60,
    rotate: 6,
    content: (
      <div style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, whiteSpace: "nowrap" }}>
        <span style={{ color: "rgba(26,26,27,0.38)" }}>Available in </span>
        <span style={{ color: "#2563EB", fontWeight: 600 }}>Blue</span>
        <span style={{ color: "rgba(26,26,27,0.38)" }}> & </span>
        <span style={{ color: "#16A34A", fontWeight: 600 }}>Green</span>
      </div>
    ),
  },
  /* ── Raw assets ── */
  {
    id: "fabric",
    scatterX: -145, scatterY: -60,
    rotate: -5,
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <div style={{ width: 30, height: 30, borderRadius: 7, overflow: "hidden", flexShrink: 0, display: "flex" }}>
          {["#E63946","#F4A261","#2A9D8F","#E9C46A","#264653"].map((c, ci) => (
            <div key={ci} style={{ flex: 1, background: c }} />
          ))}
        </div>
        <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10, color: "rgba(26,26,27,0.5)", whiteSpace: "nowrap" }}>
          Fabric · 5 colours
        </span>
      </div>
    ),
  },
  {
    id: "voice",
    scatterX: -155, scatterY: 105,
    rotate: -6,
    content: (
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Mic size={11} strokeWidth={1.5} style={{ color: "#E63946", flexShrink: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {[4,9,6,13,7,11,5,8,12,6,4,10].map((h, hi) => (
            <div key={hi} style={{ width: 2, height: h, borderRadius: 2, background: "rgba(26,26,27,0.22)" }} />
          ))}
        </div>
        <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10, color: "rgba(26,26,27,0.38)" }}>0:18</span>
      </div>
    ),
  },
  {
    id: "brand",
    scatterX: 30, scatterY: -155,
    rotate: 3,
    content: (
      <div style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, color: "rgba(26,26,27,0.55)", whiteSpace: "nowrap", fontStyle: "italic" }}>
        "Karibu! We deliver same-day…"
      </div>
    ),
  },
  /* ── Customer inquiry bubbles ── */
  {
    id: "q-westlands",
    scatterX: 140, scatterY: -170,
    rotate: 7,
    content: (
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#ECE5DD", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8 }}>👤</span>
        </div>
        <div style={{
          background: "#fff", borderRadius: "4px 12px 12px 12px",
          padding: "5px 9px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}>
          <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "#1A1A1B", whiteSpace: "nowrap" }}>
            Do you deliver to Westlands?
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "q-size",
    scatterX: -40, scatterY: 165,
    rotate: -4,
    content: (
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#ECE5DD", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8 }}>👤</span>
        </div>
        <div style={{
          background: "#fff", borderRadius: "4px 12px 12px 12px",
          padding: "5px 9px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}>
          <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "#1A1A1B", whiteSpace: "nowrap" }}>
            Is this available in size M?
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "q-swahili",
    scatterX: 155, scatterY: 150,
    rotate: 5,
    content: (
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#ECE5DD", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8 }}>👤</span>
        </div>
        <div style={{
          background: "#fff", borderRadius: "4px 12px 12px 12px",
          padding: "5px 9px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}>
          <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "#1A1A1B", whiteSpace: "nowrap" }}>
            Bei ya hii nguo ni ngapi? 🇰🇪
          </p>
        </div>
      </div>
    ),
  },
];

/* ── Knowledge card rows ─────────────────────────────────────────────────── */
const CARD_ROWS = [
  { label: "Price",    value: "Ksh 2,500",              valueColor: "#1A6B3A" },
  { label: "Stock",    value: "14 units · 5 colours",   valueColor: "#1A1A1B" },
  { label: "Delivery", value: "Same-day Nairobi",        valueColor: "#1A1A1B" },
  { label: "Tone",     value: "Friendly · Swahili-first",valueColor: "#1A1A1B" },
];

type Phase = "idle" | "scattered" | "scanning" | "synthesized";

/* ── Gentle idle drift animation per fragment ──────────────────────────────
   Each fragment gets a unique but deterministic drift offset so they
   float independently without any random() call at render time.          */
const DRIFT = FRAGMENTS.map((_, i) => ({
  x: [0, (i % 2 === 0 ? 1 : -1) * (3 + (i % 3)),  0],
  y: [0, (i % 3 === 0 ? -1 : 1) * (2 + (i % 4)),  0],
  dur: 2 + i * 0.4,
}));

function SemanticSynthesis({ inView }: { inView: boolean }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => timers.current.forEach(clearTimeout);

  useEffect(() => {
    if (inView) {
      /* Reset to idle first so AnimatePresence / motion re-runs from scratch */
      setPhase("idle");
      clearTimers();

      /* Stagger fragments in, then run the full sequence */
      timers.current = [
        setTimeout(() => setPhase("scattered"),    80),   // fragments appear
        setTimeout(() => setPhase("scanning"),    3500),  // scan line starts
        setTimeout(() => setPhase("synthesized"), 6200),  // snap + card
      ];
    } else {
      /* User scrolled away — reset so it replays next time */
      clearTimers();
      setPhase("idle");
    }
    return clearTimers;
  }, [inView]);

  const isIdle         = phase === "idle";
  const isScattered    = phase === "scattered";
  const isScanning     = phase === "scanning";
  const isSynthesized  = phase === "synthesized";
  const fragmentsVisible = isScattered || isScanning;

  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">

      {/* ── Scan line (2.5 s sweep) ── */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            key="scanline"
            className="absolute left-0 right-0 z-20 pointer-events-none"
            style={{
              height: 2,
              background: "linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.12) 15%, rgba(230,57,70,0.65) 50%, rgba(230,57,70,0.12) 85%, transparent 100%)",
              boxShadow: "0 0 16px 4px rgba(230,57,70,0.18)",
            }}
            initial={{ top: "4%" }}
            animate={{ top: "96%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* ── Fragments ── */}
      {FRAGMENTS.map((frag, i) => {
        const drift = DRIFT[i];

        /* Determine animate target */
        const animateTarget = (() => {
          if (isSynthesized) {
            return { x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.6, filter: "blur(4px)" };
          }
          if (isScanning) {
            return {
              x: [frag.scatterX, frag.scatterX + 2.5, frag.scatterX - 2.5, frag.scatterX + 1.5, frag.scatterX],
              y: [frag.scatterY, frag.scatterY - 2, frag.scatterY + 2, frag.scatterY - 1, frag.scatterY],
              opacity: 1,
              rotate: frag.rotate,
              scale: 1,
              filter: "blur(0px)",
            };
          }
          if (fragmentsVisible) {
            return {
              x: [frag.scatterX + drift.x[0], frag.scatterX + drift.x[1], frag.scatterX + drift.x[2]],
              y: [frag.scatterY + drift.y[0], frag.scatterY + drift.y[1], frag.scatterY + drift.y[2]],
              opacity: 1,
              rotate: frag.rotate,
              scale: 1,
              filter: "blur(0px)",
            };
          }
          /* idle — off-screen / invisible */
          return { x: frag.scatterX, y: frag.scatterY, opacity: 0, rotate: frag.rotate, scale: 0.85, filter: "blur(6px)" };
        })();

        const transitionTarget = (() => {
          if (isSynthesized) return { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.9 };
          if (isScanning)    return { duration: 2.2, ease: "easeInOut" as const, repeat: 0 };
          if (fragmentsVisible) return { duration: drift.dur, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.14 };
          return { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const };
        })();

        return (
          <motion.div
            key={frag.id}
            className="absolute rounded-xl px-3 py-2"
            style={{
              background: "rgba(252,252,250,0.9)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(26,26,27,0.09)",
              boxShadow: "0 2px 14px rgba(26,26,27,0.07)",
              zIndex: 10,
            }}
            initial={{ x: frag.scatterX, y: frag.scatterY, opacity: 0, rotate: frag.rotate, scale: 0.85 }}
            animate={animateTarget}
            transition={transitionTarget}
          >
            {frag.content}
          </motion.div>
        );
      })}

      {/* ── Sofia Knowledge Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={isSynthesized ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
        transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.15 }}
        className="absolute rounded-2xl overflow-hidden"
        style={{
          width: 248,
          background: "rgba(252,252,250,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(230,57,70,0.16)",
          boxShadow: "0 0 0 5px rgba(230,57,70,0.05), 0 12px 48px rgba(26,26,27,0.11)",
          zIndex: 15,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2.5 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(26,26,27,0.06)" }}>
          <motion.div
            animate={isSynthesized
              ? { boxShadow: ["0 0 0 0 rgba(230,57,70,0.45)", "0 0 0 7px rgba(230,57,70,0)", "0 0 0 0 rgba(230,57,70,0)"] }
              : {}}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#E63946" }}
          />
          <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12, fontWeight: 600, color: "#1A1A1B" }}>
            Sofia Knowledge Base
          </span>
          <CheckCircle size={12} strokeWidth={2} style={{ color: "#22c55e", marginLeft: "auto", flexShrink: 0 }} />
        </div>

        {/* Rows */}
        <div className="px-4 py-2">
          {CARD_ROWS.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isSynthesized ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.22 + i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="flex items-center justify-between py-2"
              style={{ borderBottom: i < CARD_ROWS.length - 1 ? "1px solid rgba(26,26,27,0.05)" : "none" }}
            >
              <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, color: "rgba(26,26,27,0.38)" }}>
                {row.label}
              </span>
              <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, fontWeight: 600, color: row.valueColor }}>
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer pulse */}
        <motion.div
          animate={isSynthesized ? { opacity: [0.45, 1, 0.45] } : { opacity: 0 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="mx-4 mb-3 mt-1 rounded-lg px-3 py-2 flex items-center justify-center"
          style={{ background: "rgba(230,57,70,0.055)", border: "1px solid rgba(230,57,70,0.10)" }}
        >
          <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10.5, color: "#E63946", fontWeight: 500, letterSpacing: "0.04em" }}>
            Sofia is active & aware
          </span>
        </motion.div>
      </motion.div>

      {/* ── Status label ── */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {(isIdle || isScattered) && (
            <motion.span
              key="label-raw"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: "Satoshi, sans-serif", fontSize: "0.7rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,27,0.28)" }}
            >
              Raw business data
            </motion.span>
          )}
          {isScanning && (
            <motion.span
              key="label-scanning"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: "Satoshi, sans-serif", fontSize: "0.7rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(230,57,70,0.55)" }}
            >
              <motion.span animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                Synthesising…
              </motion.span>
            </motion.span>
          )}
          {isSynthesized && (
            <motion.span
              key="label-done"
              initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ fontFamily: "Satoshi, sans-serif", fontSize: "0.7rem", letterSpacing: "0.10em", textTransform: "uppercase", color: "#22c55e" }}
            >
              ✓ Ready in under 10 minutes
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   VISUAL STATE 2 — THE INTERACTION
   iPhone 16 Pro shell → WhatsApp sales loop → M-Pesa STK push overlay
   ═══════════════════════════════════════════════════════════════════════════ */

const CHAT = [
  {
    from: "customer",
    text: "Available in Blue? Deliver to Westlands?",
    time: "2:14 PM",
    delay: 0.3,
  },
  {
    from: "sofia",
    text: "Yes! 1 left in Blue 🧥\nDelivery to Westlands is Ksh 200.\nSend M-Pesa prompt?",
    time: "2:14 PM",
    delay: 1.1,
  },
  {
    from: "customer",
    text: "Yes please! 🙏",
    time: "2:15 PM",
    delay: 2.1,
  },
];

function InteractionVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">

      {/* Radial glow — matches hero */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(230,57,70,0.07) 0%, transparent 70%)",
      }} />

      {/* ── iPhone frame — same spec as hero PhoneMockup ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          filter: "drop-shadow(0 32px 64px rgba(26,26,27,0.22)) drop-shadow(0 6px 20px rgba(26,26,27,0.14))",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 280,
            height: 580,
            borderRadius: "2.8rem",
            border: "8px solid #2A2A2B",
            background: "#1A1A1B",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.12) inset, " +
              "0 2px 0 1px rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Screen white base */}
          <div className="absolute inset-0" style={{ background: "#ECE5DD" }} />

          {/* Glass reflection */}
          <div className="absolute inset-0 pointer-events-none z-30" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 40%, transparent 60%)",
            borderRadius: "calc(2.8rem - 8px)",
          }} />

          {/* Dynamic Island */}
          <div className="absolute z-20" style={{
            top: 10, left: "50%", transform: "translateX(-50%)",
            width: 100, height: 28, background: "#1A1A1B", borderRadius: 20,
          }} />

          {/* ── WhatsApp header ── */}
          <div className="absolute z-10" style={{
            top: 0, left: 0, right: 0,
            background: "rgba(7,94,84,0.97)",
            backdropFilter: "blur(10px)",
          }}>
            {/* Spacer for Dynamic Island */}
            <div style={{ height: 48 }} />
            {/* Contact row */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px 10px" }}>
              {/* Avatar */}
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366 0%, #0a8336 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, position: "relative",
              }}>
                <span style={{ fontFamily: '"Instrument Serif"', fontSize: 15, color: "#fff", fontStyle: "italic", fontWeight: 400 }}>S</span>
                <span style={{
                  position: "absolute", bottom: 0, right: 0,
                  width: 9, height: 9, borderRadius: "50%",
                  background: "#25D366", border: "1.5px solid #075E54",
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.2 }}>Sofia</p>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.65)", margin: 0 }}>online · typing…</p>
              </div>
            </div>
          </div>

          {/* ── Chat thread ── */}
          <div style={{
            position: "absolute", top: 116, left: 0, right: 0, bottom: 54,
            display: "flex", flexDirection: "column",
            gap: 8, padding: "12px 12px 8px",
            overflowY: "hidden",
          }}>
            {CHAT.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.from === "customer" ? -14 : 14, y: 6 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: msg.delay, duration: 0.45, ease: "easeOut" }}
                style={{ display: "flex", justifyContent: msg.from === "sofia" ? "flex-start" : "flex-end" }}
              >
                <div style={{
                  background: msg.from === "sofia" ? "#fff" : "#DCF8C6",
                  borderRadius: msg.from === "sofia" ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
                  padding: "7px 11px",
                  maxWidth: "80%",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.09)",
                }}>
                  <p style={{
                    fontFamily: "Satoshi, sans-serif", fontSize: 12,
                    color: "#1A1A1B", lineHeight: 1.5,
                    whiteSpace: "pre-line", margin: 0,
                  }}>
                    {msg.text}
                  </p>
                  <p style={{
                    fontFamily: "Satoshi, sans-serif", fontSize: 9.5,
                    color: "rgba(26,26,27,0.38)", marginTop: 3,
                    textAlign: "right",
                  }}>
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Input bar ── */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 12px 10px",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(26,26,27,0.07)",
          }}>
            <div style={{
              flex: 1, borderRadius: 9999, padding: "6px 12px",
              background: "#F4F4F1",
              fontSize: 11.5, color: "rgba(26,26,27,0.32)", fontFamily: "Satoshi, sans-serif",
            }}>
              Message
            </div>
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: "#22c55e",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ── M-Pesa STK bottom sheet — slides up from inside the screen ── */}
          <motion.div
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 3.0, type: "spring", stiffness: 260, damping: 28, mass: 0.9 }}
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              zIndex: 20,
              background: "#fff",
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22,
              boxShadow: "0 -6px 40px rgba(26,26,27,0.22)",
              overflow: "hidden",
            }}
          >
            {/* Handle pill */}
            <div style={{ display: "flex", justifyContent: "center", paddingTop: 10, paddingBottom: 4 }}>
              <div style={{ width: 36, height: 4, borderRadius: 9999, background: "rgba(26,26,27,0.12)" }} />
            </div>

            {/* M-Pesa green header */}
            <div style={{
              display: "flex", alignItems: "center",
              padding: "10px 16px 10px",
              background: "#006600",
            }}>
              <div>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.06em", margin: 0 }}>
                  M-PESA
                </p>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9.5, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  Payment Request
                </p>
              </div>
              <div style={{
                marginLeft: "auto", width: 26, height: 26, borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 12 }}>🇰🇪</span>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "12px 16px 16px" }}>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 11, color: "rgba(26,26,27,0.45)", margin: "0 0 3px" }}>
                Pay to
              </p>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 15, fontWeight: 700, color: "#1A1A1B", margin: "0 0 10px" }}>
                Your Store · Ksh 1,850
              </p>

              {/* Payment confirmed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.9, type: "spring", stiffness: 220, damping: 16 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  borderRadius: 12, padding: "8px 12px",
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.20)",
                }}
              >
                <CheckCircle size={15} strokeWidth={2} style={{ color: "#22c55e", flexShrink: 0 }} />
                <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12.5, fontWeight: 600, color: "#16a34a" }}>
                  Payment Confirmed
                </span>
                <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 10, color: "rgba(26,26,27,0.35)", marginLeft: "auto" }}>
                  2:15 PM
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>{/* end phone inner */}
      </motion.div>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   VISUAL STATE 3 — THE OUTCOME
   Dashboard card: response-rate gauge + sales counter + handoff notification
   ═══════════════════════════════════════════════════════════════════════════ */

/* SVG arc helper — returns a d="..." string for a circular arc */
function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));
  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

/* Animated counter that ticks up from 0 to target */
function Counter({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) { setValue(0); return; }
    let start: number | null = null;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      /* ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return <>{value}{suffix}</>;
}

function OutcomeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-35% 0px -35% 0px" });

  /* Gauge: arc from -210° to +30° = 240° sweep, representing 100% */
  const R = 52;
  const CX = 68;
  const CY = 68;
  const START = -210;
  const FULL_SWEEP = 240;
  const circumference = (FULL_SWEEP / 360) * 2 * Math.PI * R;

  const STAT_ROWS = [
    { label: "Response time",   value: "< 3 sec",  sub: "avg across all chats" },
    { label: "Sales today",     counter: true, target: 14, suffix: " orders" },
    { label: "Conversations",   counter: true, target: 127, suffix: " handled" },
  ];

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full h-full">

      {/* Soft mint radial bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(238,245,240,0.80) 0%, transparent 70%)",
      }} />

      {/* ── Main card ── */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.94 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.94 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
        style={{
          width: 300,
          background: "rgba(252,252,250,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(26,26,27,0.08)",
          borderRadius: 24,
          boxShadow: "0 8px 48px rgba(26,26,27,0.10), 0 2px 8px rgba(26,26,27,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Card header */}
        <div style={{
          padding: "14px 18px 12px",
          borderBottom: "1px solid rgba(26,26,27,0.06)",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <motion.span
            animate={inView ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22c55e", display: "inline-block", flexShrink: 0,
            }}
          />
          <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12, fontWeight: 600, color: "#1A1A1B" }}>
            Sofia — Live Dashboard
          </span>
          <span style={{
            marginLeft: "auto",
            fontFamily: "Satoshi, sans-serif", fontSize: 10,
            color: "rgba(26,26,27,0.35)",
          }}>Today</span>
        </div>

        {/* Gauge + stats row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px 14px" }}>

          {/* ── Circular gauge ── */}
          <div style={{ position: "relative", width: CX * 2, height: CY * 2, flexShrink: 0 }}>
            <svg width={CX * 2} height={CY * 2}>
              {/* Track */}
              <path
                d={describeArc(CX, CY, R, START, START + FULL_SWEEP)}
                fill="none"
                stroke="rgba(26,26,27,0.07)"
                strokeWidth={8}
                strokeLinecap="round"
              />
              {/* Animated fill */}
              <motion.path
                d={describeArc(CX, CY, R, START, START + FULL_SWEEP)}
                fill="none"
                stroke="#E63946"
                strokeWidth={8}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: circumference }}
                transition={{ duration: 1.6, delay: 0.35, ease: "easeOut" }}
              />
            </svg>
            {/* Centre label */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 22, color: "#1A1A1B", lineHeight: 1, fontStyle: "italic",
              }}>
                {inView ? "100%" : "0%"}
              </span>
              <span style={{
                fontFamily: "Satoshi, sans-serif", fontSize: 9,
                color: "rgba(26,26,27,0.40)", marginTop: 2, textAlign: "center", lineHeight: 1.3,
              }}>
                Response<br />Rate
              </span>
            </div>
          </div>

          {/* Stat rows */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            {STAT_ROWS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.45, ease: "easeOut" }}
              >
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9.5, color: "rgba(26,26,27,0.38)", margin: "0 0 1px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {row.label}
                </p>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1A1B", margin: 0, lineHeight: 1.2 }}>
                  {row.counter
                    ? <Counter target={row.target!} suffix={row.suffix} inView={inView} />
                    : row.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(26,26,27,0.06)", margin: "0 18px" }} />

        {/* ── Human Handoff notification ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.75, type: "spring", stiffness: 140, damping: 18 }}
          style={{ padding: "12px 18px 16px" }}
        >
          <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(26,26,27,0.35)", margin: "0 0 8px" }}>
            Needs your attention
          </p>

          <div style={{
            borderRadius: 14,
            background: "rgba(230,57,70,0.04)",
            border: "1px solid rgba(230,57,70,0.14)",
            padding: "10px 12px",
            display: "flex", flexDirection: "column", gap: 8,
          }}>
            {/* Pulse dot + label */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <motion.span
                animate={inView ? { opacity: [1, 0.3, 1], scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#E63946", display: "inline-block",
                  flexShrink: 0, marginTop: 3,
                }}
              />
              <p style={{
                fontFamily: "Satoshi, sans-serif", fontSize: 11.5,
                color: "#1A1A1B", lineHeight: 1.45, margin: 0,
              }}>
                <span style={{ fontWeight: 600 }}>Custom Inquiry: </span>
                <span style={{ color: "rgba(26,26,27,0.65)" }}>"Can I get a bulk discount for 10 items?"</span>
              </p>
            </div>

            {/* Tap to take over CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              style={{
                width: "100%",
                background: "#E63946",
                color: "#FCFCFA",
                border: "none",
                borderRadius: 9999,
                padding: "7px 0",
                fontFamily: "Satoshi, sans-serif",
                fontSize: 11.5,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Tap to take over →
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   VISUAL STAGE — AnimatePresence wrapper
   ═══════════════════════════════════════════════════════════════════════════ */
function VisualStage({ activeStep, step1InView }: { activeStep: number; step1InView: boolean }) {
  const visuals: Record<number, React.ReactNode> = {
    1: <SemanticSynthesis inView={step1InView} />,
    2: <InteractionVisual />,
    3: <OutcomeVisual />,
  };

  return (
    <div className="relative w-full h-full">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(238,245,240,0.75) 0%, transparent 70%)",
      }} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {visuals[activeStep]}
        </motion.div>
      </AnimatePresence>

      {/* Step counter */}
      <div className="absolute bottom-6 right-6 flex items-center gap-1.5 rounded-full px-3 py-1.5"
        style={{ background: "rgba(26,26,27,0.05)", border: "1px solid rgba(26,26,27,0.07)" }}>
        <motion.span
          key={activeStep}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: '"Instrument Serif"', fontSize: "0.9rem", color: "#E63946", fontStyle: "italic" }}
        >
          {activeStep}
        </motion.span>
        <span style={{ fontFamily: "Satoshi, sans-serif", fontSize: "0.72rem", color: "rgba(26,26,27,0.35)" }}>/ 3</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   LEFT COLUMN — text steps
   ═══════════════════════════════════════════════════════════════════════════ */
const steps = [
  {
    number: "1",
    headline: "Connect Sofia to your WhatsApp & Instagram.",
    body: "Takes less than 10 minutes. No technical skills needed. Sofia learns your products and your brand voice from a simple setup process.",
  },
  {
    number: "2",
    headline: "Sofia handles your customers — you focus on your business.",
    body: "She answers product questions, sends prices and photos, handles objections, and guides buyers all the way to payment — including M-Pesa and pay-on-delivery.",
  },
  {
    number: "3",
    headline: "More sales. Less stress. Zero missed conversations.",
    body: "Every inquiry gets a response. Every lead gets followed up. When a conversation needs your personal touch, Sofia hands it over to you seamlessly.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   STEP TEXT BLOCK — individual scrolling step with inView detection
   ═══════════════════════════════════════════════════════════════════════════ */
function StepBlock({
  step,
  index,
  isActive,
  onEnter,
}: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onEnter: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (inView) onEnter(index + 1);
  }, [inView, index, onEnter]);

  return (
    <div ref={ref} className="relative h-screen flex items-center">
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.28 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pr-8 lg:pr-20"
      >
        {/* Faint large numeral */}
        <div aria-hidden style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "clamp(6rem, 12vw, 9rem)",
          lineHeight: 1, letterSpacing: "-0.05em",
          color: "rgba(26,26,27,0.04)",
          userSelect: "none", marginBottom: "-2rem",
        }}>
          {step.number}
        </div>

        {/* Headline */}
        <h3 style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)",
          lineHeight: 1.2, letterSpacing: "-0.02em",
          color: "#1A1A1B", marginBottom: "1rem",
          maxWidth: "26rem",
        }}>
          {step.headline}
        </h3>

        {/* Body */}
        <p style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: "1.0625rem", lineHeight: 1.72,
          color: "rgba(26,26,27,0.58)", maxWidth: "26rem",
        }}>
          {step.body}
        </p>

        {/* Progress dots */}
        <div className="flex gap-2 mt-8">
          {steps.map((_, j) => (
            <motion.div
              key={j}
              animate={{
                background: j === index && isActive ? "#E63946" : "rgba(26,26,27,0.14)",
                width: j === index && isActive ? 20 : 6,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ height: 6, borderRadius: 9999 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(1);

  /* Track step 1 visibility to drive SemanticSynthesis scroll trigger */
  const step1Ref = useRef<HTMLDivElement>(null);
  const step1InView = useInView(step1Ref, { margin: "-35% 0px -35% 0px" });

  const handleEnter = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return (
    <section className="relative" style={{ background: "#FCFCFA" }}>

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(to right, transparent, rgba(26,26,27,0.08), transparent)",
      }} />

      {/* ── Intro (above scroll zone) ── */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-28 lg:pt-36 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "0.72rem",
            letterSpacing: "0.12em", color: "rgba(26,26,27,0.4)",
            textTransform: "uppercase", marginBottom: "1.25rem",
          }}
        >
          The Solution
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            lineHeight: 1.15, letterSpacing: "-0.03em",
            color: "#1A1A1B", maxWidth: "26rem",
            marginBottom: "1.5rem",
          }}
        >
          Meet Sofia —{" "}
          <em style={{ color: "#E63946" }}>Your AI Sales Agent</em>{" "}
          on WhatsApp & Instagram.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
          style={{
            fontFamily: "Satoshi, sans-serif", fontSize: "1.125rem",
            lineHeight: 1.7, color: "rgba(26,26,27,0.55)",
            maxWidth: "40rem",
          }}
        >
          Sofia handles your customer conversations the way a great salesperson would — except she&rsquo;s available 24/7, responds in seconds, and speaks English and Swahili.
        </motion.p>
      </div>

      {/* ── Sticky scroll zone ── */}
      {/*
        Layout: two columns side by side.
        Left  — normal flow, 3 × h-screen step blocks that scroll past.
        Right — sticky top-0 h-screen, stays fixed while left scrolls.
      */}
      <div className="relative max-w-6xl mx-auto px-8 lg:px-16 flex items-start gap-0">

        {/* Left: scrolling text column */}
        <div className="w-full lg:w-1/2">
          {steps.map((step, i) => (
            /* Wrap step 1 with a ref so we can track its visibility for SemanticSynthesis */
            i === 0 ? (
              <div key={i} ref={step1Ref}>
                <StepBlock
                  step={step}
                  index={i}
                  isActive={activeStep === i + 1}
                  onEnter={handleEnter}
                />
              </div>
            ) : (
              <StepBlock
                key={i}
                step={step}
                index={i}
                isActive={activeStep === i + 1}
                onEnter={handleEnter}
              />
            )
          ))}
        </div>

        {/* Right: truly sticky visual stage */}
        <div
          className="hidden lg:block w-1/2"
          style={{ position: "sticky", top: 0, height: "100vh", alignSelf: "flex-start" }}
        >
          {/* Inner flex wrapper — centres the canvas vertically within the viewport */}
          <div className="flex items-center justify-center w-full h-full py-12 px-6">
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                height: "100%",
                maxHeight: 660,
                background: "rgba(252,252,250,0.9)",
                border: "1px solid rgba(26,26,27,0.07)",
                boxShadow: "0 4px 48px rgba(26,26,27,0.07)",
              }}
            >
              <VisualStage activeStep={activeStep} step1InView={step1InView} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="h-px" style={{
        background: "linear-gradient(to right, transparent, rgba(26,26,27,0.08), transparent)",
      }} />
    </section>
  );
}
