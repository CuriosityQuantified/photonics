// Central source registry. Every figure in the infographic cites one or more
// of these by key; the citation number shown in the UI is the source's order here.
//
// Provenance note: these are the upstream publications behind the researched
// conversation that seeded this piece. URLs were located via web search against
// the named publishers; treat them as the primary trail for each claim.

export interface Source {
  pub: string // publisher / outlet
  title: string
  url: string
  date?: string
}

// Ordered roughly by first appearance in the page. Citation number = index + 1.
export const SOURCES: Record<string, Source> = {
  // — Physics / how it works —
  photondelta: {
    pub: 'PhotonDelta',
    title: 'How do photonic chips process information?',
    url: 'https://www.photondelta.com/blog/how-do-photonic-chips-process-information/',
  },
  nvidiaCpoCollab: {
    pub: 'NVIDIA Developer',
    title: 'How Industry Collaboration Fosters NVIDIA Co-Packaged Optics',
    url: 'https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/',
    date: '2025',
  },
  lightmatter: {
    pub: 'Lightmatter',
    title: 'How Do Photonic Interconnects Work?',
    url: 'https://lightmatter.co/knowledge-hub/how-do-photonic-interconnects-work/',
  },
  idtechex: {
    pub: 'IDTechEx',
    title: 'Silicon Photonics and Photonic Integrated Circuits 2026–2036',
    url: 'https://www.idtechex.com/en/research-report/silicon-photonics-and-photonic-integrated-circuits/1151',
  },

  // — Transceivers (Rung A) —
  futureMktTransceiver: {
    pub: 'Future Markets Inc.',
    title: 'The Global Optical Transceiver Market 2026–2036',
    url: 'https://www.futuremarketsinc.com/the-global-optical-transceiver-market-2026-2036/',
  },
  fortuneTransceiver: {
    pub: 'Fortune Business Insights',
    title: 'Optical Transceiver Market Size, Share & Forecast [2034]',
    url: 'https://www.fortunebusinessinsights.com/optical-transceiver-market-108985',
  },
  goldman800g: {
    pub: 'Goldman Sachs (via C-LIGHT)',
    title: 'AI Drives the Optical Transceiver Market — 800G demand raised to 33.5M units in 2026',
    url: 'https://www.c-light.com/news/details/AI_Drives_Optical_Transceiver_Market_to_New_Heights.html',
  },

  // — Silicon photonics / PICs (Rung B) —
  precedenceSip: {
    pub: 'Precedence Research',
    title: 'Silicon Photonics Market Size to Hit USD 28.75 Billion by 2034',
    url: 'https://www.precedenceresearch.com/silicon-photonics-market',
  },
  laserFocusBto: {
    pub: 'Laser Focus World',
    title: 'New material on the block: Barium titanate for silicon photonics',
    url: 'https://www.laserfocusworld.com/optics/article/55338359/new-material-on-the-block-barium-titanate-for-silicon-photonics',
  },

  // — Co-packaged optics (Rung C) —
  nvidiaNewsroom: {
    pub: 'NVIDIA Newsroom',
    title: 'NVIDIA Announces Spectrum-X Photonics, Co-Packaged Optics Networking Switches',
    url: 'https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories',
    date: '2025-03-18',
  },
  nvidiaSpectrumBlog: {
    pub: 'NVIDIA Developer',
    title: 'Scaling Power-Efficient AI Factories with NVIDIA Spectrum-X Ethernet Photonics',
    url: 'https://developer.nvidia.com/blog/scaling-power-efficient-ai-factories-with-nvidia-spectrum-x-ethernet-photonics/',
  },
  yole: {
    pub: 'Yole Group',
    title: "NVIDIA's 2025 photonic switch revolution: powering the AI future",
    url: 'https://www.yolegroup.com/strategy-insights/nvidias-2025-photonic-switch-revolution-powering-the-ai-future/',
  },
  marvellCelestial: {
    pub: 'Marvell Technology',
    title: 'Marvell to Acquire Celestial AI, Accelerating Scale-up Connectivity ($3.25B)',
    url: 'https://investor.marvell.com/news-events/press-releases/detail/1000/marvell-to-acquire-celestial-ai-accelerating-scale-up-connectivity-for-next-generation-data-centers',
    date: '2025-12',
  },
  semianalysis: {
    pub: 'SemiAnalysis',
    title: 'Co-Packaged Optics (CPO) — Scaling with Light',
    url: 'https://newsletter.semianalysis.com/p/co-packaged-optics-cpo-book-scaling',
  },
  tomshardware: {
    pub: "Tom's Hardware",
    title: 'Nvidia: silicon photonics and co-packaged optics may become mandatory for AI data centers',
    url: 'https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers',
  },
  meticulousCpo: {
    pub: 'Meticulous Research',
    title: 'Co-Packaged Optics (CPO) Market — Forecast to 2036',
    url: 'https://www.meticulousresearch.com/product/co-packaged-optics-market-6748',
  },
  futureMktCpo: {
    pub: 'Future Markets Inc.',
    title: 'The Global Co-Packaged Optics Market 2026–2036',
    url: 'https://www.futuremarketsinc.com/the-global-co-packaged-optics-market-2026-2036/',
  },
  insidehpc: {
    pub: 'Inside HPC & AI News',
    title: 'Charting the Photonic Future of AI Interconnect',
    url: 'https://insidehpc.com/2025/07/charting-the-photonic-future-of-ai-interconnect/',
    date: '2025-07',
  },
  allpcb: {
    pub: 'ALLPCB',
    title: 'Photonic Interconnects Aim to Solve AI Memory Bottlenecks',
    url: 'https://www.allpcb.com/allelectrohub/photonic-interconnects-aim-to-solve-ai-memory-bottlenecks',
  },

  // — FMCW LiDAR (Rung D) —
  junkoLidar: {
    pub: "Junko's Tech Probe",
    title: 'Silicon Photonics Revive LiDAR Battle',
    url: 'https://junkoyoshidaparis.substack.com/p/silicon-photonics-revive-lidar-battle',
    date: '2025-12-11',
  },
  mordorAutoLidar: {
    pub: 'Mordor Intelligence',
    title: 'Automotive LiDAR Market Size & Share Analysis',
    url: 'https://www.mordorintelligence.com/industry-reports/automotive-lidar-market',
  },

  // — Photonic computing (Rung E) —
  jonpeddie: {
    pub: 'Jon Peddie Research',
    title: "Remember optical computing? It's here",
    url: 'https://www.jonpeddie.com/news/remember-optical-computing-its-here/',
    date: '2026-03-24',
  },
  spieOptical: {
    pub: 'SPIE — Photonics Focus',
    title: 'Illuminating Artificial Intelligence: can optical neural networks deliver AGI?',
    url: 'https://spie.org/news/photonics-focus/julyaugust-2025/optical-computing-illuminating-ai',
    date: '2025',
  },
  futureMktOptComp: {
    pub: 'Future Markets Inc.',
    title: 'Global Optical Computing Market Report 2026–2036',
    url: 'https://www.futuremarketsinc.com/the-global-optical-computing-market-2026-2036/',
  },

  // — Quantum photonics (Rung F) —
  xanadu: {
    pub: 'Xanadu',
    title: "Xanadu introduces Aurora: world's first scalable, networked, modular quantum computer",
    url: 'https://www.xanadu.ai/press/xanadu-introduces-aurora-worlds-first-scalable-networked-and-modular-quantum-computer',
    date: '2025-01-22',
  },
  hpcwire: {
    pub: 'HPCwire',
    title: 'Xanadu Sets Sights on Fault-Tolerant Quantum Computing Data Center by 2029',
    url: 'https://www.hpcwire.com/2025/05/22/xanadu-sets-sights-on-fault-tolerant-quantum-computing-data-center-by-2029/',
    date: '2025-05-22',
  },
  postquantum: {
    pub: 'PostQuantum',
    title: 'PsiQuantum — company profile and roadmap (~1M qubits)',
    url: 'https://postquantum.com/quantum-computing-companies/psiquantum/',
  },

  // — Market —
  mordorSip: {
    pub: 'Mordor Intelligence',
    title: 'Silicon Photonics Market — $3.11B (2025) → $10.36B (2030), 27.21% CAGR',
    url: 'https://www.mordorintelligence.com/industry-reports/silicon-photonics-market',
  },
  fortuneSip: {
    pub: 'Fortune Business Insights',
    title: 'Silicon Photonics Market — to $22.29B by 2034, 23.83% CAGR',
    url: 'https://www.fortunebusinessinsights.com/industry-reports/silicon-photonics-market-101438',
  },

  // — Foundations / laser integration —
  spieHybridLaser: {
    pub: 'SPIE',
    title: 'Single-wavelength hybrid silicon lasers',
    url: 'https://spie.org/news/1411-single-wavelength-hybrid-silicon-lasers',
  },
  pmcRoadmap: {
    pub: 'PubMed Central',
    title: 'Roadmapping the next generation of silicon photonics',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10811194/',
    date: '2024',
  },
  patentHetero: {
    pub: 'USPTO / Google Patents',
    title: 'US9097848B2 — III-V photonic integration on silicon',
    url: 'https://patents.google.com/patent/US9097848B2/en',
  },
  aipQdLaser: {
    pub: 'AIP Publishing — APL Photonics',
    title: 'Epitaxial quantum-dot lasers on silicon',
    url: 'https://pubs.aip.org/aip/app/article/5/1/016103/1024449/Epitaxial-quantum-dot-lasers-on-silicon-with-high',
    date: '2020',
  },
  compoundSemi: {
    pub: 'Compound Semiconductor',
    title: 'The race to revolutionise silicon photonics with seamless III-V integration',
    url: 'https://compoundsemiconductor.net/article/122566/The_race_to_revolutionise_silicon_photonics_with_seamless_III-V_integration',
  },
}

export const SOURCE_IDS = Object.keys(SOURCES)

const NUM: Record<string, number> = Object.fromEntries(SOURCE_IDS.map((id, i) => [id, i + 1]))

export const sourceNum = (id: string): number => NUM[id] ?? 0
