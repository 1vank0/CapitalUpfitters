'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Spray-On Bedliners', href: '/spray-on-bedliner' },
  { name: 'Tonneau Covers', href: '/tonneau-covers' },
  { name: 'Hitches & Towing', href: '/hitches-towing' },
  { name: 'Stealth Hitches', href: '/stealth' },
  { name: 'Fleet Solutions', href: '/fleet' },
  { name: 'Government & Municipal', href: '/government' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-[#0a0a0a] text-white sticky top-0 z-50 border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-black text-sm">CU</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Capital <span className="text-red-500">Upfitters</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-[#141414] border border-[#262626] rounded-xl p-2 min-w-[220px] shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1f1f1f] rounded-lg transition-colors duration-150"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/fleet" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Fleet</Link>
            <Link href="/government" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Government</Link>
            <Link href="/gallery" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Gallery</Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">About</Link>
            <Link href="/reviews" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Reviews</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+13015558734"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4 text-red-500" />
              (301) 555-8734
            </a>

            <Link
              href="/quote"
              className="bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Quote
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-[#262626]">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1f1f1f] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="h-px bg-[#262626] my-3" />
            {[
              { name: 'Fleet', href: '/fleet' },
              { name: 'Government', href: '/government' },
              { name: 'Gallery', href: '/gallery' },
              { name: 'About', href: '/about' },
              { name: 'Reviews', href: '/reviews' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1f1f1f] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <a href="tel:+13015558734" className="flex items-center gap-2 text-sm text-red-400 font-medium">
                <Phone className="h-4 w-4" />
                (301) 555-8734
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
