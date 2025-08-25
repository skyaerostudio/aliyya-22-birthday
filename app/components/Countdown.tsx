'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isNextYear, setIsNextYear] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      
      // Birthday: August 30, 2025 at midnight Jakarta time (UTC+7)
      let targetDate = new Date('2025-08-25T16:33:00+07:00').getTime()
      
      // If this year's birthday has passed, calculate for next year
      if (now > targetDate) {
        targetDate = new Date('2026-08-30T00:00:00+07:00').getTime()
        setIsNextYear(true)
      }
      
      const difference = targetDate - now
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // It's birthday time!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'from-purple-400 to-purple-600' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-pink-400 to-pink-600' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-purple-400 to-purple-600' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-pink-400 to-pink-600' }
  ]

  const isBirthdayToday = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  if (isBirthdayToday) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              🎉 IT'S YOUR BIRTHDAY! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-purple-300">
              Happy 22nd Birthday, Aliyya! The day is finally here! 🎂✨
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Countdown to {isNextYear ? 'Your 23rd' : 'Your 22nd'} Birthday! 🎊
          </h2>
          <p className="text-lg text-white/80 mb-12">
            {isNextYear 
              ? "Hope you had an amazing 22nd birthday! Here's counting down to the next one!" 
              : "The magical day is getting closer..."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-10`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-semibold">
                    {unit.label}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 text-xs opacity-50">
                  {index % 2 === 0 ? '🐾' : '✨'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional birthday info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 glass rounded-xl p-6 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            🗓️ Birthday Details
          </h3>
          <p className="text-white/80">
            <strong>Date:</strong> August 30th, {isNextYear ? '2026' : '2025'} 🎂<br />
            <strong>Timezone:</strong> Jakarta Time (UTC+7) 🌏<br />
            <strong>Special Age:</strong> {isNextYear ? '23' : '22'} - What an amazing milestone! ✨
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
