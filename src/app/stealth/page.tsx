import Link from 'next/link'
import {
  Eye,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Lock,
  Zap,
  Award,
} from 'lucide-react'

export const metadata = {
  title: 'Stealth Hitches Rockville MD | Invisible Trailer Hitches | BMW Audi Land Rover',
  description: 'Professional Stealth Hitch installation in Rockville MD. Invisible hitches for luxury vehicles — BMW, Audi, Land Rover, Mercedes. Preserves aesthetics completely.',
}

export default function StealthPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">Stealth Hitches</p>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Invisible When You<br />
                <span className="text-purple-400">Don't Need It.</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                Tow like a truck. Look like a luxury car. Stealth Hitches retract completely behind
                your bumper — no visible hardware, no drilling, no compromise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Get Stealth Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+13015558734"
                  className="inline-flex items-center justify-center gap-2 border border-[#262626] hover:border-white/20 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Call to Schedule
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">Compatible Vehicles</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'BMW X3, X5, X7',
                    'Audi Q5, Q7, Q8',
                    'Land Rover Defender',
                    'Range Rover Sport',
                    'Mercedes GLE, GLS',
                    'Porsche Cayenne',
                    'Volvo XC90',
                    'And many more...',
                  ].map((vehicle) => (
                    <div key={vehicle} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                      {vehicle}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#262626]">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-black text-white">$849</p>
                      <p className="text-xs text-gray-500">Installed · Lifetime warranty</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-purple-400">Same-week</p>
                      <p className="text-xs text-gray-500">availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">How It Works</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
              Engineering You Can't See
            </h2>
            <p className="text-gray-500">
              Stealth Hitches use a patented retractable receiver system that hides completely
              behind the bumper fascia when not in use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Factory Fit',
                desc: 'The hitch is custom-built for your exact vehicle. No universal fitments — every bracket is vehicle-specific.',
              },
              {
                step: '02',
                title: 'Concealed Install',
                desc: 'Our certified technicians route the hitch behind the bumper. No visible cuts in the fascia. No exposed hardware.',
              },
              {
                step: '03',
                title: 'Pull to Tow',
                desc: 'When you need it, the receiver slides out in seconds. When you don\'t, it disappears completely. Simple.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-6xl font-black text-gray-100 mb-4">{step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {[
                {
                  icon: Eye,
                  title: 'Completely Invisible',
                  desc: 'When retracted, the system is hidden entirely behind the bumper. Detailers, neighbors, and valets will never know.',
                },
                {
                  icon: Shield,
                  title: 'Preserves Your Warranty',
                  desc: 'Factory-spec installation means your vehicle warranty stays intact. No improper drilling or structural modification.',
                },
                {
                  icon: Zap,
                  title: 'Full Towing Capacity',
                  desc: 'Don\'t let the stealth fool you — these hitches carry full Class III towing ratings up to 5,000 lbs.',
                },
                {
                  icon: Award,
                  title: 'Lifetime Warranty',
                  desc: 'Every Stealth Hitch we install is backed by our lifetime labor warranty and manufacturer\'s product warranty.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 p-5 bg-white border border-gray-200 rounded-2xl">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">Customer Reviews</p>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-8">
                Luxury Owners Love It
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Robert Chen',
                    vehicle: 'BMW X5 Owner, Potomac MD',
                    text: 'I was skeptical anything could be truly invisible on an X5. I was completely wrong. My BMW dealer couldn\'t even find it during a service visit.',
                  },
                  {
                    name: 'Amanda Price',
                    vehicle: 'Range Rover Sport, McLean VA',
                    text: 'Needed to tow my horse trailer but couldn\'t deal with a visible hitch on a $90k SUV. Stealth solved it perfectly.',
                  },
                  {
                    name: 'David Nguyen',
                    vehicle: 'Audi Q7, Bethesda MD',
                    text: 'Fast installation, zero visible modification, and it actually tows my boat with no drama. Exactly what was promised.',
                  },
                ].map((review) => (
                  <div key={review.name} className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">"{review.text}"</p>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.vehicle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Book Your Stealth Install</h2>
          <p className="text-gray-400 text-lg mb-4 max-w-lg mx-auto">
            Most Stealth Hitch installs are completed in a single day. Same-week availability in most cases.
          </p>
          <p className="text-2xl font-black text-purple-400 mb-10">From $849 — Lifetime Warranty Included</p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
          >
            Get Stealth Hitch Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
