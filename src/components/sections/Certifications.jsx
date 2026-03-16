import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye, Award, MapPin, Calendar } from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'

// ─────────────────────────────────────────
// DATA — update image filenames to match
// your actual files in /public/certs/
// ─────────────────────────────────────────
const certifications = [
  {
    id: 1,
    title: 'Kinetic Control (KCMT)',
    subtitle: 'Certified Movement Therapist',
    badge: 'KCMT',
    issuer: 'Comera Movement Science',
    country: 'United Kingdom',
    flag: '🇬🇧',
    year: '2026',
    accent: '#0A9396',
    accentLight: '#E0F4F4',
    images: [
      '/certs/kcmt-1.jpg',
      '/certs/kcmt-2.jpg',
      '/certs/kcmt-3.jpg',
      '/certs/kcmt-4.jpg',
      '/certs/kcmt-5.jpg',
      '/certs/kcmt-6.jpg',
      '/certs/kcmt-7.jpg',
    ],
    description:
      'Kinetic Control Movement Therapy (KCMT) is an internationally recognized framework for the assessment and retraining of movement control impairments. This certification reflects advanced clinical competence in identifying and treating movement dysfunction at its root cause — restoring precise neuromuscular control for long-term patient outcomes.',
  },
  {
    id: 2,
    title: 'OMTC',
    subtitle: 'Orthopedic Manual Therapy Certificate',
    badge: 'OMT',
    issuer: 'Primephysio',
    country: 'United Kingdom',
    flag: '🇬🇧',
    year: '2025',
    accent: '#0F4C81',
    accentLight: '#E6F1FB',
    images: ['/certs/omtc-1.jpg'],
    description:
      'The Orthopaedic Manual Therapy Certificate (OMTC) reflects an advanced level of clinical reasoning and hands-on skills in managing complex musculoskeletal conditions. This certification confirms expertise in delivering specialized, evidence-based manual therapy techniques to improve patient outcomes and functional recovery.',
  },
  {
    id: 3,
    title: 'TMD Specialist',
    subtitle: 'Temporomandibular Disorder Specialist',
    badge: 'TMD',
    issuer: 'Primephysio',
    country: 'United Kingdom',
    flag: '🇬🇧',
    year: '2025',
    accent: '#0A6C74',
    accentLight: '#E1F5EE',
    images: ['/certs/tmd-1.jpg'],
    description:
      'This certification focuses on the advanced assessment and evidence-based management of Temporomandibular Disorders (TMD). It demonstrates clinical proficiency in treating TMJ dysfunctions and mechanical neck pain, ensuring integrated care for the cervical and jaw complex.',
  },
  {
    id: 4,
    title: 'Sports Injury Rehab',
    subtitle: 'Certified Sports Rehab Specialist',
    badge: 'SIR',
    issuer: 'Aims Academy',
    country: 'Egypt',
    flag: '🇪🇬',
    year: '2024',
    accent: '#C2410C',
    accentLight: '#FEF0EA',
    images: ['/certs/sir-1.jpg'],
    description:
      'This program covers the comprehensive management of sports-related injuries, from acute field care to advanced return-to-sport rehabilitation protocols. It highlights expertise in movement analysis for athletes, injury prevention strategies, and designing evidence-based rehab programs for musculoskeletal sports conditions.',
  },
  {
    id: 5,
    title: 'Chiropractic Workshop',
    subtitle: 'Advanced Manipulation Techniques',
    badge: 'CHI',
    issuer: 'GPTS',
    country: 'Egypt',
    flag: '🇪🇬',
    year: '2024',
    accent: '#6D28D9',
    accentLight: '#F0EEFF',
    images: ['/certs/chi-1.jpg'],
    description:
      'An advanced workshop focused on spinal manipulation and chiropractic assessment techniques. This training enhanced the ability to integrate high-velocity, low-amplitude (HVLA) thrust techniques alongside manual therapy approaches for comprehensive spinal care.',
  },
]

// ─────────────────────────────────────────
// CERTIFICATE CARD
// Key fix: image uses natural height (no
// fixed container height that causes crop)
// ─────────────────────────────────────────
function CertCard({ cert, onClick }) {
  const [imgError, setImgError] = useState(false)
  const src = cert.images[0] ?? null
  const showImage = src && !imgError

  return (
    <motion.article
      variants={staggerItemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(cert)}
      className="group relative bg-white border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover cursor-pointer flex flex-col"
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title} certificate`}
      onKeyDown={e => e.key === 'Enter' && onClick(cert)}
    >
      {/* ── CERTIFICATE PREVIEW ──
          Natural aspect ratio — no fixed height — no cropping.
          The image container grows to fit the full certificate.    */}
      <div className="relative w-full bg-gray-50 border-b border-border">
        {showImage ? (
          <>
            <img
              src={src}
              alt={`${cert.title} certificate preview`}
              loading="lazy"
              onError={() => setImgError(true)}
              // object-contain + w-full makes the image show fully
              // padding ensures white breathing room around document
              className="w-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
              style={{ display: 'block', maxHeight: '280px' }}
            />

            {/* Count badge — top-right */}
            {cert.images.length > 1 && (
              <div
                className="absolute top-3 right-3 text-white font-mono text-[10px] font-600 px-2 py-1 rounded-full shadow-soft"
                style={{ backgroundColor: cert.accent }}
              >
                {cert.images.length} certificates
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white/95 backdrop-blur-sm rounded-full py-2 px-4 flex items-center gap-2 shadow-soft border border-border">
                <Eye className="w-4 h-4 text-gray-700" />
                <span className="font-mono text-[11px] text-gray-700 font-500">View Certificate</span>
              </div>
            </div>
          </>
        ) : (
          /* Fallback placeholder — elegant, no broken image */
          <div
            className="flex flex-col items-center justify-center py-14 gap-3"
            style={{ backgroundColor: cert.accentLight }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-700 text-white text-sm shadow-soft"
              style={{ backgroundColor: cert.accent }}
            >
              {cert.badge}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: cert.accent }}>
              Certificate
            </span>
          </div>
        )}
      </div>

      {/* ── CARD BODY ── */}
      <div className="flex flex-col flex-1 p-5">

        {/* Title row */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-700 text-white text-[11px] flex-shrink-0 shadow-soft"
            style={{ backgroundColor: cert.accent }}
          >
            {cert.badge}
          </div>
          <div className="min-w-0">
            <h3 className="font-body font-600 text-gray-900 text-[15px] leading-snug">{cert.title}</h3>
            <p className="font-body text-xs text-gray-400 mt-0.5 leading-snug">{cert.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
          {cert.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-gray-300" />
              <span className="font-body text-xs text-gray-600 font-500">
                {cert.issuer}
                <span className="ml-1">{cert.flag}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-gray-300" />
              <span className="font-mono text-[11px] text-gray-400">{cert.year}</span>
            </div>
          </div>

          {/* Arrow hint on hover */}
          <div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: cert.accentLight }}
          >
            <ChevronRight className="w-3.5 h-3.5" style={{ color: cert.accent }} />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ backgroundColor: cert.accent }}
      />
    </motion.article>
  )
}

// ─────────────────────────────────────────
// CERTIFICATE MODAL
// Full-screen lightbox experience.
// Certificate image always fits viewport.
// ─────────────────────────────────────────
function CertModal({ cert, onClose }) {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const total = cert.images.length

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  const handleKey = useCallback(e => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft')  prev()
  }, [onClose, next, prev])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  useEffect(() => { setLoaded(false) }, [current])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[100] flex items-stretch justify-center"
        style={{ padding: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* Modal — two-column layout on md+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl m-auto bg-white rounded-none md:rounded-3xl overflow-hidden shadow-2xl"
          style={{ maxHeight: '100dvh' }}
          onClick={e => e.stopPropagation()}
        >

          {/* ── LEFT: full certificate image panel ── */}
          <div className="relative flex-1 bg-[#F8F8F8] flex flex-col min-h-0">

            {/* Image area — scrollable if cert is tall */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  className="w-full flex items-center justify-center"
                >
                  {/* Spinner */}
                  {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-10 h-10 rounded-full border-[3px] border-t-transparent animate-spin"
                        style={{ borderColor: cert.accent, borderTopColor: 'transparent' }}
                      />
                    </div>
                  )}

                  {cert.images[current] ? (
                    <img
                      key={cert.images[current]}
                      src={cert.images[current]}
                      alt={`${cert.title} — ${current + 1} of ${total}`}
                      className="rounded-xl shadow-md"
                      style={{
                        maxWidth: '100%',
                        maxHeight: 'calc(100dvh - 180px)',
                        objectFit: 'contain',
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.25s',
                        display: 'block',
                        margin: '0 auto',
                      }}
                      onLoad={() => setLoaded(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4 py-20">
                      <Award className="w-12 h-12 text-gray-300" />
                      <p className="font-mono text-sm text-gray-400">Image not found</p>
                      <code className="font-mono text-xs text-gray-300 bg-gray-100 px-3 py-1 rounded">
                        {cert.images[current]}
                      </code>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Navigation bar at bottom of image panel ── */}
            {total > 1 && (
              <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-white/80 backdrop-blur-sm flex-shrink-0">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-border hover:bg-gray-50 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>

                {/* Thumbnail strip */}
                <div className="flex gap-1.5 overflow-x-auto max-w-[calc(100%-80px)] px-1">
                  {cert.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        i === current ? 'shadow-soft scale-105' : 'opacity-40 hover:opacity-70'
                      }`}
                      style={{ borderColor: i === current ? cert.accent : 'transparent' }}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-contain bg-white"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-border hover:bg-gray-50 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            )}
          </div>

          {/* ── RIGHT: info panel ── */}
          <div
            className="w-full md:w-[320px] flex flex-col border-t md:border-t-0 md:border-l border-border bg-white flex-shrink-0"
            style={{ maxHeight: '100dvh' }}
          >
            {/* Header */}
            <div className="flex items-start gap-3 px-5 py-4 border-b border-border flex-shrink-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-700 text-white text-xs shadow-soft flex-shrink-0 mt-0.5"
                style={{ backgroundColor: cert.accent }}
              >
                {cert.badge}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display font-600 text-gray-900 text-[15px] leading-snug">{cert.title}</h2>
                <p className="font-body text-xs text-gray-400 mt-0.5">{cert.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Scrollable info body */}
            <div className="flex-1 overflow-y-auto px-5 py-5">

              {/* Counter */}
              {total > 1 && (
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] font-500 mb-5"
                  style={{ backgroundColor: cert.accentLight, color: cert.accent }}
                >
                  {current + 1} / {total} certificates
                </div>
              )}

              {/* Meta items */}
              <div className="space-y-3 mb-5">
                {[
                  { icon: MapPin,    label: 'Issued by', value: cert.issuer },
                  { icon: Calendar,  label: 'Year',      value: cert.year   },
                  { icon: Award,     label: 'Country',   value: `${cert.country} ${cert.flag}` },
                ].map(m => (
                  <div key={m.label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                      <m.icon className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">{m.label}</div>
                      <div className="font-body text-sm text-gray-700 font-500 mt-0.5">{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-5" />

              {/* Description */}
              <p className="font-body text-sm text-gray-500 leading-relaxed">{cert.description}</p>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────
export function Certifications() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="certifications" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-radial from-teal/5 to-transparent blur-3xl pointer-events-none" />

        <div className="container-max relative">

          {/* Header */}
          <div className="text-center mb-14">
            <SectionHeader
              eyebrow="Certifications"
              title={<>Credentials that define<br /><span className="gradient-text italic">clinical mastery</span></>}
              subtitle="Internationally recognized certifications — click any card to view the full certificate."
              center
            />
          </div>

          {/* Cards */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {certifications.map(cert => (
              <CertCard key={cert.id} cert={cert} onClick={setSelected} />
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 divide-x divide-border border border-border rounded-2xl overflow-hidden"
          >
            {[
              { value: '5',    label: 'Certifications'           },
              { value: '3',    label: 'International Bodies'     },
              { value: '2026', label: 'Most Recent'               },
            ].map(s => (
              <div key={s.label} className="py-5 text-center bg-gradient-to-b from-white to-surface">
                <div className="font-display font-700 text-2xl md:text-3xl gradient-text">{s.value}</div>
                <div className="font-body text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </>
  )
}