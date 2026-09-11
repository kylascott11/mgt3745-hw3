# Architecture

Status: ACTIVE in Module 3.

## Gate

**Hard Constraints:**
- *The feature must allow users to create, edit, update, and remove their progress markers.*
- *Progress markers must persist after the user leaves or returns to the program.*
- *Users must be able to see which progress markers are completed and which are incomplete.*

**3 Options:**
- 1.Hand-built option: *Hand-code the progress marker feature and its data storage.*
- 2.Existing-service option: *Use Supabase to build, store, and manage progress-marker data.*
- 3.AI-Assisted build: *Hand-code the feature with AI assistance for coding and debugging.*

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
| Cost to maintain | 3| 4| 5| 4|
| Time to working | 5| 2| 5| 4|
| Inspectability | 5| 5| 2| 4|
| Switching cost | 2| 4| 2| 4|
| Fit to spec | 5| 3| 3| 5|

## ADR-001

Title and date:
Status:
Door / concrete acquisition and execution choice:
Context:
Decision:
Consequences and revisit trigger:

Keep superseded ADRs. The pedagogical browser build can coexist with a different architecture recommendation; explain the distinction.
