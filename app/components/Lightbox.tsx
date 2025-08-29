'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

interface LightboxProps {
  image: {
    id: number
    src: string
    alt: string
    caption: string
  }
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

const Lightbox = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }: LightboxProps) => {
  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
    
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext()
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        onPrev()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose, onNext, onPrev, hasNext, hasPrev])

  const lightboxContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-label="Close lightbox"
      />

      {/* Content */}
      <div className="relative max-w-7xl max-h-full w-full flex flex-col items-center">
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Close lightbox"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Navigation buttons */}
        {hasPrev && onPrev && (
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
        )}

        {hasNext && onNext && (
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-full max-h-[80vh]"
        >
          {/* Actual Image */}
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-[90vw] max-h-[70vh] object-contain"
          />
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-center"
        >
          <p className="text-white text-lg leading-relaxed mb-2">
            {image.caption}
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-white/60">
            <span>
              Photo {image.id}
            </span>
          </div>
        </motion.div>

        {/* Keyboard shortcuts hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-xs text-white/40 text-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <span>ESC to close</span>
            {(hasNext || hasPrev) && (
              <span>← → to navigate</span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  // Render to portal to ensure it's on top of everything
  return typeof document !== 'undefined' 
    ? createPortal(lightboxContent, document.body)
    : null
}

export default Lightbox
