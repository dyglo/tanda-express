"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: "Renault Group", logo: "/renault-group-logo-white.jpg" },
  { name: "Volvo Group", logo: "/volvo-group-logo-white.jpg" },
  { name: "CMA CGM", logo: "/cma-cgm-logo-white.jpg" },
]

export default function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partners-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".partners-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".partner-logo", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".partners-logos",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="panel bg-[#0a0b0f] py-24 px-6 md:px-12" style={{ zIndex: 60 }}>
      <div className="max-w-7xl mx-auto">
        <div className="partners-content max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Our partners</h2>
          <p className="text-xl text-white/70">
            We have partnered with leading companies such as Renault Group, Volvo Group, and CMA CGM in order to
            strengthen our position in the global market and accelerate technological advancements.
          </p>
        </div>

        <div className="partners-logos grid grid-cols-3 gap-8 md:gap-16 items-center">
          {partners.map((partner, i) => (
            <div key={i} className="partner-logo flex items-center justify-center p-4">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 md:max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
