+++
title = "Revit Orchestrator"
date = 2026-06-10
template = "portfolio-page.html"
draft = false
extra = { cover = "images/portfolio/revit-orchestrator/cover.svg" }
summary = "Open-source bridge that connects LLMs to Revit through an MCP server — exposing C#, pyRevit, Dynamo, and multi-step workflows as one catalog of schema-validated tools."
+++

The **Revit Orchestrator** connects Large Language Models to Autodesk Revit. It exposes Revit automation — C# API commands, pyRevit scripts, Dynamo graphs, and composed workflows — as a single catalog of schema-validated tools that any MCP-aware assistant (Claude, OpenAI, or a local model) can call.

The goal isn't a chatbot bolted onto Revit. It's a clean, safe boundary between *intent* and *execution*.

<a href="https://github.com/DaltonGOO/Revit-Orchestrator" class="hero-btn" style="margin:.5rem 0 1rem;display:inline-block;" target="_blank" rel="noopener">View on GitHub →</a>

<!-- more -->
---

### The idea
- **Talk to Revit** — query elements, place families, set parameters, or run a workflow, all through the Model Context Protocol
- **Wrap what you already have** — one JSON file registers a tool and routes it to the right adapter: C#, pyRevit, Dynamo, or workflow
- **Stay safe** — every call is validated against JSON Schema, gated by permissions, and executed inside a Revit transaction on the main thread via `ExternalEvent`
- **Extend without rebuilding** — a filesystem watcher hot-reloads tool definitions; drop a JSON file in and the tool appears in the catalog

**Why do this?**
Because the interesting part of AI-in-AEC isn't the model — it's the guardrails. This is a framework where the LLM proposes and a deterministic, auditable layer disposes.

---

### What this enables
- **One interface, many engines** — C#, Python, and Dynamo behind a unified tool catalog
- **Auditable actions** — schema validation and model-change deltas on every call
- **Room to grow** — new capabilities are configuration, not a new build

Architecture, setup, and provider configuration are documented on GitHub and the [project site](https://daltongoo.github.io/Revit-Orchestrator/).

**Tech Stack:**
`Python 3.11`, `C#`, `.NET 8`, `MCP`, `Named Pipes`, `JSON Schema`
