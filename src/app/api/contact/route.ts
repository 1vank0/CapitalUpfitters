import { NextResponse } from 'next/server'

// POST /api/contact - Handle contact form submissions
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'message']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Determine inquiry type and segment
    let segment = 'GENERAL'
    let inquiryType = 'GENERAL_INQUIRY'
    
    const message = body.message.toLowerCase()
    
    // Detect fleet inquiries
    if (message.includes('fleet') || message.includes('multiple vehicle') || 
        message.includes('bulk') || message.includes('commercial') ||
        body.company && body.company.toLowerCase().includes('fleet')) {
      segment = 'FLEET'
      inquiryType = 'FLEET_INQUIRY'
    }
    
    // Detect luxury vehicle inquiries
    else if (message.includes('bmw') || message.includes('audi') || 
             message.includes('mercedes') || message.includes('luxury') ||
             message.includes('stealth hitch')) {
      segment = 'LUXURY'
      inquiryType = 'LUXURY_INQUIRY'
    }
    
    // Detect government inquiries
    else if (message.includes('government') || message.includes('municipal') ||
             message.includes('police') || message.includes('county') ||
             message.includes('city') || message.includes('department')) {
      segment = 'GOVERNMENT'
      inquiryType = 'GOVERNMENT_INQUIRY'
    }
    
    // Detect specific service inquiries
    else if (message.includes('bedliner')) {
      inquiryType = 'BEDLINER_INQUIRY'
    } else if (message.includes('tonneau') || message.includes('cover')) {
      inquiryType = 'TONNEAU_INQUIRY'
    } else if (message.includes('hitch') || message.includes('towing')) {
      inquiryType = 'HITCH_INQUIRY'
    }

    // Prepare lead data for Business OS
    const leadData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company || null,
      segment: segment,
      source: 'website_contact',
      servicesRequested: [inquiryType.toLowerCase().replace('_inquiry', '')],
      location: body.location || null,
      specialRequests: body.message,
      inquiryType: inquiryType,
      urgency: determineUrgency(body.message),
    }

    // Send to Business OS API
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

    // Send confirmation email to customer
    await sendContactConfirmation(leadData)

    // Send internal notification
    await sendInternalContactNotification(leadData)

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us. We\'ll respond within 2 hours.',
      segment: segment,
      inquiryType: inquiryType,
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}

// Determine urgency based on message content
function determineUrgency(message: string): 'LOW' | 'MEDIUM' | 'HIGH' {
  const urgentKeywords = ['urgent', 'asap', 'immediately', 'emergency', 'broken', 'damaged']
  const mediumKeywords = ['soon', 'this week', 'quote', 'estimate', 'schedule']
  
  const messageLower = message.toLowerCase()
  
  if (urgentKeywords.some(keyword => messageLower.includes(keyword))) {
    return 'HIGH'
  } else if (mediumKeywords.some(keyword => messageLower.includes(keyword))) {
    return 'MEDIUM'
  }
  
  return 'LOW'
}

// Send confirmation email to customer
async function sendContactConfirmation(leadData: any) {
  try {
    console.log('Sending contact confirmation email:', {
      to: leadData.email,
      name: leadData.name,
      inquiryType: leadData.inquiryType,
      urgency: leadData.urgency,
    })

    // Segment-specific responses
    const responses = {
      FLEET: 'Thank you for your fleet inquiry. Our team specializes in fleet solutions and will review your requirements to provide comprehensive recommendations.',
      LUXURY: 'Thank you for your luxury vehicle inquiry. Our certified technicians have extensive experience with premium vehicles and specialized installations.',
      GOVERNMENT: 'Thank you for your government inquiry. We have significant experience with municipal contracts and understand compliance requirements.',
      GENERAL: 'Thank you for contacting Capital Upfitters. Our expert team will review your inquiry and provide personalized recommendations.',
    }

    const response = responses[leadData.segment as keyof typeof responses] || responses.GENERAL

    // In production, this would send via email service
    console.log(`Email Subject: Your Inquiry - Capital Upfitters`)
    console.log(`To: ${leadData.email}`)
    console.log(`Message: ${response}`)
    console.log(`Response Time: We'll contact you within ${leadData.urgency === 'HIGH' ? '1 hour' : '2 hours'}.`)

  } catch (error) {
    console.error('Error sending confirmation email:', error)
  }
}

// Send internal notification
async function sendInternalContactNotification(leadData: any) {
  try {
    console.log('Internal Contact Notification:', {
      type: 'CONTACT_FORM',
      inquiryType: leadData.inquiryType,
      segment: leadData.segment,
      urgency: leadData.urgency,
      name: leadData.name,
      company: leadData.company,
      phone: leadData.phone,
      email: leadData.email,
      message: leadData.specialRequests,
    })

    // High urgency or high-value segments get immediate attention
    if (leadData.urgency === 'HIGH' || leadData.segment === 'FLEET' || leadData.segment === 'GOVERNMENT') {
      console.log('PRIORITY CONTACT: Immediate response required')
      // TODO: Send SMS to Ivan's phone
    }

    // Route to appropriate team member based on inquiry type
    const routing = {
      FLEET_INQUIRY: 'Ivan Ko Jr. (CEO) - Fleet Specialist',
      GOVERNMENT_INQUIRY: 'Ivan Ko Jr. (CEO) - Government Contracts',
      LUXURY_INQUIRY: 'Mike Thompson - Luxury Vehicle Specialist',
      BEDLINER_INQUIRY: 'General Sales Team',
      TONNEAU_INQUIRY: 'General Sales Team',
      HITCH_INQUIRY: 'Mike Thompson - Installation Specialist',
      GENERAL_INQUIRY: 'Sarah Johnson - Customer Experience',
    }

    const assignedTo = routing[leadData.inquiryType as keyof typeof routing] || 'General Sales Team'
    console.log(`Assigned to: ${assignedTo}`)

  } catch (error) {
    console.error('Error sending internal notification:', error)
  }
}