# Photonics — Light, Put to Work

A high-density, visually-striking infographic that turns a researched conversation about
photonics into an interactive single-page experience. Built with **React + Vite +
TypeScript**, styled with **Tailwind CSS**, animated with **Framer Motion**, and charted
with **Recharts**.

The whole piece is organized around the single most useful mental model from the source
material: **a maturity ladder**, from technology deployed at scale for 40 years (fiber
communications) to things still stuck in the lab (optical computing, quantum photonics).

## What's inside

| # | Section | What it visualizes |
|---|---------|--------------------|
| — | **Hero** | Electrons-in-copper vs. photons-in-a-waveguide, animated |
| 1 | **The physics** | The 4 building blocks — laser → modulator → waveguide (WDM) → photodetector — as an animated on-chip pipeline, plus a waveguide cross-section |
| 2 | **The maturity ladder** | All six rungs (transceivers, PICs, CPO, FMCW LiDAR, photonic compute, quantum) with status, realistic window, key figures, and players |
| 3 | **The reach spectrum** | Long-haul → data-center → rack → package → chip; where copper hands off to optics |
| 4 | **Co-packaged optics, unpacked** | Side-by-side pluggable vs. CPO diagrams, component glossary (ASIC, transceiver, pluggable, package), laser disaggregation, optics-to-memory branch |
| 5 | **Consolidated timeline** | A Gantt-style 2025→2034 chart — solid = committed/shipping, dashed = optimistic/uncertain |
| 6 | **Market size** | The silicon-photonics forecast band ($2.8–4B → $10–29B) — the disagreement *is* the signal |
| 7 | **Photonic compute is bimodal** | Niche-shipping vs. GPU-class-distant vs. quantum — and the naming trap |
| 8 | **Foundations, three ways** | ELI5 / Intermediate / Advanced explainers (optics vs. photonics, waveguides, CMOS) + the 4 laser-integration strategies |
| 9 | **The corrected mental model** | Common-but-imprecise framings paired with the precise version, plus a one-sentence summary |

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Notes

- All figures trace back to the **"Ground-truth data repository"** in the source
  conversation and live in [`src/data/photonics.ts`](src/data/photonics.ts).
- This is a **2026 snapshot**. Forecasts in this space are inconsistent and self-serving;
  vendor timelines are flagged throughout as hope, not committed roadmap.
- Fonts load from Google Fonts with a graceful `system-ui` fallback when offline.
