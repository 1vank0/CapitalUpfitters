import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capital Upfitters - Rockville MD Truck Accessories & Auto Upfitting',
  description: 'Rockville\'s #1 truck & fleet customization shop. Spray-on bedliners, tonneau covers, hitches, lift kits & more. Serving DC Metro area. 35+ years experience.',
  keywords: 'truck accessories, auto upfitting, spray on bedliner, tonneau covers, hitches, rockville md, dc metro, fleet customization',
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}