import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-black text-sm">CU</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Capital <span className="text-red-500">Upfitters</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Rockville's premier truck and fleet customization shop. Serving the DC Metro area since 1989.
            </p>
            <p className="text-xs text-gray-600">Licensed · Insured · Family Owned</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Spray-On Bedliners', href: '/spray-on-bedliner' },
                { name: 'Tonneau Covers', href: '/tonneau-covers' },
                { name: 'Hitches & Towing', href: '/hitches-towing' },
                { name: 'Stealth Hitches', href: '/stealth' },
                { name: 'Fleet Solutions', href: '/fleet' },
                { name: 'Government & Municipal', href: '/government' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Blog', href: '/blog' },
                { name: 'Service Areas', href: '/service-areas' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Rockville, MD</p>
                  <p className="text-xs text-gray-500">Serving 60-mile DC Metro radius</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a href="tel:+13015558734" className="text-sm text-gray-300 hover:text-white transition-colors">(301) 555-8734</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a href="mailto:info@capitalupfitters.com" className="text-sm text-gray-300 hover:text-white transition-colors">info@capitalupfitters.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Mon–Fri: 8AM–6PM</p>
                  <p className="text-xs text-gray-500">Sat: 8AM–4PM · Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f1f1f] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2026 Capital Upfitters. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">Privacy</Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
