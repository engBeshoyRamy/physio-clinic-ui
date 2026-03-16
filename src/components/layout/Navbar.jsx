import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Activity } from 'lucide-react'

const navLinks = [
  { label: 'Home',             href: '#home'           },
  { label: 'About',            href: '#about'          },
  { label: 'Experience',       href: '#experience'     },
  { label: 'Certifications',   href: '#certifications' },
  { label: 'Skills',           href: '#skills'         },
  { label: 'Clinical Gallery', href: '#gallery'        },
  { label: 'Contact',          href: '#contact'        },
]

export function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [scrollPct,     setScrollPct]     = useState(0)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Scroll progress
      const total = document.body.scrollHeight - window.innerHeight
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0)

      // Active section
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-b border-border shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center shadow-soft">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-600 text-gray-900 text-sm leading-none">Dr. Esknder</div>
                <div className="font-mono text-[9px] text-teal tracking-widest uppercase mt-0.5">Physiotherapist</div>
              </div>
            </motion.button>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.slice(0, -1).map(link => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative px-3.5 py-2 rounded-lg font-body text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-navy font-500'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden lg:inline-flex items-center bg-navy text-white px-5 py-2.5 rounded-xl font-body text-sm font-500 shadow-soft hover:shadow-hover transition-shadow duration-200"
              >
                Book Consultation
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        {scrollPct > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-navy to-teal"
              style={{ width: `${scrollPct}%` }}
            />
          </div>
        )}
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/25 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 bg-white border-b border-border shadow-hover pt-20 pb-6 px-6"
            >
              <nav className="flex flex-col gap-1 mb-4">
                {navLinks.map(link => {
                  const isActive = activeSection === link.href.replace('#', '')
                  return (
                    <button
                      key={link.label}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-3 rounded-xl font-body text-sm transition-all ${
                        isActive
                          ? 'bg-navy/5 text-navy font-500'
                          : 'text-gray-700 hover:bg-surface'
                      }`}
                    >
                      {link.label}
                    </button>
                  )
                })}
              </nav>
              <motion.button
                onClick={() => scrollTo('#contact')}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-navy text-white rounded-xl py-3.5 font-body font-500 text-sm shadow-soft"
              >
                Book Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}