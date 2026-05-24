export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #09152E 0%, #0D1F47 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative text-center">
        <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-8 bg-white/5 border border-white/10">
          <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#BFDBFE]">
            Get started
          </span>
        </div>

        <h2
          className="font-extrabold text-white leading-[1.06] tracking-[-0.025em] mb-6 mx-auto max-w-[700px]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Ready to systemize your business?
        </h2>

        <p className="text-[17px] text-white/50 leading-[1.65] mb-12 mx-auto max-w-[520px]" style={{ fontWeight: 300 }}>
          We're looking for pilot customers, hospitality clients, e-commerce design partners,
          and strategic advisors.
        </p>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-[800px] mx-auto">
          {[
            {
              label: "Email",
              value: "hello@lobstertechnologies.co.ke",
              href: "mailto:hello@lobstertechnologies.co.ke",
            },
            {
              label: "Website",
              value: "lobstertechnologies.co.ke",
              href: "#",
            },
            {
              label: "Location",
              value: "Nairobi, Kenya",
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass-card p-5 text-left no-underline block transition-all hover:bg-white/10"
            >
              <div className="text-[11px] font-semibold tracking-[0.04em] uppercase text-white/30 mb-2">
                {item.label}
              </div>
              <div className="text-[13px] text-white/70 font-medium break-all">{item.value}</div>
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@lobstertechnologies.co.ke"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-[980px] text-[#09152E] text-[15px] font-semibold no-underline transition-opacity hover:opacity-90"
          style={{ background: "#FFFFFF" }}
        >
          Start a conversation
        </a>
      </div>
    </section>
  )
}
