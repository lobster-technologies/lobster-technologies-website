export function Founder() {
  return (
    <section id="founder" className="bg-[#F5F5F7] py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-12 bg-[#EFF6FF] border border-[#BFDBFE]">
          <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1A3A6B]">
            The team
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{
                boxShadow: "0 0 0 1px rgba(26,58,107,0.1), 0 32px 64px rgba(9,21,46,0.15)",
                aspectRatio: "4/5",
                background: "linear-gradient(145deg, #0D1F47 0%, #1A3A6B 60%, #09152E 100%)",
              }}
            >
              {/* Lobster watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img src="/lobster_icon.svg" alt="" className="w-48 h-48" />
              </div>
              {/* Profile placeholder */}
              <img
                src="/Lobster_owner_.jpeg"
                alt="Edwinfred Kamau"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Glassmorphism overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(9,21,46,0.9) 0%, transparent 100%)",
                }}
              >
                <div className="text-white font-bold text-[18px] tracking-[-0.01em]">
                  Edwinfred Kamau
                </div>
                <div className="text-white/60 text-[13px] mt-0.5">
                  Founder & CEO
                </div>
              </div>
            </div>

            {/* Decorative orb */}
            <div
              className="absolute -z-10 rounded-full blur-[60px] opacity-30"
              style={{
                width: 300,
                height: 300,
                top: "10%",
                left: "-10%",
                background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <h2
              className="text-[#1D1D1F] font-extrabold leading-[1.06] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Building the AI workforce for African business
            </h2>

            <p className="text-[15px] text-[#6E6E73] leading-[1.7] mb-6" style={{ fontWeight: 300 }}>
              Lobster Technologies is led by a technical founder with deep operational insight
              into how African businesses run — and where they break. Every product we build
              is grounded in real problems observed in the field.
            </p>
            <p className="text-[15px] text-[#6E6E73] leading-[1.7] mb-8" style={{ fontWeight: 300 }}>
              We move fast, build with depth, and stay close to our customers. Our live
              deployment at Wendo Restaurant in Nairobi informs every product decision we make.
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {[
                { label: "Role", value: "Founder & CEO, Lobster Technologies" },
                { label: "Location", value: "Nairobi, Kenya" },
                { label: "Focus", value: "Business management software + AI agents" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 py-3 border-b border-[#E8E8ED]">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#AEAEB2] w-20 flex-shrink-0">
                    {item.label}
                  </div>
                  <div className="text-[14px] text-[#1D1D1F]">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <a
              href="mailto:hello@lobstertechnologies.co.ke"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-[980px] text-white text-[14px] font-medium no-underline transition-opacity hover:opacity-88"
              style={{
                background: "linear-gradient(135deg, #0D1F47 0%, #1A3A6B 100%)",
              }}
            >
              hello@lobstertechnologies.co.ke
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
