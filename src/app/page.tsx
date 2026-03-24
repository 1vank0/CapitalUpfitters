import Link from 'next/link'
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  Truck,
  Users,
  Award,
  Zap,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        {/* Subtle red glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                Rockville, MD · Since 1989
              </div>

              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 text-balance">
                DC Metro's{' '}
                <span className="text-red-500">#1</span>{' '}
                Truck & Fleet Upfitters
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
                From spray-on bedliners to full fleet customization — professional installations
                backed by lifetime warranties and 35+ years of trusted service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Get a free quote"
                >
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+13015558734"
                  className="inline-flex items-center justify-center gap-2 border border-[#262626] hover:border-white/30 hover:bg-white/5 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
                >
                  <Phone className="h-4 w-4 text-red-500" />
                  (301) 555-8734
                </a>
              </div>

              {/* Trust bar */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-[#0a0a0a]" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">1,000+ happy customers</p>
                </div>
                <div className="h-6 w-px bg-[#262626]" />
                <p className="text-xs text-gray-500">Lifetime warranty on all work</p>
              </div>
            </div>

            {/* Stats panel */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: '35+', label: 'Years in Business', icon: Award },
                { value: '1,000+', label: 'Vehicles Upfitted', icon: Truck },
                { value: '5★', label: 'Average Rating', icon: Star },
                { value: '60mi', label: 'DC Metro Coverage', icon: MapPin },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="bg-[#141414] border border-[#262626] rounded-2xl p-6 hover:border-red-600/30 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-red-500 mb-3" />
                  <div className="text-3xl font-black text-white mb-1">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4">
              Full-Service Truck Customization
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Every installation is backed by our certified technicians and lifetime warranty.
              No shortcuts — just professional work done right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Spray-On Bedliners',
                desc: 'Industrial-grade polyurethane protection. Custom color matching available. Won\'t crack, peel, or fade.',
                price: 'From $549',
                href: '/spray-on-bedliner',
                badge: 'Most Popular',
                color: 'red',
              },
              {
                title: 'Tonneau Covers',
                desc: 'Roll-up, folding, retractable, and hard covers. All major brands. Improve fuel economy up to 10%.',
                price: 'From $299',
                href: '/tonneau-covers',
                badge: null,
                color: 'gray',
              },
              {
                title: 'Hitches & Towing',
                desc: 'Receiver hitches, brake controllers, wiring, and fifth-wheel preps. Any vehicle, any class.',
                price: 'From $199',
                href: '/hitches-towing',
                badge: null,
                color: 'gray',
              },
              {
                title: 'Stealth Hitches',
                desc: 'Invisible when not in use. Perfect for BMW, Audi, Mercedes, Land Rover. Zero visible cutting.',
                price: 'From $849',
                href: '/stealth',
                badge: 'Luxury',
                color: 'purple',
              },
              {
                title: 'Fleet Solutions',
                desc: 'Bulk pricing for 25+ vehicle operations. Standardized specs, coordinated scheduling, volume discounts.',
                price: 'From $650/vehicle',
                href: '/fleet',
                badge: 'Enterprise',
                color: 'orange',
              },
              {
                title: 'Government & Municipal',
                desc: 'RFP-ready fleet upfitting for public sector agencies. Compliance-certified with municipal references.',
                price: 'Custom Pricing',
                href: '/government',
                badge: 'RFP Ready',
                color: 'blue',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:border-red-200 hover:shadow-lg transition-all duration-200"
              >
                {service.badge && (
                  <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    service.color === 'red' ? 'bg-red-50 text-red-600' :
                    service.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    service.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                    service.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {service.badge}
                  </span>
                )}
                <div className="mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    service.color === 'red' ? 'bg-red-50' :
                    service.color === 'purple' ? 'bg-purple-50' :
                    service.color === 'orange' ? 'bg-orange-50' :
                    service.color === 'blue' ? 'bg-blue-50' :
                    'bg-gray-100'
                  }`}>
                    <Truck className={`h-5 w-5 ${
                      service.color === 'red' ? 'text-red-600' :
                      service.color === 'purple' ? 'text-purple-600' :
                      service.color === 'orange' ? 'text-orange-600' :
                      service.color === 'blue' ? 'text-blue-600' :
                      'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">{service.price}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-150" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CAPITAL UPFITTERS ──────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">Why Choose Us</p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-6">
                35 Years of Doing It Right
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                We've been in Rockville since 1989 — before anyone else was upfitting fleets in the
                DC Metro area. Every technician is factory-certified, every install carries a lifetime
                warranty, and we stand behind every job.
              </p>

              <ul className="space-y-5">
                {[
                  { text: 'Lifetime warranty on all installations', icon: Shield },
                  { text: 'Factory-certified installers on staff', icon: Award },
                  { text: 'Same-day quotes — no runaround', icon: Zap },
                  { text: 'Fleet pricing for 25+ vehicle operations', icon: Users },
                  { text: 'Serving MD, DC, NoVA, and Baltimore', icon: MapPin },
                ].map(({ text, icon: Icon }) => (
                  <li key={text} className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social proof */}
            <div className="space-y-4">
              {[
                {
                  name: 'Michael Torres',
                  role: 'Fleet Manager, Montgomery County DPW',
                  review: 'Capital Upfitters has handled our entire county fleet for three years. Consistent quality, on-time delivery, and pricing that works for public sector budgets.',
                  rating: 5,
                },
                {
                  name: 'Sarah Kim',
                  role: 'Owner, Kim\'s Landscaping',
                  review: 'Spray-on bedliner looks factory-installed. The truck hauls gravel daily and hasn\'t shown a mark. Worth every penny.',
                  rating: 5,
                },
                {
                  name: 'James Walters',
                  role: 'BMW X5 Owner',
                  review: 'The stealth hitch is completely invisible — my neighbors had no idea it was there. Premium install, no drilling visible.',
                  rating: 5,
                },
              ].map((review) => (
                <div key={review.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.review}"</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / LOCATION ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Location info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">Visit Us</p>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-8">
                Come See the Shop
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, title: 'Rockville, MD', sub: 'Serving 60-mile DC Metro radius — MD, DC, NoVA, Baltimore' },
                  { icon: Clock, title: 'Mon–Fri: 8AM–6PM', sub: 'Saturday: 8AM–4PM · Sunday: Closed' },
                  { icon: Phone, title: '(301) 555-8734', sub: 'Call or text for same-day quotes', href: 'tel:+13015558734' },
                ].map(({ icon: Icon, title, sub, href }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      {href ? (
                        <a href={href} className="text-base font-semibold text-gray-900 hover:text-red-600 transition-colors">{title}</a>
                      ) : (
                        <p className="text-base font-semibold text-gray-900">{title}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Certifications & Affiliations</p>
                <div className="flex flex-wrap gap-3">
                  {['SEMA Member', 'LINE-X Certified', 'DRAW-TITE Installer', 'RETRAX Dealer', 'Lifetime Warranty'].map((cert) => (
                    <span key={cert} className="flex items-center gap-1.5 text-xs font-medium bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
              <p className="text-sm text-gray-500 mb-8">Usually respond within 2 hours during business hours.</p>

              <form className="space-y-4" aria-label="Quote request form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-xs font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(301) 555-0000"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1.5">Service Needed</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  >
                    <option value="">Select a service...</option>
                    <option>Spray-On Bedliner</option>
                    <option>Tonneau Cover</option>
                    <option>Hitch Installation</option>
                    <option>Stealth Hitch (Luxury)</option>
                    <option>Fleet Upfitting</option>
                    <option>Government / Municipal</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">Project Details</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your vehicle and what you need..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold py-4 rounded-xl transition-all duration-150 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Send Quote Request
                </button>

                <p className="text-xs text-center text-gray-400">No spam. We'll respond within 2 business hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Ready to Upfit Your Vehicle?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Most installs completed same week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-[#262626] hover:border-white/30 hover:bg-white/5 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
