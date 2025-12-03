"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    number: "01",
    title: "An innovative electric vehicle Skateboard platform",
    description:
      "Cutting-edge technology allowing seamless electric driving with: 800V batteries, Long driving range, Rapid charging, High power output",
    details:
      "Fit-for-purpose vehicles adapted to urban logistics needs: Superior maneuverability, Unrivalled cargo/carbon footprint ratio, Low floor height, State-of-the-art ergonomics",
    image: "/electric-delivery-van-skateboard-platform-chassis.jpg",
  },
  {
    number: "02",
    title: "B2B-centric interfaces and services",
    description:
      "Dedicated customer interfaces: Tailored customer support, Fit-for-purpose built solutions and services, Optimized Total Cost of Usage (TCU), Streamlined operations",
    image: "/b2b-logistics-software-dashboard-interface.jpg",
  },
  {
    number: "03",
    title: "Software Defined Vehicles (SDV)",
    description:
      "Cutting-edge technology: Flexibility and scalability through software-defined vehicles, Seamless integration of new services and continuous upgrades",
    image: "/software-defined-vehicle-futuristic-dashboard.jpg",
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      features.forEach((_, i) => {
        const featureEl = `.feature-${i}`

        const numberTl = gsap.timeline({
          scrollTrigger: {
            trigger: featureEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: 0.3,
        })

        numberTl
          .from(`${featureEl} .feature-number-text`, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .from(
            `${featureEl} .feature-number-line`,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          )

        gsap.from(`${featureEl} .feature-title`, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featureEl,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(`${featureEl} .feature-description`, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featureEl,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })

        gsap.fromTo(
          `${featureEl} .feature-image-container`,
          {
            clipPath: "inset(20% 20% 20% 20%)",
            scale: 0.8,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: `${featureEl} .feature-image-container`,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          },
        )

        gsap.to(`${featureEl} .feature-image`, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: featureEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })

        // Learn more button with delay
        gsap.from(`${featureEl} .feature-button`, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          delay: 0.6,
          scrollTrigger: {
            trigger: featureEl,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0d0e12] min-h-screen py-24 relative z-10">
      <div className="px-6 md:px-12">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`feature-${i} grid md:grid-cols-2 gap-12 items-center py-24 border-b border-white/10 last:border-b-0`}
          >
            {/* Content */}
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="feature-number flex items-center gap-4 mb-8">
                <span className="feature-number-text text-[#00ff88] text-sm font-mono">{feature.number}</span>
                <div className="feature-number-line h-px bg-[#00ff88]/30 flex-1 max-w-[100px]"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title text-3xl md:text-4xl font-light mb-6 leading-tight">{feature.title}</h3>
                <p className="feature-description text-white/60 leading-relaxed mb-4">{feature.description}</p>
                {feature.details && (
                  <p className="feature-description text-white/60 leading-relaxed">{feature.details}</p>
                )}
                <button className="feature-button mt-8 text-sm text-[#00ff88] hover:text-white transition-colors flex items-center gap-2 group">
                  Learn more
                  <span className="w-4 h-px bg-current group-hover:w-8 transition-all duration-300"></span>
                </button>
              </div>
            </div>

            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="feature-image-container relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="feature-image w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
