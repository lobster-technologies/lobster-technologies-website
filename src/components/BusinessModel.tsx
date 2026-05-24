export function BusinessModel() {
  return (
    <section id="serve" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-12 bg-[#EFF6FF] border border-[#BFDBFE]">
          <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1A3A6B]">
            Market & Model
          </span>
        </div>

        <h2
          className="text-[#1D1D1F] font-extrabold leading-[1.06] tracking-[-0.025em] mb-16"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Built for businesses that are ready to grow
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Who We Serve */}
          <div className="bg-[#F5F5F7] rounded-[16px] p-8">
            <div className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#AEAEB2] mb-5">
              Who we serve
            </div>
            <h3 className="text-[22px] font-bold text-[#1D1D1F] tracking-[-0.015em] mb-5">
              Our target market
            </h3>
            <div className="space-y-3 mb-6">
              {[
                "Hospitality and restaurants",
                "E-commerce businesses",
                "Retail and distribution",
                "Service businesses with repeated workflows",
                "Multi-branch businesses",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A3A6B] mt-1.5 flex-shrink-0" />
                  <span className="text-[14px] text-[#6E6E73]">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-[12px] bg-white border border-[#E8E8ED]">
              <p className="text-[13px] text-[#6E6E73] leading-relaxed">
                Ideal clients depend heavily on manual coordination, use spreadsheets or
                messaging apps to run operations, and are ready to invest in systems that
                support growth.
              </p>
            </div>
          </div>

          {/* Business Model */}
          <div className="bg-[#EFF6FF] rounded-[16px] p-8 border border-[#BFDBFE]">
            <div className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#1A3A6B] mb-5">
              Business model
            </div>
            <h3 className="text-[22px] font-bold text-[#1D1D1F] tracking-[-0.015em] mb-5">
              How we earn
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Product Subscriptions",
                  desc: "Lobster RMS, Sofia, and future products as recurring subscriptions.",
                },
                {
                  title: "Implementation & Setup",
                  desc: "Onboarding, configuration, training, and workflow setup.",
                },
                {
                  title: "Strategic Custom Builds",
                  desc: "Tailored solutions for selected high-value operational problems.",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-[12px] bg-white border border-[#BFDBFE]/50">
                  <div className="text-[13px] font-semibold text-[#1A3A6B] mb-1">{item.title}</div>
                  <p className="text-[13px] text-[#6E6E73] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why We Win */}
          <div
            className="rounded-[16px] p-8 text-white"
            style={{
              background: "linear-gradient(145deg, #0D1F47 0%, #1A3A6B 100%)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <div className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#BFDBFE]/60 mb-5">
              Why we win
            </div>
            <h3 className="text-[22px] font-bold text-white tracking-[-0.015em] mb-5">
              Our edge
            </h3>
            <div className="space-y-5">
              {[
                {
                  title: "Operational depth",
                  desc: "Built around real workflows — not generic templates.",
                },
                {
                  title: "Software + AI agents",
                  desc: "Structure and automation working together.",
                },
                {
                  title: "Customer-close",
                  desc: "Live deployments directly inform product decisions.",
                },
                {
                  title: "Technical founder",
                  desc: "Moves fast, builds with depth.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-[13px] font-semibold text-white mb-0.5">{item.title}</div>
                    <p className="text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Looking for */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#BFDBFE]/50 mb-3">
                Looking for
              </div>
              <div className="flex flex-wrap gap-2">
                {["Pilot customers", "Hospitality clients", "E-commerce partners", "Strategic advisors"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[11px] font-medium text-white/60"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
