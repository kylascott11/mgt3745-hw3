# Architecture

Status: ACTIVE in Module 3.

## Gate
**Hard Constraints:**
- *The feature must allow users to create, edit, update, and remove their progress markers.*
- *Progress markers must persist after the user leaves or returns to the program.*
- *Users must be able to see which progress markers are completed and which are incomplete.*

**3 Options:**
- **1. Hand-built option:** *Hand-code the progress marker feature and its data storage.*
- **2. Existing-service option:** *Use Supabase to build, store, and manage progress-marker data.*
- **3. AI-Assisted build:** *Hand-code the feature with AI assistance for coding and debugging.*

**1/3/5 Scoring Definition:**
*For each criterion, a score of 1 means "least favorable," 3  means "moderate," and 5 means "most favorable."*
- *For cost to start: 5 represents the lowest cost*
- *For time to working: 5 represents the shortest time*
- *For inspectability: 5 represents the easiest option to inspect* 
- *For switching cost: 5 represents the easiest option to swap later*
- *For fit to spec: 5 represents the option that best supports requirements in FEATURES.md*

Name hard constraints and three concrete options. Weights and scores use 1–5; a score of 5 always means most favorable. Define 1/3/5 anchors. Multiply weights by scores and sum. Record estimates and run one sensitivity check.

| Criterion | Weight | Hand-built option | Existing-service option | AI-assisted build |
|---|---:|---:|---:|---:|
| Cost to start | 3| 5| 4| 5|
| Cost to maintain | 5| 2| 5| 4|
| Time to working | 3| 2| 5| 4|
| Inspectability | 5| 5| 2| 3|
| Switching cost | 3| 4| 2| 4|
| Fit to spec | 5| 3| 4| 5|

**Option Scores:**
- **1. Hand-built option:** *83*
- **2. Existing-service option:** *88*
- **3. AI-Assisted build:** *89*
- **Sensitivity Analysis:** *If I were to reverse the weights of the criteria by increasing the weights of cost to start, time to working, and switching cost from 3 to 5, while decreasing the weights of cost to maintain, inspectability, and fit to spec from 5 to 3, the AI-assisted build remained the highest-scoring option at 97, compared with 88 for the existing-service option and 85 for the hand-built option. This reversal of weights tests whether the preferred option changes when different considerations are prioritized over my chosen important criterion: maintenance, inspectability, and fit to the spec. I cannot yet read server code well enough to create it entirely myself or check it, leading to a lower inspectability score for the AI-assisted build.*

## ADR-001

- Title and date: *Delegate editable progress markers to AI assistance - 9-11-2026*
- Status: *Accepted*
- Door / concrete acquisition and execution choice: *Delegate*
- Context: *FEATURES.md requires users to create, edit, update, view, and remove their own progress markers. The feature must persist progress markers and cannot rank users. The budget is zero, and I cannot yet read server code well enough to create or check an entire implementation myself.*
- Decision: *Delegate development of the editable progress-marker feature to AI assistance. I will review and test the implementation against the specification.*
Consequences and revisit trigger: 
-  *Easier: faster development, less technical difficulty with implementation* 
- *Harder: difficulty inspecting the code, especially if the code requires debugging; does not guarantee that all acceptance criteria will be met*
- *Revisit: Module 4, when a database becomes available; if the architecture changes, write ADR-002 and supersede this decision*

Keep superseded ADRs. The pedagogical browser build can coexist with a different architecture recommendation; explain the distinction.
