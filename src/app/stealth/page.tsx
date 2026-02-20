import Link from 'next/link'
import { 
  Phone, 
  Eye, 
  Lock, 
  Zap, 
  Shield, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Camera
} from 'lucide-react'

export const metadata = {
  title: 'Stealth Hitches Rockville MD | Invisible Trailer Hitches | BMW Audi Land Rover',
  description: 'Professional Stealth Hitch installation in Rockville MD. Invisible hitches for luxury vehicles - BMW, Audi, Land Rover. No visible cutting, preserves aesthetics.',
  keywords: 'stealth hitch, invisible hitch, luxury vehicle hitch, bmw hitch, audi hitch, land rover hitch, rockville md, no visible cutting',
}

export default function StealthPage() {
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
                Check Compatibility
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-700 text-slate-100 px-4 py-2 rounded-full inline-block mb-6">
                For Luxury Vehicles • Invisible Installation
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Show Off Your Car, <br/>
                <span className="text-slate-400">Not Your Hitch</span>
              </h2>
              <p className="text-xl mb-8 text-slate-100">
                Stealth Hitches are the only completely hidden trailer hitch system. 
                Perfect for BMW, Audi, Mercedes, Land Rover, and other luxury vehicles.
              </p>
              
              {/* Unique Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Eye className="h-6 w-6 text-slate-400 mr-3" />
                  <span>Completely Invisible</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-slate-400 mr-3" />
                  <span>No Visible Cutting</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-6 w-6 text-slate-400 mr-3" />
                  <span>Integrated Lock</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-slate-400 mr-3" />
                  <span>Click & Go</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-slate-400 hover:bg-slate-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
                  CHECK VEHICLE COMPATIBILITY
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  SEE BEFORE & AFTER
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-slate-200">Stealth Hitch Before/After Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stealth Hitches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Stealth Hitches?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only hitch designed specifically for luxury and premium vehicles. 
              Preserve your vehicle's aesthetics while gaining towing capability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Completely Hidden</h4>
                    <p className="text-gray-600">
                      When not in use, the hitch is completely invisible. No receiver tube sticking out, 
                      no impact on your vehicle's clean lines or ground clearance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">No Visible Cutting</h4>
                    <p className="text-gray-600">
                      Unlike traditional hitches, Stealth systems require no visible cutting of your bumper. 
                      Factory appearance is preserved completely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Lock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Integrated Security</h4>
                    <p className="text-gray-600">
                      Built-in lock system means your hitch insert stays secure. No fumbling with separate locks or pins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Easy Operation</h4>
                    <p className="text-gray-600">
                      Simple foot release mechanism and click-to-install design. Ready to tow in seconds, 
                      hidden again just as quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-6">Popular Luxury Applications</h4>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-bold">Weekend Adventures</h5>
                  <p className="text-gray-600">Bike racks, small utility trailers, motorcycle trailers</p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-4">
                  <h5 className="font-bold">Recreational Towing</h5>
                  <p className="text-gray-600">Small boat trailers, jet ski trailers, cargo carriers</p>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-bold">Occasional Hauling</h5>
                  <p className="text-gray-600">Moving trailers, furniture transport, camping gear</p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4">
                  <h5 className="font-bold">Resale Value Protection</h5>
                  <p className="text-gray-600">Maintain factory appearance, no permanent modifications</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Professional Installation</span>
                  <span className="text-2xl font-bold text-green-600">$849</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Includes hitch system, professional installation, and lifetime warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Compatibility */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Luxury Vehicle Compatibility</h3>
            <p className="text-xl text-gray-600">
              Stealth Hitches are engineered for specific luxury vehicle applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { brand: "BMW", models: ["X1", "X3", "X5", "3 Series", "5 Series"], logo: "🔷" },
              { brand: "Audi", models: ["Q3", "Q5", "Q7", "A4 Allroad", "A6 Allroad"], logo: "🔘" },
              { brand: "Mercedes", models: ["GLC", "GLE", "ML-Class", "C-Class", "E-Class"], logo: "⭐" },
              { brand: "Land Rover", models: ["Discovery", "Range Rover", "Evoque", "Velar"], logo: "🟢" },
              { brand: "Volvo", models: ["XC60", "XC90", "V60", "V90", "Cross Country"], logo: "📐" },
              { brand: "Acura", models: ["MDX", "RDX", "ZDX", "TLX"], logo: "🔶" },
              { brand: "Infiniti", models: ["QX50", "QX60", "QX80", "FX Series"], logo: "♦️" },
              { brand: "Lexus", models: ["GX 460", "RX Series", "NX Series"], logo: "🔸" }
            ].map((brand, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">{brand.logo}</div>
                <h4 className="text-xl font-bold mb-3">{brand.brand}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {brand.models.map((model, i) => (
                    <li key={i}>{model}</li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium transition">
                  Check Compatibility
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your vehicle? We can check compatibility for any luxury or premium vehicle.
            </p>
            <button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-bold transition">
              Get Vehicle Compatibility Check
            </button>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Professional Installation Process</h3>
            <p className="text-xl text-gray-600">
              Expert installation ensuring perfect fit and factory-like finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Vehicle Assessment",
                description: "Detailed inspection and compatibility verification for your specific vehicle."
              },
              {
                step: 2,
                title: "Precision Installation",
                description: "Custom mounting using vehicle-specific attachment points. No cutting required."
              },
              {
                step: 3,
                title: "System Testing",
                description: "Full function testing of release mechanism, locking system, and load capacity."
              },
              {
                step: 4,
                title: "Training & Warranty",
                description: "Operation training and lifetime warranty registration. You're ready to tow."
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">Why Professional Installation Matters</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Vehicle-specific mounting ensures perfect fit</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Preserves vehicle warranty and integrity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proper torque specifications for safety</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lifetime warranty protection</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h5 className="font-bold text-lg mb-3">Installation Includes:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vehicle-specific Stealth Hitch system</li>
                  <li>• Professional installation (2-3 hours)</li>
                  <li>• Full system testing and calibration</li>
                  <li>• Operation training and demonstration</li>
                  <li>• Lifetime warranty registration</li>
                  <li>• 30-day satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Luxury Vehicle Owners Say</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                vehicle: "2023 BMW X5",
                location: "Bethesda, MD",
                quote: "I was really happy to find a hitch that would be invisible for my X5. But I was even more happy to see how well it was built. It looks indestructible and I feel really safe to tow with it.",
                rating: 5
              },
              {
                name: "Michael R.",
                vehicle: "2022 Audi Q7",
                location: "Alexandria, VA",
                quote: "Had it installed in a half day, used it to bring my boat trailer home. So cool to know that I have trailering capability that is not announced to the rest of the world until I use it.",
                rating: 5
              },
              {
                name: "Jennifer L.",
                vehicle: "2024 Land Rover Discovery",
                location: "Rockville, MD",
                quote: "Perfect solution for occasional towing without ruining the look of my Discovery. The installation was flawless and you literally cannot tell it's there when not in use.",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.vehicle}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-slate-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Get Your Stealth Hitch Quote</h3>
            <p className="text-xl text-slate-100">
              Professional installation by certified Stealth Hitch dealers. Preserve your luxury vehicle's aesthetics.
            </p>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Year *</label>
                  <input type="text" required placeholder="e.g. 2023" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Make *</label>
                  <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500">
                    <option>Select Make</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Mercedes-Benz</option>
                    <option>Land Rover</option>
                    <option>Volvo</option>
                    <option>Acura</option>
                    <option>Infiniti</option>
                    <option>Lexus</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Model *</label>
                  <input type="text" required placeholder="e.g. X5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">What will you be towing?</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Bike rack or cargo carrier
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Small utility trailer
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Boat or jet ski trailer
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Motorcycle trailer
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Occasional moving/hauling
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Not sure yet - want options
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500">
                  <option>ASAP - I'm ready to schedule</option>
                  <option>Within 2 weeks</option>
                  <option>Within a month</option>
                  <option>Just researching options</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Additional Questions or Comments</label>
                <textarea 
                  rows={3} 
                  placeholder="Any specific questions about Stealth Hitches or installation?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-slate-600 hover:bg-slate-700 text-white py-4 rounded-lg font-bold text-lg transition">
                Get My Stealth Hitch Quote
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll verify compatibility and provide detailed pricing within 24 hours
              </p>
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
                Authorized Stealth Hitch dealer serving luxury vehicle owners in the DC Metro area.
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Stealth Hitches</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/stealth" className="hover:text-white transition">BMW Hitches</Link></li>
                <li><Link href="/stealth" className="hover:text-white transition">Audi Hitches</Link></li>
                <li><Link href="/stealth" className="hover:text-white transition">Mercedes Hitches</Link></li>
                <li><Link href="/stealth" className="hover:text-white transition">Land Rover Hitches</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-300">
                <p>Rockville, MD</p>
                <p>(301) 555-UPFIT</p>
                <p>stealth@capitalupfitters.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}