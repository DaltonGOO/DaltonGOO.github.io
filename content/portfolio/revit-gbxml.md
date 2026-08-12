+++
title = "gbXML Exporter for HAP"
date = 2026-04-20
template = "portfolio-page.html"
draft = false
extra = { cover = "images/portfolio/revit-gbxml/cover.svg" }
summary = "Open-source Revit add-in that exports leaner gbXML built for Carrier HAP — clean room geometry, paired surfaces with adjacency, and synthesized plenums."
+++

Revit can already export gbXML. The problem is that what comes out doesn't sit well with **Carrier HAP** — surfaces don't pair up, openings land in the wrong place, and engineers spend more time cleaning the file than running the load.

So I wrote a smaller, focused exporter that writes only what HAP actually consumes.

<a href="https://github.com/DaltonGOO/revit-gbxml" class="hero-btn" style="margin:.5rem 0 1rem;display:inline-block;" target="_blank" rel="noopener">View on GitHub →</a>

<!-- more -->
---

### The idea
- **Leaner output** — geometry and properties HAP reads, nothing it ignores
- **Correct adjacency** — interior surfaces paired so spaces actually connect
- **Openings in place** — doors and windows positioned inside the surface frame
- **Synthesized plenums** — filled in between floors where the model leaves gaps

**Why do this?**
Because the fastest energy model is one you don't have to rebuild by hand. If the geometry is right coming out of Revit, the analysis starts on solid ground instead of a cleanup exercise.

---

### What this enables
- **Trustworthy imports** — HAP loads the file without silent geometry errors
- **Less rework** — MEP teams stop massaging XML and start analyzing
- **A shared baseline** — one exporter everyone can run the same way

It's an early-stage, open tool — the details, install steps, and known rough edges all live on GitHub.

**Tech Stack:**
`C#`, `Revit API`, `gbXML`, `.NET 8`
