import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TANDA EXPRESS | Fast Urban Delivery in Kampala",
  description:
    "Fast, reliable parcel delivery across Kampala. Door-to-door service with free pickup, real-time tracking, and secure handling. Send parcels with TANDA EXPRESS today.",
  keywords: ["parcel delivery kampala", "uganda delivery service", "door-to-door delivery", "package tracking", "fast delivery kampala", "tanda express"],
  openGraph: {
    title: "TANDA EXPRESS | Fast Urban Delivery in Kampala",
    description: "Fast, reliable parcel delivery across Kampala with free pickup and real-time tracking.",
    type: "website",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0b0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
