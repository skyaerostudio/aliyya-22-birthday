'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [catAnimation, setCatAnimation] = useState(false)

  const handleCatClick = () => {
    setCatAnimation(true)
    setTimeout(() => setCatAnimation(false), 1000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Main cat mascot */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="mb-8"
        >
          <motion.button
            className={`text-8xl md:text-9xl cursor-pointer transition-transform ${
              catAnimation ? 'animate-bounce' : ''
            }`}
            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCatClick}
            aria-label="Click the birthday cat"
          >
            🐱
          </motion.button>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
        >
          Happy 22nd Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-8"
        >
          Aliyya! 🎉
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Welcome to your special day! You're not just turning 22, you're embracing 
          another year of amazing adventures, purr-fect moments, and endless possibilities. 
          <span className="block mt-2 text-purple-300">
            Here's to celebrating the wonderful person you are! 💜
          </span>
        </motion.p>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#love-letter"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            Read Your Love Letter 💌
          </motion.a>
          
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
          >
            View Memories 📸
          </motion.a>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 md:left-20">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl"
          >
            🎈
          </motion.div>
        </div>
        
        <div className="absolute top-32 right-10 md:right-20">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="text-3xl"
          >
            🎂
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-16 md:left-32">
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            className="text-2xl"
          >
            🎁
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
