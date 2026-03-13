import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, CheckCircle, User, MessageSquare, Smartphone } from 'lucide-react'
import { useScrollAnimation, slideInLeftVariants, slideInRightVariants } from '../../hooks/useScrollAnimation'
import { SectionHeader } from '../ui/SectionHeader'
import { doctorInfo } from '../../data/data'

const WHATSAPP_NUMBER = '201281705300'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: doctorInfo.location, href: null },
  { icon: Phone,  label: 'Phone',    value: doctorInfo.phone,    href: `tel:${doctorInfo.phone}` },
  { icon: Mail,   label: 'Email',    value: doctorInfo.email,    href: `mailto:${doctorInfo.email}` },
]

const socials = [
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/share/19wtoqaebK/',                                                       hover: 'hover:bg-blue-600' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/esknderzakaria?igsh=MXNjYWxlMXE1ZG5hbQ==',                               hover: 'hover:bg-pink-600' },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/esknder-zakaria-4563a01a0',                                             hover: 'hover:bg-blue-700' },
]

const concerns = [
  'Back & Spine Pain',
  'Knee & Hip Pain',
  'Shoulder & Neck',
  'Post-Surgery Rehab',
  'Sports Injury',
  'Neurological Rehab',
  'Other',
]

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function InputField({ label, icon: Icon, required, children, error }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 font-body text-xs font-500 text-gray-600 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-navy/50" />
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1 font-body"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', concern: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const { ref: leftRef,  inView: leftInView  } = useScrollAnimation({ threshold: 0.1 })
  const { ref: rightRef, inView: rightInView } = useScrollAnimation({ threshold: 0.1 })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Please enter your name'
    if (!form.phone.trim())   e.phone   = 'Please enter your phone number'
    if (!form.message.trim()) e.message = 'Please describe your condition'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    const concern = form.concern ? `🏥 Concern: ${form.concern}\n` : ''
    const text =
`Hello Dr. Esknder! 👋

*New Consultation Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
${concern}
📝 Condition:
${form.message}

_Sent from your website_`

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  const handleReset = () => {
    setSent(false)
    setForm({ name: '', phone: '', concern: '', message: '' })
    setErrors({})
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/3 via-transparent to-teal/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-radial from-navy/4 to-transparent blur-3xl" />

      <div className="container-max relative">
        <div className="text-center mb-16">
          <SectionHeader
            eyebrow="Contact"
            title={<>Begin your<br /><span className="gradient-text italic">recovery journey</span></>}
            subtitle="Ready to restore movement and eliminate pain? Book a consultation or reach out directly."
            center
          />
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-10">

          {/* ── Left ── */}
          <motion.div ref={leftRef} initial="hidden" animate={leftInView ? 'visible' : 'hidden'} variants={slideInLeftVariants}>
            <div className="bg-gradient-to-br from-navy to-teal/80 rounded-3xl p-8 text-white shadow-hover mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-20" />
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-white/10 border border-white/20" />
              <div className="relative">
                <h3 className="font-display font-600 text-2xl mb-1">Get in touch</h3>
                <p className="font-body text-white/70 text-sm mb-8">Available for home visits & clinic appointments across 10th of Ramadan City.</p>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-white/50 uppercase tracking-wider mb-0.5">{label}</div>
                        {href
                          ? <a href={href} className="font-body text-sm text-white hover:text-white/80 transition-colors">{value}</a>
                          : <p className="font-body text-sm text-white">{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/15 my-8" />
                <div>
                  <div className="font-mono text-[10px] text-white/50 uppercase tracking-wider mb-3">Follow on social</div>
                  <div className="flex items-center gap-2">
                    {socials.map(({ icon: Icon, label, href, hover }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className={`w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white/70 hover:text-white ${hover} transition-all duration-200`}>
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-soft flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <div className="font-body font-600 text-gray-900 text-sm">Currently Accepting Patients</div>
                <div className="font-body text-xs text-gray-500">Home visits & clinic sessions available</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right — Form ── */}
          <motion.div ref={rightRef} initial="hidden" animate={rightInView ? 'visible' : 'hidden'} variants={slideInRightVariants}>
            <div className="bg-white border border-border rounded-3xl p-8 shadow-card">
              <AnimatePresence mode="wait">

                {/* SUCCESS */}
                {sent ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="font-display font-600 text-gray-900 text-2xl mb-2">WhatsApp opened!</h3>
                    <p className="font-body text-gray-500 text-sm max-w-xs mb-2">
                      Your message is pre-filled. Just press <span className="font-600 text-emerald-600">Send</span> in WhatsApp to reach Dr. Esknder.
                    </p>
                    <p className="font-mono text-xs text-gray-400 mb-8">
                      Didn't open?{' '}
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                        className="text-emerald-500 underline">Click here</a>
                    </p>
                    <button onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl border border-border text-gray-600 font-body text-sm hover:bg-surface transition-all">
                      Send another message
                    </button>
                  </motion.div>

                ) : (

                  /* FORM */
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5" noValidate>

                    {/* Header */}
                    <div className="pb-4 border-b border-border">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                          <WhatsAppIcon />
                        </div>
                        <div>
                          <h3 className="font-display font-600 text-gray-900 text-xl leading-none">Book a Consultation</h3>
                          <p className="font-mono text-[10px] text-gray-400 tracking-wider mt-0.5">VIA WHATSAPP · INSTANT REPLY</p>
                        </div>
                      </div>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <InputField label="Full Name" icon={User} required error={errors.name}>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="e.g. Ahmed Mohamed"
                          className={`w-full px-4 py-3 rounded-xl border bg-surface text-gray-800 font-body text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200 ${errors.name ? 'border-red-300 bg-red-50/30' : 'border-border'}`} />
                      </InputField>

                      <InputField label="Phone Number" icon={Smartphone} required error={errors.phone}>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="e.g. 01012345678"
                          className={`w-full px-4 py-3 rounded-xl border bg-surface text-gray-800 font-body text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200 ${errors.phone ? 'border-red-300 bg-red-50/30' : 'border-border'}`} />
                      </InputField>
                    </div>

                    {/* Concern chips */}
                    <InputField label="Main Concern" icon={MessageSquare}>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {concerns.map((c) => (
                          <button key={c} type="button"
                            onClick={() => setForm((prev) => ({ ...prev, concern: prev.concern === c ? '' : c }))}
                            className={`px-3 py-1.5 rounded-lg font-body text-xs font-400 border transition-all duration-150 ${
                              form.concern === c
                                ? 'bg-navy text-white border-navy shadow-soft'
                                : 'bg-surface text-gray-600 border-border hover:border-navy/30 hover:text-navy'
                            }`}>
                            {c}
                          </button>
                        ))}
                      </div>
                    </InputField>

                    {/* Message */}
                    <InputField label="Describe Your Condition" icon={MessageSquare} required error={errors.message}>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="Tell Dr. Esknder about your pain, how long you've had it, and what you've tried so far..."
                        className={`w-full px-4 py-3 rounded-xl border bg-surface text-gray-800 font-body text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200 resize-none ${errors.message ? 'border-red-300 bg-red-50/30' : 'border-border'}`} />
                    </InputField>

                    {/* Submit */}
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      className="w-full inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-body font-600 text-base shadow-soft hover:shadow-hover transition-all duration-200 cursor-pointer">
                      <WhatsAppIcon />
                      Send via WhatsApp
                    </motion.button>

                    <p className="font-body text-xs text-gray-400 text-center">
                      Opens WhatsApp with your message pre-filled — just tap Send to reach Dr. Esknder.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}