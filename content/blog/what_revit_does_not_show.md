+++
title = "What Revit Does Not Show You"
date = 2025-10-06
[extra]
image = "/images/blog/what_revit_does_not_show/Thumbnail - What Revit Does Not  Show You.png"
tags = ["revit", "bim", "aec", "automation", "data", "visualization"]
draft = false
+++
<a href="/blog/" class="hero-btn" style="margin-bottom:1.5rem;display:inline-block;">← Back to Blog</a> | <a href="/" class="hero-btn" style="margin-bottom:1.5rem;display:inline-block;">Home</a>

From Revit's opaque model data to explorable structures that let us see how our models actually work.

Revit does a good job of showing you what you built but not what your model *is.*

When I started pulling data out of models, I wasn’t looking for KPIs or dashboards. I wanted to understand how things connect. Which systems talk to which, and which families matter. Even something as small as how an object interacts with rooms or spaces can reveal how consistently data is captured. Once you understand what’s reliable (and what isn’t), you can start writing rules around it.

Over the years I built dozens of dashboards. They looked nice, but they didn’t really *explain* much. They just showed more data.

It took me a little to realize the problem isn’t that we don’t have enough data. It’s that we don’t understand how our workflows connect to it.  
**How we interact with our tools shapes what we see and what we fail to see.**

I once spent days digging into electrical “room insertion” logic. That single investigation led to tools that *survive* messy modeling and still produce trustworthy data.

It’s easy to treat solutions as limited by the tools themselves. Most learn just enough to get through a project, check the boxes, and make the model “work.” But I think there is a lot of value that comes from curiosity. Asking *why* the model behaves the way it does and what its structure reveals about how we work.

To create real value for clients and teams, we have to move past “use the same tools the same way.” We can automate, analyze, and connect data across portfolios yet so much time still disappears into warnings and chasing "perfect" 2D drawings.

We can build systems that *learn* from our projects.  
We can capture knowledge, not just geometry.

---

## Extracted structure

Here’s some raw model data as an **explorable tree**. Interacting with it exposes relationships and hierarchies how the model *thinks*, not just how it looks.

{{ json_viewer_rvt(data="/data/model_snapshot.json", id="tree1") }}

Below is the same data as a **network graph**. Each line is a dependency; each node is a system, element type, or space. This is how models *behave*.

{{ rvt_network(data="data/model_snapshot.json", id="net1") }}

Here is a **3D preview** of that dataset. Once you lift model data into a flexible structure, you can inspect it spatially, logically, or relationally and you get much closer to diagnostics or automated correction.

{{ rvt_preview3d_p5(data="data/model_snapshot.json", id="p5demo1") }}

---

## Why these visuals matter

Once the wiring is visible, patterns and inconsistencies can start to appear.  
And when you can *see* structure, you can write **rules**.

Visualization can allow you to see the relationships between **data** and **automation**.  
You move from *“what is wrong?”* to *“what can I do about it?”* which opens up what I think are interesting possibilities.

Instead of reacting to problems, you can begin to anticipate them, having systems that understand the *intent* behind a model, not just its outputs.

---

## Who benefits

This isn’t just for “tech people.” Designers, BIM managers, and even owners can use these views to ask better questions:

- Why is this system connected that way?  
- What drives that parameter?  
- Is the model behaving how we think it is?  

Once the logic becomes visible, the model stops being a static file and can start acting like a living system that can evolve and adapt.

---

## From visuals to autonomy

Most “model health” tools stop at telling you something’s wrong. That can be useful but not really that impactful.

Instead of simple data reporting, we can build a system that **knows what to do** with what it sees.

If a duct is disconnected, I don’t need a chart.  
I need a system that recognizes the condition and applies a logical reconnection, taking into account design phase, intent, and tolerance.

**Visualization** can help us discover patterns.  
**Automation** helps us respond to them.  
Together, they form the foundation of what I think of as **autonomous interpretation** a model that can explain and improve itself.

Revit doesn’t make these relationships easy to see, but when you pull the data out, you can start to understand the model’s logic directly.

---

### Guiding ideas

- Visuals for exploration.
- Automation for intent-aware action.  
- Human-in-the-loop by default.  
- Traceability.  

---

### What “autonomous” looks like

| Condition | Visual cue | Autonomous action |
|---|---|---|
| Orphan duct connector | Show orphan endpoints | Propose shortest valid reconnection honoring clearance/slope; preview Δlength |
| Missing parameter | Color by family/field | Auto-fill from dictionary or prompt once |
| Clearance violation | Show conflict graph | Minimal-nudge reroute with system priority |
| Space type mismatch | Color by space type | Propose reassignment based on dictionary or vector similarity |


---

### From a tiny rule to a chain of reasoning

Even a small piece of logic like a simple rule can become the foundation for intelligent behavior.
You start with a condition, define a response, then let patterns scale that response across models.

```python
class Segment:
    def __init__(self, id, end_a, end_b):
        self.id = id
        self.end_a = end_a
        self.end_b = end_b

class End:
    def __init__(self, connected_to=None):
        self.connected_to = connected_to

class Element:
    def __init__(self, id, SystemName=None):
        self.id = id
        self.SystemName = SystemName

# --- Rules ---

def is_orphan_duct(seg):
    return (seg.end_a.connected_to is None) or (seg.end_b.connected_to is None)

def missing_param(elem, name):
    return getattr(elem, name, None) in (None, "", 0)

def reconnect(seg):
    return f"Segment {seg.id} reconnected logically."

def fill_from_dict(elem, name):
    fallback = {"SystemName": "Supply Air"}
    value = fallback.get(name)
    setattr(elem, name, value)
    return f"Filled {name} for Element {elem.id} with '{value}'."

def propose_fix(obj):
    if isinstance(obj, Segment) and is_orphan_duct(obj):
        return reconnect(obj)
    elif isinstance(obj, Element) and missing_param(obj, "SystemName"):
        return fill_from_dict(obj, "SystemName")
    else:
        return f"No fix needed for {type(obj).__name__} {obj.id}."

# --- Sample data ---

segments = [
    Segment(1, End(None), End(2)),     # orphan at one end
    Segment(2, End(1), End(3))         # connected both sides
]

elements = [
    Element(10, SystemName="Return Air"),
    Element(11, SystemName=None)
]

# --- Run checks ---
items = segments + elements

for item in items:
    print(propose_fix(item))

```


Each small rule feeds into a broader system of **data → structure → automation**.  
Data defines what exists, structure defines how it connects, and automation defines how it adapts.

That loop **observe → interpret → act** is how design tools start becoming intelligent collaborators rather than just containers of messy data.

Once that foundation exists, automation stops being a collection of one-off scripts or reports and the need for “BIM cops” disappears It becomes a feedback system one that learns from your models, reinforces good behavior, and can even flag weak patterns before they turn into rework.

 
When you go past the surface of your tools, you gain visibility and agency. And automation starts to amplify your decisions instead of hiding them behind black boxes.

{{ data_to_automation(id="flow1", demo="fake", start="click") }}

---

**In short:**  
When you expose model data, you expose logic.  
When you structure it, you gain insight.  
When you automate with that insight, you get tools that *understand* what they’re helping you build.


<a href="/blog/" class="hero-btn" style="margin-bottom:1.5rem;display:inline-block;">← Back to Blog</a> | <a href="/" class="hero-btn" style="margin-bottom:1.5rem;display:inline-block;">Home</a>
