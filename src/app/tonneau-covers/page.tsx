import Link from 'next/link'
import { Phone, Shield, Wrench, Truck, Star, Check } from 'lucide-react'

export const metadata = {
  title: 'Tonneau Covers Rockville MD | Truck Bed Covers | Capital Upfitters',
  description: 'Professional tonneau cover installation in Rockville MD. Hard & soft truck bed covers from top brands. Expert installation, competitive pricing. DC Metro area.',
  keywords: 'tonneau covers, truck bed covers, hard tonneau, soft tonneau, rockville md, truck accessories, dc metro, professional installation',
}

export default function TonneauCoversPage() {
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Premium <span className="text-blue-400">Tonneau Covers</span> in Rockville MD
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Hard and soft truck bed covers from leading brands. Professional installation, 
                weather protection, improved fuel economy, and enhanced security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-400 hover:bg-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
                  GET FREE QUOTE TODAY
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  COMPARE COVERS
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-blue-200">Tonneau Cover Installation Photos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Cover</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic soft covers to premium hard folding systems, we have options for every budget and need.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Soft Covers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h4 className="text-2xl font-bold text-center">Soft Covers</h4>
                <p className="text-center text-green-100 mt-2">Most Popular Choice</p>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Starting at $299</div>
                  <p className="text-gray-600">Professional installation included</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Easy roll-up or fold design',
                    'Vinyl or canvas materials', 
                    'Quick installation',
                    'Full bed access when open',
                    'Weather resistant sealing',
                    'Improved fuel economy',
                    '1-3 year warranties'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p><strong>Popular Brands:</strong> TruXedo, Extang, Access, Roll-N-Lock</p>
                  <p><strong>Best For:</strong> Daily drivers, light commercial use</p>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition">
                  Get Soft Cover Quote
                </button>
              </div>
            </div>

            {/* Hard Folding */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500">
              <div className="bg-blue-600 text-white p-6">
                <h4 className="text-2xl font-bold text-center">Hard Folding</h4>
                <p className="text-center text-blue-100 mt-2">Premium Choice</p>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Starting at $899</div>
                  <p className="text-gray-600">Professional installation included</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Aluminum panels, ultra-durable',
                    'Bi-fold or tri-fold designs',
                    'Flush mount appearance',
                    'Maximum security & strength',
                    'All-weather protection',
                    'Supports cargo weight',
                    '2-5 year warranties'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p><strong>Popular Brands:</strong> BAK, UnderCover, Extang Solid Fold</p>
                  <p><strong>Best For:</strong> Work trucks, high-security needs</p>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">
                  Get Hard Cover Quote
                </button>
              </div>
            </div>

            {/* Retractable */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-600 text-white p-6">
                <h4 className="text-2xl font-bold text-center">Retractable</h4>
                <p className="text-center text-gray-100 mt-2">Ultimate Convenience</p>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Starting at $1,299</div>
                  <p className="text-gray-600">Professional installation included</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Slide-to-open mechanism',
                    'Aluminum slat construction',
                    'Any position stopping',
                    'Flush-mount rail system',
                    'Tool-free operation',
                    'Premium aesthetics',
                    '3-5 year warranties'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p><strong>Popular Brands:</strong> RetraxPRO, Roll-N-Lock, BAK Revolver</p>
                  <p><strong>Best For:</strong> Luxury trucks, frequent bed access</p>
                </div>
                
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-bold transition">
                  Get Retractable Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Install a Tonneau Cover?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-4">Weather Protection</h4>
              <p className="text-gray-600">
                Keep cargo dry and protected from rain, snow, UV rays, and harsh weather conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">⛽</div>
              </div>
              <h4 className="text-xl font-bold mb-4">Fuel Economy</h4>
              <p className="text-gray-600">
                Reduce drag and improve MPG by up to 10% with proper aerodynamic bed coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🔒</div>
              </div>
              <h4 className="text-xl font-bold mb-4">Security</h4>
              <p className="text-gray-600">
                Hide valuable cargo from view and add lockable security to your truck bed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-10 w-10 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold mb-4">Appearance</h4>
              <p className="text-gray-600">
                Clean, finished look that enhances your truck's style and resale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Professional Installation Process</h3>
            <p className="text-xl text-gray-600">
              Expert fitting and setup for optimal performance and appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <h4 className="text-xl font-bold mb-4">Consultation & Measurement</h4>
              <p className="text-gray-600">
                We measure your truck bed precisely and help you choose the perfect cover for your needs and budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <h4 className="text-xl font-bold mb-4">Professional Installation</h4>
              <p className="text-gray-600">
                Our certified technicians install your cover with precision, ensuring proper fit and function.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <h4 className="text-xl font-bold mb-4">Testing & Training</h4>
              <p className="text-gray-600">
                We test all functions and show you proper operation and maintenance for years of reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Tonneau Cover Quote</h3>
            <p className="text-xl text-blue-100">
              Professional installation by certified technicians. Most covers installed same day.
            </p>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Vehicle Year, Make, Model *</label>
                <input type="text" required placeholder="e.g. 2022 Ford F-150" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Preferred Cover Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Not sure - need recommendation</option>
                  <option>Soft Cover (Roll-up/Fold)</option>
                  <option>Hard Folding Cover</option>
                  <option>Retractable Cover</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Additional Details</label>
                <textarea rows={3} placeholder="Budget range, intended use, timeline, etc." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition">
                  Get My Free Tonneau Cover Quote
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