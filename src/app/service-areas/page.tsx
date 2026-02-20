import Link from 'next/link'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Car, 
  Truck, 
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Navigation
} from 'lucide-react'

export const metadata = {
  title: 'Service Areas | Capital Upfitters | DC Metro Vehicle Customization',
  description: 'Professional vehicle customization serving Washington DC, Maryland, Virginia. Local service areas: Rockville, Bethesda, Arlington, Alexandria, Silver Spring, and more.',
  keywords: 'vehicle customization DC, truck upfitting Maryland, auto accessories Virginia, service areas, local installation, mobile service',
}

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      name: 'Rockville, MD',
      slug: 'rockville-md',
      distance: '0 miles',
      description: 'Our home base location with full-service facility',
      population: '68,000',
      highlights: ['Main Service Center', 'All Services Available', 'Same-Day Service'],
      projects: 450,
      rating: 4.9
    },
    {
      name: 'Bethesda, MD',
      slug: 'bethesda-md', 
      distance: '5 miles',
      description: 'Premium vehicle customization for luxury community',
      population: '65,000',
      highlights: ['Luxury Vehicle Specialist', 'Stealth Hitches', 'High-End Clients'],
      projects: 280,
      rating: 4.9
    },
    {
      name: 'Silver Spring, MD',
      slug: 'silver-spring-md',
      distance: '8 miles', 
      description: 'Complete truck and fleet upfitting services',
      population: '81,000',
      highlights: ['Fleet Services', 'Commercial Accounts', 'Volume Discounts'],
      projects: 320,
      rating: 4.8
    },
    {
      name: 'Gaithersburg, MD',
      slug: 'gaithersburg-md',
      distance: '12 miles',
      description: 'Professional installation and customization services',
      population: '69,000', 
      highlights: ['Business Fleet Specialist', 'Government Contracts', 'Municipal Services'],
      projects: 190,
      rating: 4.9
    },
    {
      name: 'Arlington, VA',
      slug: 'arlington-va',
      distance: '18 miles',
      description: 'Northern Virginia premier vehicle customization',
      population: '238,000',
      highlights: ['Government Fleet Expert', 'Federal Contracts', 'High Security Clearance'],
      projects: 420,
      rating: 4.8
    },
    {
      name: 'Alexandria, VA',
      slug: 'alexandria-va', 
      distance: '22 miles',
      description: 'Complete vehicle upfitting and customization',
      population: '160,000',
      highlights: ['Historic City Services', 'Luxury Vehicles', 'Fleet Management'],
      projects: 240,
      rating: 4.7
    },
    {
      name: 'Washington, DC',
      slug: 'washington-dc',
      distance: '15 miles',
      description: 'Capitol region vehicle customization specialists',
      population: '700,000',
      highlights: ['Federal Government', 'Diplomatic Vehicles', 'High-Security Applications'],
      projects: 380,
      rating: 4.8
    },
    {
      name: 'Fairfax, VA',
      slug: 'fairfax-va',
      distance: '25 miles',
      description: 'Northern Virginia truck and SUV customization',
      population: '24,000',
      highlights: ['County Government', 'Police Fleet', 'Emergency Vehicles'],
      projects: 160,
      rating: 4.9
    },
    {
      name: 'College Park, MD',
      slug: 'college-park-md',
      distance: '20 miles', 
      description: 'University area vehicle customization services',
      population: '32,000',
      highlights: ['University Fleet', 'Research Vehicles', 'Student Discounts'],
      projects: 95,
      rating: 4.6
    },
    {
      name: 'Falls Church, VA',
      slug: 'falls-church-va',
      distance: '20 miles',
      description: 'Premium vehicle upfitting and accessories',
      population: '15,000',
      highlights: ['Luxury Community', 'High-End Vehicles', 'Custom Solutions'],
      projects: 110,
      rating: 4.8
    },
    {
      name: 'Wheaton, MD',
      slug: 'wheaton-md',
      distance: '10 miles',
      description: 'Local community vehicle customization services',
      population: '50,000',
      highlights: ['Community Focus', 'Family Vehicles', 'Local Business Fleet'],
      projects: 85,
      rating: 4.7
    },
    {
      name: 'Takoma Park, MD',
      slug: 'takoma-park-md',
      distance: '12 miles',
      description: 'Eco-friendly and sustainable vehicle modifications',
      population: '17,000', 
      highlights: ['Eco-Friendly Options', 'Hybrid Vehicles', 'Green Solutions'],
      projects: 45,
      rating: 4.6
    }
  ]

  const totalProjects = serviceAreas.reduce((sum, area) => sum + area.projects, 0)
  const averageRating = (serviceAreas.reduce((sum, area) => sum + area.rating, 0) / serviceAreas.length).toFixed(1)

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
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              Service <span className="text-red-500">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional vehicle customization serving the entire Washington DC Metro area. 
              From luxury Stealth Hitches to large fleet operations, we bring expert service 
              to your community.
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{serviceAreas.length}+</div>
                <div className="text-sm text-gray-300">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{totalProjects.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">60mi</div>
                <div className="text-sm text-gray-300">Service Radius</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{averageRating}★</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Where We Serve</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive vehicle customization services throughout the DC Metro region. 
              Click on your area to see local information and project examples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.slug} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
                {/* Area Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h4>
                      <div className="flex items-center text-gray-600 text-sm space-x-4 mb-3">
                        <div className="flex items-center">
                          <Navigation className="h-4 w-4 mr-1" />
                          {area.distance}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {area.population}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-yellow-500 mb-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium text-gray-900 ml-1">{area.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">{area.projects} projects</div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Specializations</h5>
                  <ul className="space-y-2 mb-6">
                    {area.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Link 
                    href={`/service-areas/${area.slug}`}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center"
                  >
                    View {area.name.split(',')[0]} Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Complete Regional Coverage</h3>
              <p className="text-lg text-gray-700 mb-6">
                Capital Upfitters provides comprehensive vehicle customization services throughout 
                the Washington DC Metro area. With over 35 years of experience, we understand 
                the unique needs of each community we serve.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Truck className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fleet Services</h4>
                    <p className="text-gray-600 text-sm">
                      Government, municipal, and commercial fleet customization with 
                      coordinated scheduling and volume pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Car className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Luxury Vehicles</h4>
                    <p className="text-gray-600 text-sm">
                      Specialized services for BMW, Audi, Mercedes, and other luxury 
                      brands with invisible installation techniques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Government Contracts</h4>
                    <p className="text-gray-600 text-sm">
                      Federal, state, and local government vehicle customization 
                      meeting all compliance and security requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Service Information</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-2" />
                    Business Hours
                  </h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    Service Radius
                  </h5>
                  <p className="text-sm text-gray-600">
                    We provide service within a 60-mile radius of Rockville, MD. 
                    Contact us for service availability in your specific location.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Emergency Service</h5>
                  <p className="text-sm text-gray-600">
                    Emergency fleet repairs and government vehicle modifications 
                    available 24/7 for qualified accounts.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex space-x-3">
                    <Link 
                      href="/contact" 
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium text-center transition"
                    >
                      Get Quote
                    </Link>
                    <a 
                      href="tel:+13015558734"
                      className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-3 px-4 rounded-lg font-medium text-center transition"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Mobile Service Available</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For certain services and fleet accounts, we offer mobile installation 
              at your location for maximum convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Fleet On-Site Service</h4>
              <p className="text-gray-600">
                Large fleet installations performed at your facility to minimize 
                vehicle downtime and operational disruption.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Government Locations</h4>
              <p className="text-gray-600">
                Secure facility installations for government and law enforcement 
                vehicles requiring specialized access and clearances.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Emergency Response</h4>
              <p className="text-gray-600">
                24/7 emergency mobile service for critical fleet vehicles and 
                emergency services requiring immediate attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-red-100 mb-8">
            Professional vehicle customization services throughout the DC Metro area. 
            Contact us today for a free consultation and quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-bold text-lg transition">
              Get Free Quote
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
                Serving the Washington DC Metro area with professional vehicle customization since 1989.
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
              <h6 className="font-bold mb-4">Service Areas</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/service-areas/rockville-md" className="hover:text-white transition">Rockville, MD</Link></li>
                <li><Link href="/service-areas/bethesda-md" className="hover:text-white transition">Bethesda, MD</Link></li>
                <li><Link href="/service-areas/arlington-va" className="hover:text-white transition">Arlington, VA</Link></li>
                <li><Link href="/service-areas" className="hover:text-white transition">View All Areas</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-300">
                <p>Rockville, MD 20850</p>
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