import Link from 'next/link'
import { Phone, Shield, Zap, Truck, Wrench, Check } from 'lucide-react'

export const metadata = {
  title: 'Hitch Installation Rockville MD | Trailer Hitches & Towing | Capital Upfitters',
  description: 'Professional trailer hitch installation in Rockville MD. Receiver hitches, brake controllers, wiring harnesses, towing accessories. Expert installation, competitive pricing.',
  keywords: 'hitch installation, trailer hitch, towing, brake controller, wiring harness, rockville md, receiver hitch, dc metro, professional installation',
}

export default function HitchesTowingPage() {
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
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Professional <span className="text-green-400">Hitch Installation</span> & Towing Solutions
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Complete towing systems: receiver hitches, brake controllers, wiring harnesses, 
                and towing accessories. Expert installation for safe, reliable towing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-400 hover:bg-green-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
                  GET HITCH QUOTE TODAY
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  TOWING CAPACITY GUIDE
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-green-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-green-200">Hitch Installation Photos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hitch Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Complete Towing Solutions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lightweight utility trailers to heavy-duty RVs, we have the right towing solution for your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Class I/II */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold">Class I & II Hitches</h4>
                <p className="text-gray-600 mt-2">Up to 3,500 lbs towing capacity</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Towing Capacity:</span>
                  <span>2,000 - 3,500 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tongue Weight:</span>
                  <span>200 - 350 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Receiver Size:</span>
                  <span>1.25" or 2"</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Small utility trailers</li>
                <li>• Bike racks & cargo carriers</li>
                <li>• Small boat trailers</li>
                <li>• Lightweight campers</li>
              </ul>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Starting at $199</div>
                <p className="text-sm text-gray-600">Installation included</p>
              </div>
            </div>

            {/* Class III */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold">Class III Hitches</h4>
                <p className="text-gray-600 mt-2">Up to 5,000 lbs towing capacity</p>
                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                  Most Popular
                </span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Towing Capacity:</span>
                  <span>3,500 - 5,000 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tongue Weight:</span>
                  <span>350 - 500 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Receiver Size:</span>
                  <span>2"</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Medium boat trailers</li>
                <li>• Travel trailers</li>
                <li>• Car haulers</li>
                <li>• Equipment trailers</li>
              </ul>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Starting at $299</div>
                <p className="text-sm text-gray-600">Installation included</p>
              </div>
            </div>

            {/* Class IV */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold">Class IV Hitches</h4>
                <p className="text-gray-600 mt-2">Up to 10,000+ lbs towing capacity</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Towing Capacity:</span>
                  <span>5,000 - 10,000+ lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tongue Weight:</span>
                  <span>500 - 1,000+ lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Receiver Size:</span>
                  <span>2" or 2.5"</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Large RVs & fifth wheels</li>
                <li>• Heavy equipment trailers</li>
                <li>• Large boat trailers</li>
                <li>• Commercial applications</li>
              </ul>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Starting at $399</div>
                <p className="text-sm text-gray-600">Installation included</p>
              </div>
            </div>
          </div>

          {/* Towing Accessories */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-2xl font-bold text-center mb-8">Complete Your Towing Setup</h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h5 className="font-bold mb-2">Brake Controllers</h5>
                <p className="text-sm text-gray-600 mb-3">Electronic & proportional brake control systems</p>
                <p className="font-medium text-blue-600">$189 - $399</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded"></div>
                </div>
                <h5 className="font-bold mb-2">Wiring Harnesses</h5>
                <p className="text-sm text-gray-600 mb-3">4-pin, 7-pin, and vehicle-specific wiring</p>
                <p className="font-medium text-blue-600">$49 - $199</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h5 className="font-bold mb-2">Hitch Covers</h5>
                <p className="text-sm text-gray-600 mb-3">Protective caps and decorative covers</p>
                <p className="font-medium text-blue-600">$15 - $89</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <h5 className="font-bold mb-2">Ball Mounts</h5>
                <p className="text-sm text-gray-600 mb-3">Adjustable and fixed ball mount systems</p>
                <p className="font-medium text-blue-600">$39 - $189</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Professional Installation Process</h3>
            <p className="text-xl text-gray-600">
              Certified installation following manufacturer specifications for safety and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Vehicle Assessment',
                description: 'Inspect your vehicle and determine the correct hitch class and mounting points.'
              },
              {
                step: 2,
                title: 'Precise Installation', 
                description: 'Mount the hitch using vehicle-specific hardware and torque specifications.'
              },
              {
                step: 3,
                title: 'Wiring Integration',
                description: 'Install and test trailer wiring, brake controllers, and electrical connections.'
              },
              {
                step: 4,
                title: 'Safety Testing',
                description: 'Complete system test, load verification, and customer training on proper use.'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Professional Installation?</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-medium">Safety Compliance</p>
                  <p className="text-sm text-gray-600">Proper torque specs and mounting</p>
                </div>
                <div>
                  <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-medium">Warranty Protection</p>
                  <p className="text-sm text-gray-600">Maintains vehicle and hitch warranties</p>
                </div>
                <div>
                  <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-medium">Expert Knowledge</p>
                  <p className="text-sm text-gray-600">Vehicle-specific installation expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands & Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Premium Brands We Install</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'Draw-Tite', description: 'America\'s most trusted hitch brand' },
              { name: 'Hidden Hitch', description: 'Concealed mounting systems' },
              { name: 'Reese', description: 'Heavy-duty towing solutions' },
              { name: 'Curt', description: 'Custom-fit hitch systems' }
            ].map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gray-200 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gray-600">{brand.name[0]}</span>
                </div>
                <h5 className="font-bold mb-2">{brand.name}</h5>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-8">Popular Add-Ons</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="font-bold mb-3">🔌 Brake Controller Integration</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tekonsha Prodigy P3</li>
                  <li>• Hayes Genesis</li>
                  <li>• Integrated OEM systems</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-3">🔧 Sway Control Systems</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weight distribution hitches</li>
                  <li>• Anti-sway bars</li>
                  <li>• Electronic sway control</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-3">📱 Wireless Monitoring</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tire pressure monitoring</li>
                  <li>• Backup cameras</li>
                  <li>• Trailer brake monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Hitch Installation Quote</h3>
            <p className="text-xl text-green-100">
              Professional installation by certified technicians. Most hitches installed same day.
            </p>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Vehicle Year, Make, Model *</label>
                <input type="text" required placeholder="e.g. 2022 Ford F-150" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">What will you be towing?</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>Not sure yet</option>
                  <option>Utility trailer (under 2,000 lbs)</option>
                  <option>Boat trailer (2,000-4,000 lbs)</option>
                  <option>Travel trailer/RV (4,000-8,000 lbs)</option>
                  <option>Heavy equipment (8,000+ lbs)</option>
                  <option>Just need hitch for accessories</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Estimated trailer weight</label>
                <input type="text" placeholder="e.g. 3,500 lbs" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Additional needs</label>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Brake controller
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Wiring harness
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Ball mount
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Weight distribution
                  </label>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition">
                  Get My Free Hitch Installation Quote
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