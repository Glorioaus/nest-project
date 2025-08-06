# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此代码仓库中工作时提供指导。

## 命令

### 开发命令
- `npm run start:dev` - 启动开发服务器并启用热重载（推荐用于开发）
- `npm run start:debug` - 以调试模式启动并启用热重载
- `npm run build` - 构建应用程序到 `dist/` 目录
- `npm run start:prod` - 从 `dist/main.js` 运行生产构建

### 测试命令
- `npm run test` - 运行单元测试（Jest 配合 ts-jest 转换器）
- `npm run test:watch` - 以监听模式运行测试
- `npm run test:cov` - 生成测试覆盖率报告
- `npm run test:e2e` - 使用独立的 Jest 配置运行端到端测试
- `npm run test:debug` - 使用 Node 检查器调试测试

### 代码质量命令
- `npm run lint` - 在 TypeScript 文件上运行 ESLint 并自动修复
- `npm run format` - 使用 Prettier 格式化代码

## 架构

这是一个遵循标准 NestJS 模式的 NestJS TypeScript 启动项目：

### 核心结构
- **`src/main.ts`** - 应用程序入口点，在端口 3000 上启动 NestJS 应用
- **`src/app.module.ts`** - 使用 `@Module` 装饰器的根应用模块
- **`src/app.controller.ts`** - 具有基本 HTTP 端点处理器的根控制器
- **`src/app.service.ts`** - 使用 `@Injectable` 装饰器的根服务，包含业务逻辑

### 关键配置
- **TypeScript 配置**: 使用 `nodenext` 模块解析，启用 ESM 互操作性
- **ESLint**: 配置了 TypeScript ESLint 推荐规则、Prettier 集成和自定义规则覆盖
- **测试**: Jest 配置用于单元测试（`src/`）和 e2e 测试（`test/`），使用 ts-jest 转换器
- **构建**: NestJS CLI 处理编译，输出到 `dist/` 目录

### 模块模式
应用程序遵循 NestJS 的模块化架构，其中：
- 控制器处理 HTTP 请求和响应
- 服务包含业务逻辑并支持依赖注入
- 模块将控制器、提供者和导入连接在一起
- 装饰器（`@Controller`、`@Injectable`、`@Module`、`@Get`）定义组件行为

### 测试策略
- 单元测试：`src/` 中源代码旁边的 `.spec.ts` 文件
- E2e 测试：`test/` 目录中的 `.e2e-spec.ts` 文件，使用独立的 Jest 配置
- 覆盖率报告生成到 `coverage/` 目录

## 开发说明

### 环境要求
- Node.js >= 20.0.0
- npm >= 10.0.0

### 典型工作流程
1. 使用 `npm run start:dev` 进行开发，启用热重载
2. 在提交前运行 `npm run lint` 和 `npm run test`
3. 使用 `npm run build` 构建用于生产部署
4. 使用 `npm run test:e2e` 进行集成测试