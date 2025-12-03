"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calculator, CreditCard, Smartphone, Banknote, HelpCircle, ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "How is the delivery fee calculated?",
        answer: "Our pricing is based on distance between pickup and delivery locations, parcel size,and delivery speed. Door pickup is always free. You'll see the exact price before confirming your booking.",
    },
    {
        question: "Are there any hidden fees?",
        answer: "No. All fees are shown upfront in the calculator and booking process. What you see is what you pay.",
    },
    {
        question: "Can I pay with Mobile Money?",
        answer: "Yes! We accept MTN Mobile Money, Airtel Money, credit/debit cards, and cash payments.",
    },
    {
        question: "Is door pickup really free?",
        answer: "Yes, we never charge for picking up your parcel. Only the delivery distance and optional door delivery fees apply.",
    },
    {
        question: "What if my parcel is heavy or  large?",
        answer: "Parcels up to 30kg are accepted. Larger or heavier items may require special handling. ContactLet our support team for custom quote.",
    },
]

export default function PricingPage() {
    const [pickupLocation, setPickupLocation] = useState("")
    const [deliveryLocation, setDeliveryLocation] = useState("")
    const [parcelSize, setParcelSize] = useState("small")
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pricing-hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            gsap.from(".calculator-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out",
            })

            gsap.from(".payment-card", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".payment-methods",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.from(".faq-item", {
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                scrollTrigger: {
                    trigger: ".faq-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            })
        }, mainRef)

        return () => ctx.revert()
    }, [])

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock calculation based on size
        const basePrice = parcelSize === "small" ? 5000 : parcelSize === "medium" ? 8000 : 12000
        const distance = Math.random() * 5000 + 3000 // Mock distance calculation
        setCalculatedPrice(Math.round(basePrice + distance))

        // Animate result
        gsap.from(".price-result", {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
        })
    }

    return (
        <div ref={mainRef} className="bg-[#0a0b0f] text-white min-h-screen">
            <Header />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="pricing-hero-title text-5xl md:text-7xl font-light mb-6">
                            Clear Pricing
                            <br />
                            <span className="text-[#00ff88]">No Hidden Fees</span>
                        </h1>
                        <p className="text-white/60 text-lg">
                            Calculate your delivery cost instantly. Transparent pricing you can trust.
                        </p>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="px-6 md:px-12 pb-20">
                    <div className="max-w-2xl mx-auto">
                        <div className="calculator-card bg-[#1a1b20] border border-white/10 rounded-xl p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <Calculator className="w-6 h-6 text-[#00ff88]" />
                                <h2 className="text-2xl font-light">Calculate Delivery Fee</h2>
                            </div>

                            <form onSubmit={handleCalculate} className="space-y-6">
                                <div>
                                    <label className="block text-white/60 text-sm mb-2">Pickup Location</label>
                                    <input
                                        type="text"
                                        value={pickupLocation}
                                        onChange={(e) => setPickupLocation(e.target.value)}
                                        placeholder="e.g., Kampala Central"
                                        className="w-full px-4 py-3 bg-[#0a0b0f] border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#00ff88] transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white/60 text-sm mb-2">Delivery Location</label>
                                    <input
                                        type="text"
                                        value={deliveryLocation}
                                        onChange={(e) => setDeliveryLocation(e.target.value)}
                                        placeholder="e.g., Nakawa"
                                        className="w-full px-4 py-3 bg-[#0a0b0f] border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#00ff88] transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white/60 text-sm mb-2">Parcel Size</label>
                                    <select
                                        value={parcelSize}
                                        onChange={(e) => setParcelSize(e.target.value)}
                                        className="w-full px-4 py-3 bg-[#0a0b0f] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                                    >
                                        <option value="small">Small (up to 5kg)</option>
                                        <option value="medium">Medium (5-15kg)</option>
                                        <option value="large">Large (15-30kg)</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                                >
                                    CALCULATE PRICE
                                </button>
                            </form>

                            {/* Price Result */}
                            {calculatedPrice && (
                                <div className="price-result mt-8 pt-8 border-t border-white/10">
                                    <div className="text-center">
                                        <div className="text-white/60 text-sm mb-2">Estimated Delivery Fee</div>
                                        <div className="text-5xl font-light text-[#00ff88] mb-4">
                                            UGX {calculatedPrice.toLocaleString()}
                                        </div>
                                        <div className="text-white/40 text-sm space-y-1">
                                            <div>✓ Free door pickup included</div>
                                            <div>✓ Real-time tracking included</div>
                                            <div>✓ Secure handling included</div>
                                        </div>
                                        <a
                                            href="/services"
                                            className="inline-block mt-6 px-8 py-3 border border-[#00ff88] text-[#00ff88] font-medium tracking-wider hover:bg-[#00ff88]/10 transition-colors"
                                        >
                                            BOOK NOW
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Payment Methods */}
                <section className="payment-methods py-20 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-light mb-4">Payment Methods</h2>
                            <p className="text-white/60">Multiple secure payment options for your convenience</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="payment-card bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                <Smartphone className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
                                <h4 className="font-light mb-2">MTN Mobile Money</h4>
                                <p className="text-white/60 text-sm">Pay with MTN MoMo</p>
                            </div>

                            <div className="payment-card bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                <Smartphone className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
                                <h4 className="font-light mb-2">Airtel Money</h4>
                                <p className="text-white/60 text-sm">Pay with Airtel Money</p>
                            </div>

                            <div className="payment-card bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                <CreditCard className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
                                <h4 className="font-light mb-2">Card Payment</h4>
                                <p className="text-white/60 text-sm">Visa, Mastercard</p>
                            </div>

                            <div className="payment-card bg-[#1a1b20] border border-white/10 rounded-lg p-6 text-center">
                                <Banknote className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
                                <h4 className="font-light mb-2">Cash</h4>
                                <p className="text-white/60 text-sm">Pay on delivery</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section py-20 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-light mb-4">Pricing FAQs</h2>
                            <p className="text-white/60">Common questions about our pricing</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="faq-item bg-[#1a1b20] border border-white/10 rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex items-start gap-4">
                                            <HelpCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                                            <span className="font-light">{faq.question}</span>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-5 pl-16">
                                            <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-light mb-6">Still Have Questions?</h2>
                        <p className="text-white/60 text-lg mb-12">
                            Our support team is here to help
                        </p>
                        <a
                            href="#"
                            className="inline-block px-8 py-4 bg-[#00ff88] text-[#0a0b0f] font-medium tracking-wider hover:bg-[#00ff88]/90 transition-colors"
                        >
                            CONTACT SUPPORT
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
