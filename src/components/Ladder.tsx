import { motion } from 'framer-motion'
import { RUNGS } from '../data/photonics'
import { Section, SectionTitle, Reveal, Pill, Cite } from './primitives'

const MATURITY_LABEL: Record<string, string> = {
  mature: 'Mature',
  commercializing: 'Commercializing',
  early: 'Early commercial',
  'pre-commercial': 'Pre-commercial',
  research: 'Research',
}

function MaturityMeter({ level, color }: { level: string; color: string }) {
  const order = ['research', 'pre-commercial', 'early', 'commercializing', 'mature']
  const filled = order.indexOf(level) + 1
  return (
    <div className="flex items-center gap-1.5">
      {order.map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-5 rounded-full"
          style={{ background: i < filled ? color : 'rgba(255,255,255,0.1)' }}
        />
      ))}
    </div>
  )
}

export default function Ladder() {
  return (
    <Section id="ladder">
      <SectionTitle
        kicker="2 · The maturity ladder"
        color="#06b6d4"
        title={<>Six rungs, from <span className="text-emerald-400">deployed</span> to <span className="text-rose-400">lab-bound</span></>}
        subtitle="Ordered by maturity — the single most useful way to read the whole field. Where vendor hype outruns reality, it's flagged."
      />

      <div className="relative mt-14">
        {/* vertical spectrum rail */}
        <div className="absolute left-[26px] top-2 bottom-2 w-[3px] rounded-full spectrum-bar opacity-60 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-6">
          {RUNGS.map((r, i) => (
            <Reveal key={r.id} delay={0.04 * i}>
              <div className={`relative flex flex-col gap-4 md:flex-row md:items-stretch ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                {/* node */}
                <div className="absolute left-0 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl text-xl font-black"
                    style={{ background: `${r.color}1f`, color: r.color, border: `2px solid ${r.color}`, boxShadow: `0 0 30px -6px ${r.color}` }}
                  >
                    {r.letter}
                  </motion.div>
                </div>

                {/* spacer for the rail on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* card */}
                <div className="ml-[74px] md:ml-0 md:w-1/2">
                  <div
                    className={`glass-strong rounded-2xl p-6 ${i % 2 ? 'md:mr-[46px]' : 'md:ml-[46px]'}`}
                    style={{ borderColor: `${r.color}40` }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-white">{r.title}</h3>
                      <Pill color={r.color}>{MATURITY_LABEL[r.maturity]}</Pill>
                    </div>
                    <p className="mt-1 text-sm font-medium" style={{ color: r.color }}>{r.tag}</p>

                    <div className="my-4"><MaturityMeter level={r.maturity} color={r.color} /></div>

                    <p className="text-sm leading-relaxed text-slate-300">{r.blurb}</p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-black/30 p-3">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Status now (2026)</div>
                        <div className="mt-1 text-sm font-semibold text-slate-100">{r.status}</div>
                      </div>
                      <div className="rounded-xl bg-black/30 p-3">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Realistic window</div>
                        <div className="mt-1 text-sm font-semibold" style={{ color: r.color }}>{r.window}</div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {r.facts.map((f, k) => (
                        <li key={k} className="flex gap-2 text-[13px] leading-relaxed text-slate-400">
                          <span style={{ color: r.color }}>▸</span>
                          <span>{f.t}<Cite ids={f.s} /></span>
                        </li>
                      ))}
                    </ul>

                    {r.players && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Players</span>
                        {r.players.map((p) => (
                          <span key={p} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">{p}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
