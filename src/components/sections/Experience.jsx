import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { experience } from '../../data/data'

function TimelineItem({ item, index, inView }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="relative flex gap-4 md:gap-6 group"
    >
      {/* Timeline connector */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center z-10 shadow-glow flex-shrink-0"
        >
          <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </motion.div>
        {index < experience.length - 1 && (
          <div className="flex-1 w-0.5 bg-gradient-to-b from-navy/20 to-teal/10 mt-2" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
        className="flex-1 pb-8 md:pb-10 last:pb-0"
      >
        <div className="bg-white border border-border rounded-2xl p-4 md:p-6 shadow-card group-hover:shadow-hover group-hover:border-navy/20 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 md:gap-4 mb-3">
            <h3 className="font-body font-600 text-gray-900 text-sm md:text-base leading-snug">{item.org}</h3>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {item.current && (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 font-mono text-[10px] font-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              )}
              <span className="inline-flex items-center gap-1 bg-navy/5 text-navy border border-navy/10 rounded-full px-2 py-0.5 font-mono text-[10px] font-500">
                <Calendar className="w-2.5 h-2.5" />
                {item.year}
              </span>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-4 bg-gradient-to-r from-navy to-teal flex-shrink-0" />
            <p className="font-body text-sm text-teal font-500">{item.role}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {['Orthopedic', 'Neuro Rehab', 'Manual Therapy'].map((tag) => (
              <span key={tag} className="px-2 md:px-2.5 py-1 bg-surface rounded-lg font-body text-xs text-gray-500 border border-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Experience() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="experience" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-gradient-radial from-navy/4 to-transparent blur-3xl pointer-events-none" />

      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Experience"
              title={<>Clinical<br /><span className="gradient-text italic">journey</span></>}
              subtitle="Building deep expertise across orthopedic and neurological rehabilitation settings."
            />

            <div className="mt-6 md:mt-8 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-navy to-teal/80 text-white shadow-hover">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">Total experience</div>
              <div className="font-display font-700 text-3xl md:text-4xl mb-1">3+</div>
              <div className="font-body text-sm text-white/80">Years in orthopedic & neuro rehabilitation</div>
            </div>
          </div>

          {/* Timeline */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="pt-1 md:pt-2"
          >
            {experience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}