// Hand-built SVG illustrations of the photonic components.
// Each component has a "shape" drawn in a 100×100 space (reusable, nestable)
// and an Icon wrapper for use inside cards. Responsive via viewBox.

/* ----------------------------------------------------------------------------
 * Component shapes — drawn in a 0..100 coordinate box.
 * Flat fills + layered translucency (no gradient/filter ids) so they can be
 * rendered many times on one page without id collisions.
 * ------------------------------------------------------------------------- */

export function LaserShape() {
  return (
    <g>
      {/* heat-sink base + fins */}
      <rect x="8" y="60" width="40" height="9" rx="2" fill="#312e81" />
      {[13, 20, 27, 34, 41].map((x) => (
        <line key={x} x1={x} y1="60" x2={x} y2="69" stroke="#1e1b4b" strokeWidth="1.4" />
      ))}
      {/* III-V gain die */}
      <rect x="11" y="40" width="36" height="21" rx="3" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="1.4" />
      {/* cleaved-facet mirrors */}
      <line x1="15" y1="42" x2="15" y2="59" stroke="#ede9fe" strokeWidth="1.6" />
      <line x1="43" y1="42" x2="43" y2="59" stroke="#ede9fe" strokeWidth="1.6" opacity="0.85" />
      <text x="29" y="54" fill="#ede9fe" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="monospace">III–V</text>
      {/* emitted beam cone */}
      <polygon points="44,45 95,31 95,69 44,56" fill="#a78bfa" opacity="0.18" />
      <line x1="44" y1="50" x2="96" y2="48" stroke="#c4b5fd" strokeWidth="2.6" strokeLinecap="round" className="photon-flow" />
      {/* wavefronts */}
      <path d="M60 39 Q68 50 60 61" fill="none" stroke="#ddd6fe" strokeWidth="1.2" opacity="0.7" />
      <path d="M74 37 Q83 50 74 63" fill="none" stroke="#ddd6fe" strokeWidth="1.2" opacity="0.5" />
      {/* aperture glow */}
      <circle cx="45" cy="50" r="7" fill="#ede9fe" opacity="0.35" />
      <circle cx="45" cy="50" r="3.5" fill="#fff" opacity="0.9" />
    </g>
  )
}

export function RingModShape() {
  return (
    <g>
      {/* bus waveguide */}
      <line x1="6" y1="66" x2="94" y2="66" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      <line x1="6" y1="66" x2="94" y2="66" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" className="photon-flow" />
      {/* ring resonator, coupled to bus */}
      <circle cx="50" cy="44" r="17" fill="none" stroke="#3b82f6" strokeWidth="4" opacity="0.5" />
      <circle cx="50" cy="44" r="17" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3 4">
        <animateTransform attributeName="transform" type="rotate" from="0 50 44" to="360 50 44" dur="6s" repeatCount="indefinite" />
      </circle>
      {/* drive electrode + lead */}
      <rect x="43" y="14" width="14" height="9" rx="2" fill="#f59e0b" />
      <line x1="50" y1="23" x2="50" y2="29" stroke="#fbbf24" strokeWidth="2" />
      <text x="68" y="20" fill="#fbbf24" fontSize="8" fontFamily="monospace">±V</text>
      {/* bits on the bus */}
      <text x="16" y="80" fill="#93c5fd" fontSize="8" fontFamily="monospace">1 0 1</text>
    </g>
  )
}

export function WdmShape() {
  const lanes = [
    { y: 34, c: '#a78bfa' },
    { y: 50, c: '#22d3ee' },
    { y: 66, c: '#fbbf24' },
  ]
  return (
    <g>
      {/* three wavelengths converging into one waveguide (a multiplexer) */}
      {lanes.map((l) => (
        <path key={l.y} d={`M6 ${l.y} H40 Q52 ${l.y} 56 50`} fill="none" stroke={l.c} strokeWidth="2.4" strokeLinecap="round" />
      ))}
      {/* combined output waveguide */}
      <line x1="56" y1="50" x2="94" y2="50" stroke="#0e7490" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
      <line x1="56" y1="50" x2="94" y2="50" stroke="#67e8f9" strokeWidth="2.4" strokeLinecap="round" className="photon-flow" />
      {/* travelling multicolour packets */}
      {lanes.map((l, i) => (
        <circle key={i} cy="50" r="3" fill={l.c}>
          <animate attributeName="cx" from="58" to="92" dur="1.6s" repeatCount="indefinite" begin={`${i * 0.45}s`} />
        </circle>
      ))}
      <text x="75" y="40" fill="#67e8f9" fontSize="8" fontFamily="monospace">λ×N</text>
    </g>
  )
}

export function DetectorShape() {
  return (
    <g>
      {/* incoming light */}
      <line x1="6" y1="50" x2="40" y2="50" stroke="#22d3ee" strokeWidth="2.4" strokeLinecap="round" className="photon-flow" />
      <polygon points="36,45 44,50 36,55" fill="#67e8f9" />
      {/* germanium absorber mesa */}
      <rect x="44" y="33" width="24" height="34" rx="3" fill="#16a34a" stroke="#86efac" strokeWidth="1.4" />
      {[38, 46, 54, 62].map((y) => (
        <line key={y} x1="46" y1={y} x2="66" y2={y} stroke="#052e16" strokeWidth="1" opacity="0.5" />
      ))}
      <text x="56" y="78" fill="#86efac" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="monospace">Ge</text>
      {/* electrical contacts top/bottom */}
      <rect x="50" y="27" width="12" height="6" rx="1" fill="#cbd5e1" />
      <rect x="50" y="67" width="12" height="6" rx="1" fill="#cbd5e1" />
      {/* current out */}
      <path d="M68 50 H82 l-3 -3 m3 3 l-3 3" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <text x="88" y="46" fill="#fbbf24" fontSize="9" fontFamily="monospace">I</text>
    </g>
  )
}

export function AsicShape() {
  return (
    <g>
      {/* leads on left & right (QFP-style) */}
      {[28, 40, 52, 64].map((y) => (
        <g key={y}>
          <rect x="10" y={y} width="9" height="5" rx="1" fill="#d4a72c" />
          <rect x="81" y={y} width="9" height="5" rx="1" fill="#d4a72c" />
        </g>
      ))}
      {/* package */}
      <rect x="19" y="19" width="62" height="62" rx="6" fill="#0b1220" stroke="#1d4ed8" strokeWidth="2" />
      {/* die */}
      <rect x="31" y="31" width="38" height="38" rx="3" fill="#1d4ed8" />
      {/* on-die routing hints */}
      <path d="M37 40 H63 M37 50 H63 M37 60 H63 M44 34 V66 M56 34 V66" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
      <text x="50" y="53" fill="#fff" fontSize="9" fontWeight="800" textAnchor="middle">ASIC</text>
    </g>
  )
}

export function OpticalEngineShape() {
  return (
    <g>
      {/* photonic chiplet */}
      <rect x="20" y="22" width="60" height="56" rx="6" fill="#083344" stroke="#22d3ee" strokeWidth="1.8" />
      {/* grating couplers (fiber attach) */}
      {[28, 40, 52, 64].map((y) => (
        <g key={y}>
          {[0, 1, 2, 3].map((k) => (
            <line key={k} x1={24 + k * 1.8} y1={y} x2={24 + k * 1.8} y2={y + 7} stroke="#67e8f9" strokeWidth="1" />
          ))}
        </g>
      ))}
      {/* internal waveguide loop */}
      <path d="M40 34 H68 Q72 34 72 40 V60 Q72 66 66 66 H40" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.8" />
      <circle cx="56" cy="50" r="7" fill="none" stroke="#67e8f9" strokeWidth="1.6" />
      <text x="52" y="86" fill="#67e8f9" fontSize="8" textAnchor="middle" fontFamily="monospace">PIC</text>
    </g>
  )
}

export function PluggableShape() {
  return (
    <g>
      {/* gold edge-connector fingers (back) */}
      {[30, 38, 46, 54, 62].map((y) => (
        <rect key={y} x="8" y={y} width="10" height="5" rx="1" fill="#d4a72c" />
      ))}
      {/* metal cage / module body */}
      <rect x="18" y="24" width="64" height="52" rx="5" fill="#334155" stroke="#64748b" strokeWidth="1.6" />
      <rect x="18" y="24" width="64" height="52" rx="5" fill="#22d3ee" opacity="0.05" />
      {/* ribbing */}
      {[26, 32, 38].map((x) => (
        <line key={x} x1={x + 18} y1="26" x2={x + 18} y2="74" stroke="#475569" strokeWidth="1" />
      ))}
      {/* bail latch */}
      <path d="M82 34 q10 0 10 16 q0 16 -10 16" fill="none" stroke="#94a3b8" strokeWidth="2" />
      {/* duplex fiber port (LC) */}
      <circle cx="34" cy="50" r="6" fill="#0b1220" stroke="#22d3ee" strokeWidth="1.6" />
      <circle cx="34" cy="50" r="2.4" fill="#22d3ee" />
      <text x="50" y="90" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">module</text>
    </g>
  )
}

export function TransceiverShape() {
  return (
    <g>
      {/* module body */}
      <rect x="22" y="22" width="56" height="56" rx="6" fill="#0b1220" stroke="#22d3ee" strokeWidth="1.6" />
      {/* TX row: electrical in → light out */}
      <text x="14" y="40" fill="#fbbf24" fontSize="9" textAnchor="middle">⚡</text>
      <rect x="34" y="32" width="14" height="10" rx="2" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="1" />
      <line x1="48" y1="37" x2="86" y2="37" stroke="#c4b5fd" strokeWidth="2.2" className="photon-flow" />
      <text x="64" y="30" fill="#c4b5fd" fontSize="7" textAnchor="middle" fontFamily="monospace">TX</text>
      {/* RX row: light in → electrical out */}
      <line x1="86" y1="61" x2="50" y2="61" stroke="#22d3ee" strokeWidth="2.2" className="photon-flow" />
      <rect x="36" y="56" width="12" height="10" rx="2" fill="#16a34a" stroke="#86efac" strokeWidth="1" />
      <text x="14" y="64" fill="#fbbf24" fontSize="9" textAnchor="middle">⚡</text>
      <text x="64" y="74" fill="#67e8f9" fontSize="7" textAnchor="middle" fontFamily="monospace">RX</text>
    </g>
  )
}

export function PackageShape() {
  return (
    <g>
      {/* substrate package */}
      <rect x="12" y="34" width="76" height="40" rx="5" fill="#0b1220" stroke="#334155" strokeWidth="1.6" />
      {/* BGA balls underneath */}
      {[20, 30, 40, 50, 60, 70, 80].map((x) => (
        <circle key={x} cx={x} cy="78" r="2.6" fill="#d4a72c" />
      ))}
      {/* ASIC die + flanking optical engines, sharing the package */}
      <rect x="42" y="42" width="22" height="22" rx="2" fill="#1d4ed8" />
      <text x="53" y="56" fill="#fff" fontSize="6.5" textAnchor="middle" fontWeight="800">ASIC</text>
      <rect x="20" y="44" width="16" height="18" rx="2" fill="#083344" stroke="#22d3ee" strokeWidth="1.2" />
      <rect x="70" y="44" width="16" height="18" rx="2" fill="#083344" stroke="#22d3ee" strokeWidth="1.2" />
      <line x1="36" y1="53" x2="42" y2="53" stroke="#22d3ee" strokeWidth="1.6" />
      <line x1="64" y1="53" x2="70" y2="53" stroke="#22d3ee" strokeWidth="1.6" />
      <text x="50" y="92" fill="#64748b" fontSize="7" textAnchor="middle" fontFamily="monospace">on-package</text>
    </g>
  )
}

/* ---- Icon wrappers for cards ---------------------------------------------- */
const wrap = (Shape: () => JSX.Element) => () =>
  (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img">
      <Shape />
    </svg>
  )

export const IconLaser = wrap(LaserShape)
export const IconModulator = wrap(RingModShape)
export const IconWaveguide = wrap(WdmShape)
export const IconDetector = wrap(DetectorShape)
export const IconASIC = wrap(AsicShape)
export const IconTransceiver = wrap(TransceiverShape)
export const IconPluggable = wrap(PluggableShape)
export const IconPackage = wrap(PackageShape)

export const COMPONENT_ICON: Record<string, () => JSX.Element> = {
  source: IconLaser,
  encode: IconModulator,
  route: IconWaveguide,
  detect: IconDetector,
}

// keyed by CPO glossary part name
export const CPO_PART_ICON: Record<string, () => JSX.Element> = {
  ASIC: IconASIC,
  Transceiver: IconTransceiver,
  'Pluggable module': IconPluggable,
  'Switch / processor package': IconPackage,
}

/* ----------------------------------------------------------------------------
 * Larger composite illustrations
 * ------------------------------------------------------------------------- */

export function ElectronVsPhoton() {
  return (
    <svg viewBox="0 0 600 220" className="w-full" role="img" aria-label="Electrons in copper versus photons in a waveguide">
      <defs>
        <linearGradient id="ev_copper" x1="0" x2="1">
          <stop offset="0" stopColor="#b45309" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="ev_light" x1="0" x2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.5" stopColor="#06b6d4" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      <text x="20" y="40" fill="#fbbf24" fontSize="13" fontFamily="monospace">COPPER · electrons</text>
      <rect x="20" y="55" width="560" height="22" rx="11" fill="url(#ev_copper)" opacity="0.25" />
      <rect x="20" y="55" width="560" height="22" rx="11" fill="none" stroke="url(#ev_copper)" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <circle key={i} r="5" fill="#fbbf24">
          <animateMotion dur={`${3 + (i % 3) * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.4}s`}
            path="M 30 66 q 20 -10 40 0 q 20 10 40 0 q 20 -10 40 0 q 20 10 40 0 q 20 -10 40 0 q 20 10 40 0 q 20 -10 40 0 q 20 10 40 0 q 20 -10 40 0 q 20 10 40 0 q 20 -10 40 0 q 20 10 40 0 q 20 -10 40 0" />
        </circle>
      ))}
      <text x="20" y="100" fill="#94a3b8" fontSize="11">Resistance scatters electrons → heat, lower bandwidth, more energy per bit</text>

      <text x="20" y="150" fill="#22d3ee" fontSize="13" fontFamily="monospace">PHOTONICS · photons</text>
      <rect x="20" y="165" width="560" height="22" rx="11" fill="url(#ev_light)" opacity="0.18" />
      <line x1="24" y1="176" x2="576" y2="176" stroke="url(#ev_light)" strokeWidth="3" className="photon-flow" strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cy="176" r="6" fill="#e0f2fe">
          <animate attributeName="cx" from="24" to="576" dur="1.6s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.6s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
        </circle>
      ))}
      <text x="20" y="210" fill="#94a3b8" fontSize="11">No resistance · travels at light speed · many wavelengths (colors) at once</text>
    </svg>
  )
}

// The chip pipeline using the real component icons, threaded by a waveguide.
export function ChipPipeline() {
  const stations = [
    { cx: 105, Shape: LaserShape, label: 'Laser', sub: 'III-V source', c: '#a78bfa' },
    { cx: 270, Shape: RingModShape, label: 'Modulator', sub: 'encode', c: '#60a5fa' },
    { cx: 432, Shape: WdmShape, label: 'Waveguide', sub: 'route · WDM', c: '#22d3ee' },
    { cx: 590, Shape: DetectorShape, label: 'Detector', sub: 'convert', c: '#4ade80' },
  ]
  const S = 96
  return (
    <svg viewBox="0 0 690 220" className="w-full" role="img" aria-label="Photonic chip pipeline">
      <defs>
        <linearGradient id="pl_wg" x1="0" x2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.45" stopColor="#06b6d4" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      {/* silicon die */}
      <rect x="20" y="26" width="650" height="150" rx="16" fill="#0b1220" stroke="#1e293b" />
      <text x="36" y="48" fill="#475569" fontSize="11" fontFamily="monospace">SILICON DIE · PIC</text>

      {/* waveguide spine behind the components */}
      <line x1="95" y1="118" x2="600" y2="118" stroke="url(#pl_wg)" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
      <line x1="95" y1="118" x2="600" y2="118" stroke="url(#pl_wg)" strokeWidth="2.5" strokeLinecap="round" className="photon-flow" />

      {/* electrical in / out */}
      <text x="105" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">⚡ electrical in</text>
      <text x="590" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">⚡ electrical out</text>

      {stations.map((s) => (
        <g key={s.label}>
          <svg x={s.cx - S / 2} y={118 - S / 2} width={S} height={S} viewBox="0 0 100 100">
            <s.Shape />
          </svg>
          <text x={s.cx} y="190" fill="#e2e8f0" fontSize="13" fontWeight="700" textAnchor="middle">{s.label}</text>
          <text x={s.cx} y="206" fill={s.c} fontSize="10" fontFamily="monospace" textAnchor="middle">{s.sub}</text>
        </g>
      ))}
    </svg>
  )
}

export function WaveguideCrossSection() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Waveguide cross section">
      <defs>
        <radialGradient id="wg_mode" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#67e8f9" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="30" y="30" width="300" height="180" rx="8" fill="#1e293b" />
      <text x="180" y="56" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">SiO₂ cladding · n ≈ 1.45</text>
      <rect x="30" y="170" width="300" height="40" rx="8" fill="#0f172a" />
      <text x="180" y="196" fill="#475569" fontSize="11" textAnchor="middle" fontFamily="monospace">silicon substrate (SOI)</text>
      <rect x="135" y="105" width="90" height="50" rx="6" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
      <ellipse cx="180" cy="130" rx="70" ry="48" fill="url(#wg_mode)">
        <animate attributeName="rx" values="66;74;66" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <text x="180" y="134" fill="#f8fafc" fontSize="12" textAnchor="middle" fontWeight="700">Si core</text>
      <text x="180" y="150" fill="#dbeafe" fontSize="10" textAnchor="middle" fontFamily="monospace">n ≈ 3.5</text>
      <path d="M120 90 L150 120 L120 150 L150 165" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M240 90 L210 120 L240 150 L210 165" stroke="#fde68a" strokeWidth="1.5" fill="none" opacity="0.8" />
    </svg>
  )
}

// External-laser glyph for the CPO co-packaged panel
function ExternalLaserGlyph() {
  return (
    <g>
      <rect x="2" y="6" width="96" height="40" rx="6" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="10" y="16" width="22" height="20" rx="3" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="1.2" />
      <text x="21" y="29" fill="#ede9fe" fontSize="8" textAnchor="middle" fontFamily="monospace">III-V</text>
      <line x1="32" y1="26" x2="74" y2="26" stroke="#c4b5fd" strokeWidth="2.2" className="photon-flow" />
      <circle cx="74" cy="26" r="3" fill="#ede9fe" />
      <text x="50" y="60" fill="#c4b5fd" fontSize="11" textAnchor="middle">external laser</text>
    </g>
  )
}

// CPO comparison: legacy pluggable (long copper path) vs co-packaged (optics beside ASIC)
export function CPODiagram() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* ---------------- Legacy pluggable ---------------- */}
      <div className="glass rounded-2xl p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400">Today · Pluggable</span>
          <span className="rounded-full bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] text-amber-300">long copper path</span>
        </div>
        <svg viewBox="0 0 420 250" className="w-full" role="img" aria-label="Pluggable transceiver layout">
          <rect x="10" y="24" width="400" height="200" rx="12" fill="#0b1220" stroke="#1e293b" />
          <text x="26" y="46" fill="#475569" fontSize="11" fontFamily="monospace">SWITCH BOARD</text>

          {/* ASIC */}
          <svg x="48" y="89" width="84" height="84" viewBox="0 0 100 100"><AsicShape /></svg>

          {/* long SerDes copper trace */}
          <text x="228" y="112" fill="#fbbf24" fontSize="11" textAnchor="middle" fontFamily="monospace">SerDes copper · long path</text>
          <path d="M132 131 H300" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" opacity="0.35" />
          <path d="M132 131 H300" stroke="#fbbf24" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="4 6">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.7s" repeatCount="indefinite" />
          </path>

          {/* pluggable module at edge */}
          <svg x="300" y="96" width="92" height="84" viewBox="0 0 100 100"><PluggableShape /></svg>

          {/* fiber out */}
          <line x1="392" y1="131" x2="412" y2="131" stroke="#22d3ee" strokeWidth="2.4" className="photon-flow" />
        </svg>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          The high-speed electrical signal travels a long copper path from ASIC to the edge module — burning
          disproportionate power before it ever becomes light.
        </p>
      </div>

      {/* ---------------- Co-packaged ---------------- */}
      <div className="glass rounded-2xl p-5" style={{ borderColor: 'rgba(34,211,238,0.35)' }}>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">Frontier · Co-Packaged</span>
          <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 font-mono text-[10px] text-cyan-200">mm electrical path</span>
        </div>
        <svg viewBox="0 0 420 250" className="w-full" role="img" aria-label="Co-packaged optics layout">
          <rect x="10" y="24" width="400" height="200" rx="12" fill="#0b1220" stroke="#1e293b" />
          <text x="26" y="46" fill="#475569" fontSize="11" fontFamily="monospace">SHARED PACKAGE</text>

          {/* ASIC centred */}
          <svg x="174" y="64" width="72" height="72" viewBox="0 0 100 100"><AsicShape /></svg>

          {/* optical engines flanking the ASIC */}
          <svg x="96" y="74" width="58" height="58" viewBox="0 0 100 100"><OpticalEngineShape /></svg>
          <svg x="266" y="74" width="58" height="58" viewBox="0 0 100 100"><OpticalEngineShape /></svg>

          {/* short mm-scale electrical links */}
          <line x1="150" y1="100" x2="176" y2="100" stroke="#22d3ee" strokeWidth="3" className="photon-flow" />
          <line x1="244" y1="100" x2="270" y2="100" stroke="#22d3ee" strokeWidth="3" className="photon-flow" />

          {/* fibre out, both edges */}
          <line x1="96" y1="100" x2="14" y2="100" stroke="#22d3ee" strokeWidth="2.4" className="photon-flow" />
          <line x1="324" y1="100" x2="406" y2="100" stroke="#22d3ee" strokeWidth="2.4" className="photon-flow" />

          {/* external laser — disaggregated, centred below ASIC, feeding both engines */}
          <svg x="160" y="160" width="100" height="60" viewBox="0 0 100 66"><ExternalLaserGlyph /></svg>
          <path d="M188 168 Q150 150 125 134" fill="none" stroke="#a78bfa" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.8" />
          <path d="M232 168 Q270 150 295 134" fill="none" stroke="#a78bfa" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.8" />
        </svg>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          The <span className="text-cyan-300">optical engine</span> moves beside the ASIC — the electrical path shrinks to
          millimetres. The heat-sensitive <span className="text-violet-300">laser stays external</span> (laser disaggregation).
        </p>
      </div>
    </div>
  )
}
