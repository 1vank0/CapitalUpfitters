import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Capital Upfitters — Rockville MD Truck & Fleet Customization',
  description: 'Rockville\'s #1 truck & fleet customization shop. Spray-on bedliners, tonneau covers, hitches, lift kits & more. Serving DC Metro area. 35+ years experience. Lifetime warranties.',
  keywords: 'truck accessories, auto upfitting, spray on bedliner, tonneau covers, hitches, rockville md, dc metro, fleet customization, stealth hitch',
  openGraph: {
    title: 'Capital Upfitters — Rockville MD Truck & Fleet Customization',
    description: 'Professional truck and fleet upfitting. DC Metro\'s most trusted shop since 1989.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
