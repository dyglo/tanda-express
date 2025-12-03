"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const slides = [
  {
    number: "01",
    title: "Design",
    description: "Purpose-built from the ground up for urban logistics",
    image: "/electric-vehicle-design-sketch-blueprint.jpg",
  },
  {
    number: "02",
    title: "Engineer",
    description: "Advanced 800V architecture for maximum efficiency",
    image: "/electric-vehicle-engineering-laboratory.jpg",
  },
  {
    number: "03",
    title: "Manufacture",
    description: "Precision manufacturing with sustainable practices",
    image: "/modern-electric-vehicle-manufacturing-plant.jpg",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Seamless integration into your fleet operations",
    image: "/electric-delivery-vehicle-fleet-city.jpg",
  },
]

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current
      if (!container) return

      const slides = gsap.utils.toArray<HTMLElement>(".h-slide")
      const totalWidth = slides.length * window.innerWidth

      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: () => `+=${totalWidth}`,
        },
      })

      // Animate each slide content as it comes into view
      slides.forEach((slide, i) => {
        const content = slide.querySelector(".slide-content")
        const image = slide.querySelector(".slide-image")

        gsap.fromTo(
          content,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: gsap.getById("horizontal"),
              start: "left center",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Image scale animation
        gsap.fromTo(
          image,
          { scale: 1.3 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: gsap.getById("horizontal"),
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#0d0e12] overflow-hidden">
      {/* Section Title */}
      <div className="absolute top-8 left-8 z-20">
        <span className="text-[#00ff88] text-xs tracking-[0.3em] uppercase">Our Process</span>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-4">
        {slides.map((_, i) => (
          <div key={i} className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-[#00ff88] w-0"></div>
          </div>
        ))}
      </div>

      {/* Horizontal Slides Container */}
      <div ref={containerRef} className="flex">
        {slides.map((slide, i) => (
          <div key={i} className="h-slide flex-shrink-0 w-screen h-screen flex items-center justify-center px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
              {/* Content */}
              <div className="slide-content">
                <span className="text-[#00ff88] text-6xl md:text-8xl font-light opacity-20">{slide.number}</span>
                <h3 className="text-4xl md:text-5xl font-light mt-4 mb-6">{slide.title}</h3>
                <p className="text-white/60 text-lg">{slide.description}</p>
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="slide-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f]/50 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
