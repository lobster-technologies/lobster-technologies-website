"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ─── FAQ data ────────────────────────────────────────────────────────────── */
const faqs = [
  {
    id: "technical",
    span: 2,
    question: "Do I need to be technical to use Sofia?",
    answer:
      "Not at all. If you can use WhatsApp, you can set up Sofia. Our team walks you through everything — no developers, no technical skills required.",
  },
  {
    id: "robotic",
    span: 1,
    question: "Will Sofia sound robotic to my customers?",
    answer:
      "No. Sofia is trained to sound natural and conversational — not like a chatbot. She can match your brand's tone and personality.",
    tag: "Sounds human.",
  },
  {
    id: "unknown",
    span: 1,
    question: "What if a customer asks something Sofia doesn't know?",
    answer:
      "Sofia knows when she doesn't have an answer. She'll either ask the customer to wait while she checks, or hand the conversation over to you directly.",
  },
  {
    id: "mpesa",
    span: 2,
    question: "Does it work with M-Pesa?",
    answer:
      "Yes. Sofia can guide customers through M-Pesa payments and confirm transactions as part of the sales flow — fully integrated, no extra setup.",
    mpesa: true,
  },
  {
    id: "cost",
    span: 1,
    question: "How much does it cost?",
    answer:
      "Plans start from Ksh 5,000/month. Join the waitlist now to lock in founding member pricing before public launch.",
  },
  {
    id: "launch",
    span: 1,
    question: "When does Sofia launch?",
    answer:
      "We're running a private pilot now and targeting a public launch later this year. Waitlist members get access first.",
  },
];

/* ─── M-Pesa badge ────────────────────────────────────────────────────────── */
function MPesaBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(0,150,57,0.08)",
        border: "1px solid rgba(0,150,57,0.18)",
        borderRadius: 9999,
        padding: "3px 10px",
        fontFamily: "Satoshi, sans-serif",
        fontSize: "0.68rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: "#009639",
        marginTop: "0.75rem",
        verticalAlign: "middle",
      }}
    >
      {/* M-Pesa green dot */}
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#009639",
          flexShrink: 0,
        }}
      />
      M-Pesa integrated
    </span>
  );
}

/* ─── Italic serif "Sounds human." tag ───────────────────────────────────── */
function SerifTag({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: '"Instrument Serif", Georgia, serif',
        fontStyle: "italic",
        fontSize: "0.88rem",
        color: "rgba(26,26,27,0.45)",
        marginTop: "0.6rem",
        letterSpacing: "0.01em",
      }}
    >
      {text}
    </span>
  );
}

/* ─── Single FAQ card ─────────────────────────────────────────────────────── */
function FAQCard({
  faq,
  index,
  hoveredIndex,
  onHover,
  inView,
}: {
  faq: (typeof faqs)[0];
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
  inView: boolean;
}) {
  const dimmed = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        gridColumn: faq.span === 2 ? "span 2" : "span 1",
        background: "#F4F4F1",
        borderRadius: 20,
        padding: "2rem",
        cursor: "default",
        opacity: dimmed ? 0.42 : 1,
        transition: "opacity 0.22s ease",
      }}
    >
      <p
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#1A1A1B",
          lineHeight: 1.45,
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {faq.question}
      </p>

      <p
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.9rem",
          color: "rgba(26,26,27,0.62)",
          lineHeight: 1.7,
        }}
      >
        {faq.answer}
      </p>

      {faq.tag && <SerifTag text={faq.tag} />}
      {faq.mpesa && <MPesaBadge />}
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#FCFCFA", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16">

        {/* ── Header ── */}
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
          FAQ
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
            marginBottom: "3.5rem",
          }}
        >
          Questions you&rsquo;re probably asking
        </motion.h2>

        {/* ── Mosaic grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {faqs.map((faq, i) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              index={i}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
