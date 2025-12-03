"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import FlexisLogo from "./flexis-logo"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Header animation on load
    gsap.from(".header-content", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0b0f]/90 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="header-content flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FlexisLogo className="w-8 h-8" />
          <span className="text-white font-medium tracking-[0.3em] text-sm">TANDA EXPRESS</span>
        </div>

        {/* Center Menu */}
        <button
          className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(true)}
        >
          <span className="text-sm tracking-widest">MENU</span>
          <span className="w-8 h-[1px] bg-white/50"></span>
        </button>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm text-white/70 hover:text-white transition-colors">EN</button>
          <a href="/track" className="flex items-center gap-2 text-sm text-white hover:text-[#00ff88] transition-colors">
            TRACK PARCEL
            <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a0b0f] z-40 flex items-center justify-center">
          <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
            <X size={32} />
          </button>
          <nav className="text-center">
            <ul className="space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Track Package", href: "/track" },
                { name: "Pricing", href: "/pricing" },
                { name: "Locations", href: "/locations" },
                { name: "About", href: "/about" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-4xl md:text-6xl font-light text-white hover:text-[#00ff88] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
