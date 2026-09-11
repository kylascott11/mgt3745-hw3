# Standards

Status: ACTIVE in Module 3. Adapt these rules to your feature and follow them.

1. Use descriptive camelCase identifiers. Short conventional event/index names are acceptable when their role is obvious; arbitrary minimum name lengths are unnecessary. Use names that clearly describe the tracker feature, such as `progressTracker`, `trackerStatus`, and `completedGoals`.
2. Separate HTML, CSS, and JavaScript into index.html, styles.css, and app.js. Use lexical scope; do not create accidental global variables. Keep the tracker structure in HTML, its appearance in CSS, and its behavior in JavaScript.
3. Explain important reasons in comments, not a narration of every statement. Remove temporary debug output before submission. 
4. Write commit messages that name the changed behavior and purpose. For example, "Add goal tracking" or "Fix status update."
5. Use textContent for user text. Never insert user strings through innerHTML.
6. Associate form controls with labels and make success/error feedback perceivable. Preserve unsaved tracker input when a write fails.

This file is normative if an adapter or context/CLAUDE.md conflicts. Repair inconsistent copies; do not silently choose different policies for humans and agents.
