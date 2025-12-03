"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Send, MapPin, CreditCard, Package, Smartphone, CheckCircle2, Shield, Zap, Navigation, Bell, Lock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        number: "01",
        icon: Send,
        title: "Create a Delivery Request",
        description: "Open the app and enter your pickup address, receiver's address, parcel size & description, and receiver phone number.",
        details: ["Fill in delivery details", "Add parcel description", "Enter receiver info"],
    },
    {
        number: "02",
        icon: MapPin,
        title: "Choose Pickup Method",
        description: "Select between free door pickup where an agent comes to you, or drop-off at the nearest TANDA EXPRESS agent point.",
        details: ["Door Pickup (FREE)", "Agent Drop-Off", "Scheduled collection"],
    },
    {
        number: "03",
        icon: CreditCard,
        title: "Confirm & Pay",
        description: "See instant delivery fees based on distance. Pay via Mobile Money (MTN/Airtel), Card, or Cash on delivery.",
        details: ["Transparent pricing", "Multiple payment options", "Instant confirmation"],
    },
    {
        number: "04",
        icon: Package,
        title: "Parcel Collection",
        description: "A trained TANDA EXPRESS agent arrives, verifies the parcel, and scans it into our tracking system.",
        details: ["Verified agents", "Package scanning", "Secure tagging"],
    },
    {
        number: "05",
        icon: Smartphone,
        title: "Live Tracking & Updates",
        description: "Receive real-time notifications at every stage: Parcel picked, In transit, Out for delivery, Delivered.",
        details: ["SMS notifications", "App tracking", "Live updates"],
    },
    {
        number: "06",
        icon: CheckCircle2,
        title: "Receiver Gets the Parcel",
        description: "Recipient confirms delivery with digital signature or delivery code. Photo proof available on request.",
        details: ["Digital signature", "Delivery code", "Photo proof"],
    },
]

const howWeDeliver = [
    {
        icon: Shield,
        title: "Verified Agents",
        description: "Every pickup and delivery is handled by registered, trained, and verified TANDA EXPRESS personnel.",
    },
    {
        icon: Zap,
        title: "Smart Routing",
        description: "We use optimized routes to ensure fast, predictable delivery times across Kampala.",
    },
    {
        icon: Lock,
        title: "Secure Handling",
        description: "Each parcel is scanned, tagged, and tracked from pickup to delivery.",
    },
    {
        icon: Bell,
        title: "Real-Time Updates",
        description: "Both sender and receiver get instant notifications on parcel movement.",
    },
    {
        icon: Navigation,
        title: "Delivery Confirmation",
        description: "Digital signature, one-time delivery code, and optional photo proof for security.",
    },
]

export default function HowItWorksPage() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from(".how-hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            // Steps timeline animation
            steps.forEach((_, index) => {
                gsap.from(`.step-${index}`, {
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: `.step-${index}`,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                })
            })

            // How we deliver cards
            gsap.from(".deliver-card", {
                y: 60,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".deliver-grid",
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            })

            // Video section
            gsap.from(".video-section-content", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".video-section",
                    start: "top 60%",
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
                        <h1 className="how-hero-title text-5xl md:text-7xl font-light mb-6">
                            Sending a Parcel
                            <br />
                            <span className="text-[#00ff88]">is Easy</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl">
                            Six simple steps from request to delivery. Fast, secure, and transparent.
                        </p>
                    </div>
                </section>

                {/* Steps Timeline */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`step-${index} flex flex-col md:flex-row gap-8 mb-20 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Number Side */}
                                <div className="md:w-1/3 flex items-center justify-center md:justify-start">
                                    <div className="relative">
                                        <div className="text-[120px] md:text-[180px] font-light text-white/5 leading-none">
                                            {step.number}
                                        </div>
                                        <step.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 text-[#00ff88]" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="md:w-2/3 bg-[#1a1b20] border border-white/10 rounded-lg p-8">
                                    <div className="text-[#00ff88] text-sm tracking-widest mb-2">STEP {step.number}</div>
                                    <h3 className="text-3xl font-light mb-4">{step.title}</h3>
                                    <p className="text-white/60 mb-6 leading-relaxed">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-2 text-white/80">
                                                <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How We Deliver Section */}
                <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-light mb-6">How We Deliver</h2>
                            <p className="text-white/60 text-lg">Trust, transparency, and speed at every step</p>
                        </div>

                        <div className="deliver-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {howWeDeliver.map((item, index) => (
                                <div
                                    key={index}
                                    className="deliver-card bg-[#1a1b20]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#00ff88]/50 transition-all duration-300"
                                >
                                    <item.icon className="w-10 h-10 text-[#00ff88] mb-4" />
                                    <h4 className="text-xl font-light mb-3">{item.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="video-section relative py-32 px-6 md:px-12 overflow-hidden">
                    <div className="max-w-5xl mx-auto">
                        <div className="video-section-content relative rounded-xl overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[400px] md:h-[600px] object-cover"
                            >
                                <source src="/videos/boxes-care.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent flex items-end justify-center pb-12">
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-5xl font-light mb-4">See It In Action</h3>
                                    <p className="text-white/70 mb-6">Watch how TANDA EXPRESS delivers across Kampala</p>
                                    <a
                                        href="/services"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                                    >
                                        GET STARTED
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Ready to Send?</h2>
                        <p className="text-white/60 text-lg mb-12">
                            Join thousands of satisfied customers across Kampala
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/pricing"
                                className="px-8 py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                            >
                                CALCULATE PRICE
                            </a>
                            <a
                                href="/track"
                                className="px-8 py-4 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-colors"
                            >
                                TRACK PARCEL
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
