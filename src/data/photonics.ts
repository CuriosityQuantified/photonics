// All figures sourced from the researched Claude conversation on Photonics.
// Each datum traces back to the "Ground-truth data repository" in that thread.

export const SPECTRUM = ['#7c3aed', '#4f46e5', '#2563eb', '#06b6d4', '#14b8a6', '#22c55e', '#f59e0b', '#f97316', '#ef4444']

export type Maturity = 'mature' | 'commercializing' | 'early' | 'pre-commercial' | 'research'

export interface Rung {
  id: string
  letter: string
  title: string
  tag: string
  color: string
  maturity: Maturity
  status: string
  window: string
  blurb: string
  facts: string[]
  players?: string[]
}

// The maturity ladder — six rungs, least to most speculative (A deployed → F research)
export const RUNGS: Rung[] = [
  {
    id: 'transceivers',
    letter: 'A',
    title: 'Optical Communications / Transceivers',
    tag: 'Mature · deployed at massive scale',
    color: '#22c55e',
    maturity: 'mature',
    status: 'Deployed, mature; 1.6T shipping',
    window: '3.2T volume ~2026–2027',
    blurb:
      'The boring, enormous, real part of photonics. Long-haul fiber and data-center transceivers convert electrical signals to optical and back. A steady speed climb: 10G → … → 3.2T.',
    facts: [
      '1.6T pluggable transceivers launched in 2025',
      '3.2 Tbps transceivers expected by 2026',
      '800G shipments projected at 33.5M units in 2026 — the largest procurement in optical-interconnect history',
      'Each Nvidia H200 server needs several 800G modules',
    ],
  },
  {
    id: 'pics',
    letter: 'B',
    title: 'Silicon Photonics & PICs',
    tag: 'The manufacturing platform underneath everything',
    color: '#14b8a6',
    maturity: 'mature',
    status: 'Mature platform, scaling',
    window: 'Continuous; market ~3× by 2030',
    blurb:
      'Not an application — a fabrication approach. A Photonic Integrated Circuit (PIC) puts lasers, modulators, waveguides and detectors on a single die, the way an electronic IC integrates transistors.',
    facts: [
      'Silicon-on-insulator (SOI) is the dominant platform (~55% share) thanks to CMOS compatibility',
      'Leverages standard CMOS fabrication for cost-effective mass production',
      'Emerging materials: thin-film lithium niobate (TFLN) and barium titanate for better modulators',
    ],
  },
  {
    id: 'cpo',
    letter: 'C',
    title: 'Co-Packaged Optics (CPO)',
    tag: 'Commercializing right now · the AI-interconnect frontier',
    color: '#06b6d4',
    maturity: 'commercializing',
    status: 'First products shipped 2025',
    window: 'Pilot → volume 2026–2028',
    blurb:
      'The hot frontier. Copper links between AI chips are hitting bandwidth and power walls. CPO integrates the optics directly onto the switch/processor package, eliminating the electrical signaling bottleneck.',
    facts: [
      'Nvidia Spectrum-X & Quantum-X silicon-photonics switches unveiled at GTC, March 2025',
      'Claims: 3.5× power efficiency · 63× signal integrity · 10× network resiliency',
      'Quantum-X InfiniBand: late 2025 · Spectrum-X Ethernet: H2 2026 at up to 409.6 Tb/s',
      'Marvell acquired Celestial AI for $3.25B (late 2025)',
      'Has been "two years away" for a decade — now genuinely shipping',
    ],
    players: ['Nvidia', 'Lightmatter', 'Ayar Labs', 'Broadcom', 'Intel'],
  },
  {
    id: 'lidar',
    letter: 'D',
    title: 'Photonic Sensing / FMCW LiDAR',
    tag: 'Early commercial',
    color: '#84cc16',
    maturity: 'early',
    status: 'Early commercial, design wins',
    window: 'Volume late-2020s',
    blurb:
      'The same silicon-photonics platform moving into sensing. A single PIC integrates the laser, modulators, beam steering and detector on-chip — removing mechanical moving parts.',
    facts: [
      'FMCW = Frequency-Modulated Continuous-Wave',
      '15–20 companies building silicon-photonics FMCW LiDAR',
      'Automotive/autonomous LiDAR forecast at ~32–35% CAGR',
      'Other uses: biosensing, gas sensing, inertial navigation',
    ],
    players: ['Aeva', 'SiLC', 'Voyant', 'Aurora', 'Analog Photonics'],
  },
  {
    id: 'compute',
    letter: 'E',
    title: 'Photonic Computing',
    tag: 'Pre-commercial · light does the math',
    color: '#f59e0b',
    maturity: 'pre-commercial',
    status: 'Pre-commercial / niche',
    window: '2027–2031 (optimistic)',
    blurb:
      'Light performs the computation itself. Photonics is naturally good at matrix multiplication — the linear algebra at the heart of neural networks — at the physical level, in picoseconds.',
    facts: [
      "Q.ANT (Germany) ships all-photonic AI coprocessors at 30W vs Nvidia GPUs' 700–1,000W",
      'Installed at two European supercomputing centers',
      'Lightmatter launched Passage L200 & M1000 at a $4.4B valuation',
      'Caveat: "compute" and "interconnect" share a name but not a product',
      'Still needs electronics for memory, buffering & nonlinearity (activation functions)',
    ],
    players: ['Q.ANT', 'Lightmatter'],
  },
  {
    id: 'quantum',
    letter: 'F',
    title: 'Quantum Photonics',
    tag: 'Research → early fault tolerance',
    color: '#ef4444',
    maturity: 'research',
    status: 'Lab milestones',
    window: 'Fault tolerance ~2029–early 2030s',
    blurb:
      'Using single photons (or squeezed light) as qubits. Advantages over superconducting qubits: room-temperature operation, manufacturability, modularity and telecom compatibility.',
    facts: [
      'Xanadu "Aurora" (Jan 2025): 12 qubits, 35 photonic chips, 13 km of fiber, room temperature',
      'Xanadu target: a fault-tolerant quantum computing data center by 2029',
      'PsiQuantum aims for ~1M physical qubits; fault-corrected machine ~2027–2029',
      'Treat all of these as company-stated targets that have historically slipped',
    ],
    players: ['Xanadu', 'PsiQuantum'],
  },
]

// The three jobs of any photonic system, plus the essential light source
export interface Block {
  id: string
  step: string
  title: string
  role: string
  detail: string
  color: string
  spec?: string
}

export const PIPELINE: Block[] = [
  {
    id: 'source',
    step: '0',
    title: 'Light Source',
    role: 'Laser (III-V material)',
    detail:
      "Silicon has an indirect bandgap, so it is a poor light emitter. The laser must be built from III-V semiconductors (e.g. indium phosphide) and married to the silicon — the field's central engineering problem.",
    color: '#7c3aed',
    spec: 'III-V: InP / GaAs',
  },
  {
    id: 'encode',
    step: '1',
    title: 'Encode',
    role: 'Modulator',
    detail:
      "A modulator imprints data onto the light by altering its intensity, phase or polarisation — high intensity a '1', low a '0'. Chip-scale types: Mach-Zehnder and micro-ring modulators.",
    color: '#2563eb',
    spec: 'Nvidia micro-ring: 200 Gbps PAM4 / wavelength',
  },
  {
    id: 'route',
    step: '2',
    title: 'Move / Route',
    role: 'Waveguide + WDM',
    detail:
      'Waveguides are microscopic on-chip channels that guide light with minimal loss. Wavelength-Division Multiplexing (WDM) sends many independent data streams — many "colors" — down one waveguide at once.',
    color: '#06b6d4',
    spec: 'Si index ≈ 3.5 vs SiO₂ cladding ≈ 1.45',
  },
  {
    id: 'detect',
    step: '3',
    title: 'Convert Back',
    role: 'Photodetector',
    detail:
      'A photodetector converts the modulated light back into an electrical signal that electronic circuits understand. Often uses germanium added to silicon — well integrated into CMOS lines.',
    color: '#22c55e',
    spec: 'Ge-on-Si, CMOS-integrated',
  },
]

// Consolidated timeline — tracks across 2025 → 2034
export interface Track {
  name: string
  color: string
  start: number
  solidEnd: number   // committed / shipping
  fadeEnd: number    // optimistic / uncertain
  label: string
  milestones: { year: number; text: string }[]
}

export const TIMELINE: Track[] = [
  {
    name: 'Fiber / datacom transceivers',
    color: '#22c55e',
    start: 2025, solidEnd: 2027, fadeEnd: 2030,
    label: '1.6T shipping → 3.2T volume ~2026–27',
    milestones: [{ year: 2025, text: '1.6T launched' }, { year: 2026, text: '3.2T' }],
  },
  {
    name: 'Silicon photonics PICs',
    color: '#14b8a6',
    start: 2025, solidEnd: 2030, fadeEnd: 2034,
    label: 'Mature platform · market ~3× by 2030',
    milestones: [{ year: 2030, text: '~3× market' }],
  },
  {
    name: 'Co-packaged optics (AI)',
    color: '#06b6d4',
    start: 2025, solidEnd: 2028, fadeEnd: 2030,
    label: 'First products 2025 · pilot → volume 2026–28',
    milestones: [{ year: 2025, text: 'First products' }, { year: 2028, text: 'Volume' }],
  },
  {
    name: 'FMCW LiDAR / sensing',
    color: '#84cc16',
    start: 2026, solidEnd: 2029, fadeEnd: 2032,
    label: 'Early commercial · volume late-2020s',
    milestones: [{ year: 2029, text: 'Volume' }],
  },
  {
    name: 'Photonic computing',
    color: '#f59e0b',
    start: 2027, solidEnd: 2029, fadeEnd: 2031,
    label: 'Pre-commercial · 2027–2031 (optimistic)',
    milestones: [{ year: 2027, text: 'Optimistic start' }],
  },
  {
    name: 'Quantum photonics',
    color: '#ef4444',
    start: 2029, solidEnd: 2031, fadeEnd: 2034,
    label: 'Lab milestones · fault tolerance ~2029–early 30s',
    milestones: [{ year: 2029, text: 'FT target' }],
  },
]

export const TIMELINE_START = 2025
export const TIMELINE_END = 2034

// Silicon-photonics market — the forecast spread IS the signal
export const MARKET = [
  { year: '2025', low: 2.8, high: 4 },
  { year: '2026', low: 3.5, high: 5 },
  { year: '2028', low: 6, high: 9 },
  { year: '2030', low: 10, high: 15 },
  { year: '2032', low: 14, high: 21 },
  { year: '2034', low: 18, high: 29 },
]

// Photonic compute is bimodal — don't file it as one 2030s bucket
export const BIMODAL = [
  { label: 'Photonic networking', status: 'Viable now', window: 'Scales hard through 2028', tone: 'good' },
  { label: 'Photonic compute (niche)', status: 'Shipping now', window: 'Narrow, growing 2026–2031', tone: 'ok' },
  { label: 'Photonic compute (mainstream / GPU-class)', status: 'Pre-commercial', window: '2027–2031 if it works; uncertain', tone: 'warn' },
  { label: 'Quantum photonics', status: 'Lab milestones', window: '~2029–early 2030s', tone: 'far' },
]

// Reach spectrum — where copper hands off to optics
export const REACH = [
  { name: 'Long-haul telecom', sub: 'city → city', medium: 'optics', note: 'Doped-silica fiber, 40 yrs deployed' },
  { name: 'Data-center interconnect', sub: 'building → building', medium: 'optics', note: 'Fiber + pluggables' },
  { name: 'Rack-to-rack', sub: 'within the room', medium: 'optics', note: 'Pluggable transceivers (the workhorse)' },
  { name: 'Package', sub: 'beside the chip', medium: 'frontier', note: 'Co-packaged optics — the inward march' },
  { name: 'Chip-to-chip', sub: 'on the die', medium: 'future', note: 'Eventually optical I/O' },
]

// CPO component glossary
export const CPO_PARTS = [
  { name: 'ASIC', full: 'Application-Specific Integrated Circuit', eli5: 'A chip that is a specialist, not a generalist — the traffic cop for data.', detail: 'In a switch, the switch ASIC decides where each piece of data goes.' },
  { name: 'Transceiver', full: 'Transmitter + Receiver', eli5: 'The bilingual translator between "electricity language" and "light language".', detail: 'Converts electrical → light to send, and light → electrical to receive.' },
  { name: 'Pluggable module', full: 'Removable front-panel transceiver', eli5: 'The translator built as a plug-in cartridge you pop in and out.', detail: 'Today’s default: cost-effective, familiar, standards-based & interoperable.' },
  { name: 'Switch / processor package', full: 'The platform the main chip mounts on', eli5: 'The shared baseplate. Optics "on the package" sit right next to the brain chip.', detail: 'Co-locating optics here shrinks the electrical path from board-length to millimetres.' },
]

// Laser integration strategies — increasing intimacy
export const LASER_STRATEGIES = [
  { n: 1, name: 'Hybrid integration', desc: 'Prefabricated laser dies flip-chip bonded / butt-coupled onto silicon. Reliable, but slow and costly — each laser processed separately.' },
  { n: 2, name: 'Heterogeneous integration', desc: 'Bond an unpatterned III-V wafer onto silicon, then build the laser in place; light couples down into the silicon waveguide. Intel productized this.' },
  { n: 3, name: 'Monolithic integration', desc: 'Grow III-V (e.g. quantum-dot) lasers directly in silicon trenches. Most elegant; hardest, due to crystal-lattice & thermal mismatch.' },
  { n: 4, name: 'Micro-transfer printing', desc: 'Transfer many prefabricated III-V components onto silicon wafers in parallel — a newer middle path for throughput.' },
]

// Three-depth concept explainers
export const CONCEPTS = [
  {
    id: 'optics-photonics',
    q: 'Optics vs. Photonics',
    eli5: 'Optics is the whole study of light — mirrors, lenses, rainbows. Photonics is the newer job of putting light to work to carry information or do work.',
    inter: 'Optics is the broad science of light (reflection, refraction), historically passive and in free space. Photonics treats the photon like electronics treats the electron: a controllable carrier, emphasizing active devices that generate, modulate, route and detect light.',
    adv: 'A dividing line: free-space optics vs. guided-wave, device-level light. Photonics is essentially a subset of optics defined by intent (photons as the working medium) and by integration (chip- and device-scale rather than tabletop).',
  },
  {
    id: 'waveguide',
    q: 'What does the light travel through?',
    eli5: 'Tiny see-through pipes. City-to-city it is a hair-thin strand of pure glass (fiber). On a chip it is an even tinier channel carved into the chip itself.',
    inter: 'Two media by distance. Across the world: optical fiber (ultra-pure silica). On a chip: a waveguide — a strip of silicon wrapped in silicon dioxide. Light stays inside because the core bends light more strongly than the cladding.',
    adv: 'Confinement by refractive-index contrast: silicon ≈ 3.5, SiO₂ cladding ≈ 1.45. That large contrast confines the mode tightly and allows tiny bend radii. Dominant platform: silicon-on-insulator (SOI). Silicon nitride is used where lower loss is needed.',
  },
  {
    id: 'cmos',
    q: 'What is CMOS?',
    eli5: 'Complementary Metal-Oxide-Semiconductor — the standard recipe and standard factory the whole world uses to make computer chips. "CMOS-compatible" means light chips can be made in the same factories.',
    inter: 'The dominant transistor technology behind nearly every processor and memory chip. "Complementary" = pairing two transistor types that switch in opposite ways, keeping power low. Its importance to photonics is economic, not optical.',
    adv: 'Complementary pairs of n-type and p-type MOSFETs so current flows mainly during switching, minimizing static power. For photonics the win is process & supply-chain leverage — waveguides, modulators and detectors patterned on SOI in existing foundries, often on mature nodes.',
  },
]
