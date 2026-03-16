import { motion } from 'framer-motion'
import { Hand, Zap, CircleDot, Layers, Scan, Activity, Shield } from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { skills } from '../../data/data'

const iconMap = {
  Hands:     Hand,
  Syringe:   Zap,
  CircleDot: CircleDot,
  Bandage:   Layers,
  Scan:      Scan,
  Activity:  Activity,
  Zap:       Shield,
}

const skillConfig = [
  { accent: '#0F4C81' },
  { accent: '#0A9396' },
  { accent: '#059669' },
  { accent: '#C2410C' },
  { accent: '#0A6C74' },
  { accent: '#6D28D9' },
  { accent: '#B45309' },
]

function SkillRow({ skill, index, config, inView }) {
  const Icon = iconMap[skill.icon] || Activity

  return (
    <motion.div
      variants={staggerItemVariants}
      className="group relative flex items-start gap-5 md:gap-8 py-6 border-b border-border last:border-none hover:bg-white/60 transition-colors duration-200 px-4 md:px-6 rounded-xl -mx-4 md:-mx-6 cursor-default"
    >
      {/* Index number */}
      <span
        className="font-mono text-[11px] font-600 mt-1 flex-shrink-0 w-6 text-right opacity-30 group-hover:opacity-70 transition-opacity duration-200"
        style={{ color: config.accent }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${config.accent}12` }}
      >
        <Icon style={{ width: '18px', height: '18px', color: config.accent }} />
      </div>

      {/* Name + description */}
      <div className="flex-1 min-w-0">
        <h3 className="font-body font-600 text-gray-900 text-base md:text-[17px] leading-snug mb-1.5 group-hover:text-navy transition-colors duration-200">
          {skill.name}
        </h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* Animated dot — right side on hover */}
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ backgroundColor: config.accent }}
      />
    </motion.div>
  )
}

export function Skills() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })
  const { ref: leftRef, inView: leftInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-radial from-navy/4 to-transparent blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* ── LEFT — sticky header ── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeader
              eyebrow="Clinical Skills"
              title={<>Therapeutic<br /><span className="gradient-text italic">expertise</span></>}
              subtitle="Evidence-based modalities applied with clinical precision and deep anatomical understanding."
            />

            {/* Count badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-4 shadow-soft">
              <div className="font-display font-700 text-3xl gradient-text leading-none">
                {skills.length}
              </div>
              <div>
                <div className="font-body font-500 text-gray-900 text-sm">Therapeutic</div>
                <div className="font-body text-xs text-gray-400">Modalities</div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — skill list ── */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="bg-white/50 border border-border rounded-3xl px-4 md:px-6 py-2 shadow-soft"
          >
            {skills.map((skill, index) => (
              <SkillRow
                key={skill.id}
                skill={skill}
                index={index}
                config={skillConfig[index] ?? skillConfig[0]}
                inView={inView}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}