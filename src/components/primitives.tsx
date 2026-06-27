import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {children}
    </section>
  )
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Kicker({ children, color = '#06b6d4' }: { children: ReactNode; color?: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 12px ${color}` }} />
      <span className="font-mono text-xs uppercase tracking-[0.28em]" style={{ color }}>
        {children}
      </span>
    </div>
  )
}

export function SectionTitle({
  kicker,
  title,
  subtitle,
  color,
}: {
  kicker: string
  title: ReactNode
  subtitle?: ReactNode
  color?: string
}) {
  return (
    <Reveal>
      <Kicker color={color}>{kicker}</Kicker>
      <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}

export function Pill({ children, color = '#06b6d4' }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium"
      style={{ background: `${color}1a`, color, border: `1px solid ${color}33` }}
    >
      {children}
    </span>
  )
}
