import Link from 'next/link'
import { Phone, MapPin, Clock, Star, Check, Shield } from 'lucide-react'

export const metadata = {
  title: 'Spray-On Bedliners Rockville MD | Patriot Liner | Capital Upfitters',
  description: 'Professional spray-on bedliner installation in Rockville MD. Patriot Liner bedliners starting at $549 with lifetime warranty. Serving DC Metro area.',
  keywords: 'spray on bedliner, patriot liner, rockville md, truck bed liner, bedliner installation, dc metro, lifetime warranty',
}

export default function SprayOnBedlinerPage() {
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
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Professional <span className="text-yellow-400">Spray-On Bedliners</span> in Rockville MD
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Patriot Liner spray-on bedliners starting at $549. Lifetime warranty against cracking, 
                peeling, or chipping. Professional installation by certified technicians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
                  GET FREE QUOTE - $549+
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  VIEW GALLERY
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-red-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-red-200">Before/After Bedliner Photos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Patriot Liner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Patriot Liner?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              America's premium spray-on bedliner with unmatched durability and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Shield className="h-16 w-16 text-red-600 mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4">Lifetime Warranty</h4>
              <p className="text-gray-600">
                We guarantee our bedliners against warping, cracking, chipping, peeling, or coming off your bed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4">4-Hour Install</h4>
              <p className="text-gray-600">
                Most trucks completed in 4 hours. Dry in 3-5 seconds. Ready for light duty immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Premium Quality</h4>
              <p className="text-gray-600">
                Heated to 155°F, pressurized to 2000+ PSI for maximum adhesion and durability.
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Patriot Liner Benefits</h4>
              <ul className="space-y-4">
                {[
                  'UV resistant - won\'t fade or crack in sun',
                  'Chemical resistant - withstands acids, oils, solvents',
                  'Impact resistant - protects against dents and scratches',
                  'Non-slip textured surface for cargo security',
                  'Seamless application - no gaps or weak points',
                  'Quick cure time - dry in seconds',
                  'Works on any truck bed material',
                  'Available in multiple colors and textures'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-6">Perfect For:</h4>
              <ul className="space-y-4 mb-8">
                {[
                  'Work trucks and commercial vehicles',
                  'Personal pickup trucks',
                  'Fleet vehicles',
                  'ATVs and off-road vehicles',
                  'Trailers and utility beds',
                  'RV applications',
                  'Industrial equipment'
                ].map((use, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{use}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h5 className="font-bold text-lg mb-2">Starting Price: $549</h5>
                <p className="text-gray-600">
                  Pricing varies by truck size and customization. Call for exact quote on your vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional preparation and application for maximum durability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Preparation',
                description: 'Deep cleaning and masking of truck bed. Repair any damage and ensure perfect surface.'
              },
              {
                step: 2, 
                title: 'Application',
                description: 'Heat material to 155°F, pressurize to 2000+ PSI. Spray in controlled, even coats.'
              },
              {
                step: 3,
                title: 'Curing',
                description: 'Material cures in 3-5 seconds. Creates seamless, waterproof protective barrier.'
              },
              {
                step: 4,
                title: 'Inspection',
                description: 'Quality check and cleanup. Ready for light duty immediately, full strength in 24 hours.'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Bedliner Quote</h3>
              <p className="text-lg text-gray-600">
                Professional installation by certified Patriot Liner dealers. Most installs completed same day.
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Year, Make, Model *</label>
                <input type="text" required placeholder="e.g. 2022 Ford F-150" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea rows={4} placeholder="Bed size, color preferences, timeline, etc." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition">
                  Get My Free Bedliner Quote
                </button>
              </div>
            </form>
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