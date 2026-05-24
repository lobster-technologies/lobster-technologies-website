export function Products() {
  return (
    <section id="products" className="dark-section py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Label */}
        <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-6 bg-white/5 border border-white/10">
          <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#BFDBFE]">
            What we build
          </span>
        </div>

        <h2
          className="font-extrabold leading-[1.06] tracking-[-0.025em] mb-4 text-white"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Two product lines, one mission
        </h2>
        <p className="text-[15px] text-white/50 leading-[1.7] mb-16 max-w-[600px]">
          Lobster Technologies operates across Lobster Systems and Lobster Agents — helping businesses
          manage operations and make better decisions from real-time data.
        </p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Lobster Systems */}
          <div className="glass-card p-8">
            <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-6 bg-[#1A3A6B]/40 border border-[#3B82F6]/30">
              <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#BFDBFE]">
                Lobster Systems
              </span>
            </div>

            <h3 className="text-[22px] font-bold text-white mb-2 tracking-[-0.015em]">
              Business management software
            </h3>
            <p className="text-[14px] text-white/50 mb-8 leading-relaxed">
              Structured systems for managing day-to-day operations across hospitality,
              retail, and service businesses.
            </p>

            {/* RMS Product Card */}
            <div
              className="rounded-[16px] p-6 mb-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[16px] font-bold text-white tracking-[-0.01em]">
                    Lobster RMS
                  </div>
                  <div className="text-[12px] text-white/40 mt-0.5">
                    Restaurant Management System
                  </div>
                </div>
                <span
                  className="rounded-full px-[14px] py-[5px] text-[11px] font-semibold tracking-[0.04em] uppercase flex-shrink-0"
                  style={{
                    background: "rgba(26, 158, 106, 0.15)",
                    color: "#1A9E6A",
                    border: "1px solid rgba(26, 158, 106, 0.25)",
                  }}
                >
                  Live
                </span>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed mb-4">
                Helps restaurants manage orders, inventory, staff, and branch performance from
                one system. Reduces manual reconciliation, improves operational visibility,
                and gives owners real-time control.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1A9E6A]" />
                <span className="text-[12px] text-white/40">Live — Wendo Restaurant, Nairobi</span>
              </div>
            </div>

            {/* Custom Builds */}
            <div
              className="rounded-[16px] p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-[14px] font-semibold text-white/80 mb-2">
                Strategic Custom Builds
              </div>
              <p className="text-[13px] text-white/40 leading-relaxed">
                For businesses with high-value workflows that need tailored solutions — custom
                management systems, automation tools, and AI agent prototypes.
              </p>
            </div>
          </div>

          {/* Lobster Agents */}
          <div className="glass-card p-8">
            <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-6 bg-[#2563EB]/20 border border-[#3B82F6]/30">
              <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#BFDBFE]">
                Lobster Agents
              </span>
            </div>

            <h3 className="text-[22px] font-bold text-white mb-2 tracking-[-0.015em]">
              AI agents for workflow automation
            </h3>
            <p className="text-[14px] text-white/50 mb-8 leading-relaxed">
              Intelligent agents that automate repetitive workflows and customer interactions
              across digital channels.
            </p>

            {/* Sofia Product Card */}
            <div
              className="rounded-[16px] p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[16px] font-bold text-white tracking-[-0.01em]">
                    Sofia
                  </div>
                  <div className="text-[12px] text-white/40 mt-0.5">
                    WhatsApp Sales & Customer Engagement Agent
                  </div>
                </div>
                <span
                  className="rounded-full px-[14px] py-[5px] text-[11px] font-semibold tracking-[0.04em] uppercase flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  In dev
                </span>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed mb-5">
                An AI agent for e-commerce and service businesses. Automates customer
                conversations, lead qualification, order coordination, and sales follow-ups
                across WhatsApp and other digital channels.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Customer conversations",
                  "Lead qualification",
                  "Order coordination",
                  "Sales follow-ups",
                ].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-[12px] text-white/40"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#3B82F6] flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-white/30 mt-4 italic">
                Actively being built with early design partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
