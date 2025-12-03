"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Leaf, Settings, UserCheck } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Leaf,
    title: "Profitability and Sustainability",
    description: "We can help you turn environmental goals into sustainable, measurable and competitive advantages.",
  },
  {
    icon: Settings,
    title: "Operational Expertise",
    description:
      "You can count on our responsive team of human experts to help you streamline your operational processes and improve your day-to-day efficiency.",
  },
  {
    icon: UserCheck,
    title: "A Personalised Solution",
    description: "We offer customised solutions tailored to your needs and the specific requirements of your fleet.",
  },
]

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mission-label",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.2,
      })

      labelTl
        .from(".mission-label-text", {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".mission-label-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )

      const words = gsap.utils.toArray<HTMLElement>(".mission-word")

      gsap.fromTo(
        words,
        {
          opacity: 0.15,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-text",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        },
      )

      const cards = gsap.utils.toArray<HTMLElement>(".feature-card")
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 40,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: 0.3 + i * 0.15,
          },
        )

        // Icon animation with delay
        gsap.from(card.querySelector(".feature-icon"), {
          scale: 0,
          rotation: -180,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.5 + i * 0.15,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const missionText =
    "We believe in taking a human-centric approach to urban logistics, using innovative technology and 'native' electric vehicles. Together, we can build tomorrow's city today and make it a better place for all."

  return (
    <section ref={sectionRef} className="panel bg-[#0a0b0f] min-h-screen py-24 px-6 md:px-12" style={{ zIndex: 20 }}>
      <div className="max-w-7xl mx-auto">
        {/* Label with line */}
        <div className="mission-label flex items-center gap-4 mb-12">
          <span className="mission-label-text text-[#00ff88] text-xs tracking-[0.3em] uppercase">
            City-Positive Logistics
          </span>
          <div className="mission-label-line h-px bg-[#00ff88]/30 w-24"></div>
        </div>

        {/* Main Text */}
        <div className="mission-text max-w-5xl mb-24">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed">
            {missionText.split(" ").map((word, i) => (
              <span key={i} className="mission-word inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="features-grid grid md:grid-cols-3 gap-px bg-white/10">
          {features.map((feature, i) => (
            <div key={i} className="feature-card bg-[#0a0b0f] p-8 md:p-12 flex flex-col min-h-[300px]">
              <feature.icon className="feature-icon w-8 h-8 text-[#00ff88] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
