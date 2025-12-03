"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tabs = [
  {
    id: "urban",
    label: "URBAN FRIENDLY",
    features: [
      "CO2 free",
      "Access to low-emission zones",
      "Silent",
      "Designed to operate safely in an urban environments",
      "Compact footprint for less traffic congestion",
      "Tight turning radius for better maneuverability",
    ],
  },
  {
    id: "driver",
    label: "DRIVER FIRST",
    features: [
      "Several body types to adapt to the operational needs of every customer",
      '"Lower Cab" position for easy access',
      '"Step In Van" flagship: safe and direct access',
      "Innovative cockpit",
      "Skateboard design for lowest floor height",
    ],
  },
  {
    id: "fleet",
    label: "FLEET MANAGEMENT EFFICIENCY",
    features: [
      "Predictive maintenance",
      "Midlife battery upgrade",
      "Remote charging & monitoring of battery state of charge",
      "200 km recovered in less than 30mins",
      "Seamless integration and open platform",
      "Eco design with use of recycled materials & recycling capabilities",
    ],
  },
]

export default function StakesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("urban")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stakes-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".stakes-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".stakes-tab", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".stakes-tabs",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.fromTo(
        ".stakes-image",
        {
          clipPath: "inset(10% 10% 10% 10%)",
          scale: 0.95,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stakes-image",
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Animate feature items when tab changes with delay
    gsap.from(".feature-item", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      delay: 0.1,
      stagger: 0.05,
    })
  }, [activeTab])

  const activeTabData = tabs.find((t) => t.id === activeTab)

  return (
    <section ref={sectionRef} className="panel bg-[#0d0e12] py-24 px-6 md:px-12" style={{ zIndex: 50 }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="stakes-title text-4xl md:text-5xl font-light mb-16">Addressing key stakes</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <div className="stakes-tabs space-y-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`stakes-tab w-full text-left py-6 border-b border-white/10 transition-colors ${
                  activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-widest">{tab.label}</span>
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeTab === tab.id ? "bg-[#00ff88]" : "bg-white/20"
                    }`}
                  ></span>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white/5 rounded-lg p-8">
            <ul className="space-y-4">
              {activeTabData?.features.map((feature, i) => (
                <li key={i} className="feature-item flex items-start gap-3 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Image */}
        <div className="stakes-image mt-24 relative aspect-[21/9] rounded-lg overflow-hidden">
          <img src="/electric-delivery-van-urban-city-street.jpg" alt="Flexis vehicle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
