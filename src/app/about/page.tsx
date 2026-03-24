import Link from 'next/link'
import {
  Award,
  Users,
  Shield,
  Heart,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
} from 'lucide-react'

export const metadata = {
  title: 'About Capital Upfitters | 35+ Years Truck Customization | Rockville MD',
  description: 'Family-owned auto upfitting specialists serving DC Metro since 1989. Factory-certified installers, lifetime warranties, and 1,000+ happy customers.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">Our Story</p>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Family-Owned.<br />
              <span className="text-red-500">Community Trusted.</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              We opened in Rockville in 1989 with two bays and a simple promise: do honest work at fair prices.
              Thirty-five years later, that hasn't changed — we've just added more lifts.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '1989', label: 'Founded in Rockville' },
              { value: '35+', label: 'Years of Experience' },
              { value: '1,000+', label: 'Vehicles Upfitted' },
              { value: '100%', label: 'Satisfaction Guarantee' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">Who We Are</p>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6">
                Built for Trucks. Built for DC.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Capital Upfitters started as a one-man operation out of a Rockville garage. The founder,
                  a former fleet mechanic for the federal government, had a simple vision: bring professional-grade
                  truck customization to the DC Metro area without the dealership markup or the corporate runaround.
                </p>
                <p>
                  That first year we installed 47 bedliners. Today we handle hundreds of vehicles annually —
                  from individual truck owners to county fleet departments to luxury European car owners who
                  want a hitch no one can see.
                </p>
                <p>
                  We've never outsourced a job. Every installation is done in our Rockville facility
                  by our own certified technicians. When something needs to be made right, we make it right —
                  that's what a lifetime warranty actually means.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Heart,
                  title: 'Family Owned & Operated',
                  desc: 'No corporate shareholders. When you talk to us, you\'re talking to people who actually care about the outcome.',
                },
                {
                  icon: Shield,
                  title: 'Lifetime Warranty',
                  desc: 'Every installation we perform is covered for life. Not a year. Not five years. Life.',
                },
                {
                  icon: Award,
                  title: 'Factory-Certified Installers',
                  desc: 'Our technicians are certified by LINE-X, DRAW-TITE, and RETRAX. Not self-taught. Not YouTube-trained.',
                },
                {
                  icon: Clock,
                  title: 'Same-Week Turnaround',
                  desc: 'Most single-vehicle jobs are completed within 48 hours. Fleet builds are scheduled on your timeline.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">Credentials</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
              Certified. Licensed. Insured.
            </h2>
            <p className="text-gray-500">
              Our team holds factory certifications from the brands we install, ensuring
              manufacturer warranties remain valid on your vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { cert: 'LINE-X Certified Installer', detail: 'Factory-trained spray-on bedliner application' },
              { cert: 'DRAW-TITE Authorized Dealer', detail: 'Hitch and towing system installation' },
              { cert: 'RETRAX Authorized Dealer', detail: 'Retractable tonneau cover installation' },
              { cert: 'Stealth Hitch Installer', detail: 'Invisible hitch systems for luxury vehicles' },
              { cert: 'SEMA Member', detail: 'Specialty Equipment Market Association' },
              { cert: 'Maryland State Licensed', detail: 'Licensed automotive installation facility' },
            ].map(({ cert, detail }) => (
              <div key={cert} className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{cert}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-3">What People Say</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900">35 Years of Happy Customers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Dave Kowalski',
                role: 'F-250 Owner, Frederick MD',
                text: 'Been coming here for 12 years. They\'ve done three of my trucks. Quality is always perfect and they treat you like a person, not a transaction.',
              },
              {
                name: 'Lisa Patel',
                role: 'Small Business Owner, Bethesda',
                text: 'Outfitted our entire 8-vehicle delivery fleet. Same quality on truck #8 as truck #1. That consistency is rare.',
              },
              {
                name: 'Robert Chen',
                role: 'BMW Owner, Potomac MD',
                text: 'I was skeptical a hitch could be truly invisible on my X5. I was wrong. You genuinely cannot tell it\'s there when not in use. Remarkable work.',
              },
            ].map((review) => (
              <div key={review.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
              Read all reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Come Meet the Team</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Stop by our Rockville shop or call ahead. We're happy to walk through your project before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#262626] hover:border-white/30 hover:bg-white/5 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
