# Output Structure

Use this as the default section skeleton for a single-file learning guide.

## Preferred Order

1. Core Takeaways
2. Environment or Context
3. Standard Workflow
4. Scenario Branches
5. Decision Rules
6. File or Directory Structure
7. Examples
8. Common Mistakes
9. Quick Reference

## Section Purpose

### Core Takeaways

Use first. Summarize the durable conclusions in a few bullets or short paragraphs.

### Environment or Context

Include when the user needs to know where commands run, which tool owns which step, or which environment matters.

### Standard Workflow

Include when the topic is a process. Show the canonical step order first.

### Scenario Branches

Include when there are distinct paths such as:

- first-time setup
- iterative update
- new independent feature
- removal or retirement

### Decision Rules

Include when the user repeatedly asks "which path should I use?"

### File or Directory Structure

Include when the topic involves folders, generated artifacts, shared docs, specs, or skills.

### Examples

Include copyable prompt, command, or workflow examples.

### Common Mistakes

Include only the highest-frequency mistakes that materially affect execution.

### Quick Reference

End with the smallest useful recap: key commands, key flow, or key rules.

## Pruning Rules

Drop sections that do not fit the topic.

- No file tree if the topic has no file structure
- No workflow section if the topic is purely conceptual
- No scenario section if there is only one path

## Style Rules

- Prefer concise headings
- Prefer stable terminology
- Prefer action-oriented phrasing
- Do not mirror the chat's chronology
