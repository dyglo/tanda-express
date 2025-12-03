"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ChevronDown, Play } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation with split text effect
      const tl = gsap.timeline({ delay: 0.5 })

      // Animate each character with mask reveal
      tl.from(".hero-line-mask", {
        yPercent: 100,
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out",
      })
        .from(
          ".trust-button",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-scroll-indicator",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-video-card",
          {
            x: 100,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )

      // Floating animation for scroll indicator
      gsap.to(".hero-scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      // Subtle parallax on video
      gsap.to(".hero-video", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ zIndex: 10 }}>
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="hero-video w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logistic-fuyjc3BnPUJMU8wWFEQoND6gaLvkZD.webm" type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-8">
        {/* Main Title */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight">
              <div className="overflow-hidden">
                <span className="hero-line-mask block text-white drop-shadow-lg">Fast, Reliable</span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-line-mask block text-white drop-shadow-lg">Delivery Across Kampala</span>
              </div>
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between">
          {/* Scroll Indicator */}
          <div className="hero-scroll-indicator flex flex-col items-center gap-2">
            <ChevronDown className="w-5 h-5 text-white/60" />
          </div>

          <div className="trust-button absolute left-1/2 -translate-x-1/2 bottom-32 md:bottom-24 flex items-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#00ff88] text-[#0a0b0f] text-xs font-medium tracking-widest uppercase hover:bg-[#00ff88]/90 transition-colors"
            >
              Send a Parcel
            </a>
            <a
              href="/track"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white text-xs font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Track Package
            </a>
          </div>

          {/* Video Card - positioned clearly visible */}
          <div className="hero-video-card hidden md:flex items-center gap-4 bg-[#1a1b20]/90 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <div className="relative w-28 h-20 rounded overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logistic-fuyjc3BnPUJMU8wWFEQoND6gaLvkZD.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#00ff88] text-xs tracking-widest">FEATURED</span>
              <p className="text-white text-sm mt-1">Urban Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
