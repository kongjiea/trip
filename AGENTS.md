# AGENTS.md

本文件约束在 `E:\study-demo\ai-study\trip` 内协作的代理行为。

## 项目定位

- 这是一个中文旅行攻略网站，当前主题为“中国 10 大热门旅行景点详细攻略展示”。
- 当前 feature 规格位于 [specs/001-china-travel-guides/spec.md](/E:/study-demo/ai-study/trip/specs/001-china-travel-guides/spec.md)。
- 网站目标是帮助用户快速浏览热门景点、进入详情页，并基于统一结构比较不同目的地。

## 优先上下文

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
<!-- SPECKIT END -->

- 如果当前 feature 已有 `plan.md`，先读取该 plan，再动代码。
- 如果当前 feature 还没有 `plan.md`，至少先读取当前 spec 与现有页面文件，再开始改动。
- 当前激活的 feature 目录记录在 `.specify/feature.json`。

## 当前技术与结构

- 当前项目是静态前端站点，不是 React/Next/Vue 项目。
- 主要文件：
  - `index.html`：首页
  - `spots.html`：景点列表页
  - `spot.html`：景点详情页模板
  - `styles.css`：全站样式
  - `app.js`：页面交互与渲染逻辑
  - `data.js`：景点数据源，挂载到 `window.TRIP_DATA`
- 不要无端引入构建工具、包管理器、框架或服务端依赖，除非用户明确要求做技术升级。

## 内容与产品约束

- 所有新增或修改内容默认使用简体中文。
- 站点内容应围绕旅行决策服务，优先提供：景点亮点、最佳季节、交通、门票/预约、建议时长、路线、住宿/美食建议、注意事项。
- 保持不同景点详情页的信息结构一致，便于横向比较。
- 当前范围是内容展示，不包含登录、评论、收藏、下单、支付、后台管理。
- 若涉及门票、开放时间、预约等易变信息，文案应避免伪造实时数据；优先使用“以官方信息为准”这类稳妥表述。

## 改动原则

- 优先复用现有 HTML/CSS/JS 结构，做增量修改。
- 修改 `data.js` 时，保持现有对象结构稳定，避免无理由重命名字段。
- 修改列表页或详情页逻辑时，同时检查 `index.html`、`spots.html`、`spot.html` 与 `app.js` 是否仍然一致。
- 修改视觉样式时，保持当前“山海游记”品牌和中文旅游内容语境，不要突然切换成通用 SaaS 风格。
- 保持移动端可读性，避免长篇攻略在手机上出现难以定位重点的问题。

## 验证要求

- 完成前至少自行检查一次受影响页面的入口链路：
  - 首页到景点列表页
  - 景点列表页到景点详情页
  - 无效景点或空结果场景
- 如果只是文档更新，确认 spec/plan/AGENTS 之间没有明显冲突。
- 如果改动前端展示，优先验证：
  - 页面是否还能直接在浏览器打开
  - 数据渲染是否正常
  - 中文文案、链接和锚点是否有效

## 文档协作

- 做需求相关工作时，优先保持以下文件一致：
  - `AGENTS.md`
  - 当前 feature 的 `spec.md`
  - 后续生成的 `plan.md` 与 `tasks.md`
- 不要在 `AGENTS.md` 中写一次性实现细节；这里应保留长期有效、能指导后续代理的项目规则。
