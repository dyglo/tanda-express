"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ImageRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "center 40%",
          scrub: 1,
        },
      })

      tl.fromTo(
        ".expand-image-container",
        {
          width: "200px",
          height: "150px",
          borderRadius: "12px",
        },
        {
          width: "100%",
          height: "70vh",
          borderRadius: "0px",
          ease: "power2.out",
        },
      )

      // Parallax on the image inside
      gsap.to(".expand-image", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".reveal-text-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="panel relative bg-[#0a0b0f] py-32 overflow-hidden" style={{ zIndex: 25 }}>
      <div className="flex flex-col items-center">
        {/* Expanding Image */}
        <div ref={imageRef} className="expand-image-container relative overflow-hidden mx-auto">
          <video
            src="/videos/boxes-care.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="expand-image w-full h-full object-cover scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="reveal-text-container max-w-4xl mx-auto text-center px-6 mt-16">
          <div className="overflow-hidden">
            <h2 className="reveal-text text-4xl md:text-6xl font-light mb-6">Reimagining Urban Delivery</h2>
          </div>
          <div className="overflow-hidden">
            <p className="reveal-text text-white/60 text-lg md:text-xl leading-relaxed">
              Our vision is to transform city logistics with zero-emission vehicles designed specifically for urban
              environments, making cities cleaner, quieter, and more livable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
