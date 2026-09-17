# Progress Tracker

<!-- Badges are optional but cheap. shields.io generates them from a URL. -->
![Status](https://img.shields.io/badge/Status-In%20Progress-lightblue)
![Module](https://img.shields.io/badge/MGT%203745-HW3-051E39)

> HW3, MGT 3745 O. Replace every [bracketed prompt] with your own writing.
> Lines between `<!--` and `-->` are notes to you. They are invisible on GitHub. Delete them when done.
> This README is the first thing an employer, a teammate, or an agent reads. It makes
> a case for the repository. Show, then tell.

## What
This Progress Tracker is designed to help users determine whether they are doing enough to meet their own expectations and the expectations of their environment. For HW3, I implemented an editable progress-marker feature that allows users to create goals or expectations, assign a status and percentage complete, edit or remove them, and track their progress over time. In-progress markers are ordered by the user's own percentage of completion so users can see which expectations they have made the most progress toward. The larger problem and its framing are described in [PROJECT.md](context/PROJECT.md), and the detailed feature requirements are documented in [FEATURES.md](context/FEATURES.md).


## See It Work
The editable progress markers feature allows users to create a goal, assign a percentage complete, edit the status/goal, and remove it. In-progress markers are automatically ordered from the highest percentage complete to the lowest. If the assigned percentage is 0%, it gets moved to not started. Similarily, if the assigned percentage is 100%, the goal gets moved to the completed list. 

**The following GIF explicates Acceptance Criterion A - 01:**

![Creating a goal/expectation and seeing it add to the progress tracker with the entered name and percentage](docs/a-01.gif)

## How to Run
This project runs inside a GitHub Codespace. No local install.

1. On your repository page, click **Code → Codespaces → Create codespace on main**. Wait for setup to finish; first-boot time varies.
2. Keep the supplied `.devcontainer/devcontainer.json`. It configures Live Server installation and port 5500 forwarding. Once the extension is ready, right-click `index.html` and choose **Open with Live Server**, or use **Go Live**.
3. If a browser tab does not open, use the **Ports** tab to open port 5500. Keep its visibility **Private**.
4. With Live Server running, save your edits to reload the page.

If Live Server is unavailable, run `node scripts/serve.mjs` in the terminal, then open port 5500 from the Ports tab. Refresh the browser after edits when using this fallback; stop it with **Ctrl+C**. Run only one server on port 5500 at a time. The fallback also works locally with Node 22 or later. Serve over HTTP rather than opening `index.html` through `file://`.

## How It Works

```mermaid
flowchart TD
 A[Page opens] --> B[loadProgressTracker: read and validate localStorage]
  B --> C[renderProgressGoals: draw current state]
  D[User submits expectation/goal] --> E{Valid name and whole percentage number from 0 to 100?}
  E -->|No| F[Show validation error and keep input]
  E -->|Yes| G[Create goal/expectation]
  G --> H{saveProgressTracker: storage write succeeds?}
  H -->|No| I[Show save error; keep input and current list]
  H -->|Yes| J[Update in-memory notes]
  J --> K[Sort in-progress markers by percentage complete]
  K --> M[Clear input and announce saved]
```

This diagram describes the Progress Tracker's load-and-add flow. In `app.js`, `loadProgressTracker` reads and validates stored data, `getProgressStatus` determines whether a marker is in progress or completed based on its percentage, and `updateStatusOptions` keeps the available status choices consistent with the percentage entered. `editProgressGoal` and `deleteProgressGoal` add edit and delete functionalities, respectively. `renderProgressGoals` displays the current goals and separates them into not-started, in-progress, and completed sections, while also ordering in-progress markers from highest to lowest percentage complete. The submit handler validates input, creates the goal, saves it, and updates displayed content. 

## Status

| Area | State | Why |
|------|-------|-----|
| Create and display progress markers | Works | [Tested by creating a marker and confirming it appears in the progress list.](docs/a-01.gif) |
| Percentage complete | Works | [Tested with valid percentage values (whole number from 0-100) and confirmed the percentage is displayed with the marker.](docs/a-01.gif) |
| Rank in-progress tasks | Works | [Tested with multiple markers at different percentages and confirmed they are ordered from highest to lowest.](docs/percentageRanking.png) |
| Edit progress markers | Works | [Tested by changing a marker's name, status, and percentage.](docs/editTest.gif) |
| Remove progress markers | Works | [Tested by deleting a marker and confirming it is removed from the list.](docs/deleteTest.gif) |
| Invalid percentage input | Works | [Tested with values outside the allowed 0–100 range or goals with no text input.](docs/errorMessage.png) |
| Data survives reload | Works | [Tested by closing out the program and then clicking Go Live after.](docs/dataReload.gif) |
| Multi-user sync | Deferred | [Browser-local storage does not provide multi-user synchronization: ADR-001](context/ARCHITECTURE.md) |

<details>
<summary>Verification results (click to expand)</summary>

The full verification record for each acceptance criterion, including testing steps, expected and observed results, status, and evidence, is documented in the [Verification Section of FEATURES.md](context/FEATURES.md#verification).

</details>

## Links

Read in this order:

0. [`SCAFFOLD_MANIFEST.md`](SCAFFOLD_MANIFEST.md): explains what carries over from HW2 into HW3, along with a submission checklist
1. [`context/PROJECT.md`](context/PROJECT.md): the problem and its framing
2. [`context/USERS.md`](context/USERS.md): who this is for
3. [`context/FEATURES.md`](context/FEATURES.md): what it must do, and verification results
4. [`context/ARCHITECTURE.md`](context/ARCHITECTURE.md): the gate and ADR-001
5. [`context/STANDARDS.md`](context/STANDARDS.md): the rules this code follows
6. [`context/CLAUDE.md`](context/CLAUDE.md): the same rules, for agents

The scaffold has **eleven canonical files in `/context`: six active files above and five previews**: [STYLE.md](context/STYLE.md), [TOOLS.md](context/TOOLS.md), [SKILLS.md](context/SKILLS.md), [EVALS.md](context/EVALS.md), and [AGENTS.md](context/AGENTS.md). 

## AI Use

<!-- A Delegation Decision Record without the name. From HW5 this becomes a formal DDR. -->

**Tool and task delegated:** *AI assistance drafted and revised the implementation of the editable progress-marker feature, including creating, editing, deleting, sorting, validating, and persisting progress markers. Once I understood the structure of the functions and when to edit `app.js` versus `index.html`, I had an easier time going in and changing the input to produce my desireable output--for example, creating the percentageError message and where I wanted it to appear.*

**Why:** *I delegated the implementation because this project would have taken me days instead of hours to write the entire code I desired for this feature. Additionally, having an agent's help in the beginning made the editing and review process much more seamless to make sure the function fit the spec.*

**How it was checked:** *I reviewed the generated code against `FEATURES.md` and `STANDARDS.md`, tested each acceptance criteria (including the 30 I had before adjusting to HW2 feedback, though many were unable to be tested yet), and revised the implementation when tests failed. In particular, I added validation for invalid percentage input and corrected the logic so that a marker at 100% moves to the Completed section and a marker at 0% moves to the Not Started section. After each code implementation, I would check the live page to make sure the output was what I desired. I also checked all identifiers to make sure they followed camelCase naming. Everything also seemed to be in lexical scope*

**Observed result / evidence:** *A - 02 and A - 07 initially failed during testing and passed after revision. The complete testing record is documented in the [Verification section of FEATURES.md](context/FEATURES.md#verification) and video/screenshot evidence of the working product can be found in the [Status section of this page](README.md#status).*

**Instruction discovery and compliance:** *The AI tool (GitHub Copilot) was used in AI-assisted mode and discovered the applicable project instructions in `CLAUDE.md`, including the coding standards in `STANDARDS.md` and the selected requirements in `FEATURES.md`. The tool demonstrated this by stating, "I’ll read the two required context documents first, then inspect the current `index.html` and replace only its interface structure. I’ll keep the result HTML-only and validate the scaffold without touching CSS, JavaScript, or other files." I manually reviewed the generated changes for compliance with the standards, including descriptive camelCase naming, separation of HTML/CSS/JavaScript, and the prohibition on inline styles and `innerHTML` with user input. Some changes did not fully follow the naming standard, as shown by the casing of `inProgressGoalList` in [this commit](https://github.com/kylascott11/mgt3745-hw3/commit/06b93ecb310d16b9fa05f535a5b8a5491f66e56f).*

**Actual hours on this assignment (optional):** *I did not time the amount spent, but if I had to estimate, I'd say I worked on it for anywhere from 1-4 hours a day across 6 days. If I had to guess, I'd say I probably spent around 10 hours.

## Explain, Change, Verify

[Identify one function and explain its input, state changes, and output in your own words. Link a meaningful before/after code change, state its expected effect, and record the observed behavior and evidence. Explain why the change matters to your selected requirement. This paragraph is part of the existing README submission.]

<!-- Things this README could also do, if they earn their place:
     - GitHub alerts:  > [!NOTE]  > [!WARNING]  > [!TIP]
     - Task lists:     - [x] done   - [ ] not yet
     - Emoji:          :rocket: :white_check_mark:
     - Footnotes:      text[^1]  ...  [^1]: the note
     - Embedded HTML tables, <kbd>Ctrl</kbd>+<kbd>S</kbd>, <sup>, <sub>
     None are required. A README that reads well with none of them beats one that uses all of them. -->
