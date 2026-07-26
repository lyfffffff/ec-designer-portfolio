# EC Design - 设计师作品集网站

基于 Vite + Vue 3 + TypeScript + TailwindCSS 构建的设计师个人作品集网站。

## 技术栈

- **构建工具**: Vite 5
- **框架**: Vue 3 (Composition API + `<script setup>`)
- **语言**: TypeScript
- **样式**: TailwindCSS 3
- **图标**: 内联 SVG

## 项目结构

```
ec-designer-portfolio/
├── image/                    # 作品图片素材 (9 张 jpg)
├── src/
│   ├── components/
│   │   ├── Navbar.vue        # 导航栏
│   │   ├── Hero.vue          # 首屏
│   │   ├── About.vue         # 关于 + 技能
│   │   ├── Works.vue         # 作品展示
│   │   ├── Contact.vue       # 联系方式
│   │   └── Lightbox.vue      # 图片灯箱
│   ├── data/
│   │   └── portfolio.ts      # 作品集数据
│   ├── App.vue               # 根组件
│   ├── main.ts               # 入口文件
│   └── style.css             # 全局样式 + Tailwind 指令
├── index.html                # HTML 入口
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 功能说明

- **响应式设计**: 适配桌面、平板、手机
- **作品筛选**: 按品牌设计/UI/UX/插画分类筛选
- **图片灯箱**: 点击作品卡片查看大图
- **平滑滚动**: 导航锚点平滑跳转
- **滚动动画**: IntersectionObserver 实现渐入效果
- **技能条动画**: 进入视口时触发进度条动画
- **移动端菜单**: 汉堡菜单 + 侧边导航

## 作品数据配置

编辑 `src/data/portfolio.ts` 修改作品信息，包括：
- 设计师个人信息
- 技能列表
- 作品列表 (标题、分类、图片路径、描述)

## 图片素材

`image/` 目录下包含 9 张作品图片 (1.jpg ~ 9.jpg)，路径在 `portfolio.ts` 中引用。

## 待调试问题

以下文件由 AI 对话生成后手动复制到项目中，可能存在以下问题：

1. **依赖版本不匹配**: package.json 中的依赖版本可能需要调整
2. **路径引用错误**: 组件间的 import 路径可能不正确
3. **TailwindCSS 配置**: content 路径可能未正确覆盖所有组件
4. **TypeScript 类型**: 可能存在类型定义缺失或错误
5. **图片路径**: 确认 image/ 目录下的图片文件名与 portfolio.ts 中引用一致

请运行 `npm install && npm run dev` 后根据报错逐一修复。
```

保存好之后，你在新会话里说：

> 帮我调试 `E:\forkFiles\ec-designer-portfolio` 项目，这是一个 Vite + Vue3 + TS + TailwindCSS 的设计师作品集网站，README.md 里有项目结构和待调试说明

新会话的助手可以直接读取文件、运行命令来帮你修。