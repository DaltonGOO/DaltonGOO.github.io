+++
title = "Revit MEP Transparent"
date = 2026-07-15
template = "portfolio-page.html"
draft = false
extra = { cover = "images/portfolio/revit-mep-transparent/cover.svg" }
summary = "A Revit 2026 add-in that replaces the built-in MEP calculation engines with open, readable ones. Pick it in Mechanical Settings and Revit runs code you can audit line by line."
+++

Ask any MEP engineer what Revit does when it sizes a duct and you get a shrug. It computes pressure drop, pipe friction, and fixture demand behind a wall of built-in options (Altshul-Tsal, Colebrook, Haaland) with no way to see the intermediate numbers. Plenty of firms pull the data out and re-run the math in a spreadsheet just to have values they can stamp.

Revit has actually allowed you to replace those engines since 2013, through the External Services framework. It was just never documented or used. This add-in uses it to register calculation servers that show up right next to the built-in ones in Mechanical Settings. Select one and Revit runs this open-source code instead.

<a href="https://github.com/DaltonGOO/RevitMEPTransparent" class="hero-btn" style="margin:.5rem 0 1rem;display:inline-block;" target="_blank" rel="noopener">View on GitHub &#8594;</a>

<!-- more -->

## Try the duct calculation

This is the exact math the duct server runs inside Revit, no black box. Change an input and every step recomputes.

{{ mep_pressure_drop(id="mep1") }}

The duct straight-segment server implements the Darcy-Weisbach pressure drop with the Altshul-Tsal friction factor for turbulent flow and `f = 64/Re` for laminar, hydraulic diameter for round, rectangular, and oval ducts, and a Reynolds classification to decide which branch runs. Every formula is named and cited to ASHRAE Fundamentals, Chapter 21.

## What ships

| Server | Replaces | Status |
|---|---|---|
| Duct straight pressure drop | Built-in duct friction | Working |
| Pipe straight pressure drop | Built-in pipe friction | Working |
| Plumbing fixture flow | Built-in Hunter's Curve | Working |
| Duct fitting pressure drop | Built-in fitting K-factor | Registered (stub) |
| Pipe fitting pressure drop | Built-in fitting K-factor | Registered (stub) |

## Why it matters

Engineers put their name on these numbers. A calculation you can read, verify, and trace to a published source beats one you have to reverse-engineer in a spreadsheet before you trust it. Swapping the engine changes nothing about the workflow: you still pick a calculation method in Mechanical Settings, the model still drives the inputs, only now the method is one you can open up.

**Tech Stack:**
`C#`, `Revit API`, `External Services`, `.NET 8`
