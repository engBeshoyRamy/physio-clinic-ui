import { motion } from 'framer-motion'
import { BookOpen, Home, ArrowRight, Tag } from 'lucide-react'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { projects } from '../../data/data'

const iconMap = { BookOpen, Home }

function ProjectCard({ project, index }) {
  const Icon = iconMap[project.icon] || BookOpen
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={staggerItemVariants}
      className="group relative bg-white border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-400"
      whileHover={{ y: -4 }}
    >
      {/* Top visual band */}
      <div className={`relative h-48 overflow-hidden ${isEven ? 'bg-gradient-to-br from-navy to-navy/80' : 'bg-gradient-to-br from-teal to-teal/70'}`}>
        {/* Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-20" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-6 right-8 w-20 h-20 rounded-2xl bg-white/10 border border-white/20"
        />
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 9, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 right-20 w-12 h-12 rounded-full bg-white/10 border border-white/20"
        />

        {/* Icon */}
        <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Project number */}
        <div className="absolute bottom-4 left-6 font-display font-700 text-6xl text-white/10 leading-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Subtitle badge */}
        <div className="absolute bottom-4 right-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
          <span className="font-mono text-[10px] text-white/80 uppercase tracking-wider">{project.subtitle}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-600 text-gray-900 text-xl mb-2">{project.title}</h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-body text-xs font-400 border ${
                isEven
                  ? 'bg-navy/5 text-navy border-navy/10'
                  : 'bg-teal/5 text-teal border-teal/10'
              }`}
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        <button className={`inline-flex items-center gap-2 font-body text-sm font-500 group/btn ${isEven ? 'text-navy' : 'text-teal'}`}>
          Learn more
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-radial from-teal/6 to-transparent blur-3xl" />

      <div className="container-max relative">
        <div className="text-center mb-16">
          <SectionHeader
            eyebrow="Projects"
            title={<>Initiatives beyond<br /><span className="gradient-text italic">the clinic</span></>}
            subtitle="Educational and service projects extending clinical impact into the community."
            center
          />
        </div>

        {/* ✅ FIXED: flex + justify-center so single card is centered */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full max-w-md">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

