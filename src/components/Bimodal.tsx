import { BIMODAL } from '../data/photonics'
import { Section, SectionTitle, Reveal, Cite } from './primitives'

const TONE: Record<string, { c: string; ring: string }> = {
  good: { c: '#22c55e', ring: 'rgba(34,197,94,0.35)' },
  ok: { c: '#06b6d4', ring: 'rgba(6,182,212,0.35)' },
  warn: { c: '#f59e0b', ring: 'rgba(245,158,11,0.35)' },
  far: { c: '#ef4444', ring: 'rgba(239,68,68,0.35)' },
}

export default function Bimodal() {
  return (
    <Section id="bimodal">
      <SectionTitle
        kicker="7 · The naming trap"
        color="#f59e0b"
        title={<>"Photonic compute" is <span className="spectrum-text">bimodal</span></>}
        subtitle={
          <>
            The single biggest thing to hold onto: don't file photonic compute as one 2030s bucket. It's a
            niche-already-real technology with a highly uncertain path to mattering at scale — and the date you attach
            depends entirely on which version you mean.
          </>
        }
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {BIMODAL.map((b, i) => {
          const t = TONE[b.tone]
          return (
            <Reveal key={b.label} delay={0.07 * i}>
              <div
                className="flex h-full flex-col rounded-2xl border p-6"
                style={{ borderColor: t.ring, background: `linear-gradient(180deg, ${t.c}12, transparent)` }}
              >
                <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: t.c }}>{b.status}</div>
                <h3 className="mt-2 text-base font-bold leading-snug text-white">{b.label}</h3>
                <div className="mt-auto pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Window</div>
                  <div className="mt-1 text-sm font-semibold text-slate-200">{b.window}<Cite ids={b.s} /></div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1} className="mt-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="glass rounded-2xl p-5">
            <div className="text-sm font-bold text-amber-300">Shipping today, narrow</div>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Q.ANT runs at <span className="font-bold text-white">30W</span> against Nvidia GPUs at 700–1,000W — but these are
              analog accelerators for specific workloads, not general-purpose.<Cite ids={['jonpeddie']} />
            </p>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-sm font-bold text-rose-300">GPU-class is genuinely distant</div>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Hard blockers remain unsolved: optical nonlinearity (activation functions), memory, and the fact that much
              "photonic compute" revenue is actually interconnect.<Cite ids={['spieOptical']} />
            </p>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-sm font-bold text-cyan-300">Same name, different product</div>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              ~6 companies pursue photonic compute; 10+ pursue photonic interconnect. The two{' '}
              <span className="font-bold text-white">share a name but not a product.</span><Cite ids={['jonpeddie']} />
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
