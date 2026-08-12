+++
title = "Revit Orchestrator"
date = 2026-06-10
template = "portfolio-page.html"
draft = false
extra = { cover = "images/portfolio/revit-orchestrator/cover.svg" }
summary = "An open-source bridge that lets an LLM drive Revit safely. C#, pyRevit, Dynamo, and workflows become one catalog of schema-validated tools, called over MCP and committed inside real Revit transactions."
+++

Wiring a language model to Revit is easy to do badly. The interesting problem is not getting the model to talk, it is making sure that when it acts, the action is validated, routed to the right engine, run on the right thread, and logged. That boundary between what the model asks for and what actually touches the model is the whole project.

Revit Orchestrator exposes Revit automation, whether it is a C# API command, a pyRevit script, a Dynamo graph, or a composed multi-step workflow, as a single catalog of tools with typed JSON Schemas. Any MCP-aware assistant (Claude, OpenAI, or a local model through Ollama or LM Studio) can call them.

<a href="https://github.com/DaltonGOO/Revit-Orchestrator" class="hero-btn" style="margin:.5rem 0 1rem;display:inline-block;" target="_blank" rel="noopener">View on GitHub &#8594;</a>

<!-- more -->

## Follow a call through the system

Pick an instruction and run it. Each call takes the same path: the model proposes, the server validates against a schema, the router picks an adapter, and the C# add-in commits the work on Revit's main thread.

{{ orchestrator_flow(id="orq1") }}

## How the pieces fit

```
 LLM provider          Python MCP server        C# Revit add-in
 (Claude/OpenAI)  <->  (stdio, schema check) <->  (named pipe, JSON)
                            router: revit           ExternalEvent bridge
                                    pyrevit          Revit API, main thread
                                    dynamo
                                    workflow
```

A single JSON file registers a tool: its schema, its permissions, and which adapter runs it. A filesystem watcher hot-reloads that folder, so dropping a new definition in makes the tool appear in the catalog without a rebuild.

## The guardrails

- **Schema-validated.** Every call is checked against a typed JSON Schema before anything runs.
- **Permissioned.** Tools declare what they are allowed to touch, with preconditions checked up front.
- **Transaction-safe.** Work executes inside a Revit transaction on the main thread through `ExternalEvent`, never off-thread.
- **Auditable.** Each call is logged with the model-change delta it produced, so you can see exactly what moved.

The model proposes. A deterministic layer disposes. That split is what makes it safe to point an LLM at a live model.

Architecture, provider setup, and the packaged installer are documented on GitHub and the [project site](https://daltongoo.github.io/Revit-Orchestrator/).

**Tech Stack:**
`Python 3.11`, `C#`, `.NET 8`, `MCP`, `Named Pipes`, `JSON Schema`
