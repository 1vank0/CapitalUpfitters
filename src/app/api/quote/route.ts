import { NextResponse } from 'next/server'

// POST /api/quote - Handle quote form submissions
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Determine lead segment based on form data
    let segment = 'GENERAL'
    let source = 'website'
    
    // Check URL or referrer for specific segment pages
    const referer = request.headers.get('referer') || ''
    if (referer.includes('/fleet')) {
      segment = 'FLEET'
      source = 'fleet'
    } else if (referer.includes('/stealth')) {
      segment = 'LUXURY'
      source = 'stealth'
    } else if (referer.includes('/government')) {
      segment = 'GOVERNMENT'
      source = 'government'
    }

    // Also check vehicle make for luxury segment
    const luxuryBrands = ['bmw', 'audi', 'mercedes', 'land rover', 'porsche', 'lexus']
    if (body.vehicleMake && luxuryBrands.some(brand => 
      body.vehicleMake.toLowerCase().includes(brand))) {
      segment = 'LUXURY'
    }

    // Check for fleet indicators
    if (body.company && (
      body.company.toLowerCase().includes('fleet') ||
      body.company.toLowerCase().includes('trucking') ||
      body.company.toLowerCase().includes('construction') ||
      body.vehicleCount > 5
    )) {
      segment = 'FLEET'
    }

    // Check for government indicators
    if (body.company && (
      body.company.toLowerCase().includes('county') ||
      body.company.toLowerCase().includes('city') ||
      body.company.toLowerCase().includes('department') ||
      body.company.toLowerCase().includes('police') ||
      body.company.toLowerCase().includes('municipal')
    )) {
      segment = 'GOVERNMENT'
    }

    // Calculate estimated value based on selected services
    let estimatedValue = 0
    const servicePricing: { [key: string]: number } = {
      'bedliner': 650,
      'tonneau': 800,
      'hitch': 300,
      'stealth_hitch': 849,
      'fleet_package': 1200,
      'government_spec': 1500,
      'custom': 500,
    }

    if (body.servicesRequested && Array.isArray(body.servicesRequested)) {
      body.servicesRequested.forEach((service: string) => {
        if (servicePricing[service]) {
          estimatedValue += servicePricing[service]
        }
      })
    }

    // Apply segment multipliers
    if (segment === 'LUXURY') estimatedValue *= 1.2
    if (segment === 'FLEET') estimatedValue *= 1.5
    if (segment === 'GOVERNMENT') estimatedValue *= 1.3

    // Prepare lead data for Business OS
    const leadData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company || null,
      segment: segment,
      source: source,
      vehicleYear: body.vehicleYear || null,
      vehicleMake: body.vehicleMake || null,
      vehicleModel: body.vehicleModel || null,
      vehicleType: body.vehicleType || null,
      servicesRequested: body.servicesRequested || [],
      location: body.location || null,
      preferredTiming: body.preferredTiming || null,
      specialRequests: body.specialRequests || null,
      estimatedValue: estimatedValue > 0 ? estimatedValue : null,
      vehicleCount: body.vehicleCount || null,
      additionalOptions: body.additionalOptions || [],
    }

    // Send to Business OS API (assuming it runs on different port in production)
    const businessOsUrl = process.env.BUSINESS_OS_URL || 'http://localhost:3001'
    
    try {
      const response = await fetch(`${businessOsUrl}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      })

      if (!response.ok) {
        console.error('Failed to create lead in Business OS:', await response.text())
      }
    } catch (error) {
      console.error('Error sending lead to Business OS:', error)
      // Continue processing even if Business OS is unavailable
    }

    // Send immediate confirmation email to customer
    await sendQuoteConfirmation(leadData, estimatedValue)

    // Send internal notification
    await sendInternalNotification(leadData, segment, estimatedValue)

    return NextResponse.json({
      success: true,
      message: 'Quote request received successfully',
      segment: segment,
      estimatedValue: estimatedValue,
      leadId: `TEMP-${Date.now()}`, // Temporary ID until Business OS confirms
    })

  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}

// Send confirmation email to customer
async function sendQuoteConfirmation(leadData: any, estimatedValue: number) {
  try {
    // TODO: Implement email service (SendGrid, AWS SES, etc.)
    console.log('Sending quote confirmation email:', {
      to: leadData.email,
      name: leadData.name,
      segment: leadData.segment,
      estimatedValue,
      services: leadData.servicesRequested,
    })

    // Email template based on segment
    const templates = {
      FLEET: {
        subject: 'Your Fleet Upfitting Quote - Capital Upfitters',
        message: 'Thank you for your fleet upfitting inquiry. Our team specializes in bulk installations with coordinated scheduling to minimize downtime.',
      },
      LUXURY: {
        subject: 'Your Luxury Vehicle Customization Quote - Capital Upfitters',
        message: 'Thank you for your luxury vehicle inquiry. Our certified technicians specialize in premium installations that preserve your vehicle\'s aesthetics.',
      },
      GOVERNMENT: {
        subject: 'Your Government Fleet Quote - Capital Upfitters',
        message: 'Thank you for your government fleet inquiry. We have extensive experience with municipal contracts and compliance requirements.',
      },
      GENERAL: {
        subject: 'Your Vehicle Customization Quote - Capital Upfitters',
        message: 'Thank you for your vehicle customization inquiry. Our expert team will provide you with a detailed quote within 2 hours.',
      },
    }

    const template = templates[leadData.segment as keyof typeof templates] || templates.GENERAL

    // In production, this would send via email service
    console.log(`Email: ${template.subject}`)
    console.log(`To: ${leadData.email}`)
    console.log(`Message: ${template.message}`)
    console.log(`Estimated Range: $${Math.round(estimatedValue * 0.8)} - $${Math.round(estimatedValue * 1.2)}`)

  } catch (error) {
    console.error('Error sending confirmation email:', error)
  }
}

// Send internal notification to sales team
async function sendInternalNotification(leadData: any, segment: string, estimatedValue: number) {
  try {
    // TODO: Send to Slack, email, or SMS notification system
    console.log('Internal Notification:', {
      type: 'NEW_LEAD',
      segment,
      name: leadData.name,
      company: leadData.company,
      phone: leadData.phone,
      estimatedValue,
      services: leadData.servicesRequested,
      urgency: estimatedValue > 5000 ? 'HIGH' : estimatedValue > 1000 ? 'MEDIUM' : 'LOW',
    })

    // High-value leads get immediate SMS/phone notification
    if (estimatedValue > 5000 || segment === 'FLEET' || segment === 'GOVERNMENT') {
      console.log('HIGH PRIORITY ALERT: Large opportunity lead received')
      // TODO: Send SMS to Ivan's phone
    }

  } catch (error) {
    console.error('Error sending internal notification:', error)
  }
}

// GET /api/quote/pricing - Get pricing information for quote calculator
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const services = searchParams.get('services')?.split(',') || []
    const segment = searchParams.get('segment') || 'GENERAL'
    const vehicleType = searchParams.get('vehicleType') || 'pickup'

    // Base pricing
    const basePricing = {
      bedliner: { min: 549, max: 899, popular: true },
      tonneau: { min: 299, max: 1299, options: ['soft', 'hard', 'retractable'] },
      hitch: { min: 199, max: 849, options: ['standard', 'heavy_duty', 'stealth'] },
      stealth_hitch: { min: 849, max: 849, luxury: true },
      fleet_package: { min: 650, max: 3500, bulk: true },
      government_spec: { min: 1200, max: 5000, compliance: true },
    }

    // Calculate estimates for requested services
    let totalEstimate = 0
    const serviceBreakdown = services.map(service => {
      const pricing = basePricing[service as keyof typeof basePricing]
      if (pricing) {
        const basePrice = (pricing.min + pricing.max) / 2
        totalEstimate += basePrice
        return {
          service,
          price: basePrice,
          range: `$${pricing.min} - $${pricing.max}`,
          options: pricing,
        }
      }
      return null
    }).filter(Boolean)

    // Apply segment multipliers
    const multipliers = {
      LUXURY: 1.2,
      FLEET: 1.1,
      GOVERNMENT: 1.15,
      GENERAL: 1.0,
    }

    const multiplier = multipliers[segment as keyof typeof multipliers] || 1.0
    totalEstimate *= multiplier

    // Apply vehicle type adjustments
    const vehicleMultipliers = {
      pickup: 1.0,
      suv: 0.9,
      van: 1.3,
      luxury: 1.4,
    }

    totalEstimate *= vehicleMultipliers[vehicleType as keyof typeof vehicleMultipliers] || 1.0

    return NextResponse.json({
      totalEstimate: Math.round(totalEstimate),
      range: {
        min: Math.round(totalEstimate * 0.8),
        max: Math.round(totalEstimate * 1.2),
      },
      services: serviceBreakdown,
      segment,
      multiplier,
      disclaimer: 'Pricing is estimated and subject to vehicle inspection. Final quotes provided within 2 hours.',
    })

  } catch (error) {
    console.error('Error calculating pricing:', error)
    return NextResponse.json(
      { error: 'Failed to calculate pricing' },
      { status: 500 }
    )
  }
}