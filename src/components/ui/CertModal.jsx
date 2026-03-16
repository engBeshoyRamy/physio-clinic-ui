import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export function CertModal({ cert, onClose }) {
  const hasImages = cert?.images && cert.images.length > 0
  const [current, setCurrent] = [cert?.currentImg ?? 0, cert?.setCurrentImg ?? (() => {})]

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!cert) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-border flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-soft flex-shrink-0`}>
                <span className="font-mono font-700 text-white text-xs">{cert.badge}</span>
              </div>
              <div>
                <h3 className="font-display font-600 text-gray-900 text-lg leading-snug">{cert.title}</h3>
                <p className="font-mono text-[11px] text-gray-400 mt-0.5">{cert.issuer} · {cert.year}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0 ml-4"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1">
            {/* Certificate image viewer */}
            {hasImages ? (
              <div className="relative bg-gray-50 border-b border-border">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={cert.currentImg}
                      src={cert.images[cert.currentImg]}
                      alt={`${cert.title} certificate`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-contain p-4"
                    />
                  </AnimatePresence>
                </div>

                {/* Nav arrows — only if multiple images */}
                {cert.images.length > 1 && (
                  <>
                    <button
                      onClick={() => cert.setCurrentImg(i => (i - 1 + cert.images.length) % cert.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-card flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      onClick={() => cert.setCurrentImg(i => (i + 1) % cert.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-card flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {cert.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => cert.setCurrentImg(i)}
                          className={`rounded-full transition-all duration-200 ${
                            i === cert.currentImg
                              ? 'w-4 h-1.5 bg-navy'
                              : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Image counter */}
                {cert.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/50 text-white rounded-full px-2.5 py-1 font-mono text-[10px]">
                    {cert.currentImg + 1} / {cert.images.length}
                  </div>
                )}
              </div>
            ) : (
              /* Placeholder when no image yet */
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-3 shadow-soft`}>
                    <span className="font-mono font-700 text-white text-sm">{cert.badge}</span>
                  </div>
                  <p className="font-mono text-xs text-gray-400">Certificate image coming soon</p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="p-6">
              <h4 className="font-body font-600 text-gray-900 text-sm mb-3 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                About this Certification
                <span className="h-px flex-1 bg-border" />
              </h4>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{cert.description}</p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="flex items-center gap-2 bg-surface rounded-xl px-3 py-2 border border-border">
                  <span className="font-mono text-[10px] text-gray-400 uppercase">Issuer</span>
                  <span className="font-body text-xs text-gray-700 font-500">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface rounded-xl px-3 py-2 border border-border">
                  <span className="font-mono text-[10px] text-gray-400 uppercase">Year</span>
                  <span className="font-body text-xs text-gray-700 font-500">{cert.year}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}