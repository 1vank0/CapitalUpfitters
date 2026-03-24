import Link from 'next/link'
import { Star, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Customer Reviews | Capital Upfitters | 5-Star Auto Upfitting',
  description: '5-star reviews for Capital Upfitters Rockville MD. Read what customers say about our bedliner, tonneau cover, fleet upfitting, and stealth hitch installations.',
}

const reviews = [
  {
    name: 'Michael Torres',
    role: 'Fleet Manager, Montgomery County DPW',
    service: 'Fleet Upfitting',
    rating: 5,
    text: 'Capital Upfitters has handled our entire county fleet for three years. Consistent quality, on-time delivery, and pricing that actually works for public sector budgets. Every truck has come out exactly to spec.',
  },
  {
    name: 'Sarah Kim',
    role: 'Owner, Kim\'s Landscaping, Rockville MD',
    service: 'Spray-On Bedliner',
    rating: 5,
    text: 'The spray-on bedliner looks factory-installed. My truck hauls gravel, mulch, and equipment daily and hasn\'t shown a single mark in two years. Worth every dollar.',
  },
  {
    name: 'Robert Chen',
    role: 'BMW X5 Owner, Potomac MD',
    service: 'Stealth Hitch',
    rating: 5,
    text: 'I was genuinely skeptical a hitch could be completely invisible on an X5. My BMW dealer couldn\'t find it during a service visit. Premium craftsmanship.',
  },
  {
    name: 'Dave Kowalski',
    role: 'F-250 Owner, Frederick MD',
    service: 'Tonneau Cover + Bedliner',
    rating: 5,
    text: 'Been coming here for 12 years across three different trucks. The quality is always perfect and they treat you like a person, not a transaction. That\'s increasingly rare.',
  },
  {
    name: 'Lisa Patel',
    role: 'Small Business Owner, Bethesda MD',
    service: 'Fleet Upfitting (8 vehicles)',
    rating: 5,
    text: 'Outfitted our entire 8-vehicle delivery fleet over two weeks. Same quality on truck #8 as truck #1. That consistency across a fleet build is hard to find.',
  },
  {
    name: 'Amanda Price',
    role: 'Range Rover Sport Owner, McLean VA',
    service: 'Stealth Hitch',
    rating: 5,
    text: 'Needed to tow my horse trailer but couldn\'t live with a visible hitch on a $95k SUV. Stealth solved it perfectly. The installation was clean, fast, and professional.',
  },
  {
    name: 'Marcus Webb',
    role: 'VP Operations, Regional Utilities Co.',
    service: 'Fleet Build — 42 Vehicles',
    rating: 5,
    text: 'We needed 42 trucks built to identical specs for a territory expansion. Capital Upfitters delivered in batches of 10 over six weeks. Every truck was identical. The savings vs. dealer were substantial.',
  },
  {
    name: 'James Walters',
    role: 'Audi Q7 Owner, Bethesda MD',
    service: 'Stealth Hitch',
    rating: 5,
    text: 'Fast installation, zero visible modification to the bumper, and it tows my boat with zero drama. Exactly what was promised and exactly what was delivered.',
  },
  {
    name: 'Patricia Nguyen',
    role: 'F-150 Owner, Gaithersburg MD',
    service: 'Spray-On Bedliner + Hitch',
    rating: 5,
    text: 'One-stop shop. Got the bedliner and the hitch installed the same day. Clean work, no surprises on price, and they walked me through the whole job afterward. Highly recommend.',
  },
]

export default function ReviewsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">Reviews</p>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              What Our Customers <span className="text-red-500">Say</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              35+ years and 1,000+ vehicles. Here's what the people who trust us with their trucks have to say.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '4.9', label: 'Average Rating', sub: 'Out of 5 stars' },
              { value: '1,000+', label: 'Customers Served', sub: 'Since 1989' },
              { value: '98%', label: 'Would Recommend', sub: 'Based on surveys' },
              { value: '5★', label: 'Google Rating', sub: 'Verified reviews' },
            ].map(({ value, label, sub }) => (
              <div key={label}>
                <div className="text-3xl font-black text-gray-900 mb-1">{value}</div>
                <div className="text-sm font-semibold text-gray-700">{label}</div>
                <div className="text-xs text-gray-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review) => (
              <div key={review.name} className="break-inside-avoid bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="inline-block text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full mb-4">
                  {review.service}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Join 1,000+ Happy Customers</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Get a free quote and see why DC Metro truck owners trust Capital Upfitters.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
          >
            Get Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
