import Link from 'next/link'
import {
  Truck,
  Users,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  TrendingDown,
} from 'lucide-react'

export const metadata = {
  title: 'Fleet Upfitting Solutions | Commercial Vehicle Customization | Capital Upfitters',
  description: 'Professional fleet upfitting for 25+ vehicle operations. Bulk pricing, standardized specs, minimal downtime. Serving DC Metro commercial fleets.',
}

export default function FleetPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">Fleet Solutions</p>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Upfitting Built for <span className="text-orange-400">Operations</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                Bulk pricing, standardized specs, coordinated scheduling. We handle fleet upfitting
                the way fleet managers need it — on time, on spec, and on budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Request Fleet Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+13015558734"
                  className="inline-flex items-center justify-center gap-2 border border-[#262626] hover:border-white/20 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Call Fleet Team
                </a>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: '25+', label: 'Min. Fleet Size' },
                { value: '$650', label: 'Starting Per Vehicle' },
                { value: '48hr', label: 'Avg. Turnaround' },
                { value: '100%', label: 'Spec Compliance' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                  <div className="text-3xl font-black text-orange-400 mb-1">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet advantages */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Why Fleets Choose Us</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
              Fleet Operations Are Our Specialty
            </h2>
            <p className="text-gray-500 text-lg">
              We understand that every day a vehicle sits in our shop is a day it's not working for you.
              Our fleet process is engineered to minimize your downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Volume Pricing',
                desc: 'Tiered pricing starting at 25 vehicles. The larger your fleet, the more you save. Transparent, upfront quotes with no hidden fees.',
              },
              {
                icon: Shield,
                title: 'Standardized Specs',
                desc: 'We build to your exact specification for every vehicle. Consistent results across your entire fleet, every time.',
              },
              {
                icon: Calendar,
                title: 'Scheduled Batches',
                desc: 'Work with our fleet coordinator to batch vehicles on a schedule that fits your operational calendar.',
              },
              {
                icon: Clock,
                title: 'Minimal Downtime',
                desc: 'Most individual fleet vehicles are turned around within 48 hours. Multi-vehicle batches are scheduled to keep your fleet moving.',
              },
              {
                icon: Users,
                title: 'Dedicated Account Rep',
                desc: 'Fleet clients get a single point of contact. No playing phone tag with the front desk — your rep knows your account.',
              },
              {
                icon: TrendingDown,
                title: 'Proven Cost Savings',
                desc: 'Spray-on bedliners reduce bed replacement costs by 85%. Tonneau covers improve fuel economy up to 10%. Real ROI.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 bg-white border border-gray-200 rounded-2xl hover:border-orange-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Fleet Package Includes</p>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6">
                Everything Your Fleet Needs
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our fleet packages are fully customizable. Start with the essentials and add services
                based on your operational requirements and budget.
              </p>
              <ul className="space-y-3">
                {[
                  'Spray-on bedliner protection',
                  'Folding or roll-up tonneau covers',
                  'Receiver hitch installation',
                  'Trailer wiring and brake controllers',
                  'Cargo management systems',
                  'Tool box and equipment mounting',
                  'Fleet graphics coordination',
                  'Warranty documentation package',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing tiers */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Volume Pricing Tiers</p>
              {[
                { tier: 'Small Fleet', range: '25–49 Vehicles', price: '$650/vehicle', desc: 'Core upfitting package with standard specs' },
                { tier: 'Mid Fleet', range: '50–99 Vehicles', price: '$595/vehicle', desc: 'Priority scheduling + dedicated account rep' },
                { tier: 'Large Fleet', range: '100+ Vehicles', price: 'Custom', desc: 'Full enterprise terms, multi-site coordination' },
              ].map(({ tier, range, price, desc }, idx) => (
                <div key={tier} className={`p-6 rounded-2xl border ${idx === 1 ? 'border-orange-300 bg-orange-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{tier}</p>
                      <p className="text-xs text-gray-500">{range}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-black ${idx === 1 ? 'text-orange-600' : 'text-gray-900'}`}>{price}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              ))}
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all duration-150 text-sm mt-4"
              >
                Request Fleet Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Customer Story</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900">Fleet Results That Speak</h2>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {[
                { metric: '42 vehicles', label: 'Fleet Size' },
                { metric: '6 weeks', label: 'Total Build Time' },
                { metric: '$27,300', label: 'Total Savings vs. Dealer' },
              ].map(({ metric, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-orange-500 mb-1">{metric}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
            <blockquote className="text-gray-700 text-base leading-relaxed italic mb-6">
              "We needed 42 trucks upfitted to identical specs for our new MD/VA territory expansion.
              Capital Upfitters built them in batches of 10 over six weeks. Every truck came out identical.
              The savings vs. going through the dealership were substantial."
            </blockquote>
            <div>
              <p className="text-sm font-semibold text-gray-900">Marcus Webb</p>
              <p className="text-xs text-gray-500">VP Operations, Regional Utilities Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Let's Build Your Fleet</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Tell us your fleet size and we'll put together a custom proposal within 24 hours.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
          >
            Request Fleet Proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
