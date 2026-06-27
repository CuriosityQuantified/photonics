import { motion } from 'framer-motion'
import { TIMELINE, TIMELINE_START, TIMELINE_END } from '../data/photonics'
import { Section, SectionTitle, Reveal } from './primitives'

const SPAN = TIMELINE_END - TIMELINE_START
const pct = (y: number) => ((y - TIMELINE_START) / SPAN) * 100
const years = Array.from({ length: SPAN + 1 }, (_, i) => TIMELINE_START + i)

export default function Timeline() {
  return (
    <Section id="timeline">
      <SectionTitle
        kicker="5 · Consolidated timeline"
        color="#f59e0b"
        title={<>When each rung <span className="spectrum-text">actually</span> arrives</>}
        subtitle={
          <>
            Solid bars are committed / shipping windows; faded tails are optimistic, vendor-influenced hopes. Company-stated
            targets in this space have historically slipped — read the tails with suspicion.
          </>
        }
      />

      <Reveal delay={0.1} className="mt-12 glass-strong overflow-hidden rounded-3xl p-5 sm:p-8">
        {/* year axis */}
        <div className="relative mb-6 ml-0 sm:ml-[210px]">
          <div className="flex justify-between font-mono text-[11px] text-slate-500">
            {years.map((y) => (
              <span key={y} className={y % 1 === 0 ? '' : 'hidden'}>{y}</span>
            ))}
          </div>
          <div className="mt-2 h-px w-full bg-white/10" />
          {/* "now" marker at 2026 */}
          <div className="absolute -top-1 bottom-0 hidden sm:block" style={{ left: `${pct(2026)}%` }}>
            <div className="h-full w-px bg-cyan-400/50" />
            <span className="absolute -top-5 -translate-x-1/2 font-mono text-[10px] text-cyan-300">now</span>
          </div>
        </div>

        <div className="space-y-5">
          {TIMELINE.map((t, i) => (
            <div key={t.name} className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 sm:w-[210px] sm:shrink-0">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: t.color }} />
                <span className="text-sm font-semibold text-slate-200">{t.name}</span>
              </div>

              <div className="relative h-9 flex-1 rounded-lg bg-white/[0.03]">
                {/* faded (optimistic) extent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct(t.fadeEnd) - pct(t.start)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.05 * i, ease: 'easeOut' }}
                  className="absolute top-0 h-full rounded-lg"
                  style={{
                    left: `${pct(t.start)}%`,
                    background: `repeating-linear-gradient(90deg, ${t.color}22, ${t.color}22 6px, transparent 6px, transparent 12px)`,
                    border: `1px dashed ${t.color}55`,
                  }}
                />
                {/* solid (committed) extent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct(t.solidEnd) - pct(t.start)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.05 * i, ease: 'easeOut' }}
                  className="absolute top-0 flex h-full items-center rounded-lg px-3"
                  style={{ left: `${pct(t.start)}%`, background: `linear-gradient(90deg, ${t.color}, ${t.color}cc)` }}
                >
                  <span className="truncate font-mono text-[10px] font-semibold text-black/80">{t.label}</span>
                </motion.div>
                {/* milestones */}
                {t.milestones.map((m) => (
                  <div key={m.year} className="absolute top-0 h-full" style={{ left: `${pct(m.year)}%` }}>
                    <div className="h-full w-px bg-white/50" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-5 border-t border-white/10 pt-4 font-mono text-[11px] text-slate-500">
          <span className="flex items-center gap-2"><span className="h-2.5 w-6 rounded bg-slate-400" /> committed / shipping</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-6 rounded border border-dashed border-slate-500" /> optimistic / uncertain</span>
        </div>
      </Reveal>
    </Section>
  )
}
