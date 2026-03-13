import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Target, Trophy } from 'lucide-react'
import { useScrollAnimation, slideInLeftVariants, slideInRightVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { doctorInfo } from '../../data/data'

const studyBooks = ["Moore's Anatomy", 'Neumann', 'Sahrmann']

export function About() {
  const { ref: leftRef, inView: leftInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: rightRef, inView: rightInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-radial from-teal/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-gradient-radial from-navy/5 to-transparent blur-3xl" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Identity card */}
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            variants={slideInLeftVariants}
          >
            {/* Profile visual */}
            <div className="relative mb-6 md:mb-8">
              <div className="w-full rounded-3xl bg-gradient-to-br from-navy/5 via-white to-teal/5 border border-border overflow-hidden flex items-center justify-center shadow-card py-8 px-4">
                <div className="text-center w-full">

                  {/* ✅ CIRCLE PHOTO — responsive size */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-hover mb-4 md:mb-6">
                    <img
                      src="/doctor.jpg"
                      alt="Dr. Esknder Zakaria"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h3 className="font-display font-700 text-gray-900 text-xl md:text-2xl mb-1">{doctorInfo.name}</h3>
                  <p className="font-body text-teal text-xs md:text-sm font-500">{doctorInfo.title}</p>

                  {/* Decorative line */}
                  <div className="flex items-center gap-3 justify-center my-3 md:my-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                    <div className="w-1.5 h-1.5 rounded-full bg-teal/50" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
                  </div>

                  {/* GPA badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-navy/5 to-teal/5 border border-navy/10 rounded-full px-3 md:px-4 py-1.5">
                    <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5 text-navy" />
                    <span className="font-mono text-[10px] md:text-[11px] text-navy font-500 tracking-wider">GPA {doctorInfo.education.gpa}</span>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 shadow-card border border-white/80"
              >
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Class of</div>
                <div className="font-display font-600 text-navy text-lg leading-none">2024</div>
              </motion.div>
            </div>

            {/* Education card */}
            <Card className="p-4 md:p-6" hover={false}>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-navy/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-body font-600 text-gray-900 text-sm md:text-base">{doctorInfo.education.degree}</h4>
                  <p className="text-xs md:text-sm text-teal font-500 mt-0.5">{doctorInfo.education.university}</p>
                  <div className="flex items-center gap-2 md:gap-3 mt-2 flex-wrap">
                    <span className="font-mono text-[10px] md:text-[11px] text-gray-400">{doctorInfo.education.year}</span>
                    <span className="h-3 w-px bg-border hidden sm:block" />
                    <span className="font-mono text-[10px] md:text-[11px] text-emerald-600 font-500">{doctorInfo.education.honor}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            variants={slideInRightVariants}
          >
            <SectionHeader
              eyebrow="About"
              title={<>Clinical expertise,<br /><span className="gradient-text italic">driven by science</span></>}
              subtitle="I am an Orthopedic Physical Therapist with 2 years of clinical expertise in MSK and sports rehab. As a certified KCMT, I focus on movement analysis and clinical reasoning to deliver high-quality care for post-surgical and orthopedic cases."
            />

            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {/* Goal */}
              <div className="relative pl-4 md:pl-5 border-l-2 border-navy/20">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-navy" />
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal" />
                  <span className="font-mono text-[10px] md:text-[11px] text-teal uppercase tracking-wider font-500">Professional Goal</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{doctorInfo.goal}</p>
              </div>

              {/* Study resources */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {studyBooks.map((book) => (
                    <span
                      key={book}
                      className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-navy/5 border border-navy/10 font-body text-xs md:text-sm text-navy/80 font-400"
                    >
                      {book}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                {[
                  { value: '3+', label: 'Years Clinical Experience' },
                  { value: '5+', label: 'Professional Certifications' },
                  { value: '3', label: 'Practice Locations' },
                  { value: '2027', label: "Master's Degree Target" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="bg-surface rounded-2xl p-3 md:p-4 border border-border"
                  >
                    <div className="font-display font-700 text-xl md:text-2xl gradient-text">{stat.value}</div>
                    <div className="font-body text-[10px] md:text-xs text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}