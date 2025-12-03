"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 100, suffix: "+", label: "Electric Vehicles" },
  { value: 50, suffix: "M", label: "KM Driven" },
  { value: 15, suffix: "+", label: "Partner Cities" },
  { value: 0, suffix: "%", label: "Emissions", prefix: "Zero" },
]

export default function CounterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const counter = { value: 0 }

        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.stat-${i}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            const el = document.querySelector(`.stat-value-${i}`)
            if (el) {
              el.textContent =
                (stat.prefix ? stat.prefix + " " : "") + Math.round(counter.value).toString() + stat.suffix
            }
          },
        })
      })

      // Stagger cards
      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      // Background line animation
      gsap.from(".stat-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0d0e12] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-${i} stat-card relative`}>
              <div className="stat-line absolute top-0 left-0 right-0 h-px bg-[#00ff88]/30"></div>
              <div className="pt-8">
                <span className={`stat-value-${i} text-4xl md:text-6xl font-light text-[#00ff88]`}>
                  {stat.prefix ? stat.prefix + " 0" : "0"}
                  {stat.suffix}
                </span>
                <p className="text-white/60 mt-4 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
