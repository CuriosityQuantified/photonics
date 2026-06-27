import { PIPELINE } from '../data/photonics'
import { ChipPipeline, WaveguideCrossSection, COMPONENT_ICON } from './Visuals'
import { Section, SectionTitle, Reveal, Pill } from './primitives'

export default function HowItWorks() {
  return (
    <Section id="how">
      <SectionTitle
        kicker="1 · The physics"
        color="#2563eb"
        title={<>Three jobs, one <span className="spectrum-text">light source</span></>}
        subtitle={
          <>
            Electronics pushes electrons through copper; photonics sends photons through glass or silicon.
            Almost every device in the field is just a different arrangement of the same four building blocks.
          </>
        }
      />

      <Reveal delay={0.1} className="mt-12 glass-strong rounded-3xl p-6 sm:p-10">
        <ChipPipeline />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PIPELINE.map((b, i) => {
          const Icon = COMPONENT_ICON[b.id]
          return (
            <Reveal key={b.id} delay={0.06 * i}>
              <div className="glass flex h-full flex-col rounded-2xl p-5" style={{ ['--glow' as string]: `${b.color}66` }}>
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl font-mono text-sm font-bold"
                    style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}55` }}
                  >
                    {b.step}
                  </span>
                  <Pill color={b.color}>{b.role}</Pill>
                </div>
                {/* realistic component illustration */}
                <div
                  className="mb-3 h-24 w-full rounded-xl bg-black/30 p-2"
                  style={{ border: `1px solid ${b.color}22` }}
                >
                  {Icon && <Icon />}
                </div>
                <h3 className="text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{b.detail}</p>
                {b.spec && (
                  <div className="mt-3 rounded-lg bg-black/30 px-3 py-2 font-mono text-[11px]" style={{ color: b.color }}>
                    {b.spec}
                  </div>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Waveguide deep-dive + the silicon weakness */}
      <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <WaveguideCrossSection />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="text-2xl font-bold text-white">Why silicon needs a foreign light source</h3>
          <p className="mt-4 leading-relaxed text-slate-300">
            Light stays inside a waveguide because of <span className="font-semibold text-cyan-300">refractive-index contrast</span> —
            silicon (n ≈ 3.5) bends light far more strongly than its silicon-dioxide cladding (n ≈ 1.45), confining the mode
            tightly enough to bend around tiny radii.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            But silicon has an <span className="font-semibold text-violet-300">indirect bandgap</span>, making it a terrible light
            emitter. So the laser must be built from <span className="font-semibold text-white">III-V semiconductors</span> (indium
            phosphide, gallium arsenide) and married to the chip — the one piece that <em>isn't</em> CMOS-native, and the field's
            hardest engineering problem.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Pill color="#a78bfa">indirect bandgap → poor emitter</Pill>
            <Pill color="#22d3ee">SOI: low-loss + CMOS-compatible</Pill>
            <Pill color="#22c55e">detectors: Ge-on-Si</Pill>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
