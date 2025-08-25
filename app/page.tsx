'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Gate from './components/Gate'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import LoveLetter from './components/LoveLetter'
import Gallery from './components/Gallery'
import Messages from './components/Messages'
import Footer from './components/Footer'
import PawConfetti from './components/PawConfetti'

export default function Home() {
  const [isGateOpen, setIsGateOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Check if gate should be bypassed (for development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // In development, you can bypass the gate by adding ?bypass=true
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('bypass') === 'true') {
        setIsGateOpen(true)
      }
    }
  }, [])

  const handleGateSuccess = () => {
    setIsGateOpen(true)
    setShowConfetti(true)
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000)
  }

  if (!isGateOpen) {
    return <Gate onSuccess={handleGateSuccess} />
  }

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
      
      <section id="messages">
        <Messages />
      </section>
      
      <Footer />
    </main>
  )
}
