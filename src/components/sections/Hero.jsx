import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Star, Shield, Award } from 'lucide-react'
import { doctorInfo } from '../../data/data'

function FloatingShape({ className, delay = 0, duration = 8 }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function StatBadge({ value, label, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-3 md:p-4 shadow-card flex items-center gap-2 md:gap-3"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-navy/10 to-teal/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-navy" />
      </div>
      <div>
        <div className="font-display font-600 text-gray-900 text-base md:text-lg leading-none">{value}</div>
        <div className="font-body text-[10px] md:text-xs text-gray-500 mt-0.5">{label}</div>
      </div>
    </motion.div>
  )
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface via-white to-teal/5">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-radial from-navy/8 via-navy/3 to-transparent blur-3xl" />
      <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] rounded-full bg-gradient-radial from-teal/8 via-teal/3 to-transparent blur-3xl" />

      <div className="container-max px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 w-full">

        {/* ✅ Mobile: column layout — photo first, text below */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Photo — shows FIRST on mobile, RIGHT on desktop */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mb-14 lg:mb-0"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy/20 to-teal/20 blur-2xl scale-105" />

              {/* Circle photo */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-hover">
                <img
                  src="/doctor.jpg"
                  alt="Dr. Esknder Zakaria"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 md:-right-4 glass rounded-2xl px-3 md:px-4 py-2 shadow-card border border-white/80"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] md:text-[11px] text-gray-700 font-500">Available Now</span>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-2 md:-left-4 glass rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-card border border-white/80"
              >
                <div className="font-mono text-[9px] md:text-[10px] text-gray-500 mb-0.5 uppercase tracking-wider">Specialty</div>
                <div className="font-body font-500 text-gray-900 text-xs md:text-sm">Orthopedic Rehab</div>
              </motion.div>

              {/* Name tag — bottom center */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-12 md:-bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap glass rounded-2xl px-4 md:px-5 py-2 md:py-3 shadow-card border border-white/80 text-center"
              >
                <div className="font-display font-600 text-gray-900 text-xs md:text-sm">{doctorInfo.name}</div>
                <div className="font-mono text-[9px] md:text-[10px] text-teal tracking-wider mt-0.5">KCMT · Orthopedic PT</div>
              </motion.div>
            </motion.div>

            {/* Animated rings — hidden on small screens */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="hidden sm:block absolute w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full border border-dashed border-navy/10 -z-10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="hidden sm:block absolute w-[360px] h-[360px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-teal/8 -z-10"
            />
          </div>

          {/* Text content — shows SECOND on mobile, LEFT on desktop */}
          <div className="order-2 lg:order-1 w-full">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-1.5 mb-6 md:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[11px] text-navy tracking-widest uppercase font-500">
                Available for Consultations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] font-700 text-gray-900 mb-5 md:mb-6"
            >
              Where{' '}
              <span className="gradient-text italic">Movement</span>
              <br />
              Science Meets
              <br />
              Clinical{' '}
              <span className="relative inline-block">
                Excellence
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-navy to-teal rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 md:mb-10 max-w-lg"
            >
              {doctorInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 md:gap-4"
            >
              <motion.button
                type="button"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-navy text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-body font-500 text-sm md:text-base shadow-soft hover:shadow-hover transition-all duration-200 cursor-pointer"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToSection('skills')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-transparent text-navy border border-navy/20 px-6 md:px-8 py-3 md:py-4 rounded-xl font-body font-500 text-sm md:text-base hover:bg-navy/5 hover:border-navy/40 transition-all duration-200 cursor-pointer"
              >
                View Expertise
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-10"
            >
              <StatBadge value="3.51" label="GPA — Honors" icon={Star} delay={0.7} />
              <StatBadge value="5+" label="Certifications" icon={Award} delay={0.8} />
              <StatBadge value="KCMT" label="Specialist" icon={Shield} delay={0.9} />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}