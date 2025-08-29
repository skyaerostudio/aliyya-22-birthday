'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ReasonsData {
  reasons: string[]
}

const Reasons = () => {
  const [reasons, setReasons] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleReasons, setVisibleReasons] = useState<number[]>([])
  const [showModal, setShowModal] = useState(false)
  const [currentReason, setCurrentReason] = useState<string>('')

  useEffect(() => {
    // Load reasons from JSON file
    const loadReasons = async () => {
      try {
        const response = await fetch('/content/reasons.json')
        if (response.ok) {
          const data: ReasonsData = await response.json()
          setReasons(data.reasons || [])
        } else {
          console.error('Failed to fetch reasons:', response.status, response.statusText)
        }
      } catch (error) {
        console.error('Failed to load reasons:', error)
      } finally {
        setLoading(false)
      }
    }

    loadReasons()
  }, [])

  useEffect(() => {
    if (reasons.length > 0) {
      // Stagger the appearance of reason cards
      const timer = setInterval(() => {
        setVisibleReasons(prev => {
          if (prev.length < reasons.length) {
            return [...prev, prev.length]
          }
          clearInterval(timer)
          return prev
        })
      }, 200) // Show a new reason every 200ms

      return () => clearInterval(timer)
    }
  }, [reasons.length])

  const openReasonModal = (reason: string) => {
    setCurrentReason(reason)
    setShowModal(true)
  }

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">💜</div>
          <p className="text-white/60">Loading reasons...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/10"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['💜', '🐱', '✨', '💕', '🌟'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            22 Reasons I Love You 💜
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            For every year of your amazing life, here's a reason why you make my world brighter.
            Each one is a piece of my heart that belongs to you.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <AnimatePresence key={index}>
              {visibleReasons.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="cursor-pointer group"
                  onClick={() => openReasonModal(reason)}
                >
                  <div className="glass rounded-xl p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/20 group-hover:bg-white/10">
                    {/* Reason number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="text-purple-300 group-hover:scale-110 transition-transform">
                        💜
                      </div>
                    </div>

                    {/* Reason text */}
                    <p className="text-white/90 leading-relaxed text-sm group-hover:text-white transition-colors">
                      {reason}
                    </p>
                    
                    {/* Click indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-300 text-xs">
                      Click to expand
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            {visibleReasons.length} of {reasons.length} reasons revealed
          </p>
        </motion.div>
      </div>

      {/* Reason Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass rounded-2xl p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Heart icon */}
              <div className="text-center mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl"
                >
                  💜
                </motion.div>
              </div>

              {/* Reason text */}
              <div className="text-center">
                <p className="text-white text-xl leading-relaxed mb-6">
                  {currentReason}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Reasons