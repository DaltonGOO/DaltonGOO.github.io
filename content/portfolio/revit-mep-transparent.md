+++
title = "Revit MEP Transparent"
date = 2026-07-15
template = "portfolio-page.html"
draft = false
extra = { cover = "images/portfolio/revit-mep-transparent/cover.svg" }
summary = "Open-source, readable replacements for Revit's black-box MEP calculations — transparent duct, pipe, and fixture-flow servers you can audit line by line."
+++

Every MEP engineer using Revit has said some version of *"we don't really know what Revit is doing under the hood."* It calculates duct pressure drops, pipe friction, and fixture demand — but you can't inspect the intermediate values or audit the math.

This add-in fixes that. Using Revit's **External Services framework**, it registers calculation servers that show up right alongside Revit's built-in options — except the code is open, and you can read every line.

<a href="https://github.com/DaltonGOO/RevitMEPTransparent" class="hero-btn" style="margin:.5rem 0 1rem;display:inline-block;" target="_blank" rel="noopener">View on GitHub →</a>

<!-- more -->
---

### The idea
- **Swap the engine, not the workflow** — select a transparent server in Mechanical Settings and Revit uses *this* code instead of its built-in algorithm
- **Show the math** — Darcy-Weisbach, Altshul-Tsal friction factor, Hunter's Curve, hydraulic diameter, Reynolds classification
- **Cite the source** — every formula documented, every variable named, referenced to the ASHRAE Handbook of Fundamentals

**Why do this?**
Because engineers stamp these numbers. A calculation you can read, verify, and trace to a source beats a black box you have to re-run in a spreadsheet just to feel confident.

---

### What this enables
- **Auditable calculations** — no more extracting data to re-check it elsewhere
- **A proof of concept** — Revit has allowed this since 2013; this shows it's practical
- **A base to build on** — transparent duct, pipe, and fixture-flow servers, with fittings next

The full server list, formulas, and install steps are on GitHub.

**Tech Stack:**
`C#`, `Revit API`, `External Services`, `.NET 8`
