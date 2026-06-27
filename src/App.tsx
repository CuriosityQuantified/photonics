import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Ladder from './components/Ladder'
import ReachSpectrum from './components/ReachSpectrum'
import CPODeepDive from './components/CPODeepDive'
import Timeline from './components/Timeline'
import Market from './components/Market'
import Bimodal from './components/Bimodal'
import Concepts from './components/Concepts'
import Corrections from './components/Corrections'

const NAV = [
  { id: 'how', label: 'Physics' },
  { id: 'ladder', label: 'Ladder' },
  { id: 'reach', label: 'Reach' },
  { id: 'cpo', label: 'CPO' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'market', label: 'Market' },
  { id: 'bimodal', label: 'Compute' },
  { id: 'concepts', label: 'Foundations' },
  { id: 'model', label: 'Model' },
]

function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full spectrum-bar" />
          <span className="font-mono text-sm font-bold tracking-tight text-white">PHOTONICS</span>
        </a>
        <div className="hidden gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-lg px-3 py-1.5 font-mono text-xs text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full spectrum-bar" />
              <span className="font-mono text-sm font-bold text-white">PHOTONICS — light, put to work</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
              A visual synthesis of a researched conversation across the major photonics domains — optical communications,
              silicon photonics, co-packaged optics, FMCW LiDAR, photonic computing, and quantum photonics. Figures reflect a
              2026 snapshot; forecasts in this space are inconsistent and self-serving — read vendor timelines with suspicion.
            </p>
          </div>
          <div className="font-mono text-[11px] leading-relaxed text-slate-600">
            <div className="mb-2 uppercase tracking-widest text-slate-500">Sources cited in-thread</div>
            <div>PhotonDelta · Nvidia · IDTechEx · Yole Group</div>
            <div>Meticulous · Future Markets · Jon Peddie</div>
            <div>SPIE · Xanadu · HPCwire · Mordor · Precedence</div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 font-mono text-[11px] text-slate-600">
          Built with React · Vite · Framer Motion · Recharts · Tailwind
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink text-slate-100">
      <TopNav />
      <Hero />
      <main>
        <HowItWorks />
        <Ladder />
        <ReachSpectrum />
        <CPODeepDive />
        <Timeline />
        <Market />
        <Bimodal />
        <Concepts />
        <Corrections />
      </main>
      <Footer />
    </div>
  )
}
