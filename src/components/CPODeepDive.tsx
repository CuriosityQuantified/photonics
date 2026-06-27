import { CPO_PARTS } from '../data/photonics'
import { CPODiagram, CPO_PART_ICON } from './Visuals'
import { Section, SectionTitle, Reveal, Pill } from './primitives'

export default function CPODeepDive() {
  return (
    <Section id="cpo">
      <SectionTitle
        kicker="4 · The AI-interconnect frontier"
        color="#06b6d4"
        title={<>Co-packaged optics, <span className="spectrum-text">unpacked</span></>}
        subtitle={
          <>
            The hottest commercial area — and the most relevant to AI infrastructure. Copper links between AI chips are
            hitting power and bandwidth walls. CPO moves the optical conversion engine right next to the processor.
          </>
        }
      />

      <Reveal delay={0.1} className="mt-12">
        <CPODiagram />
      </Reveal>

      {/* component glossary */}
      <Reveal delay={0.15} className="mt-10">
        <h3 className="mb-4 text-lg font-bold text-white">The components, one by one</h3>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CPO_PARTS.map((p) => {
            const Icon = CPO_PART_ICON[p.name]
            return (
              <div key={p.name} className="glass rounded-2xl p-5">
                <div className="mb-3 h-20 w-full rounded-xl bg-black/30 p-2" style={{ border: '1px solid rgba(34,211,238,0.15)' }}>
                  {Icon && <Icon />}
                </div>
                <div className="text-base font-bold text-cyan-300">{p.name}</div>
                <div className="mt-0.5 font-mono text-[11px] text-slate-500">{p.full}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.eli5}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{p.detail}</p>
              </div>
            )
          })}
        </div>
      </Reveal>

      {/* the trade-off */}
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <div className="h-full rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <Pill color="#22c55e">the win</Pill>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The electrical path shrinks from board-length to millimetres. Nvidia claims{' '}
              <span className="font-bold text-emerald-300">3.5× power efficiency</span>, 63× signal integrity and 10× resiliency.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
            <Pill color="#f59e0b">the trade</Pill>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Modularity for efficiency. Pluggables win on serviceability — swap a dead module in seconds. CPO is harder to
              field-replace and packs heat-sensitive optics next to a very hot ASIC.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="h-full rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6">
            <Pill color="#a78bfa">reality check</Pill>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              CPO has been "two years away" for a decade. Deployment-ready products only arrived in{' '}
              <span className="font-bold text-violet-200">2025</span>; analysts model the pilot→volume ramp across 2026–2028.
              Real and shipping — but the volume ramp is still ahead.
            </p>
          </div>
        </Reveal>
      </div>

      {/* optics-to-memory branch */}
      <Reveal delay={0.1} className="mt-8">
        <div className="glass-strong flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-300">+ a third vector · optics-to-memory</div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
              Photonics is also becoming the high-bandwidth link to disaggregated memory pools. Celestial AI's photonic
              memory module reported energy far below electrical equivalents.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-xl bg-black/40 px-4 py-3 text-center">
              <div className="text-2xl font-black text-emerald-300 tabular">6.2</div>
              <div className="font-mono text-[10px] text-slate-500">pJ/bit · photonic</div>
            </div>
            <div className="flex items-center text-slate-600">vs</div>
            <div className="rounded-xl bg-black/40 px-4 py-3 text-center">
              <div className="text-2xl font-black text-amber-300 tabular">62.5</div>
              <div className="font-mono text-[10px] text-slate-500">pJ/bit · NVLink</div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
