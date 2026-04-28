# Web开发全流程工具与工作流建议

## 一、基础能力插件类

包含：

- `Playwright MCP`
- `GitHub MCP`
- `Figma MCP`
- `OpenAI Docs MCP`

同类对比：

- 这一类不是工作流框架，而是底层能力层
- 不管你用什么开发方法，通常都应该先有这层
- 这层和 `Spec Kit`、`Superpowers` 不冲突

这一类推荐顺序：

1. `Playwright MCP`
2. `GitHub MCP`
3. `Figma MCP`
4. `OpenAI Docs MCP`

## 二、前端设计 / UI 强化类

包含：

- `ui-ux-pro-max`
- `frontend-skill`
- 其他 `ui / ux / design / best-practices` 类 skill

同类对比：

- 这一类主要解决前端质量，不解决完整工程流程
- 如果只装一个，优先 `ui-ux-pro-max`
- 如果想更稳，可以 `ui-ux-pro-max + frontend-skill`
- 其他设计类 best-practices 通常优先级更低

这一类推荐顺序：

1. `ui-ux-pro-max`
2. `frontend-skill`
3. 其他设计类 best-practices

## 三、规格驱动类

包含：

- `Spec Kit`
- `OpenSpec`

同类对比：

- 这一类处理的是“想法如何变成明确规格”
- 如果你要从需求、边界、验收、任务拆解开始标准化，优先这层
- 这一层和 `Superpowers` 是互补关系，不是竞争关系
- 在这一类里，当前更优先 `Spec Kit`

这一类推荐顺序：

1. `Spec Kit`
2. `OpenSpec`

## 四、计划落盘 / 长任务推进类

包含：

- `Planning with Files`
- `GSD`
- 其他 `planner / workflow / execution-plan` 类 skill

同类对比：

- 这一类处理的是“复杂任务如何持续推进”
- `Planning with Files` 更通用、更稳、更容易和别的体系兼容
- `GSD` 更强调纪律、状态、步骤约束
- 这一类和 `Spec Kit` 有衔接，但不完全等价

这一类推荐顺序：

1. `Planning with Files`
2. `GSD`
3. 其他 planner / workflow skill

## 五、执行编排 / 工程方法学类

包含：

- `Superpowers`
- `GSD`
- 部分 `subagent / execution / review-driven` 类 skill

同类对比：

- 这一类处理的是“规格出来后，怎么工程化推进实现”
- 在这一层里，`Superpowers` 是最有代表性的
- `GSD` 和它有重叠，但 `Superpowers` 更像一整套完整方法学
- 所以如果你问“这类里谁最值得优先考虑”，答案就是 `Superpowers`

这一类推荐顺序：

1. `Superpowers`
2. `GSD`
3. 其他 execution / workflow skill

## 六、测试 / 验证 / 质量门禁类

包含：

- `Playwright MCP`
- `Superpowers` 里的 `test-driven-development / requesting-code-review`
- 其他 `TDD / review / verification` 类 skill

同类对比：

- 这类里有两种东西：
  - `Playwright MCP` 这种能力型工具
  - `Superpowers` 这种流程型框架
- 两者不是直接替代关系
- 如果你要“能测”，优先 `Playwright MCP`
- 如果你要“强制测试和评审流程”，优先 `Superpowers`

这一类推荐顺序：

1. `Playwright MCP`
2. `Superpowers`
3. 其他测试 / review skill

## 七、记忆 / 持久上下文类

包含：

- `AGENTS.md`
- `Basic Memory`
- `Contynu`
- `Hindsight`

同类对比：

- 这一类处理的是“跨会话、长项目、多人/多模型协作时如何不失忆”
- 第一层永远先是 `AGENTS.md`
- 真要上工具，优先 `Basic Memory`
- 多模型切换明显时，再看 `Contynu`

这一类推荐顺序：

1. `AGENTS.md`
2. `Basic Memory`
3. `Contynu`
4. `Hindsight`

## 八、技能发现 / 技能生态类

包含：

- `find-skills`
- `agent-skills`
- 其他 marketplace / gallery / directory

同类对比：

- 这一类不是核心工作流，只是补生态
- 如果只保留一个入口，优先 `find-skills`
- `agent-skills` 更适合按需挑单个 skill，不适合整仓全装

这一类推荐顺序：

1. `find-skills`
2. `agent-skills`
3. 其他 gallery / directory

## 九、自定义 skill 创作类

包含：

- `skill-creator`
- 第三方 `create-skill / build-skill` 工具

同类对比：

- 这一类服务的是“你自己扩能力”
- 如果不是专门做技能体系，不属于第一优先级
- 真要自己做，优先官方 `skill-creator`

这一类推荐顺序：

1. `skill-creator`
2. 其他第三方 skill creator

## 十、工作流分层

### 1. 想法到规格层

推荐：

- `Spec Kit`

这一层负责：

- 把模糊想法变清楚
- 把目标、边界、约束、验收写出来
- 把任务拆到可执行

这一层更优先推荐：

1. `Spec Kit`
2. `OpenSpec`

### 2. 规格到执行层

推荐：

- `Planning with Files`
- `Superpowers`

这一层负责：

- 把 spec 变成长期可追踪的执行过程
- 把任务状态、实施顺序、验证结果沉淀下来

同类对比：

- 偏通用稳定推进，优先 `Planning with Files`
- 偏完整工程框架，优先 `Superpowers`

这一层推荐顺序：

1. `Planning with Files`
2. `Superpowers`
3. `GSD`

### 3. 执行到验证层

推荐：

- `Playwright MCP`
- `Superpowers`

这一层负责：

- 自动化验证
- TDD / 回归 / review / 完成前核验

同类对比：

- 偏“工具能力”，优先 `Playwright MCP`
- 偏“流程纪律”，优先 `Superpowers`

这一层推荐顺序：

1. `Playwright MCP`
2. `Superpowers`

### 4. 长期协作与续航层

推荐：

- `GitHub MCP`
- `Basic Memory`
- `AGENTS.md`

这一层负责：

- 让项目长期稳定迭代
- 让上下文、规范、协作状态不丢失

这一层推荐顺序：

1. `GitHub MCP`
2. `AGENTS.md`
3. `Basic Memory`
4. `Contynu`

## 十一、全局标准工作流组合

### 1. 标准基础流

包含：

- `Playwright MCP`
- `GitHub MCP`
- `ui-ux-pro-max`
- `Basic Memory`

### 2. 标准规范流

包含：

- `Spec Kit`
- `Playwright MCP`
- `GitHub MCP`
- `Basic Memory`
- `ui-ux-pro-max`

### 3. 标准工程流

包含：

- `Spec Kit`
- `Superpowers`
- `Playwright MCP`
- `GitHub MCP`
- `Basic Memory`
- `ui-ux-pro-max`
