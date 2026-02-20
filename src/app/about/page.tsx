import Link from 'next/link'
import { 
  Phone, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Star,
  CheckCircle,
  Heart,
  Target,
  TrendingUp
} from 'lucide-react'

export const metadata = {
  title: 'About Capital Upfitters | 35+ Years Truck Customization | Rockville MD',
  description: 'Family-owned auto upfitting specialists serving DC Metro since 1989. 35+ years experience, certified installers, lifetime warranties. Meet our team.',
  keywords: 'about capital upfitters, family owned, 35 years experience, rockville md, truck customization, auto upfitting, certified installers',
}

export default function AboutPage() {
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Family-Owned. <span className="text-red-500">Expert-Driven.</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                For over 35 years, Capital Upfitters has been Rockville's trusted partner for 
                professional vehicle customization. What started as a small family business 
                has grown into the region's premier auto upfitting specialists.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">35+</div>
                  <div className="text-sm text-gray-300">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">10,000+</div>
                  <div className="text-sm text-gray-300">Vehicles Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">98%</div>
                  <div className="text-sm text-gray-300">Customer Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition text-center">
                  Work With Us
                </Link>
                <Link href="/gallery" className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition text-center">
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-200">Family Photo / Shop Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Capital Upfitters began in 1989 when founder Ivan Ko Sr. recognized that vehicle owners in 
                  the Washington DC area needed a trusted partner for professional customization and protection services.
                </p>
                
                <p>
                  What started as a small operation focused on basic truck accessories has evolved into a comprehensive 
                  upfitting solution serving everyone from individual truck enthusiasts to major fleet operations and 
                  government agencies.
                </p>
                
                <p>
                  Today, under the leadership of Ivan Ko Jr., we continue the family tradition of excellence while 
                  embracing new technologies and expanding our service offerings. We've grown from a single bay 
                  operation to a full-service facility, but our commitment to quality and customer satisfaction 
                  remains unchanged.
                </p>
                
                <p>
                  We're not just installers – we're consultants, problem solvers, and partners in helping our 
                  customers get the most out of their vehicles. Every project, whether it's a single bedliner 
                  or a 200-vehicle fleet rollout, receives the same attention to detail and commitment to excellence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Award className="h-6 w-6 text-red-600 mr-3" />
                  Our Mission
                </h4>
                <p className="text-gray-600">
                  To provide exceptional vehicle customization services that enhance functionality, 
                  protect investment, and exceed expectations through expert craftsmanship and 
                  outstanding customer service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-3" />
                  Our Vision
                </h4>
                <p className="text-gray-600">
                  To be the Mid-Atlantic region's most trusted and innovative vehicle upfitting company, 
                  setting the standard for quality, reliability, and customer satisfaction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Heart className="h-6 w-6 text-green-600 mr-3" />
                  Our Values
                </h4>
                <p className="text-gray-600">
                  Family business principles guide everything we do: treat every customer like family, 
                  stand behind our work with lifetime warranties, and always do the right thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Capital Upfitters?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of experience have taught us what matters most to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-4">Expert Installation</h4>
              <p className="text-gray-600">
                Our certified technicians have decades of experience and ongoing manufacturer training.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-4">Lifetime Warranties</h4>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties that protect your investment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-4">Personal Service</h4>
              <p className="text-gray-600">
                Family-owned means you get personal attention and care from people who take pride in their work.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold mb-4">Continuous Innovation</h4>
              <p className="text-gray-600">
                We stay current with the latest products, techniques, and technologies in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experienced professionals who make Capital Upfitters the region's premier choice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ivan Ko Jr. */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-600">IK</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Ivan Ko Jr.</h4>
              <p className="text-red-600 font-medium mb-4">President & CEO</p>
              <p className="text-gray-600 text-sm">
                Leading the company into its fourth decade, Ivan Jr. combines family business values 
                with modern business practices and technology innovation.
              </p>
            </div>

            {/* Lead Technician */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-600">MT</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Mike Thompson</h4>
              <p className="text-blue-600 font-medium mb-4">Lead Installation Technician</p>
              <p className="text-gray-600 text-sm">
                With 15 years of experience, Mike leads our installation team and ensures every job 
                meets our exacting standards for quality and craftsmanship.
              </p>
            </div>

            {/* Customer Service */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-600">SJ</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Sarah Johnson</h4>
              <p className="text-green-600 font-medium mb-4">Customer Experience Manager</p>
              <p className="text-gray-600 text-sm">
                Sarah ensures every customer has an exceptional experience from initial consultation 
                through project completion and beyond.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Our team includes certified installers, project managers, and customer service specialists 
              all dedicated to exceeding your expectations.
            </p>
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition">
              Work With Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h3>
            <p className="text-xl text-gray-600">
              We maintain the highest industry standards through ongoing training and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold">Patriot Liner</h4>
                <p className="text-sm text-gray-600">Authorized Dealer</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-50 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold">Stealth Hitches</h4>
                <p className="text-sm text-gray-600">Certified Installer</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-orange-50 p-6 rounded-lg">
                <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold">Better Business Bureau</h4>
                <p className="text-sm text-gray-600">A+ Rating</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 p-6 rounded-lg">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold">Industry Association</h4>
                <p className="text-sm text-gray-600">Member in Good Standing</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-center mb-6">Quality Commitments</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h5 className="font-bold mb-2">Timely Service</h5>
                <p className="text-sm text-gray-600">Projects completed on schedule with minimal vehicle downtime</p>
              </div>
              
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h5 className="font-bold mb-2">Warranty Protection</h5>
                <p className="text-sm text-gray-600">Comprehensive warranties backed by decades of reliability</p>
              </div>
              
              <div className="text-center">
                <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h5 className="font-bold mb-2">Quality Materials</h5>
                <p className="text-sm text-gray-600">Premium products from trusted manufacturers only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work With the Experts?</h3>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of satisfied customers who trust Capital Upfitters with their vehicle customization needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-bold text-lg transition">
              Get Your Free Quote
            </Link>
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
                <li><Link href="/fleet" className="hover:text-white transition">Fleet Solutions</Link></li>
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