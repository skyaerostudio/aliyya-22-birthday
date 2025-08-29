'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Footer = () => {
  const [catMood, setCatMood] = useState('😸')
  const [shareMessage, setShareMessage] = useState('')

  const catMoods = ['😸', '😺', '😻', '🙀', '😿', '😾', '🐱']

  const handleCatClick = () => {
    const randomMood = catMoods[Math.floor(Math.random() * catMoods.length)]
    setCatMood(randomMood)
  }

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/?text=',
      color: 'hover:bg-green-600'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/intent/tweet?text=',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Copy Link',
      icon: '🔗',
      url: '',
      color: 'hover:bg-purple-600'
    }
  ]

  const handleShare = (platform: string, url: string) => {
    const shareText = `🎉 Join me in celebrating Aliyya's 22nd Birthday! Check out this amazing birthday page filled with love and memories! 💜 #AliyyaBirthday #TurningTwentytwo`
    const currentUrl = window.location.href

    if (platform === 'Copy Link') {
      navigator.clipboard.writeText(currentUrl)
      setShareMessage('Link copied to clipboard! 📋')
      setTimeout(() => setShareMessage(''), 3000)
    } else if (platform === 'WhatsApp') {
      window.open(`${url}${encodeURIComponent(shareText + ' ' + currentUrl)}`, '_blank')
    } else if (platform === 'Twitter') {
      window.open(`${url}${encodeURIComponent(shareText + ' ' + currentUrl)}`, '_blank')
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-black/40 to-transparent">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Cat mascot */}
        <motion.div className="mb-8">
          <motion.button
            onClick={handleCatClick}
            className="text-8xl cursor-pointer transition-transform"
            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
            whileTap={{ scale: 0.9 }}
            aria-label="Click the birthday cat"
          >
            {catMood}
          </motion.button>
          <p className="text-white/60 text-sm mt-2">
            Click the birthday cat! 🐾
          </p>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Happy happy birthday the love of my life! 🎉
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Keep being you, keep being awesome, and keep being the best person ever. I love you so much, happy birthday my sayang cintaaa!
          </p>
        </motion.div>

        {/* Share section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Share the Birthday Joy! 🎊
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {shareOptions.map((option) => (
              <motion.button
                key={option.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleShare(option.name, option.url)}
                className={`flex items-center space-x-2 px-4 py-3 glass text-white rounded-full transition-all duration-300 ${option.color}`}
              >
                <span className="text-xl">{option.icon}</span>
                <span className="font-medium">{option.name}</span>
              </motion.button>
            ))}
          </div>

          {shareMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-300 text-sm"
            >
              {shareMessage}
            </motion.p>
          )}
        </motion.div> */}

        {/* Birthday stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-300 mb-2">22</div>
            <div className="text-white/80">Years of Amazing</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-pink-300 mb-2">365</div>
            <div className="text-white/80">Days of New Adventures</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-white/80">Possibilities Ahead</div>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/20 pt-8"
        >
          <p className="text-white/60 mb-4">
            Made with 💜 for Aliyya's 22nd Birthday
          </p>
          <p className="text-white/40 text-sm">
            "Life is better with friends, family, and lots of birthday cake!" 🎂
          </p>
          
          {/* Copyright */}
          <div className="mt-6 text-xs text-white/30">
            <p>© 2025 Aliyya's Birthday Celebration • All love reserved 💕</p>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-2xl opacity-30"
          >
            🎈
          </motion.div>
        </div>
        
        <div className="absolute top-20 right-10">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="text-2xl opacity-30"
          >
            ✨
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/4">
          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            className="text-xl opacity-20"
          >
            🐾
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
