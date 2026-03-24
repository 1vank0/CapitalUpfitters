import Link from 'next/link'
import { Phone, MapPin, Clock, Mail, MessageSquare, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Contact Capital Upfitters | Truck Accessories Rockville MD',
  description: 'Contact Capital Upfitters in Rockville MD. Get free quotes, directions, and expert advice on truck accessories, auto upfitting, and fleet customization.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">Contact Us</p>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Let's Talk About Your <span className="text-red-500">Build</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you have a quick question or a full fleet project — we respond fast and give you a straight answer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: Phone,
                    title: '(301) 555-8734',
                    sub: 'Call or text for same-day quotes',
                    href: 'tel:+13015558734',
                  },
                  {
                    icon: Mail,
                    title: 'info@capitalupfitters.com',
                    sub: 'Email — we respond within 2 business hours',
                    href: 'mailto:info@capitalupfitters.com',
                  },
                  {
                    icon: MapPin,
                    title: 'Rockville, MD',
                    sub: 'Serving 60-mile DC Metro radius',
                    href: null,
                  },
                  {
                    icon: Clock,
                    title: 'Mon–Fri: 8AM–6PM',
                    sub: 'Saturday: 8AM–4PM · Sunday: Closed',
                    href: null,
                  },
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

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-sm font-semibold text-gray-900 mb-1">Fast Response Guarantee</p>
                <p className="text-sm text-gray-500">
                  We respond to all quote requests within 2 business hours. If you submit after hours,
                  you'll hear from us first thing the next morning.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 mb-8">Quote requests, questions, or fleet inquiries — use this form.</p>

              <form className="space-y-4" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-first" className="block text-xs font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input
                      id="contact-first"
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last" className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input
                      id="contact-last"
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 mb-1.5">Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="(301) 555-0000"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-type" className="block text-xs font-semibold text-gray-700 mb-1.5">Inquiry Type</label>
                  <select
                    id="contact-type"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  >
                    <option value="">Select type...</option>
                    <option>Quote Request</option>
                    <option>Fleet Inquiry</option>
                    <option>Government / RFP</option>
                    <option>General Question</option>
                    <option>Warranty / Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your vehicle or project..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold py-4 rounded-xl transition-all duration-150 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
