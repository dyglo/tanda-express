"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const approaches = [
  {
    title: "Strong ESG commitments",
    description:
      "A commitment to zero-carbon setup and contributions to smart city initiatives, aligning with ESG principles.",
    image: "/sustainable-city-eco-building-green-architecture.jpg",
  },
  {
    title: "An independent entity",
    description:
      "An independent company supported by robust R&D and engineering capabilities, ensuring agility and innovation.",
    image: "/modern-r.jpg",
  },
  {
    title: "Secure resources and operational excellence",
    description:
      "High reliability in the supply chain, manufacturing and critical services ensuring consistent production and delivery.",
    image: "/modern-logistics-warehouse-operations.jpg",
  },
  {
    title: "Fit-for-purpose solution",
    description:
      "Integration of hardware and software with focus on logistics to offer maximum efficiency gain to drivers and fleet operators.",
    image: "/fleet-management-digital-dashboard-interface.jpg",
  },
]

export default function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".approach-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".approach-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const cards = gsap.utils.toArray<HTMLElement>(".approach-card")
      cards.forEach((card, i) => {
        // Card entrance with rotation
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            rotateX: 15,
            transformPerspective: 1000,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          },
        )

        gsap.fromTo(
          card.querySelector(".approach-image"),
          {
            clipPath: "circle(0% at 50% 50%)",
          },
          {
            clipPath: "circle(100% at 50% 50%)",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1 + 0.3,
          },
        )

        // Text fade in
        gsap.from(card.querySelector(".approach-text"), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1 + 0.5,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="panel bg-[#0a0b0f] py-24 px-6 md:px-12" style={{ zIndex: 40 }}>
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden mb-16">
          <h2 className="approach-title text-4xl md:text-5xl font-light">The Flexis approach</h2>
        </div>

        <div className="approach-grid grid md:grid-cols-2 gap-6">
          {approaches.map((item, i) => (
            <div
              key={i}
              className="approach-card group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="approach-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="approach-text p-6">
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[#00ff88]/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
