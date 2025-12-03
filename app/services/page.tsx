"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Package, Truck, MapPin, Clock, Shield, Smartphone } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        icon: Package,
        title: "Door-to-Door Parcel Delivery",
        description: "Fast urban delivery for small parcels, documents, retail items, and personal packages across Kampala metropolitan area.",
        features: ["Same-day delivery", "Weight up to 30kg", "Real-time tracking"],
    },
    {
        icon: Truck,
        title: "Free Door Pickup Service",
        description: "A TANDA EXPRESS agent collects your parcel from your home, office, or shop at no extra pickup cost.",
        features: ["No pickup fee", "Scheduled collection", "Verified agents"],
    },
    {
        icon: MapPin,
        title: "Door Delivery to Receiver",
        description: "Your item is delivered directly to the recipient's location with secure delivery confirmation.",
        features: ["Direct handover", "Digital signature", "Photo proof"],
    },
    {
        icon: Clock,
        title: "Branch / Agent Drop-Off",
        description: "Drop items at a TANDA EXPRESS agent point for faster dispatch and lower cost.",
        features: ["Lower fees", "Quick processing", "Extended hours"],
    },
    {
        icon: Shield,
        title: "Secure Handling",
        description: "Every parcel is scanned, tagged, and tracked from pickup to delivery with tamper-proof packaging options.",
        features: ["Insurance available", "Fragile handling", "Secure storage"],
    },
    {
        icon: Smartphone,
        title: "Inter-City Dispatch",
        description: "Kampala to Nairobi, Kigali, Dar es Salaam. Expanding our regional delivery network.",
        features: ["Coming Soon", "Cross-border", "Customs support"],
        comingSoon: true,
    },
]

export default function ServicesPage() {
    const mainRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from(".services-hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            gsap.from(".services-hero-subtitle", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out",
            })

            // Service cards stagger animation
            gsap.from(".service-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            })

            // Coverage section animation
            gsap.from(".coverage-content", {
                y: 80,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".coverage-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })

            // CTA section animation
            gsap.from(".cta-content", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".services-cta",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            })
        }, mainRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={mainRef} className="bg-[#0a0b0f] text-white min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <section ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ zIndex: 10 }}>
                    {/* Video Background */}
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/videos/truck.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-8">
                        {/* Main Title */}
                        <div className="flex-1 flex items-center">
                            <div className="max-w-4xl">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight">
                                    <div className="overflow-hidden">
                                        <span className="services-hero-title block text-white drop-shadow-lg">Delivery Solutions</span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="services-hero-subtitle block text-[#00ff88] drop-shadow-lg">for Every Need</span>
                                    </div>
                                </h1>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex items-end justify-between">
                            {/* CTAs */}
                            <div className="flex items-center gap-4">
                                <a
                                    href="/pricing"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#00ff88] text-[#0a0b0f] text-xs font-medium tracking-widest uppercase hover:bg-[#00ff88]/90 transition-colors"
                                >
                                    GET A QUOTE
                                </a>
                                <a
                                    href="/how-it-works"
                                    className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white text-xs font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
                                >
                                    HOW IT WORKS
                                </a>
                            </div>

                            {/* Video Card */}
                            <div className="hidden md:flex items-center gap-4 bg-[#1a1b20]/90 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                                <div className="relative w-28 h-20 rounded overflow-hidden">
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                        <source src="/videos/truck.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="text-[#00ff88] text-xs tracking-widest">FEATURED</span>
                                    <p className="text-white text-sm mt-1">Our Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="services-grid py-20 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`service-card relative bg-[#1a1b20] border border-white/10 rounded-lg p-8 hover:border-[#00ff88]/50 transition-all duration-300 ${service.comingSoon ? "opacity-70" : ""
                                        }`}
                                >
                                    {service.comingSoon && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] text-xs font-medium rounded-full">
                                            Coming Soon
                                        </div>
                                    )}
                                    <service.icon className="w-10 h-10 text-[#00ff88] mb-6" />
                                    <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                                    <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coverage Section */}
                <section className="coverage-section relative py-32 px-6 md:px-12 overflow-hidden">
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-20"
                        >
                            <source src="/videos/boxes-care.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center coverage-content">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Kampala-Wide Coverage</h2>
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                            Our main operational center is based in <span className="text-[#00ff88]">Kampala, Uganda</span>, covering all major urban zones across the metropolitan area.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="bg-[#1a1b20]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                <div className="text-4xl font-light text-[#00ff88] mb-2">500+</div>
                                <div className="text-white/60 text-sm">Deliveries Daily</div>
                            </div>
                            <div className="bg-[#1a1b20]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                <div className="text-4xl font-light text-[#00ff88] mb-2">50+</div>
                                <div className="text-white/60 text-sm">Agent Points</div>
                            </div>
                            <div className="bg-[#1a1b20]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                <div className="text-4xl font-light text-[#00ff88] mb-2">2-4h</div>
                                <div className="text-white/60 text-sm">Average Delivery</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="services-cta py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center cta-content">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Ready to Send Your Parcel?</h2>
                        <p className="text-white/60 text-lg mb-12">
                            Experience fast, secure delivery across Kampala with TANDA EXPRESS
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/pricing"
                                className="px-8 py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                            >
                                GET A QUOTE
                            </a>
                            <a
                                href="/how-it-works"
                                className="px-8 py-4 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-colors"
                            >
                                HOW IT WORKS
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
