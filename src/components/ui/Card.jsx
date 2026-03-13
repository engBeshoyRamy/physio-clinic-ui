import { motion } from 'framer-motion'
import clsx from 'clsx'

export function Card({ children, className, hover = true, glass = false, ...props }) {
  return (
    <motion.div
      className={clsx(
        'rounded-2xl border border-border',
        glass ? 'bg-white/70 backdrop-blur-sm' : 'bg-card',
        hover && 'card-hover',
        'shadow-card',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}