"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: "FedEx", color: "#4D148C" },
  { name: "DHL", color: "#FFCC00" },
  { name: "UPS", color: "#351C15" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Maersk", color: "#00243D" },
  { name: "DB Schenker", color: "#EC0016" },
  { name: "Kuehne+Nagel", color: "#004B93" },
  { name: "XPO", color: "#00205B" },
]

// SVG Logo components for each partner
function FedExLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <text x="10" y="45" fontFamily="Arial Black, sans-serif" fontSize="42" fontWeight="900">
        <tspan fill="#4D148C">Fed</tspan>
        <tspan fill="#FF6600">Ex</tspan>
      </text>
    </svg>
  )
}

function DHLLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <rect x="5" y="10" width="190" height="40" fill="#FFCC00" rx="4" />
      <text x="30" y="42" fontFamily="Arial Black, sans-serif" fontSize="36" fontWeight="900" fill="#D40511">
        DHL
      </text>
    </svg>
  )
}

function UPSLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <rect x="50" y="5" width="100" height="50" fill="#351C15" rx="8" />
      <text x="65" y="40" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900" fill="#FFB500">
        UPS
      </text>
    </svg>
  )
}

function AmazonLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <text x="20" y="40" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="700" fill="white">
        amazon
      </text>
      <path d="M20 48 Q100 60 180 48" stroke="#FF9900" strokeWidth="4" fill="none" />
    </svg>
  )
}

function MaerskLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <text x="20" y="40" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#42A5F5">
        MAERSK
      </text>
      <polygon points="10,30 20,20 20,40" fill="#00A3E0" />
    </svg>
  )
}

function DBSchenkerLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <rect x="5" y="15" width="30" height="30" fill="#EC0016" />
      <text x="8" y="38" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">
        DB
      </text>
      <text x="45" y="40" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="white">
        Schenker
      </text>
    </svg>
  )
}

function KuehneNagelLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#42A5F5">
        KUEHNE+NAGEL
      </text>
    </svg>
  )
}

function XPOLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <text x="50" y="45" fontFamily="Arial Black, sans-serif" fontSize="42" fontWeight="900" fill="#5C6BC0">
        XPO
      </text>
    </svg>
  )
}

const logoComponents: Record<string, React.FC<{ className?: string }>> = {
  FedEx: FedExLogo,
  DHL: DHLLogo,
  UPS: UPSLogo,
  Amazon: AmazonLogo,
  Maersk: MaerskLogo,
  "DB Schenker": DBSchenkerLogo,
  "Kuehne+Nagel": KuehneNagelLogo,
  XPO: XPOLogo,
}

export default function TextMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite seamless loop animation - Track 1 moves left
      gsap.to(track1Ref.current, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      })

      // Infinite seamless loop animation - Track 2 moves right
      gsap.fromTo(
        track2Ref.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 25,
          ease: "none",
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

  return (
    <section ref={sectionRef} className="relative bg-[#0a0b0f] py-24 overflow-hidden z-20">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12">
        <p className="text-[#00ff88] text-sm tracking-[0.3em] uppercase mb-4">Trusted Partners</p>
        <h2 className="text-3xl md:text-4xl font-light text-white">Industry Leaders Trust Us</h2>
      </div>

      {/* Marquee Track 1 - Partner Logos with names (moves left) */}
      <div className="relative mb-6 overflow-hidden">
        <div ref={track1Ref} className="flex items-center whitespace-nowrap" style={{ width: "fit-content" }}>
          {duplicatedPartners.map((partner, i) => {
            const LogoComponent = logoComponents[partner.name]
            return (
              <div
                key={`logo1-${i}`}
                className="flex items-center gap-4 mx-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {LogoComponent && <LogoComponent className="h-10 w-auto" />}
                <span className="text-xl font-medium text-white/70">{partner.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Marquee Track 2 - Partner Logos (moves right) */}
      <div className="relative overflow-hidden">
        <div ref={track2Ref} className="flex items-center whitespace-nowrap" style={{ width: "fit-content" }}>
          {duplicatedPartners.map((partner, i) => {
            const LogoComponent = logoComponents[partner.name]
            return (
              <div
                key={`logo2-${i}`}
                className="flex items-center gap-4 mx-10 opacity-40 hover:opacity-80 transition-opacity duration-300"
              >
                {LogoComponent && <LogoComponent className="h-8 w-auto" />}
                <span className="text-lg font-medium text-white/50">{partner.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0b0f] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0b0f] to-transparent pointer-events-none z-10" />
    </section>
  )
}
