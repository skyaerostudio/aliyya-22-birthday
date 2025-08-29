'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface GateProps {
  onSuccess: () => void
}

const Gate = ({ onSuccess }: GateProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(['', '', ''])
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState('')

  const questions = [
    {
      question: "siapa kucing ter gemes se dunia (warna krem)",
      options: ["Niko", "Kang Dedi Mulyadi", "Thomas Alva Edi Sound"],
      correctAnswer: "Niko"
    },
    {
      question: "babybooboo .....poopoo",
      options: ["pookie", "cutie", "zookie"],
      correctAnswer: "cutie"
    },
    {
      question: "berapa streak tiktok kamu sama pacarmu?",
      options: ["100-200", "200-300", "300-500"],
      correctAnswer: "300-500"
    }
  ]

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
    setError('')
  }

  const handleNext = () => {
    setIsChecking(true)
    
    // Simple direct comparison
    const currentAnswer = answers[currentQuestion].trim().toLowerCase()
    const correctAnswer = questions[currentQuestion].correctAnswer.trim().toLowerCase()
    
    if (currentAnswer === correctAnswer) {
      if (currentQuestion === questions.length - 1) {
        // All questions answered correctly
        onSuccess()
      } else {
        setCurrentQuestion(currentQuestion + 1)
      }
    } else {
      setError('Hmm, that doesn\'t seem right. Try again! 🤔')
    }
    
    setIsChecking(false)
  }



  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass rounded-2xl p-8 text-center"
      >
        {/* Cat mascot */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-6"
        >
          🐱
        </motion.div>

        <h1 className="text-2xl font-display font-bold text-white mb-2">
          Welcome to Aliyya's Birthday! 🎉
        </h1>
        
        <p className="text-white/80 mb-8">
          Answer these questions to enter the celebration
        </p>

        {/* Progress bar */}
        <div className="w-full bg-white/20 rounded-full h-2 mb-6">
          <motion.div
            className="bg-purple-400 h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-white mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-white/90 mb-6">
            {questions[currentQuestion].question}
          </p>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswerChange(option)}
                className={`w-full p-4 rounded-lg border transition-all text-left ${
                  answers[currentQuestion] === option
                    ? 'bg-purple-600/30 border-purple-400 text-white'
                    : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30'
                }`}
                disabled={isChecking}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                    answers[currentQuestion] === option
                      ? 'border-purple-400 bg-purple-400'
                      : 'border-white/40'
                  }`}>
                    {answers[currentQuestion] === option && (
                      <div className="w-full h-full rounded-full bg-white/20"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Error message */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-300 text-sm mb-4"
          >
            {error}
          </motion.p>
        )}

        {/* Submit button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={!answers[currentQuestion].trim() || isChecking}
          className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800/50 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-900"
        >
          {isChecking ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking...
            </span>
          ) : (
            currentQuestion === questions.length - 1 ? 'Enter Celebration!' : 'Next Question'
          )}
        </motion.button>

        <p className="text-white/60 text-xs mt-4">
          Stuck? Think about what makes Aliyya special! 💜
        </p>
      </motion.div>
    </div>
  )
}

export default Gate
