import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'

// ─────────────────────────────────────────────
// Add your real clinic photos to /public/gallery/
// e.g. /gallery/dry-needling.jpg
// ─────────────────────────────────────────────
const galleryItems = [
  { id: 1, src: null, label: 'Dry Needling', span: 'row-span-2' },
  { id: 2, src: null, label: 'Manual Therapy', span: '' },
  { id: 3, src: null, label: 'Movement Assessment', span: '' },
  { id: 4, src: null, label: 'Cupping Therapy', span: 'row-span-2' },
  { id: 5, src: null, label: 'Patient Education', span: '' },
  { id: 6, src: null, label: 'Sports Rehabilitation', span: '' },
]

const gradients = [
  'from-navy/20 to-teal/20',
  'from-teal/20 to-emerald-500/20',
  'from-orange-400/20 to-orange-600/20',
  'from-purple-500/20 to-navy/20',
  'from-emerald-400/20 to-teal/20',
  'from-navy/20 to-purple-500/20',
]

function GalleryItem({ item, index, onClick }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      onClick={() => onClick(item)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-hover transition-all duration-300 ${item.span} min-h-[180px]`}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Placeholder until real images are added */
        <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center min-h-[180px]`}>
          <div className="text-center px-4">
            <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">Coming Soon</div>
            <div className="font-body text-sm font-500 text-gray-500">{item.label}</div>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="font-body font-500 text-white text-sm">{item.label}</span>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-4 h-4 text-white" />
      </div>
    </motion.div>
  )
}

export function Gallery() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <section id="gallery" className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="container-max relative">
          <div className="text-center mb-12">
            <SectionHeader
              eyebrow="Clinical Gallery"
              title={<>Inside the<br /><span className="gradient-text italic">practice</span></>}
              subtitle="A glimpse into the clinical environment — treatments, assessments, and patient-centered care."
              center
            />
          </div>

          {/* Masonry grid */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]"
          >
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onClick={setLightbox}
              />
            ))}
          </motion.div>

          <p className="text-center font-mono text-[11px] text-gray-400 mt-6">
            Clinical images will be added shortly — check back soon.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && lightbox.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="font-body text-white text-sm">{lightbox.label}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}