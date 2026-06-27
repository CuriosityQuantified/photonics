import { Section, SectionTitle, Reveal, Pill } from './primitives'

const CORRECTIONS = [
  {
    wrong: 'Fiber is only for long distances; pluggables are a separate in-system thing.',
    right: 'Fiber already runs inside the system — pluggables convert electricity to light that travels over fiber to a switch meters away. Same world, different reach.',
  },
  {
    wrong: 'A pluggable is just the light source plugged into the board.',
    right: 'A pluggable is a complete electrical↔optical transceiver: laser + modulator + photodetector + electronics. The laser is one component inside it.',
  },
  {
    wrong: 'In CPO, the laser moves next to the processor.',
    right: 'The optical engine (modulators + detectors) moves beside the ASIC. The heat-sensitive laser usually stays external — "laser disaggregation."',
  },
  {
    wrong: "Pluggables are inefficient because they're hot from being far away.",
    right: 'The penalty is the long copper path driving high-speed SerDes signals — a hard ceiling: shoreline limits leave conventional interconnects short of 2027–28 needs (>50 Tbps).',
  },
]

export default function Corrections() {
  return (
    <Section id="model">
      <SectionTitle
        kicker="9 · The corrected mental model"
        color="#22c55e"
        title={<>Four corrections worth <span className="spectrum-text">internalizing</span></>}
        subtitle="Common-but-wrong framings, paired with the precise version. These are the slips that trip up almost everyone."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {CORRECTIONS.map((c, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Pill color="#ef4444">imprecise</Pill>
                <p className="text-sm leading-relaxed text-slate-400 line-through decoration-rose-500/40">{c.wrong}</p>
              </div>
              <div className="my-3 ml-1 h-4 w-px bg-white/15" />
              <div className="flex items-start gap-3">
                <Pill color="#22c55e">precise</Pill>
                <p className="text-sm leading-relaxed text-slate-200">{c.right}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* one-sentence summary */}
      <Reveal delay={0.1} className="mt-10">
        <div
          className="rounded-3xl border p-8 sm:p-10"
          style={{ borderColor: 'rgba(56,189,248,0.3)', background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))' }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">The whole model, in one sentence</div>
          <p className="mt-4 text-lg leading-relaxed text-slate-100 sm:text-2xl">
            Optics already runs inside the system via <span className="font-bold text-cyan-300">pluggable transceivers over fiber</span>;
            co-packaged optics is the next step that brings the <span className="font-bold text-white">optical conversion engine</span> next
            to the processor while usually keeping the <span className="font-bold text-violet-300">laser external</span> for heat reasons;
            nearly all of it is <span className="font-bold text-emerald-300">CMOS-compatible except the laser</span>; and this is the mature
            networking/interconnect side — including a growing optics-to-memory branch — while{' '}
            <span className="font-bold text-amber-300">photonic compute is earlier, bimodal, and mostly further out.</span>
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
