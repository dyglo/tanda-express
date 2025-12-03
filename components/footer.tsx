import FlexisLogo from "./flexis-logo"

export default function Footer() {
  return (
    <footer className="bg-[#0a0b0f] border-t border-white/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <FlexisLogo className="w-8 h-8" />
              <span className="text-white font-medium tracking-[0.3em] text-sm">TANDA EXPRESS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Fast, reliable parcel delivery across Kampala with free pickup and real-time tracking.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/40 text-xs tracking-widest mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Pricing", href: "/pricing" },
                { name: "Locations", href: "/locations" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 text-xs tracking-widest mb-6">SUPPORT</h4>
            <ul className="space-y-3">
              {[
                { name: "Track Package", href: "/track" },
                { name: "About", href: "/about" },
                { name: "Help Center", href: "#" },
                { name: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 text-xs tracking-widest mb-6">LEGAL</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2025 TANDA EXPRESS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Twitter", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
