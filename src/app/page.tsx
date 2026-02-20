import Link from 'next/link'
import { Phone, MapPin, Clock, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-500">Capital Upfitters</h1>
            </div>
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Rockville's <span className="text-red-500">#1</span> Truck & Fleet Customization Shop
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Professional auto upfitting, spray-on bedliners, tonneau covers, and truck accessories. 
                Serving the DC Metro area for 35+ years with lifetime warranties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition">
                  FREE QUOTE TODAY
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  VIEW SERVICES
                </button>
              </div>
              
              {/* Trust Signals */}
              <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-500">35+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500">1000+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-300">5-Star Reviews</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Hero Image / Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Specialized Solutions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored services for different types of clients and their unique needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Fleet Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h4 className="text-2xl font-bold mb-4">Fleet Solutions</h4>
              <p className="text-gray-600 mb-6">
                Professional upfitting for 25+ vehicle operations. Bulk pricing, standardized specifications, and coordinated scheduling.
              </p>
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Starting at</div>
                <div className="text-2xl font-bold text-orange-600">$650/vehicle</div>
                <div className="text-sm text-gray-500">Enterprise pricing available</div>
              </div>
              <Link href="/fleet" className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Fleet Services →
              </Link>
            </div>

            {/* Luxury Vehicles */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group border-2 border-purple-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h4 className="text-2xl font-bold mb-4">Luxury Vehicles</h4>
              <p className="text-gray-600 mb-6">
                Stealth Hitches for BMW, Audi, Mercedes, Land Rover. Completely invisible when not in use.
              </p>
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Professional Installation</div>
                <div className="text-2xl font-bold text-purple-600">$849</div>
                <div className="text-sm text-gray-500">Lifetime warranty included</div>
              </div>
              <Link href="/stealth" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Stealth Hitches →
              </Link>
            </div>

            {/* Government/Municipal */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-2xl font-bold mb-4">Government & Municipal</h4>
              <p className="text-gray-600 mb-6">
                Compliant solutions for public sector fleets. RFP experience, competitive bidding, and certified installation.
              </p>
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Competitive Pricing</div>
                <div className="text-2xl font-bold text-blue-600">RFP Ready</div>
                <div className="text-sm text-gray-500">Municipal references available</div>
              </div>
              <Link href="/government" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Government Solutions →
              </Link>
            </div>
          </div>

          {/* Popular Services */}
          <div className="border-t pt-12">
            <h4 className="text-2xl font-bold text-center mb-8">Popular Services</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Link href="/spray-on-bedliner" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-red-600 rounded"></div>
                  </div>
                  <h5 className="text-lg font-bold mb-2">Spray-On Bedliners</h5>
                  <p className="text-gray-600 text-sm">Starting at $549 • Lifetime Warranty</p>
                </Link>
              </div>

              <div className="text-center">
                <Link href="/tonneau-covers" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <h5 className="text-lg font-bold mb-2">Tonneau Covers</h5>
                  <p className="text-gray-600 text-sm">From $299 • All Types Available</p>
                </Link>
              </div>

              <div className="text-center">
                <Link href="/hitches-towing" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <h5 className="text-lg font-bold mb-2">Hitches & Towing</h5>
                  <p className="text-gray-600 text-sm">From $199 • Professional Install</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Shop</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Rockville, MD</p>
                    <p className="text-gray-600">Serving 60-mile radius including DC Metro, NoVA, and Baltimore</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">Mon-Fri: 8AM-6PM</p>
                    <p className="text-gray-600">Saturday: 8AM-4PM • Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold">(301) 555-UPFIT</p>
                    <p className="text-gray-600">Call for free quotes and scheduling</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-6">Get Your Free Quote</h4>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg" />
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Select Service</option>
                  <option>Spray-On Bedliner</option>
                  <option>Tonneau Cover</option>
                  <option>Hitch Installation</option>
                  <option>Lift Kit</option>
                  <option>Other Accessories</option>
                </select>
                <textarea placeholder="Tell us about your project..." rows={4} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition">
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-2xl font-bold text-red-500 mb-4">Capital Upfitters</h5>
              <p className="text-gray-300 mb-4">
                Rockville's premier truck and fleet customization specialists since 1989.
              </p>
              <p className="text-sm text-gray-400">
                Licensed • Insured • Family Owned
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/spray-on-bedliner" className="hover:text-white transition">Spray-On Bedliners</Link></li>
                <li><Link href="/tonneau-covers" className="hover:text-white transition">Tonneau Covers</Link></li>
                <li><Link href="/hitches-towing" className="hover:text-white transition">Hitches & Towing</Link></li>
                <li><Link href="/lift-kits-leveling" className="hover:text-white transition">Lift Kits</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Company</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
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
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Capital Upfitters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}