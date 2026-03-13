import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { certifications } from '../../data/data'

function CertCard({ cert }) {
  const isNavy = cert.color === 'navy'

  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-hover hover:border-navy/20 transition-all duration-300 relative overflow-hidden"
    >
      {/* Gradient corner accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-5 ${isNavy ? 'bg-navy' : 'bg-teal'}`} />

      {/* Badge */}
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 font-mono font-500 text-sm shadow-soft ${
        isNavy
          ? 'bg-gradient-to-br from-navy to-navy/80 text-white'
          : 'bg-gradient-to-br from-teal to-teal/80 text-white'
      }`}>
        {cert.badge}
      </div>

      {/* Content */}
      <h3 className="font-body font-600 text-gray-900 text-[15px] leading-snug mb-1">{cert.title}</h3>
      <p className="font-body text-sm text-gray-500 mb-4 leading-relaxed">{cert.subtitle}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Issued by</div>
          <div className="font-body text-xs text-gray-700 font-500">{cert.issuer}</div>
        </div>
        <span className={`font-mono text-[11px] font-500 px-2.5 py-1 rounded-lg ${
          isNavy ? 'bg-navy/5 text-navy' : 'bg-teal/5 text-teal'
        }`}>
          {cert.year}
        </span>
      </div>

      {/* Hover glow line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${
        isNavy ? 'bg-gradient-to-r from-navy to-navy/50' : 'bg-gradient-to-r from-teal to-teal/50'
      }`} />
    </motion.div>
  )
}

export function Certifications() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="certifications" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-radial from-teal/5 to-transparent blur-3xl" />

      <div className="container-max relative">
        <div className="text-center mb-16">
          <SectionHeader
            eyebrow="Certifications"
            title={<>Credentials that define<br /><span className="gradient-text italic">clinical mastery</span></>}
            subtitle="Internationally recognized certifications reflecting a commitment to continuous learning and clinical excellence."
            center
          />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 bg-gradient-to-r from-navy/3 via-teal/3 to-navy/3 border border-border rounded-2xl px-8 py-6"
        >
          {[
            { value: '5', label: 'Total Certifications' },
            { value: '3', label: 'UK & International Bodies' },
            { value: '2026', label: 'Most Recent: KCMT' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-display font-700 text-3xl gradient-text">{s.value}</div>
                <div className="font-body text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
              {i < 2 && <div className="h-10 w-px bg-border hidden md:block" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}