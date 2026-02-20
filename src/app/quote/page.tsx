'use client'

import Link from 'next/link'
import { 
  Phone, 
  Calculator, 
  Truck, 
  Shield, 
  CheckCircle, 
  Car,
  Building2,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  ArrowRight,
  Star,
  Zap
} from 'lucide-react'

// Metadata will be handled by parent layout since this is a client component

export default function QuotePage() {
  // Mock pricing data - will be replaced with dynamic pricing system
  const serviceCategories = [
    {
      id: 'bedliner',
      name: 'Spray-On Bedliners',
      icon: Shield,
      basePrice: 549,
      priceRange: '$549 - $899',
      description: 'Professional Patriot Liner application with lifetime warranty',
      options: [
        { name: 'Standard Texture', price: 549 },
        { name: 'Fine Texture', price: 599 },
        { name: 'Tailgate Coverage', price: 149 },
        { name: 'Truck Bed Rails', price: 99 }
      ],
      popular: true
    },
    {
      id: 'tonneau',
      name: 'Tonneau Covers',
      icon: Car,
      basePrice: 299,
      priceRange: '$299 - $1,299',
      description: 'Weather protection and security for your truck bed',
      options: [
        { name: 'Soft Roll-Up', price: 299 },
        { name: 'Hard Folding', price: 799 },
        { name: 'Retractable', price: 1299 },
        { name: 'Professional Installation', price: 199 }
      ],
      popular: false
    },
    {
      id: 'hitch',
      name: 'Hitches & Towing',
      icon: Truck,
      basePrice: 199,
      priceRange: '$199 - $849',
      description: 'Complete towing solutions including Stealth Hitches',
      options: [
        { name: 'Standard Hitch', price: 199 },
        { name: 'Heavy Duty Hitch', price: 349 },
        { name: 'Stealth Hitch (Luxury)', price: 849 },
        { name: 'Wiring & Installation', price: 299 }
      ],
      popular: false
    },
    {
      id: 'fleet',
      name: 'Fleet Services',
      icon: Building2,
      basePrice: 650,
      priceRange: '$650+ per vehicle',
      description: 'Volume pricing for 5+ vehicles with coordinated scheduling',
      options: [
        { name: 'Fleet Bedliner Package', price: 650 },
        { name: 'Commercial Upfitting', price: 850 },
        { name: 'Government Spec', price: 1200 },
        { name: 'Volume Discount', price: -200, discount: true }
      ],
      popular: false
    }
  ]

  const vehicleTypes = [
    { id: 'pickup', name: 'Pickup Truck', modifier: 1.0 },
    { id: 'suv', name: 'SUV/Crossover', modifier: 0.8 },
    { id: 'van', name: 'Van/Commercial', modifier: 1.2 },
    { id: 'luxury', name: 'Luxury Vehicle', modifier: 1.5 }
  ]

  const addOns = [
    { id: 'rush', name: 'Rush Service (24-48hrs)', price: 150 },
    { id: 'mobile', name: 'Mobile Installation', price: 200 },
    { id: 'warranty', name: 'Extended Warranty', price: 99 },
    { id: 'detail', name: 'Professional Detail', price: 149 }
  ]

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
              <a href="tel:+13015558734" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              Get Your <span className="text-red-500">Free Quote</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional vehicle customization pricing with transparent costs and no hidden fees. 
              Get detailed estimates for all services with same-day quotes available.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">Instant Estimates</div>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">Lifetime Warranties</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">Same-Day Service</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">5-Star Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form & Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interactive Quote Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-red-600 mr-3" />
                Build Your Quote
              </h3>

              <form className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="(301) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Vehicle Information */}
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h4>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                      <input
                        type="number"
                        min="1990"
                        max="2026"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="2024"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Ford, BMW, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="F-150, X5, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                      <option value="">Select vehicle type</option>
                      {vehicleTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Services Needed</h4>
                  
                  <div className="space-y-3">
                    {serviceCategories.map((service) => (
                      <div key={service.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-red-300 transition">
                        <input
                          type="checkbox"
                          id={service.id}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor={service.id} className="ml-3 flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-900 flex items-center">
                                <service.icon className="h-4 w-4 mr-2" />
                                {service.name}
                                {service.popular && (
                                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-600">{service.description}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-gray-900">{service.priceRange}</div>
                            </div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Options */}
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Options</h4>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {addOns.map((addon) => (
                      <div key={addon.id} className="flex items-center p-3 border border-gray-200 rounded hover:border-red-300 transition">
                        <input
                          type="checkbox"
                          id={addon.id}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor={addon.id} className="ml-3 flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-900">{addon.name}</span>
                            <span className="text-sm font-semibold text-gray-900">+${addon.price}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location & Timing */}
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        Your Location
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="City, State or ZIP"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        Preferred Timing
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option value="">Select timing</option>
                        <option value="asap">As soon as possible</option>
                        <option value="week">Within a week</option>
                        <option value="month">Within a month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Any specific requirements, questions, or details about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition flex items-center justify-center"
                  >
                    Get My Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    We'll contact you within 2 hours with a detailed quote. No obligations.
                  </p>
                </div>
              </form>
            </div>

            {/* Pricing Information & Benefits */}
            <div className="space-y-8">
              {/* Pricing Overview */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Overview</h3>
                
                <div className="space-y-6">
                  {serviceCategories.map((service) => (
                    <div key={service.id} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <service.icon className="h-5 w-5 text-red-600 mr-2" />
                          <span className="font-semibold text-gray-900">{service.name}</span>
                          {service.popular && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium ml-2">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-lg text-red-600">{service.priceRange}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {service.options.slice(0, 4).map((option, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-600">{option.name}:</span>
                            <span className={`font-medium ${option.discount ? 'text-green-600' : 'text-gray-900'}`}>
                              {option.discount ? '' : '+'}${Math.abs(option.price)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Capital Upfitters?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lifetime Warranties</h4>
                      <p className="text-sm text-gray-600">
                        All spray-on bedliners backed by lifetime warranty against cracking, peeling, or chipping.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Installation</h4>
                      <p className="text-sm text-gray-600">
                        Certified technicians with 35+ years combined experience and manufacturer training.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                      <p className="text-sm text-gray-600">
                        No hidden fees or surprise costs. What we quote is what you pay.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Same-Day Service</h4>
                      <p className="text-sm text-gray-600">
                        Many services completed while you wait. Rush service available for urgent needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-gray-300 mb-6">
                  Speak directly with our experts for personalized service recommendations and pricing.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+13015558734"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call (301) 555-UPFIT
                  </a>
                  
                  <div className="text-center text-sm text-gray-400">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h3>
            <p className="text-xl text-gray-600">See what our customers say about our quotes and service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Accurate quote, fair pricing, and excellent work. The bedliner looks perfect and was completed exactly as estimated."
              </p>
              <div className="font-semibold">Michael Torres</div>
              <div className="text-sm text-gray-500">Fleet Manager, Construction Company</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Stealth Hitch quote was detailed and transparent. Installation was flawless and exactly matched the estimate."
              </p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-gray-500">BMW X5 Owner, Bethesda</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Fast quote turnaround and competitive pricing. The government fleet pricing was exactly what we needed."
              </p>
              <div className="font-semibold">Chief Rodriguez</div>
              <div className="text-sm text-gray-500">City of Rockville Police</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h3>
          <p className="text-xl text-red-100 mb-8">
            Professional vehicle customization quotes with transparent pricing and no hidden fees. 
            Most quotes delivered within 2 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Get Quote Online
            </button>
            <a href="tel:+13015558734" className="border-2 border-white hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              Call (301) 555-UPFIT
            </a>
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
                Professional vehicle customization quotes and service since 1989.
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/spray-on-bedliner" className="hover:text-white transition">Spray-On Bedliners</Link></li>
                <li><Link href="/tonneau-covers" className="hover:text-white transition">Tonneau Covers</Link></li>
                <li><Link href="/hitches-towing" className="hover:text-white transition">Hitches & Towing</Link></li>
                <li><Link href="/fleet" className="hover:text-white transition">Fleet Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Company</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
                <li><Link href="/quote" className="hover:text-white transition">Get Quote</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-300">
                <p>Rockville, MD 20850</p>
                <p>(301) 555-UPFIT</p>
                <p>quotes@capitalupfitters.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}