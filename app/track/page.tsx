"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Package, Truck, CheckCircle2, MapPin } from "lucide-react"

const trackingSteps = [
    { status: "picked", label: "Parcel Picked", icon: Package },
    { status: "transit", label: "In Transit", icon: Truck },
    { status: "delivery", label: "Out for Delivery", icon: MapPin },
    { status: "delivered", label: "Delivered", icon: CheckCircle2 },
]

export default function TrackPage() {
    const [trackingCode, setTrackingCode] = useState("")
    const [isTracking, setIsTracking] = useState(false)
    const [currentStatus, setCurrentStatus] = useState(2) // Mock status
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".track-hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            gsap.from(".track-form", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out",
            })
        }, mainRef)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        if (isTracking) {
            gsap.from(".tracking-status", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
            })

            gsap.from(".progress-line", {
                scaleX: 0,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.3,
            })
        }
    }, [isTracking])

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault()
        if (trackingCode.trim()) {
            setIsTracking(true)
        }
    }

    return (
        <div ref={mainRef} className="bg-[#0a0b0f] text-white min-h-screen">
            <Header />

            <main className="pt-24 pb-24">
                {/* Hero Section */}
                <section className="relative py-32 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="track-hero-title text-5xl md:text-7xl font-light mb-6">
                            Track Your
                            <br />
                            <span className="text-[#00ff88]">Parcel</span>
                        </h1>
                        <p className="text-white/60 text-lg mb-12">
                            Enter your tracking code to see real-time status updates
                        </p>

                        {/* Tracking Form */}
                        <form onSubmit={handleTrack} className="track-form">
                            <div className="relative max-w-xl mx-auto">
                                <input
                                    type="text"
                                    value={trackingCode}
                                    onChange={(e) => setTrackingCode(e.target.value)}
                                    placeholder="Enter tracking code (e.g., TE123456789)"
                                    className="w-full px-6 py-5 bg-[#1a1b20] border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#00ff88] transition-colors pr-14"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[#00ff88] text-[#0a0b0f] rounded-md hover:bg-[#00ff88]/90 transition-colors"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Tracking Results */}
                {isTracking && (
                    <section className="px-6 md:px-12 py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Tracking Info Card */}
                            <div className="bg-[#1a1b20] border border-white/10 rounded-lg p-8 mb-12">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-white/40 text-xs tracking-widest mb-2">TRACKING CODE</div>
                                        <div className="text-2xl font-light">{trackingCode || "TE123456789"}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white/40 text-xs tracking-widest mb-2">ESTIMATED DELIVERY</div>
                                        <div className="text-xl font-light text-[#00ff88]">Today, 5:30 PM</div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                                    <div>
                                        <div className="text-white/40 text-xs tracking-widest mb-2">FROM</div>
                                        <div className="text-white/80">Kampala Central</div>
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs tracking-widest mb-2">TO</div>
                                        <div className="text-white/80">Nakawa, Kampala</div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Timeline */}
                            <div className="relative">
                                {/* Progress Line */}
                                <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/10">
                                    <div
                                        className="progress-line h-full bg-[#00ff88] origin-left"
                                        style={{ width: `${(currentStatus / (trackingSteps.length - 1)) * 100}%` }}
                                    ></div>
                                </div>

                                {/* Status Steps */}
                                <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {trackingSteps.map((step, index) => (
                                        <div key={index} className="tracking-status flex flex-col items-center text-center">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${index <= currentStatus
                                                        ? "bg-[#00ff88] text-[#0a0b0f]"
                                                        : "bg-[#1a1b20] border border-white/20 text-white/40"
                                                    }`}
                                            >
                                                <step.icon className="w-7 h-7" />
                                            </div>
                                            <div
                                                className={`text-sm font-medium mb-1 ${index <= currentStatus ? "text-white" : "text-white/40"
                                                    }`}
                                            >
                                                {step.label}
                                            </div>
                                            {index === currentStatus && (
                                                <div className="text-xs text-[#00ff88]">Current Status</div>
                                            )}
                                            {index < currentStatus && (
                                                <div className="text-xs text-white/40">Completed</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="mt-16 bg-[#1a1b20] border border-white/10 rounded-lg p-8">
                                <h3 className="text-2xl font-light mb-6">Delivery Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                                        <div className="text-white/40 text-sm w-32">Agent</div>
                                        <div className="flex-1">
                                            <div className="text-white">John Mukasa</div>
                                            <div className="text-white/60 text-sm">Verified Agent • ID: TE-AG-2453</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                                        <div className="text-white/40 text-sm w-32">Vehicle</div>
                                        <div className="flex-1 text-white">Electric Delivery Bike • UBE 215A</div>
                                    </div>
                                    <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                                        <div className="text-white/40 text-sm w-32">Last Update</div>
                                        <div className="flex-1 text-white">Package is out for delivery - 10 mins ago</div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-white/40 text-sm w-32">Contact</div>
                                        <div className="flex-1 text-white">+256 700 123 456</div>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="mt-12 text-center">
                                <p className="text-white/60 mb-4">Need help with your delivery?</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="#"
                                        className="px-6 py-3 border border-white/30 text-white text-sm font-medium tracking-wider hover:bg-white/10 transition-colors"
                                    >
                                        CONTACT SUPPORT
                                    </a>
                                    <a
                                        href="/how-it-works"
                                        className="px-6 py-3 text-[#00ff88] text-sm font-medium tracking-wider hover:text-[#00ff88]/80 transition-colors"
                                    >
                                        HOW TRACKING WORKS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Info Section (when not tracking) */}
                {!isTracking && (
                    <section className="px-6 md:px-12 py-20">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Where's My Tracking Code?</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                    <Smartphone className="w-10 h-10 text-[#00ff88] mx-auto mb-4" />
                                    <h4 className="text-lg font-light mb-2">SMS Confirmation</h4>
                                    <p className="text-white/60 text-sm">
                                        Check your SMS for the tracking code sent after booking
                                    </p>
                                </div>
                                <div className="bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                    <Package className="w-10 h-10 text-[#00ff88] mx-auto mb-4" />
                                    <h4 className="text-lg font-light mb-2">Receipt</h4>
                                    <p className="text-white/60 text-sm">
                                        Your tracking code is printed on your delivery receipt
                                    </p>
                                </div>
                                <div className="bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                    <MapPin className="w-10 h-10 text-[#00ff88] mx-auto mb-4" />
                                    <h4 className="text-lg font-light mb-2">App</h4>
                                    <p className="text-white/60 text-sm">
                                        View all your deliveries and tracking codes in the app
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    )
}

// Add missing import
import { Smartphone } from "lucide-react"
