'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: number
  from: string
  message: string
  timestamp: string
  emoji?: string
  color?: string
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load messages from JSON file
    const loadMessages = async () => {
      try {
        const response = await fetch('/content/messages.json')
        if (response.ok) {
          const data = await response.json()
          setMessages(data.messages || [])
        }
      } catch (error) {
        console.error('Failed to load messages:', error)
        // Fallback to sample messages if file doesn't exist
        setMessages(sampleMessages)
      } finally {
        setLoading(false)
      }
    }

    loadMessages()
  }, [])

  // Sample messages as fallback
  const sampleMessages: Message[] = [
    {
      id: 1,
      from: "Mom & Dad",
      message: "Happy 22nd Birthday, sweetheart! We're so proud of the amazing woman you've become. Your kindness, strength, and beautiful spirit inspire us every day. May this new year bring you all the happiness and success you deserve. We love you more than words can express! 💕",
      timestamp: "2025-08-30",
      emoji: "👨‍👩‍👧",
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 2,
      from: "Best Friend Sarah",
      message: "HAPPY BIRTHDAY TO MY AMAZING BESTIE! 🎉 22 looks absolutely gorgeous on you! Thank you for being the most loyal, funny, and caring friend anyone could ask for. Here's to another year of adventures, late-night talks, and making unforgettable memories together! Love you so much! 💜",
      timestamp: "2025-08-30",
      emoji: "👯‍♀️",
      color: "from-purple-400 to-indigo-400"
    },
    {
      id: 3,
      from: "Grandma",
      message: "My precious granddaughter, watching you grow into such a wonderful young woman has been one of my greatest joys. Your smile lights up every room, and your compassionate heart touches everyone you meet. Happy 22nd birthday, my dear! May God bless you with endless happiness. 🌟",
      timestamp: "2025-08-30",
      emoji: "👵",
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 4,
      from: "College Squad",
      message: "ALIYYA!!! Happy birthday to the queen herself! 👑 You've made college life so much more fun and meaningful. From study sessions to spontaneous adventures, you always know how to make everything better. Can't wait to celebrate with you! Here's to 22 years of being absolutely incredible! 🎂✨",
      timestamp: "2025-08-30",
      emoji: "👑",
      color: "from-teal-400 to-cyan-400"
    },
    {
      id: 5,
      from: "Little Brother",
      message: "Happy birthday to the best big sister ever! Even though I don't always say it, you mean the world to me. Thanks for always having my back, giving the best advice, and being such an amazing role model. Hope your 22nd year is filled with everything you've been dreaming of! 🚀",
      timestamp: "2025-08-30",
      emoji: "👦",
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 6,
      from: "Work Family",
      message: "Happy 22nd Birthday, Aliyya! 🎊 Working with you has been such a pleasure - your positive energy and dedication inspire all of us. You bring so much joy to the workplace, and we're lucky to have you on our team. Wishing you a fantastic year ahead filled with success and happiness!",
      timestamp: "2025-08-30",
      emoji: "💼",
      color: "from-blue-400 to-sky-400"
    }
  ]

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">💌</div>
          <p className="text-white/60">Loading birthday messages...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/10"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            💝
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
            Birthday Messages 💌
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Heartfelt wishes from everyone who loves you. Each message is a reminder 
            of how special you are and how many lives you've touched.
          </p>
        </motion.div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setSelectedMessage(message)}
            >
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                {/* Message header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${message.color || 'from-purple-400 to-pink-400'} rounded-full flex items-center justify-center text-2xl`}>
                    {message.emoji || '💜'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {message.from}
                    </h3>
                    <p className="text-xs text-white/60">
                      {new Date(message.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Message preview */}
                <p className="text-white/90 leading-relaxed line-clamp-4">
                  {message.message.length > 150 
                    ? `${message.message.substring(0, 150)}...` 
                    : message.message
                  }
                </p>

                {/* Read more indicator */}
                {message.message.length > 150 && (
                  <div className="mt-3 text-purple-300 text-sm font-medium group-hover:text-purple-200 transition-colors">
                    Click to read full message →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">💌</div>
            <p className="text-white/60 mb-4">No messages loaded yet.</p>
            <p className="text-white/40 text-sm">
              Messages will appear here from your loved ones!
            </p>
          </motion.div>
        )}
      </div>

      {/* Message Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass rounded-2xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMessage(null)}
                className="absolute top-4 right-4 w-8 h-8 text-white/60 hover:text-white transition-colors"
                aria-label="Close message"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Message header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedMessage.color || 'from-purple-400 to-pink-400'} rounded-full flex items-center justify-center text-3xl`}>
                  {selectedMessage.emoji || '💜'}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {selectedMessage.from}
                  </h3>
                  <p className="text-white/60">
                    {new Date(selectedMessage.timestamp).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Full message */}
              <div className="prose prose-lg">
                <p className="text-white/90 leading-relaxed whitespace-pre-line">
                  {selectedMessage.message}
                </p>
              </div>

              {/* Close button */}
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMessage(null)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                >
                  Close Message
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Messages
