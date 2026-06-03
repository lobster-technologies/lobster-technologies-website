"use client";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mergedStyle = {
    ...(style || {}),
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={Object.keys(mergedStyle).length > 0 ? mergedStyle : undefined}
    >
      {children}
    </Tag>
  );
}
