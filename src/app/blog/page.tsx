import Link from 'next/link'
import { 
  Phone, 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Clock,
  TrendingUp,
  Truck,
  Shield,
  Users
} from 'lucide-react'

export const metadata = {
  title: 'Blog | Capital Upfitters | Truck Customization Tips & Industry News',
  description: 'Expert insights on truck customization, fleet management, vehicle upfitting trends, and product reviews. Stay informed with Capital Upfitters\' professional advice.',
  keywords: 'truck customization blog, vehicle upfitting tips, fleet management advice, bedliner guide, tonneau cover reviews, hitch installation tips',
}

export default function BlogPage() {
  // Mock blog posts - will integrate with CMS
  const posts = [
    {
      id: 1,
      title: 'Fleet ROI Calculator: How Much Can You Save with Professional Upfitting?',
      slug: 'fleet-roi-calculator-professional-upfitting-savings',
      excerpt: 'Discover the real financial impact of professional fleet upfitting. Our comprehensive ROI calculator shows potential savings of $1,200+ per vehicle annually through reduced maintenance and increased productivity.',
      content: 'Fleet managers are constantly looking for ways to reduce costs while maintaining operational efficiency...',
      author: 'Ivan Ko Jr.',
      authorRole: 'CEO, Capital Upfitters',
      publishDate: '2026-02-15',
      category: 'Fleet Management',
      tags: ['ROI', 'Fleet', 'Cost Savings', 'Business'],
      readTime: 8,
      featured: true,
      image: '/blog-fleet-roi.jpg'
    },
    {
      id: 2,
      title: 'Stealth Hitch vs. Traditional Hitch: Complete Luxury Vehicle Guide',
      slug: 'stealth-hitch-vs-traditional-hitch-luxury-vehicle-guide',
      excerpt: 'Why luxury vehicle owners are switching to Stealth Hitches. Compare aesthetics, functionality, and value for BMW, Audi, Mercedes, and Land Rover applications.',
      content: 'Luxury vehicle owners face a unique challenge when they need towing capability...',
      author: 'Mike Thompson',
      authorRole: 'Lead Installation Technician',
      publishDate: '2026-02-12',
      category: 'Luxury Vehicles',
      tags: ['Stealth Hitch', 'Luxury', 'BMW', 'Audi', 'Installation'],
      readTime: 6,
      featured: true,
      image: '/blog-stealth-hitch.jpg'
    },
    {
      id: 3,
      title: 'Spray-On Bedliner vs. Drop-In: 2026 Complete Comparison',
      slug: 'spray-on-bedliner-vs-drop-in-2026-comparison',
      excerpt: 'The definitive guide to choosing between spray-on and drop-in bedliners. Compare durability, cost, installation, and long-term value with real-world testing data.',
      content: 'Choosing the right bed protection for your truck is one of the most important customization decisions...',
      author: 'Sarah Johnson',
      authorRole: 'Customer Experience Manager',
      publishDate: '2026-02-10',
      category: 'Product Guides',
      tags: ['Bedliner', 'Comparison', 'Patriot Liner', 'Protection'],
      readTime: 10,
      featured: false,
      image: '/blog-bedliner-comparison.jpg'
    },
    {
      id: 4,
      title: 'Government Fleet Compliance: Meeting Municipal Standards',
      slug: 'government-fleet-compliance-municipal-standards',
      excerpt: 'Navigate government fleet requirements with confidence. Essential compliance standards, documentation, and best practices for municipal vehicle upfitting projects.',
      content: 'Government and municipal fleet managers operate under strict compliance requirements...',
      author: 'Ivan Ko Jr.',
      authorRole: 'CEO, Capital Upfitters',
      publishDate: '2026-02-08',
      category: 'Government',
      tags: ['Government', 'Compliance', 'Municipal', 'Standards'],
      readTime: 7,
      featured: false,
      image: '/blog-government-compliance.jpg'
    },
    {
      id: 5,
      title: 'Tonneau Cover Buying Guide: Hard vs. Soft vs. Retractable',
      slug: 'tonneau-cover-buying-guide-hard-soft-retractable',
      excerpt: 'Choose the perfect tonneau cover for your needs. Comprehensive comparison of hard folding, soft roll-up, and retractable covers with pros, cons, and pricing.',
      content: 'Tonneau covers offer excellent bed protection and improved fuel economy...',
      author: 'Mike Thompson',
      authorRole: 'Lead Installation Technician',
      publishDate: '2026-02-05',
      category: 'Product Guides',
      tags: ['Tonneau Cover', 'Buying Guide', 'Comparison', 'Installation'],
      readTime: 9,
      featured: false,
      image: '/blog-tonneau-guide.jpg'
    },
    {
      id: 6,
      title: 'Winter Fleet Preparation: Essential Upfitting for Cold Weather',
      slug: 'winter-fleet-preparation-cold-weather-upfitting',
      excerpt: 'Prepare your fleet for winter conditions with the right upfitting solutions. From heated equipment to protective coatings, keep your operation running smoothly.',
      content: 'Winter weather presents unique challenges for fleet operations across the Mid-Atlantic region...',
      author: 'Dave Martinez',
      authorRole: 'Fleet Specialist',
      publishDate: '2026-02-01',
      category: 'Seasonal',
      tags: ['Winter', 'Fleet', 'Preparation', 'Weather'],
      readTime: 5,
      featured: false,
      image: '/blog-winter-prep.jpg'
    }
  ]

  const categories = [
    { name: 'All Posts', count: posts.length, active: true },
    { name: 'Fleet Management', count: 2 },
    { name: 'Product Guides', count: 2 },
    { name: 'Luxury Vehicles', count: 1 },
    { name: 'Government', count: 1 },
    { name: 'Seasonal', count: 1 },
    { name: 'Installation Tips', count: 0 },
    { name: 'Industry News', count: 0 }
  ]

  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

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
              Expert <span className="text-red-500">Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional advice, industry trends, and expert tips from Capital Upfitters' 
              experienced team. Stay informed about the latest in vehicle customization and fleet management.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">50+</div>
              <div className="text-sm text-gray-300">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">15K+</div>
              <div className="text-sm text-gray-300">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">35+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">Weekly</div>
              <div className="text-sm text-gray-300">New Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-3 py-2 rounded transition flex justify-between items-center ${
                        category.active ? 'bg-red-50 text-red-600 font-medium' : 'hover:bg-gray-50'
                      }`}>
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Fleet', 'Bedliner', 'ROI', 'Government', 'Luxury', 'Installation', 'Comparison', 'Tips'].map((tag) => (
                    <button key={tag} className="bg-gray-100 hover:bg-red-50 hover:text-red-600 px-3 py-1 rounded-full text-sm transition">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-red-100 text-sm mb-4">
                  Get the latest vehicle upfitting insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded text-gray-900"
                  />
                  <button className="w-full bg-red-700 hover:bg-red-800 py-2 rounded font-medium transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 text-red-600 mr-2" />
                  Featured Articles
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Featured Image</span>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime} min read
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-3 hover:text-red-600 transition">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Recent Articles</h3>
                
                <div className="space-y-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="md:w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-500 text-sm">Article Image</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center text-gray-500 text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-bold mb-3 hover:text-red-600 transition">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h4>
                          
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              By <strong>{post.author}</strong> • {post.readTime} min read
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Load More Button */}
                <div className="text-center mt-12">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold transition">
                    Load More Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Authors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Expert Authors</h3>
            <p className="text-xl text-gray-600">
              Insights from our experienced team of vehicle upfitting professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                IK
              </div>
              <h4 className="text-xl font-bold mb-2">Ivan Ko Jr.</h4>
              <p className="text-red-600 font-medium mb-3">CEO & President</p>
              <p className="text-gray-600 text-sm mb-4">
                35+ years in the vehicle upfitting industry. Specializes in fleet management, 
                business strategy, and government contracts.
              </p>
              <div className="text-sm text-gray-500">
                <strong>8 articles</strong> • Fleet Management, ROI, Strategy
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                MT
              </div>
              <h4 className="text-xl font-bold mb-2">Mike Thompson</h4>
              <p className="text-blue-600 font-medium mb-3">Lead Installation Technician</p>
              <p className="text-gray-600 text-sm mb-4">
                15+ years hands-on installation experience. Expert in luxury vehicle modifications, 
                Stealth Hitches, and precision installations.
              </p>
              <div className="text-sm text-gray-500">
                <strong>12 articles</strong> • Installation, Luxury Vehicles, Technical
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                SJ
              </div>
              <h4 className="text-xl font-bold mb-2">Sarah Johnson</h4>
              <p className="text-green-600 font-medium mb-3">Customer Experience Manager</p>
              <p className="text-gray-600 text-sm mb-4">
                Customer service expert and product specialist. Focuses on helping customers 
                choose the right solutions for their needs.
              </p>
              <div className="text-sm text-gray-500">
                <strong>6 articles</strong> • Product Guides, Customer Tips, Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Vehicle?</h3>
          <p className="text-xl text-red-100 mb-8">
            Put our expertise to work for you. Get professional vehicle upfitting from the team behind these insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-bold text-lg transition">
              Get Expert Quote
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
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
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