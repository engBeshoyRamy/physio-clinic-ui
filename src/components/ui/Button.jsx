import { motion } from 'framer-motion'
import clsx from 'clsx'

export function Button({ children, variant = 'primary', size = 'md', href, onClick, className, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-body font-500 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none'

  const variants = {
    primary: 'bg-navy text-white hover:bg-navy-700 focus:ring-navy/40 shadow-soft hover:shadow-hover active:scale-[0.98]',
    secondary: 'bg-transparent text-navy border border-navy/20 hover:bg-navy/5 hover:border-navy/40 focus:ring-navy/20',
    teal: 'bg-teal text-white hover:bg-teal-600 focus:ring-teal/40 shadow-soft hover:shadow-hover active:scale-[0.98]',
    ghost: 'bg-transparent text-gray-600 hover:text-navy hover:bg-navy/5 focus:ring-navy/20',
    outline: 'bg-white text-navy border border-border hover:border-navy/30 hover:shadow-soft focus:ring-navy/20',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-[15px]',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  const classes = clsx(base, variants[variant], sizes[size], className)

  const MotionTag = href ? motion.a : motion.button

  return (
    <MotionTag
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: variant === 'primary' || variant === 'teal' ? 1.02 : 1 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}