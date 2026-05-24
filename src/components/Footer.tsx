export function Footer() {
  return (
    <footer
      style={{
        background: "#09152E",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "5rem 3rem 3rem",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/lobster_icon.svg" alt="Lobster Technologies" className="h-7 w-auto" />
              <span className="text-[14px] font-bold text-white">
                LOBSTER <span className="text-[#3B82F6]">TECHNOLOGIES</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
              Intelligent systems for growing businesses.
              <br />
              Nairobi, Kenya
            </p>
            <a
              href="mailto:hello@lobstertechnologies.co.ke"
              className="text-[13px] no-underline transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              hello@lobstertechnologies.co.ke
            </a>
          </div>

          {/* Products */}
          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-4"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              Products
            </div>
            <div className="space-y-2.5">
              {["Lobster RMS", "Sofia Agent", "Custom Builds"].map((link) => (
                <div key={link}>
                  <a
                    href="#products"
                    className="text-[13px] no-underline transition-colors block"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-4"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              Company
            </div>
            <div className="space-y-2.5">
              {[
                { label: "Overview", href: "#overview" },
                { label: "Who We Serve", href: "#serve" },
                { label: "About", href: "#founder" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] no-underline transition-colors block"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.18)" }}>
            © {new Date().getFullYear()} Lobster Technologies. All rights reserved.
          </span>
          <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.18)" }}>
            lobstertechnologies.co.ke · Nairobi, Kenya
          </span>
        </div>
      </div>
    </footer>
  )
}
