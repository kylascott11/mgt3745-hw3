# Architecture

Status: ACTIVE in Module 3.

## Gate

**Three Hard Constraints:**
- *The feature must allow users to create, edit, update, and remove their progress markers.*
- *Progress markers must persist after the user leaves or returns to the program.*
- *Users must be able to see which progress markers are completed and which are incomplete.*

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
