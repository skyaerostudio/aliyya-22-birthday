'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConfettiPiece {
  id: number
  emoji: string
  x: number
  y: number
  rotation: number
  delay: number
  duration: number
  size: number
}

const PawConfetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const emojis = ['🐾', '💜', '🎉', '✨', '🎂', '🎈', '💖', '🌟', '🎊', '💕']
    const pieces: ConfettiPiece[] = []

    // Generate confetti pieces
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * 100, // Percentage
        y: -10, // Start above viewport
        rotation: Math.random() * 360,
        delay: Math.random() * 2, // Stagger the animation
        duration: 3 + Math.random() * 2, // Random duration between 3-5 seconds
        size: 0.8 + Math.random() * 0.4 // Random size between 0.8-1.2
      })
    }

    setConfetti(pieces)

    // Clean up after animation
    const timer = setTimeout(() => {
      setConfetti([])
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              x: `${piece.x}vw`,
              y: '-10vh',
              rotate: piece.rotation,
              opacity: 0,
              scale: piece.size
            }}
            animate={{
              y: '110vh',
              rotate: piece.rotation + 360,
              opacity: [0, 1, 1, 0],
              x: [
                `${piece.x}vw`,
                `${piece.x + (Math.random() - 0.5) * 20}vw`,
                `${piece.x + (Math.random() - 0.5) * 40}vw`
              ]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: "easeOut",
              x: {
                duration: piece.duration,
                times: [0, 0.5, 1],
                ease: "easeInOut"
              },
              opacity: {
                duration: piece.duration,
                times: [0, 0.1, 0.9, 1],
                ease: "easeInOut"
              }
            }}
            className="absolute text-2xl"
            style={{
              filter: piece.emoji === '🐾' ? 'hue-rotate(280deg)' : 'none'
            }}
          >
            {piece.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Additional sparkle effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 3,
              repeat: 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default PawConfetti
