'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Aliyya's birthday photos
  const images: GalleryImage[] = [
    {
      id: 1,
      src: '/images/IMG-20250830-WA0010.jpg',
      alt: 'Beautiful memories with Aliyya',
      caption: 'Cantik bgt bayi',
    },
    {
      id: 2,
      src: '/images/IMG-20250830-WA0011.jpg',
      alt: 'Special celebration moment',
      caption: 'Ciee di heidelberg (iya gasih)',
    },
    {
      id: 3,
      src: '/images/IMG-20250830-WA0012.jpg',
      alt: 'Adventure with Aliyya',
      caption: 'Mam syuusyiii',
    },
    {
      id: 4,
      src: '/images/IMG-20250830-WA0013.jpg',
      alt: 'Sweet moment together',
      caption: 'Gemec kita',
    },
    {
      id: 5,
      src: '/images/IMG-20250830-WA0014.jpg',
      alt: 'Fun times with Aliyya',
      caption: 'Only the OG knows this one',
    },
    {
      id: 6,
      src: '/images/IMG-20250830-WA0015.jpg',
      alt: 'Special celebration',
      caption: 'Pacal x Parkiran',
    },
    {
      id: 7,
      src: '/images/IMG-20250830-WA0016.jpg',
      alt: 'Amazing adventure together',
      caption: 'Pacalan di PIM gaess',
    },
    {
      id: 8,
      src: '/images/WhatsApp Image 2025-08-30 at 05.02.54_883da5e5.jpg',
      alt: 'Precious moment',
      caption: 'Ni tergemes sedunia, mantap',
    }
  ]

  const filteredImages = images

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

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
                  {/* Actual Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
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
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

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
