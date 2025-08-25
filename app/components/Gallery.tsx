'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
  category: 'memories' | 'celebrations' | 'moments' | 'adventures'
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Sample images - these would be replaced with actual images
  const images: GalleryImage[] = [
    {
      id: 1,
      src: '/api/placeholder/400/400',
      alt: 'Beautiful moment 1',
      caption: 'A perfect day filled with laughter and joy 🌟',
      category: 'memories'
    },
    {
      id: 2,
      src: '/api/placeholder/400/600',
      alt: 'Celebration moment',
      caption: 'Celebrating life\'s precious moments together 🎉',
      category: 'celebrations'
    },
    {
      id: 3,
      src: '/api/placeholder/600/400',
      alt: 'Adventure time',
      caption: 'Every adventure is better with you 🗺️',
      category: 'adventures'
    },
    {
      id: 4,
      src: '/api/placeholder/400/500',
      alt: 'Sweet moment',
      caption: 'Those quiet moments that mean everything 💜',
      category: 'moments'
    },
    {
      id: 5,
      src: '/api/placeholder/500/400',
      alt: 'Fun times',
      caption: 'Making memories that last a lifetime ✨',
      category: 'memories'
    },
    {
      id: 6,
      src: '/api/placeholder/400/400',
      alt: 'Special celebration',
      caption: 'Every celebration is special with you 🎂',
      category: 'celebrations'
    },
    {
      id: 7,
      src: '/api/placeholder/600/500',
      alt: 'Amazing adventure',
      caption: 'Life is an adventure, and you make it extraordinary 🌈',
      category: 'adventures'
    },
    {
      id: 8,
      src: '/api/placeholder/400/600',
      alt: 'Precious moment',
      caption: 'Capturing the beauty of everyday moments 📸',
      category: 'moments'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'memories', name: 'Sweet Memories', icon: '💭' },
    { id: 'celebrations', name: 'Celebrations', icon: '🎉' },
    { id: 'moments', name: 'Special Moments', icon: '✨' },
    { id: 'adventures', name: 'Adventures', icon: '🗺️' }
  ]

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Memory Lane 📸
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A collection of beautiful moments, adventures, and memories that make you who you are.
            Each photo tells a story of joy, growth, and the amazing journey of your life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'glass text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="glass rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  {/* Image placeholder with gradient */}
                  <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                    {/* Image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/80">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📷</div>
                        <div className="text-sm">Photo {image.id}</div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <div className="text-white text-center p-4">
                        <div className="text-2xl mb-2">🔍</div>
                        <div className="text-sm font-medium">View Photo</div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-4">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {image.caption}
                    </p>
                    <div className="mt-2 text-xs text-purple-300 capitalize">
                      {image.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📸</div>
            <p className="text-white/60">No photos in this category yet.</p>
          </motion.div>
        )}

        {/* Photo count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            Showing {filteredImages.length} of {images.length} photos
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={() => {
              const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
              const nextIndex = (currentIndex + 1) % filteredImages.length
              setSelectedImage(filteredImages[nextIndex])
            }}
            onPrev={() => {
              const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
              const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
              setSelectedImage(filteredImages[prevIndex])
            }}
            hasNext={filteredImages.length > 1}
            hasPrev={filteredImages.length > 1}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
