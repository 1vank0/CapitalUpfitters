import Link from 'next/link'
import { 
  Phone, 
  Shield, 
  FileText, 
  DollarSign, 
  Clock, 
  Award,
  CheckCircle,
  TrendingDown,
  Users,
  Star,
  Building,
  Truck
} from 'lucide-react'

export const metadata = {
  title: 'Government Fleet Solutions | Municipal Vehicle Upfitting | Capital Upfitters',
  description: 'Professional government and municipal fleet upfitting services. Competitive bidding, compliance standards, equipment protection, cost reduction for public sector fleets.',
  keywords: 'government fleet, municipal vehicles, public sector, fleet upfitting, government contracts, competitive bidding, compliance standards',
}

export default function GovernmentPage() {
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
                Request RFP
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
                For Government & Municipal Fleets
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Professional <span className="text-blue-400">Municipal Fleet</span> Solutions
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Trusted by government agencies for compliant, cost-effective fleet upfitting. 
                From police and fire departments to public works and utilities.
              </p>
              
              {/* Government Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Compliance Standards</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Competitive Bidding</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-400 mr-3" />
                  <span>RFP Experience</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Certified Installer</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-400 hover:bg-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
                  REQUEST RFP INFORMATION
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                  VIEW MUNICIPAL PORTFOLIO
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-700 h-96 rounded-lg flex items-center justify-center">
                <p className="text-blue-200">Municipal Fleet Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Municipal Fleet Specializations</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for different types of government and municipal operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Public Safety */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold">Public Safety</h4>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Police vehicle upfitting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Fire department equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>EMS vehicle modifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Emergency lighting systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Communication equipment mounting</span>
                </li>
              </ul>
            </div>

            {/* Public Works */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold">Public Works</h4>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Utility truck modifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Snow plow equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Maintenance vehicle setups</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Tool and equipment storage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Protective coatings</span>
                </li>
              </ul>
            </div>

            {/* Parks & Recreation */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold">Parks & Recreation</h4>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Grounds maintenance vehicles</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Athletic facility transport</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Event setup equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Recreational vehicle towing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Landscape equipment storage</span>
                </li>
              </ul>
            </div>

            {/* Administrative */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold">Administrative</h4>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Code enforcement vehicles</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Inspection vehicle setups</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Mobile office configurations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Document storage systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Technology integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Compliance & Standards</h3>
              <p className="text-xl text-gray-600 mb-8">
                We understand government requirements and ensure all installations meet or exceed safety, 
                environmental, and regulatory standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Safety Compliance</h4>
                    <p className="text-gray-600">DOT regulations, OSHA standards, and vehicle safety requirements met on every installation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Documentation</h4>
                    <p className="text-gray-600">Complete installation documentation, warranties, and maintenance records for audit compliance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Certifications</h4>
                    <p className="text-gray-600">Certified installers with manufacturer authorizations and government contracting experience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-6">RFP & Bidding Process</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">1. RFP Review & Analysis</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">2. Technical Specifications</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">3. Competitive Pricing</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">4. Compliance Documentation</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium">5. Project Timeline</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-bold mb-2">We Handle:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Complete RFP response preparation</li>
                  <li>• Technical specification compliance</li>
                  <li>• Competitive pricing analysis</li>
                  <li>• Project management and delivery</li>
                  <li>• Post-installation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Municipal Fleet Cost Analysis</h3>
            <p className="text-xl text-gray-600">
              Understand the total cost of ownership and return on investment for fleet upfitting.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Initial Investment */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-xl font-bold">Initial Investment</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Equipment & Materials</span>
                  <span className="font-medium">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional Installation</span>
                  <span className="font-medium">$800</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Management</span>
                  <span className="font-medium">$200</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total per Vehicle</span>
                  <span>$3,500</span>
                </div>
              </div>
            </div>

            {/* Annual Savings */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-xl font-bold">Annual Savings</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Reduced Maintenance</span>
                  <span className="font-medium text-green-600">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Extended Vehicle Life</span>
                  <span className="font-medium text-green-600">$800</span>
                </div>
                <div className="flex justify-between">
                  <span>Improved Efficiency</span>
                  <span className="font-medium text-green-600">$500</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-green-600">
                  <span>Total per Vehicle</span>
                  <span>$2,500</span>
                </div>
              </div>
            </div>

            {/* 5-Year ROI */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  5
                </div>
                <h4 className="text-xl font-bold">5-Year ROI</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Investment</span>
                  <span className="font-medium">$3,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Savings</span>
                  <span className="font-medium text-green-600">$12,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Net Savings</span>
                  <span className="font-medium text-green-600">$9,000</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-green-600">
                  <span>ROI Percentage</span>
                  <span>257%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Municipal Fleet Calculator</h4>
              <p className="text-gray-600 mb-6">
                Calculate potential savings for your specific fleet size and requirements.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <input type="number" placeholder="Number of vehicles" className="p-3 border border-gray-300 rounded-lg" />
                <select className="p-3 border border-gray-300 rounded-lg">
                  <option>Vehicle type</option>
                  <option>Light trucks</option>
                  <option>Utility vehicles</option>
                  <option>Emergency vehicles</option>
                  <option>Maintenance trucks</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition">
                  Calculate ROI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal References */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Municipal References</h3>
            <p className="text-xl text-gray-600">
              Trusted by government agencies throughout the Mid-Atlantic region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                agency: "Montgomery County Department of Public Works",
                location: "Montgomery County, MD",
                project: "120 utility trucks - protective coatings and equipment mounting",
                timeline: "Completed in 6 months with zero service interruption",
                savings: "$180,000 annual maintenance cost reduction",
                contact: "Fleet Manager: (301) 555-0123"
              },
              {
                agency: "Fairfax County Fire and Rescue",
                location: "Fairfax County, VA",
                project: "85 emergency vehicles - equipment integration and storage solutions",
                timeline: "Phased rollout over 8 months to maintain emergency readiness",
                savings: "$95,000 improved operational efficiency annually",
                contact: "Fleet Director: (703) 555-0456"
              },
              {
                agency: "City of Rockville Public Services",
                location: "Rockville, MD",
                project: "60 mixed fleet vehicles - comprehensive upfitting program",
                timeline: "12-month contract with seasonal scheduling coordination",
                savings: "$125,000 total cost of ownership reduction",
                contact: "Fleet Supervisor: (301) 555-0789"
              },
              {
                agency: "Prince George's County Parks & Recreation",
                location: "Prince George's County, MD",
                project: "45 maintenance and transport vehicles - specialized equipment mounting",
                timeline: "Off-season installation to avoid disrupting programs",
                savings: "$67,000 equipment protection and efficiency gains",
                contact: "Operations Manager: (301) 555-0234"
              }
            ].map((ref, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">{ref.agency}</h4>
                <p className="text-gray-600 mb-4">{ref.location}</p>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Project Scope:</h5>
                    <p className="text-gray-600">{ref.project}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Timeline:</h5>
                    <p className="text-gray-600">{ref.timeline}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Results:</h5>
                    <p className="text-green-600 font-medium">{ref.savings}</p>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-sm text-gray-500">{ref.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              References available upon request. All contacts have agreed to serve as references for qualified prospects.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition">
              Request Reference Contact Information
            </button>
          </div>
        </div>
      </section>

      {/* RFP Request Form */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Request RFP Information</h3>
            <p className="text-xl text-blue-100">
              Get detailed specifications, compliance documentation, and competitive pricing for your fleet project.
            </p>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Name *</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Title/Position *</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Agency/Department *</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Fleet Size *</label>
                  <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select size</option>
                    <option>10-25 vehicles</option>
                    <option>26-50 vehicles</option>
                    <option>51-100 vehicles</option>
                    <option>100+ vehicles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Department Type *</label>
                  <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select type</option>
                    <option>Public Safety</option>
                    <option>Public Works</option>
                    <option>Parks & Recreation</option>
                    <option>Administrative</option>
                    <option>Multiple departments</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select range</option>
                    <option>Under $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $250,000</option>
                    <option>Over $250,000</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Services Needed *</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Protective coatings & bedliners
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Equipment mounting & integration
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Storage and organization systems
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Emergency vehicle modifications
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Fleet graphics and identification
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Other (specify below)
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Timeline</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Planning phase - gathering information</option>
                  <option>Budget approved - ready to proceed</option>
                  <option>RFP process starting soon</option>
                  <option>Current fiscal year implementation</option>
                  <option>Next fiscal year planning</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Details & Requirements</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your fleet upfitting needs, compliance requirements, and any specific challenges..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition">
                Request RFP Information Package
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll respond within 48 hours with detailed specifications and compliance documentation
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
                Trusted government contractor serving municipal and public sector fleets.
              </p>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Government Services</h6>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/government" className="hover:text-white transition">Municipal Fleets</Link></li>
                <li><Link href="/government" className="hover:text-white transition">Public Safety</Link></li>
                <li><Link href="/government" className="hover:text-white transition">RFP Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-300">
                <p>Rockville, MD</p>
                <p>(301) 555-UPFIT</p>
                <p>government@capitalupfitters.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}