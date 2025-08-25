'use client'

import { motion } from 'framer-motion'

const LoveLetter = () => {

  const letterContent = {
    intro: "Hey babee,",
    mainText: `dont worry im not writing this using AI, purely my cute little brain working here.

First of all let me congratulate you for surviving living as WNI for 22 years, your already on the top 0.1% of human population. I have known you for more than 2 years now and it has been the best blessing of my life, you're a special person for me, you are special, you deserve everything good this world has to offer.

I prepared this little website for you as a reminder of how much i love you and how much i appreciate you.`,
    
    wishes: [], // No wishes section for this version
    
    closing: `Happy birthday my forever love.

-R`
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
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [0, -30, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            💌
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            A Love Letter for You 💌
          </h2>
          <p className="text-lg text-white/80">
            Words from the heart, written with love
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Letter paper texture */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 24px,
                rgba(255,255,255,0.1) 25px
              )`
            }} />
          </div>

          {/* Letter content */}
          <div className="relative z-10">
            {/* Date and greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-right text-purple-300 mb-8 font-script"
            >
              August 30th, 2025
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-display text-white mb-6"
            >
              {letterContent.intro}
            </motion.h3>

            {/* Main letter text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-6 text-white/90 leading-relaxed"
            >
              {letterContent.mainText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>



            {/* Closing */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-8 space-y-4 text-white/90 leading-relaxed"
            >
              {letterContent.closing.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="text-right mt-8"
            >
              <p className="text-purple-300 font-script text-2xl mt-2">
                -R 💜
              </p>
            </motion.div>
          </div>

          {/* Decorative hearts */}
          <div className="absolute top-4 right-4 text-purple-300/30">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💜
            </motion.div>
          </div>
          
          <div className="absolute bottom-4 left-4 text-pink-300/30">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              🐱
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LoveLetter
