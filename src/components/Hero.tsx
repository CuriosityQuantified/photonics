import { motion } from 'framer-motion'
import { ElectronVsPhoton } from './Visuals'
import { Pill, Cite } from './primitives'

function PhotonField() {
  // animated background streams of light
  const lines = Array.from({ length: 7 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-[40%]"
          style={{
            top: `${10 + i * 12}%`,
            left: '-40%',
            background: `linear-gradient(90deg, transparent, ${['#7c3aed', '#2563eb', '#06b6d4', '#22c55e', '#f59e0b', '#06b6d4', '#7c3aed'][i]}, transparent)`,
          }}
          animate={{ left: ['-40%', '120%'] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear', delay: i * 0.8 }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <header className="relative grid-bg min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5), rgba(124,58,237,0.25), transparent 70%)' }}
      />
      <PhotonField />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Pill color="#7c3aed">A visual field guide</Pill>
          <Pill color="#06b6d4">2026 snapshot</Pill>
          <Pill color="#22c55e">hype vs. reality flagged</Pill>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="spectrum-text">PHOTONICS</span>
          <br />
          <span className="text-slate-100">light, put to work</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          "Photonics" is not one thing. It bundles products deployed at scale for{' '}
          <span className="font-semibold text-white">40 years</span> (fiber comms) with technology still
          stuck in the lab (optical computing, quantum). The single most useful mental model is a{' '}
          <span className="font-semibold text-cyan-300">maturity ladder</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 glass-strong rounded-3xl p-6 sm:p-8"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
            The core advantage is physical<Cite ids={['photondelta']} />
          </div>
          <ElectronVsPhoton />
        </motion.div>

        <motion.a
          href="#ladder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 inline-flex w-fit items-center gap-2 font-mono text-sm text-slate-400 transition hover:text-cyan-300"
        >
          climb the ladder ↓
        </motion.a>
      </div>
    </header>
  )
}
