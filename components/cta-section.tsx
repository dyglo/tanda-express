"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation
      gsap.from(".cta-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".cta-text",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".cta-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="panel relative min-h-screen flex items-center justify-center py-24 px-6 md:px-12"
      style={{ zIndex: 70 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/electric-delivery-van-urban-street-modern-city.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a0b0f]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <div className="cta-text">
          <div className="overflow-hidden">
            <h2 className="cta-line text-4xl md:text-6xl lg:text-7xl font-light">Shape the future of</h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="cta-line text-4xl md:text-6xl lg:text-7xl font-light">urban delivery.</h2>
          </div>
          <div className="overflow-hidden mt-4">
            <h2 className="cta-line text-4xl md:text-6xl lg:text-7xl font-light text-[#00ff88]">Invest in Flexis.</h2>
          </div>
        </div>

        <button className="cta-button mt-12 inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-[#00ff88] transition-colors group">
          <span className="font-medium">Discover Flexis</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
