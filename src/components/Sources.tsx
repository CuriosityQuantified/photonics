import { SOURCES, SOURCE_IDS, sourceNum } from '../data/sources'
import { Section, SectionTitle, Reveal } from './primitives'

export default function Sources() {
  return (
    <Section id="sources">
      <SectionTitle
        kicker="Sources"
        color="#64748b"
        title={<>Every figure, <span className="spectrum-text">traced</span></>}
        subtitle="The full reference list. Each [n] marker throughout the page links to one of these — click any line to open the original. Numbers match the in-line citations above."
      />

      <Reveal delay={0.08} className="mt-10">
        <ol className="grid gap-2 sm:grid-cols-2">
          {SOURCE_IDS.map((id) => {
            const s = SOURCES[id]
            return (
              <li key={id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-cyan-400/30 hover:bg-white/[0.04]"
                >
                  <span className="mt-0.5 font-mono text-xs font-bold text-cyan-400/70">
                    [{sourceNum(id)}]
                  </span>
                  <span className="min-w-0">
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white">{s.pub}</span>
                    {s.date && <span className="ml-2 font-mono text-[10px] text-slate-500">{s.date}</span>}
                    <span className="block text-[13px] leading-snug text-slate-400">{s.title}</span>
                    <span className="mt-0.5 block truncate font-mono text-[10px] text-slate-600 group-hover:text-cyan-400/60">
                      {s.url.replace(/^https?:\/\//, '')}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ol>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-slate-500">
          Provenance note: these are the upstream publications behind the researched conversation that seeded this
          piece. Each URL was located against the named publisher; market-research figures (Mordor, Precedence,
          Fortune Business Insights, Future Markets, IDTechEx, Yole) are forecasts and disagree by design — the spread
          is itself part of the story. Vendor and company timelines (Nvidia, Xanadu, PsiQuantum, Lightmatter, Q.ANT,
          Marvell) are self-reported targets; read them as hope, not committed roadmap.
        </p>
      </Reveal>
    </Section>
  )
}
