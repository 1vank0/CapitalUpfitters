import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Get a Free Quote | Capital Upfitters Rockville MD',
  description: 'Request a free quote from Capital Upfitters. Spray-on bedliners, tonneau covers, hitches, fleet upfitting. Same-day quotes. Rockville MD.',
}

export default function QuotePage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">Free Quote</p>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Get Your <span className="text-red-500">Free Quote</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Fill out the form and we'll get back to you within 2 business hours.
              No obligation. No runaround. Just a straight price.
            </p>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Side info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">What Happens Next</h2>
              <ol className="space-y-5 mb-10">
                {[
                  { step: '01', text: 'Submit your project details below' },
                  { step: '02', text: 'We review and prepare your custom quote' },
                  { step: '03', text: 'We call or email within 2 business hours' },
                  { step: '04', text: 'Schedule your installation at your convenience' },
                ].map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="text-2xl font-black text-gray-200 w-8 flex-shrink-0">{step}</span>
                    <span className="text-sm text-gray-600 mt-1.5">{text}</span>
                  </li>
                ))}
              </ol>

              <div className="border border-gray-200 rounded-2xl p-5 mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-1">Prefer to call?</p>
                <a href="tel:+13015558734" className="text-base font-bold text-red-600 hover:text-red-700 transition-colors">
                  (301) 555-8734
                </a>
                <p className="text-xs text-gray-500 mt-1">Mon–Fri 8AM–6PM · Sat 8AM–4PM</p>
              </div>

              <div className="space-y-2">
                {['No obligation quote', 'Same-day response', 'Lifetime warranties on all work', 'Fleet pricing available'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tell Us About Your Project</h3>

              <form className="space-y-5" aria-label="Quote request form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="q-first" className="block text-xs font-semibold text-gray-700 mb-1.5">First Name *</label>
                    <input id="q-first" type="text" required placeholder="John"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label htmlFor="q-last" className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name *</label>
                    <input id="q-last" type="text" required placeholder="Smith"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="q-email" className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input id="q-email" type="email" required placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label htmlFor="q-phone" className="block text-xs font-semibold text-gray-700 mb-1.5">Phone *</label>
                    <input id="q-phone" type="tel" required placeholder="(301) 555-0000"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="q-year" className="block text-xs font-semibold text-gray-700 mb-1.5">Vehicle Year</label>
                    <input id="q-year" type="text" placeholder="2024"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label htmlFor="q-vehicle" className="block text-xs font-semibold text-gray-700 mb-1.5">Vehicle Make & Model</label>
                    <input id="q-vehicle" type="text" placeholder="Ford F-150"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
                  </div>
                </div>

                <div>
                  <label htmlFor="q-service" className="block text-xs font-semibold text-gray-700 mb-1.5">Service Needed *</label>
                  <select id="q-service" required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                    <option value="">Select a service...</option>
                    <option>Spray-On Bedliner</option>
                    <option>Tonneau Cover</option>
                    <option>Hitch Installation</option>
                    <option>Stealth Hitch (Luxury)</option>
                    <option>Fleet Upfitting (25+ vehicles)</option>
                    <option>Government / Municipal Fleet</option>
                    <option>Lift Kit / Leveling</option>
                    <option>Multiple Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="q-details" className="block text-xs font-semibold text-gray-700 mb-1.5">Project Details</label>
                  <textarea id="q-details" rows={4} placeholder="Tell us more about your project. Fleet size, specific requirements, timeline preferences..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none" />
                </div>

                <button type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold py-4 rounded-xl transition-all duration-150 text-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  Submit Quote Request
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs text-center text-gray-400">
                  We'll respond within 2 business hours. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
