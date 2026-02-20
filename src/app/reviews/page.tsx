import Link from 'next/link'
import { 
  Phone, 
  Star, 
  ThumbsUp, 
  Calendar,
  MapPin,
  Quote,
  TrendingUp,
  Award,
  Users,
  CheckCircle
} from 'lucide-react'

export const metadata = {
  title: 'Customer Reviews | Capital Upfitters | 5-Star Auto Upfitting Service',
  description: 'Read real customer reviews and testimonials for Capital Upfitters. 98% customer satisfaction, 5-star ratings for truck customization, fleet services, and luxury vehicle upfitting.',
  keywords: 'capital upfitters reviews, customer testimonials, truck upfitting reviews, bedliner reviews, fleet service reviews, auto customization ratings',
}

export default function ReviewsPage() {
  // Mock review data - will integrate with Google/Facebook APIs
  const reviews = [
    {
      id: 1,
      name: 'Michael Torres',
      rating: 5,
      date: '2026-02-15',
      service: 'Fleet Bedliner Installation',
      location: 'Rockville, MD',
      avatar: 'MT',
      verified: true,
      review: 'Outstanding service for our construction fleet. Capital Upfitters completed 12 truck bedliners in just 3 days with exceptional quality. The Patriot Liner coating looks professional and the lifetime warranty gives us peace of mind. Highly recommended for any fleet operation.',
      helpful: 15,
      photos: 2
    },
    {
      id: 2,
      name: 'Sarah Chen',
      rating: 5,
      date: '2026-02-10',
      service: 'Stealth Hitch - BMW X5',
      location: 'Bethesda, MD',
      avatar: 'SC',
      verified: true,
      review: 'Absolutely perfect Stealth Hitch installation on my 2024 BMW X5. You literally cannot see it when not in use - preserves the luxury look completely. Installation was professional, clean, and they detailed the car afterward. Worth every penny!',
      helpful: 23,
      photos: 3
    },
    {
      id: 3,
      name: 'James Rodriguez',
      rating: 5,
      date: '2026-02-08',
      service: 'Tonneau Cover & Bedliner',
      location: 'Alexandria, VA',
      avatar: 'JR',
      verified: true,
      review: 'Great experience from quote to completion. Fair pricing, quality work, and they finished ahead of schedule. The tonneau cover operates smoothly and the bedliner texture is perfect. This is how professional service should be done.',
      helpful: 18,
      photos: 1
    },
    {
      id: 4,
      name: 'Municipal Fleet Manager',
      rating: 5,
      date: '2026-02-05',
      service: 'Government Fleet Services',
      location: 'Montgomery County, MD',
      avatar: 'MF',
      verified: true,
      review: 'Capital Upfitters handled our entire police vehicle customization project flawlessly. 20 vehicles completed on time, within budget, and to exact specifications. Their experience with government requirements made the process smooth. Excellent vendor to work with.',
      helpful: 31,
      photos: 0
    },
    {
      id: 5,
      name: 'Lisa Patterson',
      rating: 5,
      date: '2026-02-01',
      service: 'Stealth Hitch - Audi Q7',
      location: 'McLean, VA',
      avatar: 'LP',
      verified: true,
      review: 'I was skeptical about putting a hitch on my Audi, but the Stealth Hitch is amazing. Completely invisible and works perfectly for my boat trailer. Capital Upfitters\' attention to detail and luxury vehicle expertise shows in every aspect of the work.',
      helpful: 19,
      photos: 2
    },
    {
      id: 6,
      name: 'Dave Kim',
      rating: 5,
      date: '2026-01-28',
      service: 'Spray-On Bedliner',
      location: 'Gaithersburg, MD',
      avatar: 'DK',
      verified: true,
      review: 'Best bedliner application I\'ve seen. The texture is perfect for grip without being too rough, and the coverage is complete including the tailgate. Fair price, professional service, and they cleaned up perfectly. Will be back for my next truck.',
      helpful: 12,
      photos: 1
    },
    {
      id: 7,
      name: 'Construction Company Owner',
      rating: 5,
      date: '2026-01-25',
      service: 'Fleet Upfitting - 8 Trucks',
      location: 'Frederick, MD',
      avatar: 'CO',
      verified: true,
      review: 'Capital Upfitters transformed our work truck fleet with professional bedliners and equipment storage solutions. Quality workmanship, competitive pricing for bulk work, and they coordinated scheduling to minimize downtime. True professionals.',
      helpful: 27,
      photos: 4
    },
    {
      id: 8,
      name: 'Robert Johnson',
      rating: 5,
      date: '2026-01-20',
      service: 'Tonneau Cover Installation',
      location: 'Annapolis, MD',
      avatar: 'RJ',
      verified: true,
      review: 'Perfect installation of a hard folding tonneau cover on my Ram 1500. Fits perfectly, operates smoothly, and looks great. The team was professional, punctual, and explained everything thoroughly. Highly recommend Capital Upfitters.',
      helpful: 14,
      photos: 2
    },
    {
      id: 9,
      name: 'Jennifer Walsh',
      rating: 5,
      date: '2026-01-15',
      service: 'Multiple Services',
      location: 'Silver Spring, MD',
      avatar: 'JW',
      verified: true,
      review: 'Had bedliner, tonneau cover, and hitch installed on my F-150. One-stop shopping with excellent results on all services. Fair pricing, quality work, and great customer service throughout the process. Will recommend to everyone.',
      helpful: 16,
      photos: 3
    },
    {
      id: 10,
      name: 'Public Safety Director',
      rating: 5,
      date: '2026-01-12',
      service: 'Emergency Vehicle Upfitting',
      location: 'Prince Georges County, MD',
      avatar: 'PS',
      verified: true,
      review: 'Professional emergency vehicle customization that met all our safety and functionality requirements. Capital Upfitters understands public safety needs and delivered exactly what we needed on time and on budget.',
      helpful: 22,
      photos: 1
    }
  ]

  const stats = {
    totalReviews: 247,
    averageRating: 4.9,
    fiveStarPercentage: 94,
    wouldRecommend: 98,
    repeatCustomers: 87
  }

  const ratingBreakdown = [
    { stars: 5, count: 232, percentage: 94 },
    { stars: 4, count: 12, percentage: 5 },
    { stars: 3, count: 2, percentage: 1 },
    { stars: 2, count: 1, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 }
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
              Customer <span className="text-red-500">Reviews</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Don't just take our word for it. See what our customers say about their experience 
              with Capital Upfitters' professional vehicle customization services.
            </p>
          </div>

          {/* Rating Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">{stats.averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">{stats.totalReviews}</div>
              <div className="text-sm text-gray-300">Total Reviews</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">{stats.fiveStarPercentage}%</div>
              <div className="text-sm text-gray-300">5-Star Reviews</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">{stats.wouldRecommend}%</div>
              <div className="text-sm text-gray-300">Would Recommend</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">{stats.repeatCustomers}%</div>
              <div className="text-sm text-gray-300">Repeat Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Rating Breakdown</h3>
            
            <div className="space-y-4">
              {ratingBreakdown.map((rating) => (
                <div key={rating.stars} className="flex items-center">
                  <div className="flex items-center w-20">
                    <span className="text-sm font-medium mr-2">{rating.stars}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-red-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="w-16 text-right">
                    <span className="text-sm font-medium">{rating.count}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center text-green-800">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">98% of customers would recommend Capital Upfitters to others</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Feed */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        {review.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {review.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {review.service}
                  </span>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <Quote className="h-4 w-4 text-gray-400 mb-2" />
                  <p className="text-gray-700 italic">{review.review}</p>
                </div>

                {/* Review Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-red-600 transition">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    
                    {review.photos > 0 && (
                      <span className="flex items-center">
                        📷 {review.photos} photo{review.photos > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>

                  <button className="text-red-600 hover:text-red-700 font-medium transition">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold transition">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Customers Love Most</h3>
            <p className="text-xl text-gray-600">Common themes from our customer feedback</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Quality Workmanship</h4>
              <p className="text-gray-600 text-sm">
                "Professional installation", "attention to detail", and "lifetime warranty confidence"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Exceptional Service</h4>
              <p className="text-gray-600 text-sm">
                "Friendly staff", "clear communication", and "exceeded expectations"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Fair Pricing</h4>
              <p className="text-gray-600 text-sm">
                "Competitive rates", "transparent pricing", and "excellent value"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Timely Completion</h4>
              <p className="text-gray-600 text-sm">
                "On-time delivery", "ahead of schedule", and "minimal downtime"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
          <p className="text-xl text-gray-600 mb-8">
            Had a great experience with Capital Upfitters? We'd love to hear about it!
          </p>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-3">
                  G
                </div>
                <span className="font-medium">Google Reviews</span>
              </a>

              <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3">
                  f
                </div>
                <span className="font-medium">Facebook Reviews</span>
              </a>

              <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3">
                  Y
                </div>
                <span className="font-medium">Yelp Reviews</span>
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Your honest feedback helps other customers make informed decisions and helps us continue improving our services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Satisfied Customers?</h3>
          <p className="text-xl text-red-100 mb-8">
            Experience the quality and service that earns us 5-star reviews consistently.
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