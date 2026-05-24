export function Overview() {
  return (
    <section id="overview" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <div className="inline-flex items-center rounded-full px-[14px] py-[5px] mb-12 bg-[#EFF6FF] border border-[#BFDBFE]">
          <span className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1A3A6B]">
            Overview
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Problem */}
          <div>
            <h2
              className="text-[#1D1D1F] font-extrabold leading-[1.06] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              The problem we solve
            </h2>
            <p className="text-[15px] text-[#6E6E73] leading-[1.7] mb-8">
              Growing businesses hit a point where manual operations slow them down. Orders
              tracked in notebooks. Customer conversations buried in WhatsApp. Inventory
              dependent on memory. Reports that arrive too late.
            </p>

            {/* Pain points */}
            <div className="space-y-3">
              {[
                "Orders tracked in notebooks",
                "Customer data buried in WhatsApp",
                "Inventory dependent on memory",
                "Reports that arrive too late",
              ].map((pain) => (
                <div
                  key={pain}
                  className="flex items-center gap-3 p-4 rounded-[16px] bg-[#F5F5F7] border border-[#E8E8ED]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#AEAEB2] flex-shrink-0" />
                  <span className="text-[14px] text-[#6E6E73]">{pain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Belief */}
          <div>
            <h2
              className="text-[#1D1D1F] font-extrabold leading-[1.06] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Systems drive scale
            </h2>
            <p className="text-[15px] text-[#6E6E73] leading-[1.7] mb-8">
              Businesses do not scale through effort alone. They scale through better systems.
              Lobster Technologies builds intelligent business operations — helping businesses
              digitize, automate, and gain real-time visibility.
            </p>

            {/* Transformation */}
            <div className="rounded-[16px] overflow-hidden border border-[#E8E8ED]">
              <div className="p-5 bg-[#F5F5F7]">
                <div className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#AEAEB2] mb-3">
                  From
                </div>
                <p className="text-[14px] text-[#6E6E73] leading-relaxed">
                  Manual, fragmented, owner-dependent operations
                </p>
              </div>
              <div className="h-px bg-[#E8E8ED]" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#1A3A6B]">
                    To
                  </div>
                </div>
                <p className="text-[14px] text-[#1D1D1F] font-medium leading-relaxed">
                  Structured, automated, data-driven operations
                </p>
              </div>
            </div>

            {/* Work intersection */}
            <div className="mt-6 p-5 rounded-[16px] bg-[#EFF6FF] border border-[#BFDBFE]">
              <p className="text-[13px] text-[#1A3A6B] leading-relaxed">
                Our work sits at the intersection of{" "}
                <strong>business management software</strong>,{" "}
                <strong>workflow automation</strong>, and{" "}
                <strong>AI agents</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
