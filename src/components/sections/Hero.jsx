import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Star, Shield, Award } from 'lucide-react'
import { doctorInfo } from '../../data/data'

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

function handleScroll(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
  } else {
    window.location.hash = id
  }
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface via-white to-teal/5"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-radial from-navy/8 via-navy/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] rounded-full bg-gradient-radial from-teal/8 via-teal/3 to-transparent blur-3xl pointer-events-none" />

      <div className="container-max px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 w-full relative z-10">

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col items-center gap-8 lg:hidden">

          {/* 1. Photo */}
          <div className="relative flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy/20 to-teal/20 blur-2xl scale-110 pointer-events-none" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-hover">
                <img src="/doctor.jpg" alt="Dr. Esknder Zakaria" className="w-full h-full object-cover object-top" />
              </div>

              {/* ✅ LOGO replacing Available Now — top left of photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-2 -left-6 z-20"
              >
                <img
                  src="/logos/kinetic-control.png"
                  alt="Kinetic Control Certified"
                  className="w-16 h-auto object-contain"
                />
              </motion.div>

              {/* Specialty */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 bottom-10 glass rounded-2xl px-3 py-2.5 shadow-card border border-white/80 z-20"
              >
                <div className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-0.5">Specialty</div>
                <div className="font-body font-500 text-gray-900 text-xs whitespace-nowrap">Orthopedic Rehab</div>
              </motion.div>
            </motion.div>

            {/* 2. Credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-8 w-full max-w-xs"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl px-5 py-4 shadow-card text-center">
                <p className="font-display font-600 text-gray-900 text-sm">{doctorInfo.name}</p>
                <div className="flex items-center gap-3 my-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal/25 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-teal/40" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-teal/25 to-transparent" />
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="font-body text-[11px] text-teal font-500 leading-snug">
                    Kinetic Control Movement Therapist (KCMT)
                    <br />from Comera Movement Science UK
                  </p>
                  <span className="text-sm flex-shrink-0 mt-0.5">🇬🇧</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. Text + buttons + stats */}
          <div className="w-full relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[11px] text-navy tracking-widest uppercase font-500">Available for Consultations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl leading-[1.08] font-700 text-gray-900 mb-5"
            >
              Where <span className="gradient-text italic">Movement</span>
              <br />Science Meets<br />Clinical{' '}
              <span className="relative inline-block">
                Excellence
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-navy to-teal rounded-full origin-left pointer-events-none"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base text-gray-500 leading-relaxed mb-8"
            >
              {doctorInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 relative z-30"
            >
              <motion.a href="#contact" onClick={(e) => handleScroll(e, 'contact')}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-body font-500 text-sm shadow-soft hover:shadow-hover transition-all duration-200 cursor-pointer no-underline pointer-events-auto">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="#skills" onClick={(e) => handleScroll(e, 'skills')}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-transparent text-navy border border-navy/20 px-6 py-3 rounded-xl font-body font-500 text-sm hover:bg-navy/5 hover:border-navy/40 transition-all duration-200 cursor-pointer no-underline pointer-events-auto">
                View Expertise
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-nowrap gap-2 mt-8 overflow-x-auto pb-1"
            >
              <StatBadge value="3.51" label="GPA — Honors"   icon={Star}   delay={0.7} />
              <StatBadge value="5+"   label="Certifications" icon={Award}  delay={0.8} />
              <StatBadge value="KCMT" label="Specialist"     icon={Shield} delay={0.9} />
            </motion.div>
          </div>
        </div>

        {/* DESKTOP LAYOUT — 3-col grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* TEXT column */}
          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[11px] text-navy tracking-widest uppercase font-500">Available for Consultations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-display text-5xl xl:text-[60px] leading-[1.08] font-700 text-gray-900 mb-6"
            >
              Where <span className="gradient-text italic">Movement</span>
              <br />Science Meets<br />Clinical{' '}
              <span className="relative inline-block">
                Excellence
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-navy to-teal rounded-full origin-left pointer-events-none"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
            >
              {doctorInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 relative z-30"
            >
              <motion.a href="#contact" onClick={(e) => handleScroll(e, 'contact')}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-body font-500 text-base shadow-soft hover:shadow-hover transition-all duration-200 cursor-pointer no-underline pointer-events-auto">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="#skills" onClick={(e) => handleScroll(e, 'skills')}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-transparent text-navy border border-navy/20 px-8 py-4 rounded-xl font-body font-500 text-base hover:bg-navy/5 hover:border-navy/40 transition-all duration-200 cursor-pointer no-underline pointer-events-auto">
                View Expertise
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-nowrap gap-3 mt-10"
            >
              <StatBadge value="3.51" label="GPA — Honors"   icon={Star}   delay={0.7} />
              <StatBadge value="5+"   label="Certifications" icon={Award}  delay={0.8} />
              <StatBadge value="KCMT" label="Specialist"     icon={Shield} delay={0.9} />
            </motion.div>
          </div>



          {/* PHOTO column */}
          <div className="relative flex flex-col items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy/20 to-teal/20 blur-2xl scale-110 pointer-events-none" />
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white shadow-hover">
                <img src="/doctor.jpg" alt="Dr. Esknder Zakaria" className="w-full h-full object-cover object-top" />
              </div>

              {/* ✅ LOGO replacing Available Now — top left of photo, overlapping slightly */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08 }}
                className="absolute top-3 -left-10 xl:-left-12 z-20"
              >
                <img
                  src="/logos/kinetic-control.png"
                  alt="Kinetic Control Certified"
                  className="w-20 h-auto xl:w-24 object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* Specialty */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 bottom-14 glass rounded-2xl px-4 py-2.5 shadow-card border border-white/80 z-20"
              >
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Specialty</div>
                <div className="font-body font-500 text-gray-900 text-sm whitespace-nowrap">Orthopedic Rehab</div>
              </motion.div>
            </motion.div>

            {/* Credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 w-full max-w-xs"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl px-5 py-4 shadow-card text-center">
                <p className="font-display font-600 text-gray-900 text-base">{doctorInfo.name}</p>
                <div className="flex items-center gap-3 my-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal/25 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-teal/40" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-teal/25 to-transparent" />
                </div>
                <div className="flex items-start justify-center gap-1.5">
                  <p className="font-body text-xs text-teal font-500 leading-snug">
                    Kinetic Control Movement Therapist (KCMT)
                    <br />from Comera Movement Science UK
                  </p>
                  <span className="text-sm flex-shrink-0 mt-0.5">🇬🇧</span>
                </div>
              </div>
            </motion.div>

            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 w-[420px] h-[420px] xl:w-[480px] xl:h-[480px] rounded-full border border-dashed border-navy/10 -z-10 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 w-[480px] h-[480px] xl:w-[560px] xl:h-[560px] rounded-full border border-dashed border-teal/8 -z-10 pointer-events-none"
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}