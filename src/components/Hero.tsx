import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full blur-[80px] opacity-30 animate-pulse"
          style={{
            width: 500,
            height: 500,
            top: "-10%",
            left: "30%",
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            animationDuration: "6s",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-20"
          style={{
            width: 400,
            height: 400,
            bottom: "5%",
            right: "-5%",
            background: "radial-gradient(circle, #1A3A6B 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[60px] opacity-15"
          style={{
            width: 300,
            height: 300,
            top: "40%",
            left: "-5%",
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 pt-40 pb-32">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(420px,600px)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[760px]">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 glass-blue">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[11px] font-600 tracking-[0.04em] uppercase text-[#BFDBFE]">
                Nairobi, Kenya
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white leading-[1.03] tracking-[-0.028em] font-extrabold mb-6"
              style={{ fontSize: "clamp(44px, 6vw, 72px)" }}
            >
              Intelligent systems for{" "}
              <span
                className="relative"
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #BFDBFE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                growing businesses
              </span>
            </h1>

            {/* Sub-copy */}
            <p
              className="text-white/60 font-light leading-[1.65] mb-10 max-w-[580px]"
              style={{ fontSize: "19px", fontWeight: 300 }}
            >
              We help businesses digitize operations, automate repetitive workflows,
              and gain real-time visibility into how their business is performing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="white"
                size="lg"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                See what we build
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Work with us
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/lobster dark theme.png"
              alt="Lobster Technologies"
              className="w-full max-w-[460px] lg:max-w-[600px] object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        {/* Glassmorphism stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-[700px]">
          {[
            { num: "2", label: "Product lines", sub: "Systems & Agents" },
            { num: "1", label: "Live deployment", sub: "Wendo Restaurant, Nairobi" },
            { num: "∞", label: "Automation potential", sub: "For growing businesses" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-5"
            >
              <div
                className="text-3xl font-extrabold mb-1 leading-none"
                style={{
                  background: "linear-gradient(135deg, #BFDBFE 0%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.num}
              </div>
              <div className="text-[13px] font-semibold text-white/80 mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-white/40">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  )
}
