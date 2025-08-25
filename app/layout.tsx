import type { Metadata } from 'next'
import { Inter, Poppins, Caveat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat'
})

export const metadata: Metadata = {
  title: 'Happy 22nd Birthday Aliyya! 🎉',
  description: 'A special birthday celebration for Aliyya with love, memories, and purr-fect moments',
  keywords: 'birthday, celebration, Aliyya, 22nd birthday, purple cat theme',
  authors: [{ name: 'Birthday Team' }],
  openGraph: {
    title: 'Happy 22nd Birthday Aliyya! 🎉',
    description: 'A special birthday celebration for Aliyya with love, memories, and purr-fect moments',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 min-h-screen">
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}
