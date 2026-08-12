+++
title = "gbXML Exporter for HAP"
date = 2026-04-20
template = "portfolio-page.html"
draft = false
extra = { cover = "images/portfolio/revit-gbxml/cover.svg" }
summary = "A Revit 2025/2026 add-in that writes gbXML tuned for Carrier HAP. It pairs interior surfaces, positions openings in the surface frame, and synthesizes plenums, so the file imports clean instead of needing hand repair."
+++

Revit already exports gbXML. The trouble is what comes out does not sit well with Carrier HAP: interior surfaces do not pair up, openings land outside their host frame, and the vertical gaps between floors come across as holes. The result is a file that imports with silent geometry errors, so the energy model starts as a cleanup job.

This add-in writes a leaner gbXML aimed at exactly what HAP consumes. It targets Revit 2025 and 2026 and HAP v6.2 or newer (gbXML v6.01 / v8.01).

<a href="https://github.com/DaltonGOO/revit-gbxml" class="hero-btn" style="margin:.5rem 0 1rem;display:inline-block;" target="_blank" rel="noopener">View on GitHub &#8594;</a>

<!-- more -->

## See the difference

Here is a two-story section and the gbXML the exporter writes for it. Toggle off the three things Revit's built-in export gets wrong, and watch the geometry and the file break the same way HAP would see it.

{{ gbxml_section(id="gbx1") }}

## What it writes

- **Rooms or MEP Spaces**, your choice
- **Walls**, interior and exterior, paired with adjacency
- **Floors, ceilings, roofs, and slabs**
- **Doors and windows** hosted on walls, skylights on roofs, positioned in the surface frame
- **Plenums** synthesized between rooms that have a vertical gap
- **Constructions, materials, and window thermal properties**, each optional

Every checkbox in the dialog gates exactly one category, so you export what you need and nothing else.

## Workflows

It reads from the active model, or from a linked architectural model. The common MEP setup is rooms and spaces in the current model with walls and openings pulled from the linked architecture, which works as long as the link instance has Room Bounding turned on.

This one is beta and honest about it: the output should always be reviewed before it drives design decisions. Install steps, options, and known rough edges are all on GitHub.

**Tech Stack:**
`C#`, `Revit API`, `gbXML`, `.NET 8`
