import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { MARKET, MARKET_STATS } from '../data/photonics'
import { Section, SectionTitle, Reveal, Cite } from './primitives'

export default function Market() {
  return (
    <Section id="market">
      <SectionTitle
        kicker="6 · Market size"
        color="#7c3aed"
        title={<>The forecast <span className="spectrum-text">disagreement</span> is the signal</>}
        subtitle={
          <>
            Treat the numbers skeptically — analyst firms disagree by a lot, which tells you the forecasting is soft.
            Everyone agrees the silicon-photonics market grows fast; nobody agrees how fast.
          </>
        }
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="glass-strong rounded-3xl p-5 sm:p-7">
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-400">
            Silicon-photonics market · USD billions (low–high estimate band)
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MARKET} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="low" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="year" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} unit="B" />
                <Tooltip
                  contentStyle={{ background: '#0b0e1a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, fontSize: 12 }}
                  labelStyle={{ color: '#e2e8f0' }}
                  formatter={(v: number, n: string) => [`$${v}B`, n === 'high' ? 'High estimate' : 'Low estimate']}
                />
                <Area type="monotone" dataKey="high" stroke="#a78bfa" strokeWidth={2} fill="url(#band)" />
                <Area type="monotone" dataKey="low" stroke="#22d3ee" strokeWidth={2} fill="url(#low)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {MARKET_STATS.map((s, i) => (
            <Reveal key={s.k} delay={0.08 * i}>
              <div className="glass flex h-full flex-col justify-center rounded-2xl p-6">
                <div className="text-4xl font-black tabular" style={{ color: s.c }}>{s.k}</div>
                <div className="mt-1 text-sm text-slate-400">{s.v}<Cite ids={s.s} /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
