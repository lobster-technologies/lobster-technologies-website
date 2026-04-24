"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { X, Clock, Moon } from "lucide-react";

/* ─── Pain point data ─────────────────────────────────────────────────────── */
const painPoints = [
  {
    icon: Clock,
    text: "You wake up to 30 WhatsApp messages — and half those customers already bought elsewhere.",
  },
  {
    icon: X,
    text: "You're spending more time answering 'is this available?' than actually running your business.",
  },
  {
    icon: X,
    text: "Your Instagram DMs are a graveyard of unanswered inquiries.",
  },
  {
    icon: X,
    text: "You thought about hiring someone to handle messages — but the cost doesn't make sense yet.",
  },
  {
    icon: Moon,
    midnight: true,
    text: "Customers ask questions at midnight. You're asleep. The sale is gone by morning.",
  },
];

/* ─── Notification bubbles ────────────────────────────────────────────────── */
const notifications = [
  { platform: "WA", message: "Hello?? Anyone there?", time: "11:47 PM", color: "#25D366" },
  { platform: "IG", message: "Do you deliver to Kisumu?", time: "11:52 PM", color: "#E1306C" },
  { platform: "WA", message: "Is this available in Blue?", time: "12:03 AM", color: "#25D366" },
  { platform: "WA", message: "Price?", time: "12:18 AM", color: "#25D366" },
  { platform: "IG", message: "Did you see my DM? 😭", time: "12:41 AM", color: "#E1306C" },
  { platform: "WA", message: "Still there?? I need it today", time: "1:09 AM", color: "#25D366" },
];

/* ─── Noise texture (SVG data URI) ───────────────────────────────────────── */
const noiseSVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

/* ─── Midnight hover wrapper ──────────────────────────────────────────────── */
function MidnightPoint({ text }: { text: string }) {
  return (
    <motion.li
      className="group flex items-start gap-4 cursor-default"
      whileHover="hovered"
    >
      {/* Moon icon */}
      <motion.span
        className="flex-shrink-0 mt-0.5 flex items-center justify-center rounded-full"
        style={{ width: 28, height: 28, background: "rgba(26,26,27,0.06)" }}
        variants={{ hovered: { background: "rgba(100,80,200,0.12)" } }}
        transition={{ duration: 0.25 }}
      >
        <Moon size={13} strokeWidth={1.5} style={{ color: "#9B8EC4" }} />
      </motion.span>

      {/* Text */}
      <motion.p
        className="text-lg leading-relaxed"
        style={{ fontFamily: "Satoshi, sans-serif", color: "rgba(26,26,27,0.65)" }}
        variants={{ hovered: { color: "rgba(26,26,27,0.85)" } }}
        transition={{ duration: 0.25 }}
      >
        {text}
      </motion.p>

      {/* Midnight dim overlay — expands on hover */}
      <motion.span
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "rgba(10,8,30,0)" }}
        variants={{ hovered: { background: "rgba(10,8,30,0.08)" } }}
        transition={{ duration: 0.25 }}
      />
    </motion.li>
  );
}

/* ─── Single notification bubble ─────────────────────────────────────────── */
function NotifBubble({
  notif,
  index,
  inView,
}: {
  notif: (typeof notifications)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 + index * 10, scale: 0.92 }}
      animate={
        inView
          ? { opacity: 1 - index * 0.08, y: index * 35, scale: 1 - index * 0.012 }
          : { opacity: 0, y: 40 + index * 10, scale: 0.92 }
      }
      transition={{
        delay: 0.15 + index * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="absolute w-full"
      style={{ top: 0, zIndex: notifications.length - index }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.52)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(26,26,27,0.08)",
          borderRadius: 16,
          boxShadow: "0 2px 16px rgba(26,26,27,0.07)",
          padding: "10px 14px",
        }}
      >
        <div className="flex items-center gap-2.5">
          {/* Platform badge */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full text-white"
            style={{
              width: 30,
              height: 30,
              background: notif.color,
              fontSize: 9,
              fontWeight: 700,
              fontFamily: "Satoshi, sans-serif",
              opacity: 0.85,
            }}
          >
            {notif.platform}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p
              className="truncate"
              style={{
                fontSize: 12.5,
                fontFamily: "Satoshi, sans-serif",
                color: "rgba(26,26,27,0.6)",
                fontWeight: 500,
              }}
            >
              {notif.message}
            </p>
          </div>

          {/* Time */}
          <span
            style={{
              fontSize: 10,
              fontFamily: "Satoshi, sans-serif",
              color: "rgba(26,26,27,0.35)",
              flexShrink: 0,
            }}
          >
            {notif.time}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function PainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  const stackInView = useInView(stackRef, { once: true, margin: "-80px" });
  const transitionInView = useInView(transitionRef, { once: true, margin: "-60px" });
  const headlineInView = useInView(sectionRef, { once: true, margin: "-100px" });

  /* Scroll-driven background darkening */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const bgLightness = useTransform(scrollYProgress, [0, 1], [252, 238]);
  const bgColor = useTransform(
    bgLightness,
    (v) => `rgb(${v}, ${v}, ${Math.round(v * 0.996)})`
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: noiseSVG,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          opacity: 1,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-28 lg:py-36">

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headlineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                color: "rgba(26,26,27,0.4)",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              The current reality
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headlineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#1A1A1B",
                marginBottom: "2.5rem",
              }}
            >
              Sound familiar?
            </motion.h2>

            {/* Pain points list */}
            <motion.ul
              initial="hidden"
              animate={headlineInView ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } } }}
              className="flex flex-col gap-6"
            >
              {painPoints.map((point, i) => {
                const Icon = point.icon;

                if (point.midnight) {
                  return <MidnightPoint key={i} text={point.text} />;
                }

                return (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 flex items-center justify-center rounded-full"
                      style={{ width: 28, height: 28, background: "rgba(26,26,27,0.06)" }}
                    >
                      <Icon
                        size={13}
                        strokeWidth={1.5}
                        style={{ color: "rgba(26,26,27,0.35)" }}
                      />
                    </span>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        color: "rgba(26,26,27,0.65)",
                      }}
                    >
                      {point.text}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* Right: notification stack */}
          <div ref={stackRef} className="relative lg:pt-12">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={stackInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "rgba(26,26,27,0.3)",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Your inbox, every morning
            </motion.p>

            {/* Stack container — height = enough for all bubbles to pile */}
            <div
              className="relative"
              style={{ height: notifications.length * 30 + 64 }}
            >
              {notifications.map((notif, i) => (
                <NotifBubble
                  key={i}
                  notif={notif}
                  index={i}
                  inView={stackInView}
                />
              ))}
            </div>

            {/* Unread badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={stackInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 14 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(230,57,70,0.08)",
                border: "1px solid rgba(230,57,70,0.16)",
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "#E63946" }}
              />
              <span
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "0.78rem",
                  color: "#E63946",
                  fontWeight: 600,
                }}
              >
                {notifications.length} unreplied inquiries · potential revenue lost
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── Transition line ── */}
        <div ref={transitionRef} className="mt-32 lg:mt-40">
          <div
            className="w-full h-px mx-auto mb-24"
            style={{
              background: "linear-gradient(to right, transparent, rgba(26,26,27,0.10), transparent)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={transitionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
              lineHeight: 1.65,
              color: "#1A1A1B",
              maxWidth: "42rem",
              margin: "0 auto",
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            You&rsquo;re not losing customers because of your products.
            <br />
            <span style={{ color: "rgba(26,26,27,0.5)" }}>
              You&rsquo;re losing them because{" "}
            </span>
            <em>no one was there to answer.</em>
          </motion.p>

          <div
            className="w-24 h-px mx-auto mt-24"
            style={{ background: "rgba(26,26,27,0.12)" }}
          />
        </div>
      </div>
    </motion.section>
  );
}
