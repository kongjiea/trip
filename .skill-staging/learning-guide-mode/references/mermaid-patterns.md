# Mermaid Patterns

Use Mermaid only when it materially improves comprehension.

## 1. Linear Workflow

Use for a standard end-to-end process.

```mermaid
flowchart LR
A[Input] --> B[Step 1]
B --> C[Step 2]
C --> D[Output]
```

## 2. Stepwise Main Flow

Use for a canonical multi-step workflow with ordered stages.

```mermaid
flowchart TD
A[Start] --> B[Spec]
B --> C[Clarify]
C --> D[Plan]
D --> E[Tasks]
E --> F[Implement]
```

## 3. Branching Decision Flow

Use when the guide needs path selection logic.

```mermaid
flowchart TD
A[New request] --> B{Same feature?}
B -->|Yes| C[Update existing spec]
B -->|No| D[Create new spec]
```

## 4. Document Relationship Flow

Use when explaining how artifacts feed each other.

```mermaid
flowchart TD
A[spec.md] --> B[plan.md]
B --> C[tasks.md]
B --> D[data-model.md]
C --> E[implementation]
```

## When To Skip Mermaid

Skip Mermaid when:

- a simple bullet list is clearer
- the topic is too small for a diagram
- the diagram would restate an obvious sequence

## Tree Diagrams

For file and folder structures, prefer a Markdown code block over Mermaid:

```text
project/
├─ docs/
│  └─ guide.md
└─ specs/
   └─ 001-feature/
```

Add a short inline comment after each important item when structure explanation matters.
