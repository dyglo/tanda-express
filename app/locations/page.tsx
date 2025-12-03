"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const agentPoints = [
    { name: "Central Kampala Hub", address: "Plot 20, Kampala Road", hours: "7:00 AM - 9:00 PM", phone: "+256 700 111 222" },
    { name: "Nakawa Drop Point", address: "Industrial Area, Nakawa", hours: "8:00 AM - 8:00 PM", phone: "+256 700 333 444" },
    { name: "Ntinda Collection", address: "Ntinda Complex", hours: "8:00 AM - 8:00 PM", phone: "+256 700 555 666" },
    { name: "Naalya Express", address: "Naalya Shopping Mall", hours: "9:00 AM - 7:00 PM", phone: "+256 700 777 888" },
    { name: "Entebbe Road Station", address: "Entebbe Road, Lubowa", hours: "7:00 AM - 9:00 PM", phone: "+256 700 999 000" },
    { name: "Kololo Service Point", address: "Kololo Hill Drive", hours: "8:00 AM - 8:00 PM", phone: "+256 700 121 212" },
]

export default function LocationsPage() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".locations-hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            gsap.from(".hq-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                scrollTrigger: {
                    trigger: ".hq-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.from(".agent-card", {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".agent-grid",
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.from(".coverage-stat", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".coverage-stats",
                    start: "top 75%",
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
                <section className="relative py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="locations-hero-title text-5xl md:text-7xl font-light mb-6">
                            Find Us in
                            <br />
                            <span className="text-[#00ff88]">Kampala</span>
                        </h1>
                        <p className="text-white/60 text-lg">
                            Our headquarters and agent points across the city
                        </p>
                    </div>
                </section>

                {/* HQ Section */}
                <section className="hq-section px-6 md:px-12 pb-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="hq-card relative bg-gradient-to-br from-[#1a1b20] to-[#0a0b0f] border border-[#00ff88]/30 rounded-xl overflow-hidden">
                            <div className="relative z-10 p-8 md:p-12">
                                <div className="inline-block px-3 py-1 bg-[#00ff88] text-[#0a0b0f] text-xs font-medium tracking-wider mb-6">
                                    HEADQUARTERS
                                </div>

                                <h2 className="text-3xl md:text-5xl font-light mb-6">TANDA EXPRESS Kampala HQ</h2>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <div className="flex items-start gap-3 mb-4">
                                            <MapPin className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-white/40 text-xs tracking-wider mb-1">ADDRESS</div>
                                                <div className="text-white/90">
                                                    Plot 45, Industrial Area
                                                    <br />
                                                    Kampala, Uganda
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 mb-4">
                                            <Clock className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-white/40 text-xs tracking-wider mb-1">OPERATING HOURS</div>
                                                <div className="text-white/90">
                                                    Monday - Saturday: 6:00 AM - 10:00 PM
                                                    <br />
                                                    Sunday: 8:00 AM - 8:00 PM
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-start gap-3 mb-4">
                                            <Phone className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-white/40 text-xs tracking-wider mb-1">PHONE</div>
                                                <div className="text-white/90">+256 700 TANDA-EX</div>
                                                <div className="text-white/90">+256 700 826 323</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-white/40 text-xs tracking-wider mb-1">EMAIL</div>
                                                <div className="text-white/90">info@tandaexpress.co.ug</div>
                                                <div className="text-white/90">support@tandaexpress.co.ug</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="relative h-64 bg-[#0a0b0f] border border-white/10 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <MapPin className="w-12 h-12 text-[#00ff88] mx-auto mb-3" />
                                            <div className="text-white/60 text-sm">Interactive Map</div>
                                            <div className="text-white/40 text-xs">(Coming Soon)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </section>

                {/*  Coverage Statement */}
                <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-light mb-6">
                            Covering All Major Urban Zones
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-12">
                            Our main operational center is based in <span className="text-[#00ff88]">Kampala, Uganda</span>,
                            covering all major urban zones across the metropolitan area.
                        </p>

                        {/* Stats */}
                        <div className="coverage-stats grid grid-cols-3 gap-6">
                            <div className="coverage-stat">
                                <div className="text-5xl font-light text-[#00ff88] mb-2">50+</div>
                                <div className="text-white/60 text-sm">Agent Points</div>
                            </div>
                            <div className="coverage-stat">
                                <div className="text-5xl font-light text-[#00ff88] mb-2">24/7</div>
                                <div className="text-white/60 text-sm">Availability</div>
                            </div>
                            <div className="coverage-stat">
                                <div className="text-5xl font-light text-[#00ff88] mb-2">100%</div>
                                <div className="text-white/60 text-sm">Coverage</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Agent Points Grid */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-light mb-4">Agent Drop-Off Points</h2>
                            <p className="text-white/60">Convenient locations across Kampala for quick drop-offs</p>
                        </div>

                        <div className="agent-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {agentPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="agent-card bg-[#1a1b20] border border-white/10 rounded-lg p-6 hover:border-[#00ff88]/50 transition-all duration-300"
                                >
                                    <h3 className="text-xl font-light mb-4 text-[#00ff88]">{point.name}</h3>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                                            <div className="text-white/70">{point.address}</div>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                                            <div className="text-white/70">{point.hours}</div>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Phone className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                                            <div className="text-white/70">{point.phone}</div>
                                        </div>
                                    </div>

                                    <button className="mt-6 w-full py-2 border border-white/20 text-white/80 text-sm hover:border-[#00ff88] hover:text-[#00ff88] transition-colors">
                                        Get Directions
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Ready to Send a Parcel?</h2>
                        <p className="text-white/60 text-lg mb-12">
                            Drop off at any agent point or request free door pickup
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/services"
                                className="px-8 py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                            >
                                BOOK DELIVERY
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
