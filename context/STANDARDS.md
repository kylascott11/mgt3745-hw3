# Standards

Status: ACTIVE in Module 3. 

1. **Naming:** *Use descriptive camelCase identifiers. Short conventional event/index names are acceptable when their role is obvious; avoid unnecessary abbreviations. Use names that clearly describe what the variable or function represents. Keep naming consistent between HTML IDs and JavaScript selectors.*
2. **Structure:** *Separate HTML, CSS, and JavaScript into index.html, styles.css, and app.js. Use lexical scope; do not create accidental global variables.*
3. **Comments:** *Use comments to explain the reasoning behind code, especially when AI-assisted code is not immediately understandable. Comments should help another person understand the code without explaining every line. If the code needs a comment to say what it does, rename something.*
4. **Commits:** *Keep commit messages under 10 words. Write them in present tense. Make sure to include a verb and a specific noun. For example, "Add goal tracking" or "Fix status formatting."*
5. **Forbidden:** *Do not use inline styles.*

This file is normative if an adapter or context/CLAUDE.md conflicts. Repair inconsistent copies; do not silently choose different policies for humans and agents.

## Split Test
**Naming:** *This rule applies to every coding task in the project. It stays the same from task to task because descriptive camelCase identifiers and avoiding unnecessary abbreviations promote consistent naming to ensure the code is understandable. If this rule were placed in the wrong place and not applied to every coding task, it would create inconsistency, creating a risk of confusion.*
- **Verdict:** *This rule belongs in CLAUDE.md.*

**Comments:** *This rule applies to some tasks, specifically tasks that involve writing or reviewing code. It changes from task to task because the amount and purpose of comments depend on the difficulty of the code being written and whether the reasoning needs explanation. If it lands in the wrong place, it could cause distraction because the model would carry a task-specific instruction into interactions where comments are not relevant.*
- **Verdict:** *This rule belongs in the prompt for the task that needs it.*
- **Prompt Snippet** *When writing or reviewing code, use comments to explain significant reasoning when the code is not immediately understandable. Do not comment every line; use meaningful names instead.*

**Commits:** *This rule is also task-specific, mainly applying to tasks that involve creating or reviewing commits. However, it stays the same from task to task whenever a commit is being made because the message requirements do not change. If it lands in the wrong place, it could cause confusion because the model may apply commit-specific instructions during tasks that do not involve commits.*
- **Verdict:** *This rule belongs in the prompt for the task that needs it.*
- **Prompt Snippet** *When creating a commit, keep the commit message under 10 words, use present tense, and include a verb and a specific noun.*