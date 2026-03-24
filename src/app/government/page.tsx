import Link from 'next/link'
import {
  Shield,
  FileText,
  DollarSign,
  Clock,
  Award,
  CheckCircle,
  Users,
  Building,
  Truck,
  ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Government Fleet Solutions | Municipal Vehicle Upfitting | Capital Upfitters',
  description: 'RFP-ready fleet upfitting for government and municipal agencies. Compliance-certified, competitive bidding, DC Metro public sector specialists.',
}

export default function GovernmentPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">Government & Municipal</p>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Fleet Upfitting for <span className="text-blue-400">Public Service</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                RFP-ready, compliance-certified, and built for public sector budgets.
                We've worked with county agencies, municipal departments, and federal contractors throughout the DC Metro region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Request RFP Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+13015558734"
                  className="inline-flex items-center justify-center gap-2 border border-[#262626] hover:border-white/20 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
                >
                  Speak to Our Team
                </a>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 gap-4">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Agencies We've Worked With</p>
                <div className="space-y-2">
                  {[
                    'Montgomery County, MD',
                    'Prince George\'s County, MD',
                    'City of Rockville',
                    'City of Gaithersburg',
                    'Federal contractors (GSA)',
                    'DC Metro transit authorities',
                  ].map((agency) => (
                    <div key={agency} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {agency}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why government */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Our Approach</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
              Built for How Government Actually Buys
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Public sector procurement has specific requirements. We've done this enough times to know
              exactly what you need in a vendor proposal, what compliance documentation to prepare,
              and how to price competitively for public bid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'RFP Documentation Ready',
                desc: 'We provide complete RFP response packages including technical specs, compliance certifications, pricing schedules, and reference contacts.',
              },
              {
                icon: DollarSign,
                title: 'Competitive Bid Pricing',
                desc: 'Our government pricing structure is designed to compete on public bids while maintaining the quality your fleet deserves.',
              },
              {
                icon: Shield,
                title: 'Compliance Certified',
                desc: 'All installations meet or exceed federal and state vehicle modification compliance standards. Documentation provided.',
              },
              {
                icon: Users,
                title: 'Municipal References',
                desc: 'We can provide contact references from county fleet managers and municipal department heads who have worked with us.',
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                desc: 'Government agencies operate on fiscal calendars and operational deadlines. We understand that and build schedules that work.',
              },
              {
                icon: Award,
                title: 'Lifetime Warranty',
                desc: 'Every installation is covered by our lifetime labor warranty — protecting your department\'s investment for the life of the vehicle.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Services for Government</p>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6">
                Complete Fleet Upfitting Solutions
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                From light-duty pickup trucks to heavy utility vehicles, we configure your fleet
                for the specific demands of public service work.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Spray-on bedliners',
                  'Tool storage systems',
                  'Towing & hitch systems',
                  'Emergency lighting preps',
                  'Fleet tonneau covers',
                  'Cargo management',
                  'Equipment mounting',
                  'Fleet graphics coordination',
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-6">Case Study</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: '84', label: 'Vehicles' },
                  { value: '12wk', label: 'Timeline' },
                  { value: '100%', label: 'On-Spec' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-black text-blue-700">{value}</div>
                    <div className="text-xs text-blue-600">{label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="text-sm text-gray-700 leading-relaxed italic mb-4">
                "Capital Upfitters handled our entire DPW fleet expansion — 84 vehicles over 12 weeks.
                Every truck met spec. All compliance documentation was ready before the first vehicle
                rolled out. No surprises, no delays."
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-gray-900">David Park</p>
                <p className="text-xs text-gray-500">Fleet Director, Montgomery County DPW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Start Your RFP Process</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Request our complete government fleet proposal package. We'll provide everything you need to submit your bid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 text-base"
            >
              Request RFP Package
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+13015558734"
              className="inline-flex items-center justify-center border border-[#262626] hover:border-white/30 hover:bg-white/5 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150"
            >
              Call Government Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
