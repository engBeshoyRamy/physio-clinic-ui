import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'

const badges = [
  { abbr: 'KCMT', name: 'Kinetic Control', sub: 'Movement Therapist', color: 'from-emerald-500 to-emerald-700', flag: '🇬🇧' },
  { abbr: 'OMTC', name: 'Orthopedic Manual', sub: 'Therapy Certificate', color: 'from-navy to-navy/80', flag: '🇬🇧' },
  { abbr: 'TMD', name: 'Temporomandibular', sub: 'Disorder Specialist', color: 'from-teal to-teal/80', flag: '🇬🇧' },
  { abbr: 'SIR', name: 'Sports Injury', sub: 'Rehabilitation', color: 'from-orange-500 to-orange-700', flag: '🇪🇬' },
  { abbr: 'CHI', name: 'Chiropractic', sub: 'Workshop', color: 'from-purple-600 to-purple-800', flag: '🇪🇬' },
]

export function TrustBadges() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="bg-white border-y border-border py-8 md:py-10 overflow-hidden">
      <div className="container-max px-6 md:px-12 lg:px-20">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-6"
        >
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
            Internationally Certified — Trusted Clinical Credentials
          </span>
        </motion.div>

        {/* Badges row */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {badges.map((b) => (
            <motion.div
              key={b.abbr}
              variants={staggerItemVariants}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-4 py-3 shadow-soft hover:shadow-card cursor-default transition-all duration-200"
            >
              {/* Color dot / badge */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center flex-shrink-0 shadow-soft`}>
                <span className="font-mono font-700 text-white text-[10px]">{b.abbr}</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-body font-500 text-gray-800 text-xs leading-none">{b.name}</span>
                  <span className="text-[11px]">{b.flag}</span>
                </div>
                <div className="font-mono text-[10px] text-gray-400 mt-0.5">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}