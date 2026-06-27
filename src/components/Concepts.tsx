import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CONCEPTS, LASER_STRATEGIES } from '../data/photonics'
import { Section, SectionTitle, Reveal, Cite } from './primitives'

const DEPTHS = [
  { key: 'eli5', label: 'ELI5', color: '#22c55e' },
  { key: 'inter', label: 'Intermediate', color: '#06b6d4' },
  { key: 'adv', label: 'Advanced', color: '#a78bfa' },
] as const

type DepthKey = (typeof DEPTHS)[number]['key']

function ConceptCard({ c }: { c: (typeof CONCEPTS)[number] }) {
  const [depth, setDepth] = useState<DepthKey>('eli5')
  const active = DEPTHS.find((d) => d.key === depth)!
  return (
    <div className="glass-strong flex h-full flex-col rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white">{c.q}</h3>
      <div className="mt-4 flex gap-1 rounded-xl bg-black/30 p-1">
        {DEPTHS.map((d) => (
          <button
            key={d.key}
            onClick={() => setDepth(d.key)}
            className="flex-1 rounded-lg px-2 py-1.5 font-mono text-[11px] font-semibold transition"
            style={
              depth === d.key
                ? { background: `${d.color}22`, color: d.color, border: `1px solid ${d.color}55` }
                : { color: '#64748b' }
            }
          >
            {d.label}
          </button>
        ))}
      </div>
      <div className="mt-4 min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={depth}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed text-slate-300"
            style={{ borderLeft: `2px solid ${active.color}`, paddingLeft: 14 }}
          >
            {c[depth]}
          </motion.p>
        </AnimatePresence>
      </div>
      {c.s && c.s.length > 0 && (
        <div className="mt-3 border-t border-white/5 pt-2 font-mono text-[10px] text-slate-500">
          source<Cite ids={c.s} />
        </div>
      )}
    </div>
  )
}

export default function Concepts() {
  return (
    <Section id="concepts">
      <SectionTitle
        kicker="8 · Foundations, three ways"
        color="#a78bfa"
        title={<>The tricky bits, at <span className="spectrum-text">three depths</span></>}
        subtitle="Tap a depth — beginner, intermediate, or advanced — on any card. The same idea, dialed to the level you want."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {CONCEPTS.map((c, i) => (
          <Reveal key={c.id} delay={0.08 * i}>
            <ConceptCard c={c} />
          </Reveal>
        ))}
      </div>

      {/* laser integration ladder */}
      <Reveal delay={0.1} className="mt-12">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold text-white">Putting the laser on silicon</h3>
            <span className="font-mono text-xs text-slate-500">4 strategies · increasing intimacy →</span>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Because III-V material is foreign to a CMOS line, marrying the laser to silicon is the field's hard part — a
            spectrum of approaches trading cost, scalability, performance and heat.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {LASER_STRATEGIES.map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="font-mono text-3xl font-black text-violet-400/40">0{s.n}</div>
                <div className="mt-1 text-sm font-bold text-white">{s.name}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.desc}<Cite ids={s.s} /></p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
