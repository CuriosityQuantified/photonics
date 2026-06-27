import { REACH } from '../data/photonics'
import { Section, SectionTitle, Reveal } from './primitives'

const TONE: Record<string, { c: string; label: string }> = {
  optics: { c: '#22c55e', label: 'optics today' },
  frontier: { c: '#06b6d4', label: 'frontier (CPO)' },
  future: { c: '#a78bfa', label: 'future' },
}

export default function ReachSpectrum() {
  return (
    <Section id="reach">
      <SectionTitle
        kicker="3 · The reach spectrum"
        color="#22c55e"
        title={<>Optics is marching <span className="spectrum-text">inward</span></>}
        subtitle={
          <>
            Fiber isn't only for long distances — it already runs inside the system via pluggables. The real story is a
            reach-based handoff: as data rates climb, optics keeps displacing copper, step by step, toward the chip.
          </>
        }
      />

      <Reveal delay={0.1} className="mt-12">
        <div className="grid gap-3 md:grid-cols-5">
          {REACH.map((r, i) => {
            const t = TONE[r.medium] ?? TONE.future
            return (
              <div key={r.name} className="relative">
                <div
                  className="flex h-full flex-col rounded-2xl border p-5"
                  style={{ borderColor: `${t.c}40`, background: `linear-gradient(180deg, ${t.c}14, transparent)` }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: t.c }}>
                    {String(i + 1).padStart(2, '0')} · {t.label}
                  </div>
                  <h3 className="mt-2 text-base font-bold text-white">{r.name}</h3>
                  <div className="font-mono text-[11px] text-slate-500">{r.sub}</div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">{r.note}</p>
                </div>
                {i < REACH.length - 1 && (
                  <div className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-slate-600 md:block">→</div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl bg-black/30 p-4">
          <span className="font-mono text-xs text-amber-400">⚠ copper isn't dead</span>
          <span className="text-sm text-slate-400">
            For the shortest, cheapest hops copper still wins. Optics displaces it only where reach or bandwidth demands —
            a moving handoff line, not a clean replacement.
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
