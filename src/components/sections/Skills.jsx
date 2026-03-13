import { motion } from 'framer-motion'
import {
  Hand, Scan, Activity, Zap, CircleDot, Layers, Shield
} from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { skills } from '../../data/data'

const iconMap = {
  Hands: Hand,
  Syringe: Zap,
  CircleDot: CircleDot,
  Bandage: Layers,
  Scan: Scan,
  Activity: Activity,
  Zap: Shield,
}

function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || Activity

  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group relative bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-hover hover:border-navy/20 transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Number watermark */}
      <div className="absolute top-3 right-4 font-display font-700 text-7xl text-gray-100 leading-none select-none group-hover:text-navy/5 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-navy/8 to-teal/8 border border-navy/10 flex items-center justify-center mb-5 group-hover:from-navy/15 group-hover:to-teal/15 transition-all duration-300">
        <Icon className="w-5 h-5 text-navy" />
      </div>

      {/* Content */}
      <h3 className="font-body font-600 text-gray-900 text-base mb-2">{skill.name}</h3>
      <p className="font-body text-sm text-gray-500 leading-relaxed relative z-10">{skill.description}</p>

      {/* Bottom gradient line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full" />
    </motion.div>
  )
}

export function Skills() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="skills" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-radial from-navy/4 to-transparent blur-3xl" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Skills"
              title={<>Clinical<br />skill<br /><span className="gradient-text italic">arsenal</span></>}
              subtitle="A comprehensive toolkit of evidence-based therapeutic modalities for optimal patient outcomes."
            />

            <div className="mt-8 space-y-3">
              {[
              ].map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs font-body mb-1.5">
                    <span className="text-gray-600 font-400">{bar.label}</span>
                    <span className="text-navy font-500 font-mono">{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-navy to-teal rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}