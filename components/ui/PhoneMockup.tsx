"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  {
    id: 1,
    sender: "customer",
    text: "Niaje, is the Suede Jacket still in stock in Large? And do you deliver to Kilimani?",
    time: "2:41 AM",
  },
  {
    id: 2,
    sender: "sofia",
    text: "Poa sana! Yes, we have 2 left in Large. 🧥 We deliver to Kilimani for Ksh 300. Would you like me to reserve one and send the M-Pesa prompt?",
    time: "2:41 AM",
  },
  {
    id: 3,
    sender: "customer",
    text: "Yes please!",
    time: "2:42 AM",
  },
  {
    id: 4,
    sender: "sofia",
    text: "Perfect. I've sent the M-Pesa STK push to your phone. Let me know once you've entered your PIN! 🎉",
    time: "2:42 AM",
  },
];

// Each message: show typing indicator for sofiamessages, then reveal bubble
// Timeline (seconds): msg1@0.8, msg2 typing@1.5 → bubble@2.3, msg3@3.0, msg4 typing@3.7 → bubble@4.5, mpesa@5.2
const REVEAL: Record<number, number> = { 1: 0.8, 2: 2.3, 3: 3.0, 4: 4.5 };
const TYPING_START: Record<number, number> = { 2: 1.5, 4: 3.7 };
const TYPING_END: Record<number, number> = { 2: 2.3, 4: 4.5 };
const MPESA_DELAY = 5.2;
const CHECK_DELAY = 5.6;

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.85)",
            display: "inline-block",
          }}
        />
      ))}
    </div>
  );
}

function CheckmarkDraw({ delay }: { delay: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{ width: 28, height: 28, background: "#22c55e" }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <motion.path
          d="M2.5 7L5.5 10L11.5 4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay, duration: 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

function ChatBubble({ msg, index }: { msg: typeof messages[0]; index: number }) {
  const isSofia = msg.sender === "sofia";
  const revealAt = REVEAL[msg.id];
  const typingStart = TYPING_START[msg.id];
  const typingEnd = TYPING_END[msg.id];

  const [showTyping, setShowTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (isSofia && typingStart !== undefined) {
      const t1 = setTimeout(() => setShowTyping(true), typingStart * 1000);
      const t2 = setTimeout(() => { setShowTyping(false); setShowBubble(true); }, typingEnd * 1000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      const t = setTimeout(() => setShowBubble(true), revealAt * 1000);
      return () => clearTimeout(t);
    }
  }, [isSofia, typingStart, typingEnd, revealAt]);

  return (
    <div className={`flex ${isSofia ? "justify-start" : "justify-end"}`}>
      {/* Typing indicator */}
      {isSofia && (
        <motion.div
          initial={false}
          animate={{ opacity: showTyping ? 1 : 0, scale: showTyping ? 1 : 0.85, y: showTyping ? 0 : 6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          style={{
            background: "#0a8336",
            borderRadius: "4px 16px 16px 16px",
            boxShadow: "0 2px 12px rgba(37,211,102,0.28)",
            pointerEvents: "none",
            position: showBubble ? "absolute" : "relative",
            visibility: showTyping ? "visible" : "hidden",
          }}
        >
          <TypingDots />
        </motion.div>
      )}

      {/* Message bubble */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.92 }}
        animate={showBubble ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.92 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="max-w-[80%] px-3 py-2 flex flex-col gap-1"
        style={{
          background: isSofia ? "#0a8336" : "#F4F4F1",
          borderRadius: isSofia ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          border: !isSofia ? "1px solid rgba(26,26,27,0.07)" : "none",
          boxShadow: isSofia ? "0 2px 12px rgba(37,211,102,0.28)" : "none",
        }}
      >
        <p
          className="leading-snug"
          style={{ fontSize: 12, color: isSofia ? "#FFFFFF" : "#1A1A1B", fontFamily: "Satoshi, sans-serif" }}
        >
          {msg.text}
        </p>
        <p
          className="self-end"
          style={{ fontSize: 9, color: isSofia ? "rgba(255,255,255,0.6)" : "rgba(26,26,27,0.4)", fontFamily: "Satoshi, sans-serif" }}
        >
          {msg.time}
          {isSofia && <span className="ml-1 opacity-80">✓✓</span>}
        </p>
      </motion.div>
    </div>
  );
}

function AvatarWithPing() {
  return (
    <div className="relative flex-shrink-0" style={{ width: 32, height: 32 }}>
      {/* Avatar circle */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-full text-white font-bold"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #0a8336 100%)",
          fontSize: 13,
          boxShadow: "0 1px 6px rgba(37,211,102,0.35)",
        }}
      >
        S
      </div>
      {/* Active dot */}
      <span
        className="absolute bottom-0 right-0 rounded-full"
        style={{ width: 8, height: 8, background: "#25D366", border: "1.5px solid white" }}
      />
    </div>
  );
}

export default function PhoneMockup() {
  const [showMpesa, setShowMpesa] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowMpesa(true), MPESA_DELAY * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(230,57,70,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Floating phone */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{
          filter:
            "drop-shadow(0 40px 80px rgba(26,26,27,0.22)) drop-shadow(0 8px 24px rgba(26,26,27,0.14))",
        }}
      >
        {/* iPhone frame */}
        <div
          className="relative overflow-hidden"
          style={{
            width: 300,
            height: 620,
            borderRadius: "3rem",
            border: "8px solid #2A2A2B",
            background: "#1A1A1B",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.12) inset, " +
              "0 2px 0 1px rgba(255,255,255,0.06) inset, " +
              "4px 0 0 1px rgba(255,255,255,0.03) inset, " +
              "-4px 0 0 1px rgba(255,255,255,0.03) inset",
          }}
        >
          {/* Screen */}
          <div className="absolute inset-0 bg-white" />

          {/* Glass reflection */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 60%)",
              borderRadius: "calc(3rem - 8px)",
            }}
          />

          {/* Dynamic Island */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 z-20"
            style={{ width: 108, height: 30, background: "#1A1A1B", borderRadius: 20 }}
          />

          {/* Header */}
          <div
            className="absolute top-0 left-0 right-0 z-10"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(26,26,27,0.06)",
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-10 pb-1">
              <span style={{ fontSize: 9, fontWeight: 600, color: "#1A1A1B", fontFamily: "Satoshi, sans-serif" }}>
                2:41
              </span>
              <div className="flex items-center gap-1">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#1A1A1B"/>
                  <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#1A1A1B"/>
                  <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#1A1A1B"/>
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#1A1A1B" opacity="0.25"/>
                </svg>
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path d="M6 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#1A1A1B"/>
                  <path d="M3.5 5.2A3.6 3.6 0 0 1 6 4.2c.96 0 1.83.37 2.5.98" stroke="#1A1A1B" strokeWidth="1.1" strokeLinecap="round"/>
                  <path d="M1.5 3.2A5.9 5.9 0 0 1 6 1.5c1.74 0 3.3.75 4.38 1.94" stroke="#1A1A1B" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  <div style={{ width: 18, height: 9, borderRadius: 2.5, border: "1px solid rgba(26,26,27,0.35)", padding: "1.5px", display: "flex", alignItems: "center" }}>
                    <div style={{ width: "80%", height: "100%", borderRadius: 1.5, background: "#1A1A1B" }} />
                  </div>
                  <div style={{ width: 2, height: 4, borderRadius: 1, background: "rgba(26,26,27,0.35)" }} />
                </div>
              </div>
            </div>

            {/* Contact row */}
            <div className="flex items-center justify-between px-3 pb-2.5">
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" style={{ opacity: 0.6 }}>
                <path d="M7.5 1.5L1.5 7.5L7.5 13.5" stroke="#1A1A1B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex items-center gap-2 flex-1 ml-2">
                <AvatarWithPing />
                <div>
                  <p style={{ fontSize: 11.5, fontWeight: 700, color: "#1A1A1B", fontFamily: "Satoshi, sans-serif", lineHeight: 1.2 }}>
                    Sofia
                  </p>
                  <div className="flex items-center gap-1">
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
                    <p style={{ fontSize: 9.5, color: "#25D366", fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}>
                      Active now
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="15" height="11" viewBox="0 0 20 15" fill="none" style={{ opacity: 0.55 }}>
                  <rect x="0" y="2" width="13" height="11" rx="2.5" stroke="#1A1A1B" strokeWidth="1.6"/>
                  <path d="M13 5.5L19 2.5V12.5L13 9.5V5.5Z" stroke="#1A1A1B" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.55 }}>
                  <path d="M3 1h4l2 5-2.5 1.5a11 11 0 0 0 5 5L13 10l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 1 3a2 2 0 0 1 2-2Z" stroke="#1A1A1B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="4" height="14" viewBox="0 0 4 18" fill="none" style={{ opacity: 0.55 }}>
                  <circle cx="2" cy="2" r="1.8" fill="#1A1A1B"/>
                  <circle cx="2" cy="9" r="1.8" fill="#1A1A1B"/>
                  <circle cx="2" cy="16" r="1.8" fill="#1A1A1B"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div
            className="absolute inset-0 overflow-hidden flex flex-col justify-end"
            style={{ paddingTop: 155, paddingBottom: 52 }}
          >
            <div className="flex flex-col gap-2 px-3 overflow-y-auto">
              {messages.map((msg, i) => (
                <ChatBubble key={msg.id} msg={msg} index={i} />
              ))}

              {/* M-Pesa card */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={showMpesa ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 110, damping: 18 }}
                className="mt-2 mb-1"
              >
                <div
                  className="w-full rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(26,26,27,0.10)",
                    boxShadow: "0 4px 20px rgba(26,26,27,0.10)",
                  }}
                >
                  <div className="flex items-center justify-between px-3 py-2" style={{ background: "#1A1A1B" }}>
                    <span className="text-[10px] font-semibold tracking-wide uppercase" style={{ color: "#FCFCFA", fontFamily: "Satoshi, sans-serif" }}>
                      M-Pesa Payment
                    </span>
                    <span className="text-[10px]" style={{ color: "#22c55e" }}>STK Sent</span>
                  </div>
                  <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: "#FCFCFA" }}>
                    <div>
                      <p className="text-[11px] font-semibold" style={{ color: "#1A1A1B", fontFamily: "Satoshi, sans-serif" }}>
                        Suede Jacket (L)
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: "rgba(26,26,27,0.5)", fontFamily: "Satoshi, sans-serif" }}>
                        Ksh 4,500 + Ksh 300 delivery
                      </p>
                    </div>
                    <CheckmarkDraw delay={CHECK_DELAY} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Input bar */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex items-center gap-2 px-3 py-3"
            style={{
              background: "rgba(255,255,255,0.90)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(26,26,27,0.07)",
            }}
          >
            <div
              className="flex-1 rounded-full px-3 py-1.5"
              style={{ background: "#F4F4F1", fontSize: 11, color: "rgba(26,26,27,0.35)", fontFamily: "Satoshi, sans-serif" }}
            >
              Message
            </div>
            <div
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "#22c55e" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
