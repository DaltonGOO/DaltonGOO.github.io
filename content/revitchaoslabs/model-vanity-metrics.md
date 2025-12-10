+++
title ="Model Vanity Metrics"
description ="Track and display fun vanity metrics about your Revit model."
date = 2025-11-25
draft = false
[extra]
tags = ["Revit", "ChaosLabs", "Metrics", "Vanity"]
+++
<a href="/revitchaoslabs/" class="hero-btn" style="margin-bottom:1.5rem;display:inline-block;">← Back to RevitChaosLabs</a> | <a href="/" class="hero-btn" style="margin-bottom:1.5rem;display:inline-block;">Home</a>

## What this tool does

Model Vanity Metrics runs a quick pass on your active Revit model and gives you a fake “score” out of 100, plus a tongue-in-cheek rating like **Model Citizen** or **Full Goblin Mode**.

It is not a real QA tool.  
It’s meant to be a fun way to explore the Revit API and talk about what actually makes models painful to work with.

## Metrics it looks at

Right now the command gathers:

- **Warnings** – `Document.GetWarnings()`
- **CAD imports/links** – `ImportInstance` count
- **In-place families** – `FamilyInstance` where `Family.IsInPlace` is true
- **Detail lines** – elements in `OST_Lines`
- **Groups** – `Group` instances
- **Views (non-template)** – all `View` where `IsTemplate == false`
- **Views without a view template** – `View.ViewTemplateId == InvalidElementId`
- **File size (if saved)** – via `Document.PathName` + `FileInfo`

Each of these feeds a very simple scoring function that starts at 100 and subtracts points based on “model sins”.

## Revit API concepts this demonstrates

If you’re learning the Revit API, this command is a compact example of:

- Getting the **active document** from `ExternalCommandData`
- Using **`FilteredElementCollector`** with:
  - `OfClass(...)`
  - `OfCategory(...)`
  - `WhereElementIsNotElementType()`
- Working with **warnings** via `Document.GetWarnings()`
- Inspecting **families** (`FamilyInstance` → `Family.IsInPlace`)
- Checking **view templates** via `View.ViewTemplateId`
- Basic **TaskDialog** usage to show a formatted string

## Why I call it "vanity" metrics

These numbers are mostly about “how this model looks on paper”, not whether it will actually coordinate or build correctly.

It’s meant to spark questions like:

- Why do warnings matter?
- When are CAD imports actually a problem?
- Are in-place families always bad, or just easy to abuse?
- Should every view really have a template?

## How to run it

1. Open any Revit model (preferably a test model).
2. Go to the **Chaos Lab** tab.
3. Under the **Safe** panel, click **Model Vanity Metrics**.
4. Read the score and decide if you’re a **Model Citizen** or in **Full Goblin Mode** today.