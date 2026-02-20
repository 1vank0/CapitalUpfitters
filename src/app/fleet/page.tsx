import Link from 'next/link'
import { 
  Phone, 
  Users, 
  Clock, 
  DollarSign, 
  Truck, 
  Shield, 
  CheckCircle,
  TrendingDown,
  Calendar,
  Star
} from 'lucide-react'

export const metadata = {
  title: 'Fleet Upfitting Solutions | Commercial Vehicle Customization | Capital Upfitters',
  description: 'Professional fleet upfitting services for 25+ vehicle operations. Bulk pricing, standardized specs, minimal downtime. Serving DC Metro commercial fleets.',
  keywords: 'fleet upfitting, commercial vehicles, bulk pricing, fleet customization, vehicle standardization, DC metro fleet services',
}

export default function FleetPage() {
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
                Fleet Assessment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-700 text-blue-100 px-4 py-2 rounded-full inline-block mb-6">
                For Fleet Operations • 25+ Vehicles
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Professional <span className="text-blue-400">Fleet Upfitting</span> Solutions
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Standardize your fleet operations with professional upfitting services. 
                Bulk pricing, coordinated scheduling, and consistent specifications across all vehicles.
              </p>
              
              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <TrendingDown className="h-6 w-6 text-blue-400 mr-3" />
                  <span>20-40% Bulk Savings</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Minimal Downtime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Standardized Specs</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Coordinated Rollouts</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-400 hover:bg-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
                  GET FLEET ASSESSMENT
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  VIEW CASE STUDIES
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-blue-200">Fleet Upfitting Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Size Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Fleet Solutions by Size</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored packages designed for different fleet operations and business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mid-Size Fleets */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold">Mid-Size Fleets</h4>
                <p className="text-gray-600 mt-2">25-75 vehicles</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Standardized service packages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Coordinated installation scheduling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">15-25% volume discount</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
              
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 mb-2">Starting at $800/vehicle</div>
                <p className="text-sm text-gray-600 mb-4">Typical mid-size fleet package</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition">
                  Get Mid-Size Quote
                </button>
              </div>
            </div>

            {/* Large Fleets */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold">Large Fleets</h4>
                <p className="text-gray-600 mt-2">75-200 vehicles</p>
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                  Most Popular
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enterprise service agreements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Priority scheduling & fast-track</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">25-35% volume discount</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom specification development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">On-site consultation & planning</span>
                </li>
              </ul>
              
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 mb-2">Starting at $650/vehicle</div>
                <p className="text-sm text-gray-600 mb-4">Enterprise pricing available</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">
                  Get Enterprise Quote
                </button>
              </div>
            </div>

            {/* Enterprise Fleets */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold">Enterprise Fleets</h4>
                <p className="text-gray-600 mt-2">200+ vehicles</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multi-year service contracts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regional rollout coordination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">35-50% volume discount</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom product development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated project management</span>
                </li>
              </ul>
              
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 mb-2">Custom Pricing</div>
                <p className="text-sm text-gray-600 mb-4">Enterprise agreements available</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold transition">
                  Request Enterprise RFP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Calculate Your Fleet ROI</h3>
              <p className="text-xl text-gray-600 mb-8">
                See how fleet upfitting impacts your bottom line with reduced maintenance costs, 
                increased vehicle lifespan, and improved operational efficiency.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Reduced Maintenance Costs</h4>
                    <p className="text-gray-600">Protective coatings and quality accessories reduce wear and extend component life by 30-50%.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Minimized Downtime</h4>
                    <p className="text-gray-600">Coordinated service reduces fleet downtime by 60% compared to individual vehicle servicing.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Volume Savings</h4>
                    <p className="text-gray-600">Fleet pricing delivers 20-50% cost savings compared to individual vehicle upfitting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-6">Quick ROI Calculator</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fleet Size</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>25-50 vehicles</option>
                    <option>51-75 vehicles</option>
                    <option>76-100 vehicles</option>
                    <option>101-200 vehicles</option>
                    <option>200+ vehicles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Light trucks / Pickups</option>
                    <option>Vans / Delivery vehicles</option>
                    <option>Medium duty trucks</option>
                    <option>Heavy duty / Commercial</option>
                    <option>Mixed fleet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Bedliners / Protective coatings
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Fleet graphics / Branding
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Equipment mounting
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Storage solutions
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">
                  Calculate Fleet ROI
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Fleet Success Stories</h3>
            <p className="text-xl text-gray-600">
              See how we've helped fleet operations improve efficiency and reduce costs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: "Metro Delivery Services",
                vehicles: "85 delivery vans",
                services: "Bedliners, Partition Systems, Fleet Graphics",
                savings: "$127,000 annual savings",
                quote: "Capital Upfitters transformed our fleet efficiency. The coordinated rollout minimized our downtime to just 2 days per vehicle."
              },
              {
                company: "Regional Construction Co.",
                vehicles: "120 work trucks",
                services: "Bedliners, Tool Storage, Equipment Mounting",
                savings: "$89,000 first-year ROI",
                quote: "Professional service and bulk pricing made this a no-brainer. Our trucks are more organized and protected than ever."
              },
              {
                company: "Government Fleet Services",
                vehicles: "200+ municipal vehicles",
                services: "Protective Coatings, Equipment Integration",
                savings: "$215,000 maintenance reduction",
                quote: "Capital Upfitters delivered on time and on budget. The standardized specifications make fleet management much easier."
              }
            ].map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-2">{study.company}</h4>
                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  <p><strong>Fleet Size:</strong> {study.vehicles}</p>
                  <p><strong>Services:</strong> {study.services}</p>
                  <p><strong>Result:</strong> <span className="text-green-600 font-semibold">{study.savings}</span></p>
                </div>
                <p className="text-gray-700 italic">"{study.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Assessment CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Fleet?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Get a free fleet assessment and custom proposal. No obligation, just expert recommendations.
          </p>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Fleet Manager Name *" className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="text" placeholder="Company Name *" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address *" className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone Number *" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Fleet Size *</option>
                  <option>25-50 vehicles</option>
                  <option>51-75 vehicles</option>
                  <option>76-100 vehicles</option>
                  <option>101-200 vehicles</option>
                  <option>200+ vehicles</option>
                </select>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Timeline *</option>
                  <option>Within 30 days</option>
                  <option>Within 3 months</option>
                  <option>Within 6 months</option>
                  <option>Planning for next year</option>
                </select>
              </div>
              
              <textarea 
                placeholder="Tell us about your fleet needs, challenges, and goals..."
                rows={4} 
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition">
                Request Fleet Assessment
              </button>
              
              <p className="text-sm text-gray-500">
                We'll respond within 24 hours with a preliminary assessment and next steps.
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
                Rockville's premier fleet and commercial vehicle specialists.
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Fleet Services</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/spray-on-bedliner" className="hover:text-white transition">Fleet Bedliners</Link></li>
                <li><Link href="/fleet" className="hover:text-white transition">Volume Pricing</Link></li>
                <li><Link href="/fleet" className="hover:text-white transition">Service Agreements</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-300">
                <p>Rockville, MD</p>
                <p>(301) 555-UPFIT</p>
                <p>fleet@capitalupfitters.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}