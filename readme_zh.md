# Capital Advisors — Next.js 模板

一套现代、多页面的 Next.js 网站模板，专为投资公司、资本顾问和金融服务企业设计。采用精致的绿金配色方案，搭配简洁的排版、滚动渐显动画和专业的商务风格。

## 技术栈

- **框架：** Next.js 16（App Router）
- **语言：** TypeScript
- **样式：** CSS（全局样式表 + CSS 自定义属性）
- **字体：** Inter（Google Fonts）
- **动画：** Intersection Observer 滚动渐显

## 页面路由

| 路由 | 说明 |
|---|---|
| `/` | 首页 — 主视觉、数据统计、服务、行业、案例、方法论、洞察、行动号召 |
| `/about` | 关于我们 — 编辑式双栏布局、为什么选择我们、团队网格及个人档案链接 |
| `/about/meet-team/[name]` | 团队成员个人详情页（共 3 位） |
| `/services` | 服务 — 定制融资与财务顾问服务详情 |
| `/industries` | 行业 — 养老住宅、教育、医疗及其他领域 |
| `/case-studies` | 案例列表 — 精选案例及详情页入口 |
| `/case-studies/[slug]` | 单个案例详情页（3 个含完整内容） |
| `/insights` | 洞察 — 市场评论、交易公告、观点归档 |
| `/contact` | 联系我们 — 表单、办公信息、联系方式卡片、沟通预期 |

## 项目结构

```
captial-invest/
├── app/
│   ├── about/
│   │   ├── meet-team/
│   │   │   ├── jane-mitchell/page.tsx
│   │   │   ├── robert-chen/page.tsx
│   │   │   └── sarah-williams/page.tsx
│   │   └── page.tsx
│   ├── case-studies/
│   │   ├── [slug]/page.tsx
│   │   ├── data.ts
│   │   └── page.tsx
│   ├── components/
│   │   ├── RevealOnScroll.tsx
│   │   ├── SiteFooter.tsx
│   │   └── SiteNav.tsx
│   ├── contact/page.tsx
│   ├── industries/page.tsx
│   ├── insights/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/assets/clients/    ← 客户 Logo 图片
├── package.json
└── tsconfig.json
```

## 设计令牌

`globals.css` 中定义的关键 CSS 变量：

| 变量 | 色值 | 用途 |
|---|---|---|
| `--green-deep` | `#395f40` | 标题、主按钮、页脚背景 |
| `--green-mid` | `#2f4f35` | 悬停状态、链接 |
| `--green-surface` | `#f2f5f3` | 卡片背景 |
| `--gold` | `#b8943f` | 强调文字、图标、标签 |
| `--gold-light` | `#d4b96a` | 深色背景上的强调色 |
| `--text-primary` | `#1a1d1b` | 正文文字 |
| `--text-secondary` | `#5a615d` | 辅助文案 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

在浏览器中访问 [http://localhost:3000](http://localhost:3000)。

## 自定义指南

**品牌信息：** 将文件中的 "Capital Advisors" 替换为您的公司名称。关键位置：
- `app/layout.tsx` — 页面元数据标题和描述
- `app/components/SiteNav.tsx` — `.nav-logo-text` 和链接文本
- `app/components/SiteFooter.tsx` — 公司名称、地址、电话

**配色方案：** 编辑 `app/globals.css` 第 29-41 行（`:root` 代码块）中的 CSS 变量。

**文案内容：** 每个页面都是独立的 React 组件，可直接在对应的 `page.tsx` 文件中编辑文案、图片和数据。

**团队成员：** 编辑 `app/about/page.tsx` 中的 `teamMembers` 数组，并更新 `app/about/meet-team/` 下的个人档案页。

**案例研究：** 编辑 `app/case-studies/data.ts` 来添加、删除或修改案例条目。

**联系方式：** 在 `app/contact/page.tsx` 中替换占位电话、地址和 Google 地图链接。

## 许可证

本模板仅供 themedown 项目使用。
