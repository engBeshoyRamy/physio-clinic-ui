import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants } from '../../hooks/useScrollAnimation'

export function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      className={center ? 'text-center' : ''}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-6 bg-gradient-to-r from-navy to-teal" />
          <span className={`font-mono text-xs font-500 tracking-widest uppercase ${light ? 'text-white/60' : 'text-teal'}`}>
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-gradient-to-r from-teal to-navy" />
        </div>
      )}
      <h2 className={`font-display text-4xl md:text-[42px] leading-tight font-600 mb-4 text-balance ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${light ? 'text-white/70' : 'text-gray-500'} ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}