'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Gate from './components/Gate'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import LoveLetter from './components/LoveLetter'
import Gallery from './components/Gallery'
import Reasons from './components/Reasons'
import Footer from './components/Footer'
import PawConfetti from './components/PawConfetti'

export default function Home() {
  const [isGateOpen, setIsGateOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isBirthdayTime, setIsBirthdayTime] = useState(false)

  // Check if it's birthday time (August 30, 2025 Jakarta time)
  useEffect(() => {
    const checkBirthdayTime = () => {
      const now = new Date()
      const birthdayDate = new Date('2025-08-30T00:00:00+07:00')
      setIsBirthdayTime(now >= birthdayDate)
    }

    checkBirthdayTime()
    // Check every minute
    const interval = setInterval(checkBirthdayTime, 60000)
    
    return () => clearInterval(interval)
  }, [])

  // Check if gate should be bypassed (for development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // In development, you can bypass everything by adding ?bypass=true
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('bypass') === 'true') {
        setIsGateOpen(true)
        setIsBirthdayTime(true)
      }
    }
  }, [])

  const handleGateSuccess = () => {
    setIsGateOpen(true)
    setShowConfetti(true)
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000)
  }

  // If it's not birthday time yet, show only countdown
  if (!isBirthdayTime) {
    return (
      <main className="relative">
        <div className="min-h-screen flex flex-col">
          {/* Simple header */}
          <div className="text-center pt-8 pb-4">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Aliyya's 22nd Birthday 🎉
            </h1>
            <p className="text-white/80">Something special is coming...</p>
          </div>
          
          {/* Countdown takes full space */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full">
              <Countdown />
            </div>
          </div>
          
          {/* Simple footer */}
          <div className="text-center pb-8">
            <p className="text-white/60 text-sm">
              Made with 💜 for Aliyya
            </p>
          </div>
        </div>
      </main>
    )
  }

  // After birthday time, check gate
  if (!isGateOpen) {
    return <Gate onSuccess={handleGateSuccess} />
  }

  // Full site after birthday + gate passed
  return (
    <main className="relative">
      {showConfetti && <PawConfetti />}
      <Navigation />
      
      <section id="hero">
        <Hero />
        <Countdown />
      </section>
      
      <section id="love-letter">
        <LoveLetter />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>
      
      <section id="reasons">
        <Reasons />
      </section>
      
      
      <Footer />
    </main>
  )
}
