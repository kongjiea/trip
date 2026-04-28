---
name: learning-guide-mode
description: Summarize a conversation, debugging session, workflow discussion, or learning topic into a practical single-file study guide. Use when the user wants reusable notes, structured recap, examples, Mermaid diagrams, or a commented directory tree instead of a raw chat transcript.
license: MIT
---

# Learning Guide Mode

Create a single-file Markdown guide that turns messy discussion into reusable learning material.

## Use When

Use this skill when the user wants any of the following:

- a learning guide or study notes
- a structured recap instead of chat transcript
- a workflow walkthrough
- a single-file Markdown summary
- Mermaid diagrams for process understanding
- a commented tree diagram for files or directories
- reusable examples, cases, or quick-reference material

Typical user phrasing:

- "Summarize this as a learning guide"
- "Organize this into study notes"
- "Turn this into a reusable guide"
- "Output a single-file Markdown guide"
- "Add Mermaid diagrams where helpful"

## Quick Invocation

Use these phrases when you want to trigger this skill reliably in a new session.

Shortest form:

```text
按学习指南模式整理这次内容。
```

Structured form:

```text
按学习指南模式整理这次内容：提炼核心结论，按“使用环境、标准流程、场景分流、判断规则、结构图、案例、常见错误”组织，输出单文件 Markdown，必要时补 Mermaid 流程图和带注释的目录结构图，语言偏实用、少废话。
```

Write-to-file form:

```text
按学习指南模式整理这次内容，并输出到当前项目的 xxx.md。
```

If you want more examples, read `references/trigger-phrases.md`.

## Default Output Contract

Unless the user says otherwise, produce:

- one Markdown document
- practical tone, low fluff
- conclusion-first structure
- grouped by workflow and scenarios, not by message chronology
- Mermaid diagrams only when they improve understanding
- a commented tree diagram when the topic includes project or file structure

Do not simply paraphrase the conversation. Extract durable knowledge and reorganize it.

## Default Sections

Use the following sections when they fit the topic:

1. Core Takeaways
2. Environment or Context
3. Standard Workflow
4. Scenario Branches
5. Decision Rules
6. File or Directory Structure
7. Examples
8. Common Mistakes
9. Quick Reference

Remove sections that are clearly irrelevant. Do not add filler sections.

## Workflow

1. Identify the durable topic.
   - Distinguish between ephemeral troubleshooting details and reusable lessons.
   - Preserve only the details needed for future repetition.

2. Rebuild the material around user tasks.
   - Prefer task-based groupings such as workflow, scenarios, decision rules, and structure.
   - Avoid chronological retelling.

3. Add diagrams selectively.
   - Add Mermaid flowcharts for multi-step workflows or branching decisions.
   - Add a commented tree diagram when the topic involves files, directories, or project layout.
   - Skip diagrams when they add no value.

4. Normalize the language.
   - Be direct and concise.
   - Prefer stable terminology.
   - Avoid motivational or tutorial padding.

5. Make the output reusable.
   - Include copyable examples when commands or prompts matter.
   - Include a quick-reference ending when the topic benefits from it.

## Topic-Specific Rules

### Workflow-heavy topics

Examples: CLI usage, spec-driven development, release flow, setup guides.

- Prioritize: Standard Workflow, Scenario Branches, Decision Rules
- Include at least one Mermaid flowchart

### Structure-heavy topics

Examples: repository layout, spec folders, docs organization, skill layout.

- Prioritize: File or Directory Structure
- Include a full commented tree diagram

### Troubleshooting-heavy topics

Examples: installation issues, environment conflicts, authentication or rate limits.

- Prioritize: Core Takeaways, Environment or Context, Common Mistakes, Quick Reference
- Keep transient logs out unless they teach a stable lesson

## Output Rules

- Default to Markdown
- Prefer one file unless the user explicitly asks for split files
- Use headings only where they improve scanning
- Use flat bullet lists; avoid nested bullets unless unavoidable
- Use code blocks for commands, prompt templates, and tree diagrams
- Keep examples short and copyable

## If The User Asks For File Output

When the user asks to write the guide to a file:

- preserve the same single-file structure
- keep diagrams in Mermaid or Markdown form
- do not split the guide unless explicitly requested

## References

- For the standard section skeleton and pruning rules, read `references/output-structure.md`.
- For Mermaid patterns and when to use them, read `references/mermaid-patterns.md`.
- For reusable trigger phrases and invocation examples, read `references/trigger-phrases.md`.
