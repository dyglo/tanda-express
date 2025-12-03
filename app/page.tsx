"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ClientsSection from "@/components/clients-section"
import MissionSection from "@/components/mission-section"
import FeaturesSection from "@/components/features-section"
import ApproachSection from "@/components/approach-section"
import ImageRevealSection from "@/components/image-reveal-section"
import TextMarquee from "@/components/text-marquee"
import CounterSection from "@/components/counter-section"
import StakesSection from "@/components/stakes-section"
import PartnersSection from "@/components/partners-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel")

      panels.forEach((panel, i) => {
        if (i < panels.length - 1) {
          // Pin only when section bottom reaches viewport bottom
          ScrollTrigger.create({
            trigger: panel,
            start: "bottom bottom",
            end: "+=100%", // Keep pinned for next section's scroll
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
          })

          // Scale and fade effect when next section covers
          gsap.to(panel, {
            scale: 0.92,
            opacity: 0.3,
            filter: "blur(5px)",
            scrollTrigger: {
              trigger: panels[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: 0.5,
            },
          })
        }
      })

      ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
      })

      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".slide-in-left").forEach((el, i) => {
        gsap.from(el, {
          x: -100,
          opacity: 0,
          duration: 1,
          delay: 0.2 + i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".slide-in-right").forEach((el, i) => {
        gsap.from(el, {
          x: 100,
          opacity: 0,
          duration: 1,
          delay: 0.2 + i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: 0.15 + i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".stagger-container").forEach((container) => {
        const items = container.querySelectorAll(".stagger-item")
        gsap.from(items, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="bg-[#0a0b0f] text-white">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <MissionSection />
        <ImageRevealSection />
        <FeaturesSection />
        <TextMarquee />
        <ApproachSection />
        <CounterSection />
        <StakesSection />
        <PartnersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
