# Monorepo 项目模板

这是一个基于 pnpm workspace 的 monorepo 基础模板，支持多应用和多包管理。

## 📋 项目结构

```
.
├── apps/          # 应用程序目录
├── packages/      # 共享包目录
├── package.json   # 根 package.json
├── pnpm-workspace.yaml  # pnpm workspace 配置
├── eslint.config.mjs    # ESLint 配置
└── README.md      # 项目说明文档
```

## 🛠️ 技术栈

- **包管理器**: pnpm@10.28.1
- **Monorepo 工具**: pnpm workspace + Turbo
- **代码规范**: ESLint (使用 @antfu/eslint-config)
- **React 支持**: 已配置 React 相关 ESLint 规则

## 📦 依赖说明

### 开发依赖

- `@antfu/eslint-config`: ESLint 配置预设
- `@eslint-react/eslint-plugin`: React ESLint 插件
- `eslint`: ESLint 核心
- `eslint-plugin-react-hooks`: React Hooks 规则
- `eslint-plugin-react-refresh`: React Refresh 规则
- `turbo`: Monorepo 构建和任务管理工具

## 🚀 快速开始

### 前置要求

- Node.js (推荐使用 LTS 版本)
- pnpm@10.28.1 或更高版本

### 安装依赖

```bash
pnpm install
```

### 添加新的应用

在 `apps/` 目录下创建新的应用：

```bash
mkdir apps/my-app
cd apps/my-app
# 初始化你的应用（如 Next.js、Vite 等）
```

### 添加新的共享包

在 `packages/` 目录下创建新的共享包：

```bash
mkdir packages/my-package
cd packages/my-package
# 初始化你的包
```

## 📝 可用脚本

### 代码检查与修复

```bash
# 运行 ESLint 并自动修复问题
pnpm lint:fix
```

## 🔧 配置说明

### pnpm workspace

项目使用 pnpm workspace 管理多个包，配置文件为 `pnpm-workspace.yaml`：

- `packages/*`: 所有共享包
- `apps/*`: 所有应用程序

### ESLint

使用 Antfu 的 ESLint 配置，已启用 React 支持。配置文件位于 `eslint.config.mjs`。

## 📚 开发指南

### 工作区包引用

在 monorepo 中，你可以直接引用其他工作区包：

```json
{
  "dependencies": {
    "@my-org/my-package": "workspace:*"
  }
}
```

### 运行特定应用或包的脚本

```bash
# 在根目录运行特定包的脚本
pnpm --filter <package-name> <script>

# 例如：运行 apps/my-app 的 dev 脚本
pnpm --filter my-app dev
```

### 使用 Turbo 进行任务管理

虽然项目已安装 Turbo，但需要在使用前配置 `turbo.json`。Turbo 可以帮助：

- 并行运行任务
- 缓存构建结果
- 只运行受影响的任务

## 🤝 贡献指南

1. 在 `apps/` 或 `packages/` 目录下创建你的应用或包
2. 确保代码通过 ESLint 检查
3. 遵循项目的代码规范

## 📄 许可证

ISC

## 🔗 相关资源

- [pnpm 文档](https://pnpm.io/)
- [Turbo 文档](https://turbo.build/repo/docs)
- [Antfu ESLint Config](https://github.com/antfu/eslint-config)
