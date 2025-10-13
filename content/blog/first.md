+++
title = "ductloss automation"
date = 2025-07-24
tags = ["zola", "blog", "sample"]
draft = true
+++

# Automating Duct Loss Calculations in Dynamo

A while back, a designer showed me the way they were manually calculating duct losses for submittals by manually inputting duct data one by one in Excel. It worked, but it was time-consuming and error-prone. So, I decided to build an automation to handle the repetitive part.


*This post isn’t about sharing company-specific workflows — it’s about the broader idea of using automation to make everyday design tasks more efficient.*

## The Idea

Instead of relying on manual exports, the goal was to create a Dynamo workflow that could:
- Collect duct data directly from Revit  
- Organize it by system  
- Detect how the ducts are connected  
- And export everything neatly to Excel for quick review or further analysis  

This wasn’t about reinventing the process — just removing the manual steps.

## How It Works

The Dynamo graph (called *Ductloss to Excel*) pulls essential parameters like:
- System Type  
- Duct Size (Width, Height, or Diameter)  
- Length and Angle  
- Connected elements (using a few customPython nodes to detect adjacency)

Once collected, the data is sorted in logical order and written to Excel using Dynamo’s `Data.ExportToExcel` node. The result is a clean table, ready for friction or fitting loss calculations without having to rebuild anything by hand.

## What’s Next

The next step is turning this into a complete duct loss tool — calculating friction loss per segment, applying K-factors for fittings, and outputting the total pressure drop automatically.  

It’s also a good testbed for integrating other technologies like pyRevit or even offloading heavy calculations to Rust for speed.

## Why It Matters

Little tools like this show how practical automation can start. It’s not about complex AI or massive scripts — it’s about identifying something repetitive, understanding how people actually do it, and building around that.

Automation doesn’t have to replace the designer’s judgment — it just gives them more time to use it.

---

*Posted in the spirit of sharing process and learning. This project was created independently to explore better ways to connect Revit data to analysis workflows.*
