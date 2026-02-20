import Link from 'next/link'
import { 
  Phone, 
  Filter, 
  Search, 
  Star,
  ArrowRight,
  Play,
  Image as ImageIcon
} from 'lucide-react'

export const metadata = {
  title: 'Gallery | Capital Upfitters Work Portfolio | Before & After Photos',
  description: 'View our professional truck customization work. Before & after photos of bedliners, tonneau covers, hitches, fleet upfitting, and luxury vehicle modifications.',
  keywords: 'capital upfitters gallery, before after photos, truck customization, bedliner photos, tonneau cover installation, fleet upfitting, stealth hitch photos',
}

export default function GalleryPage() {
  // Mock gallery data - will be replaced with real project photos
  const projects = [
    {
      id: 1,
      title: '2023 Ford F-150 - Complete Fleet Package',
      category: 'fleet',
      services: ['Spray-On Bedliner', 'Tonneau Cover', 'Equipment Mounting'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Municipal fleet vehicle with protective bedliner, weather-resistant tonneau cover, and custom equipment mounting solutions.',
      client: 'Montgomery County DPW',
      completedDate: '2026-01-15'
    },
    {
      id: 2,
      title: '2024 BMW X5 - Stealth Hitch Installation',
      category: 'luxury',
      services: ['Stealth Hitch'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Invisible hitch installation preserving the luxury aesthetics while adding towing capability.',
      client: 'Private Client - Bethesda',
      completedDate: '2026-01-20'
    },
    {
      id: 3,
      title: '2022 Chevy Silverado - Patriot Liner Bedliner',
      category: 'general',
      services: ['Spray-On Bedliner', 'Bed Accessories'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Professional Patriot Liner application with textured finish and matching tailgate coverage.',
      client: 'Private Client - Rockville',
      completedDate: '2026-01-10'
    },
    {
      id: 4,
      title: 'Police Fleet Customization - 15 Vehicles',
      category: 'government',
      services: ['Equipment Integration', 'Protective Coatings', 'Storage Solutions'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Complete public safety vehicle customization including equipment mounting and protective applications.',
      client: 'City of Rockville Police',
      completedDate: '2025-12-20'
    },
    {
      id: 5,
      title: '2023 Ram 1500 - Tonneau Cover & Accessories',
      category: 'general',
      services: ['Hard Folding Tonneau Cover', 'Nerf Bars', 'LED Lighting'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Complete truck transformation with weather protection and enhanced functionality.',
      client: 'Private Client - Alexandria',
      completedDate: '2026-01-25'
    },
    {
      id: 6,
      title: '2024 Audi Q7 - Stealth Hitch System',
      category: 'luxury',
      services: ['Stealth Hitch', 'Wiring Harness'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Completely hidden hitch installation with integrated wiring for luxury SUV.',
      client: 'Private Client - McLean',
      completedDate: '2026-02-01'
    },
    {
      id: 7,
      title: 'Construction Fleet - 8 Work Trucks',
      category: 'fleet',
      services: ['Bedliners', 'Tool Storage', 'Equipment Racks'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Heavy-duty fleet customization for construction company work trucks.',
      client: 'ABC Construction',
      completedDate: '2025-11-30'
    },
    {
      id: 8,
      title: '2023 F-250 - Municipal Service Truck',
      category: 'government',
      services: ['Utility Body Integration', 'Equipment Storage', 'Protective Coatings'],
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Public works vehicle setup with specialized equipment integration and protective applications.',
      client: 'Prince Georges County',
      completedDate: '2026-01-05'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fleet', name: 'Fleet Solutions', count: projects.filter(p => p.category === 'fleet').length },
    { id: 'luxury', name: 'Luxury Vehicles', count: projects.filter(p => p.category === 'luxury').length },
    { id: 'government', name: 'Government/Municipal', count: projects.filter(p => p.category === 'government').length },
    { id: 'general', name: 'General Market', count: projects.filter(p => p.category === 'general').length }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fleet': return 'bg-orange-100 text-orange-800'
      case 'luxury': return 'bg-purple-100 text-purple-800'
      case 'government': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Our Work <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See the quality and craftsmanship that has made Capital Upfitters the region's 
            most trusted vehicle customization specialists for over 35 years.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">1,000+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">98%</div>
              <div className="text-sm text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">35+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">5★</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 hover:text-red-600 transition flex items-center"
                >
                  <span>{category.name}</span>
                  <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:border-red-500 transition">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {/* Image Container */}
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category === 'fleet' && 'Fleet'}
                      {project.category === 'luxury' && 'Luxury'}
                      {project.category === 'government' && 'Government'}
                      {project.category === 'general' && 'General'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition">
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  {/* Services */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex justify-between">
                      <span>Client:</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span className="font-medium">{new Date(project.completedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center">
                    View Project Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold transition">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Before & After Transformations</h3>
            <p className="text-xl text-gray-600">
              See the dramatic improvements our professional upfitting services provide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before/After Example 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-4">Fleet Bedliner Installation</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="bg-red-50 p-2 rounded text-center mb-2">
                      <span className="text-red-600 font-medium text-sm">BEFORE</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">Before Photo</span>
                    </div>
                  </div>
                  <div>
                    <div className="bg-green-50 p-2 rounded text-center mb-2">
                      <span className="text-green-600 font-medium text-sm">AFTER</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">After Photo</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional Patriot Liner application transforms bare truck bed into a protected, 
                  professional work surface with lifetime warranty coverage.
                </p>
              </div>
            </div>

            {/* Before/After Example 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-4">Stealth Hitch Installation</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="bg-red-50 p-2 rounded text-center mb-2">
                      <span className="text-red-600 font-medium text-sm">BEFORE</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">Before Photo</span>
                    </div>
                  </div>
                  <div>
                    <div className="bg-green-50 p-2 rounded text-center mb-2">
                      <span className="text-green-600 font-medium text-sm">AFTER</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">After Photo</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Invisible hitch installation preserves luxury vehicle aesthetics while adding 
                  full towing capability - completely hidden when not in use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials from Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">
              Real feedback from the projects you see in our gallery.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The fleet bedliner installation exceeded our expectations. Professional work, 
                on-time delivery, and the lifetime warranty gives us confidence in the investment."
              </p>
              <div className="font-medium">Fleet Manager</div>
              <div className="text-sm text-gray-500">Montgomery County DPW</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Amazing work on the Stealth Hitch installation. You literally cannot tell it's there 
                until you need it. Perfect solution for my BMW."
              </p>
              <div className="font-medium">Sarah M.</div>
              <div className="text-sm text-gray-500">2024 BMW X5 Owner</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Capital Upfitters handled our entire police fleet customization professionally. 
                Every vehicle met spec and was delivered on schedule."
              </p>
              <div className="font-medium">Chief Rodriguez</div>
              <div className="text-sm text-gray-500">City of Rockville Police</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-red-100 mb-8">
            Join our gallery of satisfied customers with a professional vehicle customization project.
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
                Rockville's premier truck and fleet customization specialists since 1989.
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
        </div>
      </footer>
    </div>
  )
}