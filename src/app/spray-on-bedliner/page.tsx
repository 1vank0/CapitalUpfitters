import Link from 'next/link'
import { Shield, CheckCircle, Star, ArrowRight, Award, Zap, Droplets } from 'lucide-react'

export const metadata = {
  title: 'Spray-On Bedliners Rockville MD | LINE-X Certified | Capital Upfitters',
  description: 'Professional spray-on bedliner installation in Rockville MD. LINE-X certified, lifetime warranty, custom colors. Starting at $549. DC Metro\'s top bedliner shop.',
}

export default function SprayOnBedlinerPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">Spray-On Bedliners</p>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Protection That <span className="text-red-500">Won't Peel.</span><br />
                Won't Crack. Won't Fail.
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                Industrial-grade polyurethane permanently bonded to your truck bed. Protects against
                dents, rust, chemicals, and UV. Backed by a lifetime warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Get Bedliner Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+13015558734"
                  className="inline-flex items-center justify-center gap-2 border border-[#262626] hover:border-white/20 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Call for Pricing
                </a>
              </div>
              <p className="text-2xl font-black text-red-400">From $549 · Lifetime Warranty</p>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: 'LINE-X', label: 'Certified Installer' },
                { value: '100%', label: 'Rust Prevention' },
                { value: 'Lifetime', label: 'Warranty Included' },
                { value: '1-Day', label: 'Installation Time' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                  <div className="text-2xl font-black text-red-400 mb-1">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">Why Spray-On</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
              Drop-In Liners Don't Compare
            </h2>
            <p className="text-gray-500 text-lg">
              Plastic drop-in liners trap moisture, scratch your paint, and eventually crack and shift.
              Spray-on bedliners permanently bond to the metal for protection that lasts the life of the truck.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Shield,
                title: 'Impact Resistant',
                desc: 'Absorbs impacts from gravel, tools, and heavy loads without cracking or chipping.',
              },
              {
                icon: Droplets,
                title: 'Waterproof',
                desc: 'Creates a seamless, watertight barrier. No pooling water. No hidden rust.',
              },
              {
                icon: Award,
                title: 'UV Stable',
                desc: 'Won\'t fade, chalk, or discolor in sun. The color you choose stays the color you have.',
              },
              {
                icon: Zap,
                title: 'Non-Slip Surface',
                desc: 'Textured finish prevents cargo from sliding and gives you grip when you\'re loading.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Spray-On vs. Drop-In</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-green-700 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Spray-On Bedliner
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Permanently bonded — can\'t shift or rattle',
                    'Seamless — no water or debris traps',
                    'Won\'t scratch paint under liner',
                    'Custom color matching',
                    'Lifetime warranty',
                    'Increases resale value',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-red-600 mb-4">✕ Drop-In Liner</p>
                <ul className="space-y-2.5">
                  {[
                    'Shifts and rattles in the bed',
                    'Traps moisture — causes hidden rust',
                    'Slides around and scratches paint',
                    'Limited color options',
                    'Cracks and warps over time',
                    'Reduces resale value',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">Pricing</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
              Straightforward Pricing
            </h2>
            <p className="text-gray-500">No hidden fees. The price we quote is the price you pay.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                tier: 'Standard',
                price: '$549',
                desc: 'Full bed coverage, standard texture, black or charcoal',
                items: ['Full bed coverage', 'Standard texture', 'Black / charcoal color', 'Lifetime warranty'],
              },
              {
                tier: 'Color Match',
                price: '$649',
                desc: 'All standard features plus custom color to match your truck',
                items: ['Full bed coverage', 'Standard texture', 'Custom color match', 'Lifetime warranty'],
                highlight: true,
              },
              {
                tier: 'Full Exterior',
                price: 'Custom',
                desc: 'Extend coverage to rocker panels, fenders, or full exterior',
                items: ['Full bed coverage', 'Extended coverage areas', 'Custom texture options', 'Lifetime warranty'],
              },
            ].map(({ tier, price, desc, items, highlight }) => (
              <div key={tier} className={`p-7 rounded-2xl border ${highlight ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'}`}>
                <p className="text-sm font-bold text-gray-900 mb-1">{tier}</p>
                <p className="text-3xl font-black mb-1 ${highlight ? 'text-red-600' : 'text-gray-900'}">{price}</p>
                <p className="text-xs text-gray-500 mb-5">{desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-150 ${
                    highlight
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Ready to Protect Your Bed?</h2>
          <p className="text-gray-400 text-lg mb-4 max-w-lg mx-auto">
            Most bedliner installs are completed same-day. Drop your truck off in the morning, pick it up that afternoon.
          </p>
          <p className="text-2xl font-black text-red-400 mb-10">From $549 · LINE-X Certified · Lifetime Warranty</p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
          >
            Get Bedliner Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
