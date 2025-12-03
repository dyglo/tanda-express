"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const clients = [
  { name: "DB SCHENKER", id: "schenker" },
  { name: "Colis Privé", id: "colis" },
  { name: "Buskaw", id: "buskaw" },
  { name: "H!VED", id: "hived" },
  { name: "Milk & More", id: "milk" },
  { name: "GLS", id: "gls" },
]

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".client-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".bracket-corner", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        delay: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length)
    }, 3000)

    return () => {
      ctx.revert()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="relative bg-[#0a0b0f] py-16 border-t border-white/10"
      style={{ zIndex: 15 }}
    >
      <div className="px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 md:gap-0 overflow-x-auto md:overflow-visible">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`client-item relative flex items-center justify-center py-6 px-8 md:px-12 md:border-r border-white/10 last:border-r-0 cursor-pointer transition-all duration-300 ${
                activeIndex === i ? "bg-[#0a0b0f]" : ""
              }`}
              onMouseEnter={() => {
                setActiveIndex(i)
                if (intervalRef.current) clearInterval(intervalRef.current)
              }}
              onMouseLeave={() => {
                intervalRef.current = setInterval(() => {
                  setActiveIndex((prev) => (prev + 1) % clients.length)
                }, 3000)
              }}
            >
              {activeIndex === i && (
                <>
                  {/* Top-left corner */}
                  <div className="bracket-corner absolute top-0 left-0 w-4 h-4">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00ff88]"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-[#00ff88]"></div>
                  </div>
                  {/* Top-right corner */}
                  <div className="bracket-corner absolute top-0 right-0 w-4 h-4">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-[#00ff88]"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-[#00ff88]"></div>
                  </div>
                  {/* Bottom-left corner */}
                  <div className="bracket-corner absolute bottom-0 left-0 w-4 h-4">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ff88]"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-full bg-[#00ff88]"></div>
                  </div>
                  {/* Bottom-right corner */}
                  <div className="bracket-corner absolute bottom-0 right-0 w-4 h-4">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#00ff88]"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[#00ff88]"></div>
                  </div>
                </>
              )}

              <span
                className={`text-sm md:text-base font-light tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  activeIndex === i ? "text-white" : "text-white/40"
                }`}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
