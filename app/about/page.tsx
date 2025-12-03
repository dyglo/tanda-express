"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CounterSection from "@/components/counter-section"
import { Shield, MapPin, Clock, Package, Lock, Bell } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const trustFeatures = [
    {
        icon: Shield,
        title: "Verified Agents & Secure Handling",
        description: "Every parcel is managed by trained TANDA EXPRESS personnel. Our agents are verified, background-checked, and equipped with the latest delivery technology.",
    },
    {
        icon: MapPin,
        title: "Live Tracking at Every Step",
        description: "Know exactly where your parcel is from doorstep to final delivery. Real-time GPS tracking and instant SMS notifications keep you informed.",
    },
    {
        icon: Clock,
        title: "Fast Urban Deliveries",
        description: "Optimized for Kampala's traffic patterns. Our smart routing ensures predictable delivery times across the metropolitan area.",
    },
    {
        icon: Package,
        title: "Protected Items",
        description: "Tamper-proof packaging options and digital delivery confirmation. Insurance available for high-value items.",
    },
    {
        icon: Lock,
        title: "Clear Pricing",
        description: "No hidden fees. Door pickup is always free. You see the exact price before confirming your booking.",
    },
    {
        icon: Bell,
        title: "24/7 Support",
        description: "Our customer support team is always available to help with tracking, queries, or delivery issues.",
    },
]

export default function AboutPage() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            gsap.from(".story-content", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".story-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.from(".trust-card", {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                scrollTrigger: {
                    trigger: ".trust-grid",
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.from(".mission-text", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".mission-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
        }, mainRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={mainRef} className="bg-[#0a0b0f] text-white min-h-screen">
            <Header />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-32 px-6 md:px-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00ff88]/5 to-transparent"></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h1 className="about-hero-title text-5xl md:text-7xl font-light mb-6">
                            Your Parcel. Safe.
                            <br />
                            <span className="text-[#00ff88]">Fast. Always.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                            Reimagining urban delivery for East Africa with technology, trust, and speed.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="story-section py-20 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="story-content bg-[#1a1b20] border border-white/10 rounded-xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-5xl font-light mb-8">Our Story</h2>
                            <div className="space-y-6 text-white/70 leading-relaxed">
                                <p>
                                    TANDA EXPRESS was born from a simple observation: Kampala needed a reliable, transparent,
                                    and technology-driven delivery service that puts customers first. Traditional logistics
                                    were slow, unpredictable, and lacked transparency.
                                </p>
                                <p>
                                    We built TANDA EXPRESS to change that. Using smart routing, real-time tracking, and a
                                    network of verified agents across Kampala, we're making urban delivery fast, secure, and
                                    stress-free for everyone.
                                </p>
                                <p className="text-[#00ff88] font-medium">
                                    Today, we handle 500+ deliveries daily and serve thousands of satisfied customers across
                                    the Kampala metropolitan area.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust & Security */}
                <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-light mb-6">Why Choose TANDA EXPRESS</h2>
                            <p className="text-white/60 text-lg">Built on trust, security, and speed</p>
                        </div>

                        <div className="trust-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {trustFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="trust-card bg-[#1a1b20]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#00ff88]/50 transition-all duration-300"
                                >
                                    <feature.icon className="w-10 h-10 text-[#00ff88] mb-4" />
                                    <h3 className="text-xl font-light mb-3">{feature.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Counter Section */}
                <section>
                    <CounterSection />
                </section>

                {/* Mission Section */}
                <section className="mission-section relative py-32 px-6 md:px-12 overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-[#0a0b0f]/80 to-[#0a0b0f]"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center mission-text">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Our Mission</h2>
                        <p className="text-white/80 text-lg md:text-2xl leading-relaxed mb-12">
                            To transform city logistics with <span className="text-[#00ff88]">zero-emission vehicles</span> designed
                            specifically for urban environments, making cities cleaner, quieter, and more livable.
                        </p>
                        <div className="inline-block px-6 py-2 border border-[#00ff88]/50 rounded-full">
                            <span className="text-[#00ff88] text-sm tracking-wider">SUSTAINABLE • RELIABLE • FAST</span>
                        </div>
                    </div>
                </section>

                {/* Team Section (Placeholder) */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">Meet the Team</h2>
                        <p className="text-white/60 mb-12">
                            The people behind TANDA EXPRESS
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-[#1a1b20] border border-white/10 rounded-lg overflow-hidden">
                                    <div className="aspect-square bg-gradient-to-br from-[#00ff88]/20 to-transparent"></div>
                                    <div className="p-6">
                                        <div className="text-xl font-light mb-1">Team Member {i}</div>
                                        <div className="text-white/60 text-sm">Position</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Join Thousands of Happy Customers</h2>
                        <p className="text-white/60 text-lg mb-12">
                            Experience the future of urban delivery in Kampala
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/services"
                                className="px-8 py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                            >
                                SEND A PARCEL
                            </a>
                            <a
                                href="/track"
                                className="px-8 py-4 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-colors"
                            >
                                TRACK PACKAGE
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
