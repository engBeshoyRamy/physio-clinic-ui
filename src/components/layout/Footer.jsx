import { Activity, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { navLinks, doctorInfo } from '../../data/data'

export function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-600 text-white text-sm leading-none">{doctorInfo.name}</div>
                <div className="font-mono text-[10px] text-teal-400 tracking-wider mt-0.5">Physiotherapist</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Evidence-based physiotherapy combining movement science with clinical excellence — restoring function and empowering lives.
            </p>

            {/* ✅ Social links with real URLs */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19wtoqaebK/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/esknderzakaria?igsh=MXNjYWxlMXE1ZG5hbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* ✅ LinkedIn — replaced TikTok */}
              <a
                href="https://www.linkedin.com/in/esknder-zakaria-4563a01a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-700 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-500 text-white text-sm mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-500 text-white text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>{doctorInfo.location}</span>
              </li>
              <li>
                <a
                  href={`tel:${doctorInfo.phone}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {doctorInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${doctorInfo.email}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {doctorInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-body">
            © {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono">
            Orthopedic Physiotherapy · KCMT · Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}