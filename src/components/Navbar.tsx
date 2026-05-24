import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Products", href: "#products" },
  { label: "Who We Serve", href: "#serve" },
  { label: "About", href: "#founder" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#09152E]/90 backdrop-blur-[20px] border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-[56px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <img
            src="/lobster_icon.svg"
            alt="Lobster Technologies"
            className="h-8 w-auto"
          />
          <span className="text-[14px] font-bold text-white leading-none">
            LOBSTER <span className="text-[#3B82F6]">TECHNOLOGIES</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-normal text-white/60 hover:text-white transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in touch
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#09152E]/95 backdrop-blur-[20px] border-t border-white/10 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-[14px] text-white/70 hover:text-white transition-colors no-underline border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full">
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
