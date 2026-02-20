import Link from 'next/link'
import { Phone, MapPin, Clock, Mail, MessageSquare } from 'lucide-react'

export const metadata = {
  title: 'Contact Capital Upfitters | Truck Accessories Rockville MD',
  description: 'Contact Capital Upfitters in Rockville MD for truck accessories, auto upfitting, and fleet customization. Get free quotes, directions, and expert advice.',
  keywords: 'contact capital upfitters, rockville md, truck accessories, auto upfitting, free quote, directions',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-red-500">Capital Upfitters</h1>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="font-semibold">(301) 555-UPFIT</span>
              </div>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">Contact Capital Upfitters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to upgrade your truck? Get expert advice, free quotes, and professional 
              installation from Rockville's trusted auto upfitting specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our experts for instant quotes and advice.
              </p>
              <a href="tel:+13015558734" className="text-2xl font-bold text-red-600 hover:text-red-700 transition">
                (301) 555-UPFIT
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri: 8AM-6PM • Sat: 8AM-4PM</p>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visit Our Shop</h3>
              <p className="text-gray-600 mb-6">
                See our work firsthand and discuss your project in person.
              </p>
              <div className="text-lg font-semibold">Rockville, MD</div>
              <p className="text-gray-600 mt-2">Serving 60-mile radius<br/>DC Metro • NoVA • Baltimore</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send detailed project info for comprehensive quotes.
              </p>
              <a href="mailto:info@capitalupfitters.com" className="text-lg font-semibold text-green-600 hover:text-green-700 transition">
                info@capitalupfitters.com
              </a>
              <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h3>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll provide a detailed quote with pricing and timeline.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold mb-4">Vehicle Information</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                    <input type="text" required placeholder="e.g. 2022" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                    <input type="text" required placeholder="e.g. Ford" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                    <input type="text" required placeholder="e.g. F-150" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold mb-4">Services of Interest *</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Spray-On Bedliner',
                    'Tonneau Cover',
                    'Hitch Installation',
                    'Lift Kit / Leveling',
                    'Window Tinting',
                    'Nerf Bars / Running Boards',
                    'Tool Boxes / Storage',
                    'Lighting / LED',
                    'Fleet Customization',
                    'Other Accessories'
                  ].map((service) => (
                    <label key={service} className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline & Budget */}
              <div className="grid md:grid-cols-2 gap-6 border-t border-gray-200 pt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option>ASAP</option>
                    <option>This week</option>
                    <option>Within 2 weeks</option>
                    <option>Within a month</option>
                    <option>Just researching</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option>Under $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000+</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us about your project, specific needs, preferences, questions, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition">
                  Get My Free Quote
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  We'll respond within 24 hours with detailed pricing and timeline
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-8 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Need immediate assistance?</h3>
              <p className="text-red-100">Call us now for instant quotes and expert advice</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+13015558734" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition">
                📞 (301) 555-UPFIT
              </a>
              <a href="mailto:info@capitalupfitters.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Shop</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-gray-600">
                      Rockville, Maryland<br/>
                      Serving 60-mile radius including:<br/>
                      DC Metro • Northern Virginia • Baltimore
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">What to Expect</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Free consultation and quotes</li>
                      <li>• See examples of our work</li>
                      <li>• Professional installation area</li>
                      <li>• Large inventory of accessories</li>
                      <li>• Comfortable customer waiting area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {/* Map placeholder */}
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Rockville, MD Location</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-3">Easy Access</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Convenient to I-270 and I-495</li>
                  <li>• Ample parking available</li>
                  <li>• Wheelchair accessible</li>
                  <li>• Public transportation nearby</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-red-500 mb-4 block">Capital Upfitters</Link>
              <p className="text-gray-300 mb-4">
                Rockville's premier truck and fleet customization specialists since 1989.
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/spray-on-bedliner" className="hover:text-white transition">Spray-On Bedliners</Link></li>
                <li><Link href="/tonneau-covers" className="hover:text-white transition">Tonneau Covers</Link></li>
                <li><Link href="/hitches-towing" className="hover:text-white transition">Hitches & Towing</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-300">
                <p>Rockville, MD</p>
                <p>(301) 555-UPFIT</p>
                <p>info@capitalupfitters.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}