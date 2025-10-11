# 部署指南

本项目使用GitHub Actions进行CI/CD自动化部署。以下是配置和使用说明：

## 配置要求

### 1. GitHub Secrets

在GitHub仓库中需要配置以下Secrets：

- `DOCKERHUB_USERNAME`: DockerHub用户名
- `DOCKERHUB_TOKEN`: DockerHub访问令牌（需要有push权限）

如果使用了部署到远程服务器的步骤，还需要：
- `SERVER_HOST`: 服务器地址
- `SERVER_USERNAME`: 服务器用户名
- `SERVER_KEY`: SSH私钥（用于连接服务器）

### 2. 环境变量

在`.env.template`中定义了需要的环境变量，部署前请确保正确配置。

## CI/CD流程

### 触发条件
- 推送到`main`或`master`分支时触发完整CI/CD流程
- 拉取请求到`main`或`master`分支时只运行构建和测试

### 工作流步骤

1. **构建和测试阶段**
   - 检出代码
   - 设置Node.js环境
   - 安装依赖
   - 构建项目
   - 运行代码检查（如果有）

2. **Docker构建和推送阶段**
   - 仅在推送到主分支时运行
   - 构建Docker镜像
   - 推送到DockerHub，标签包括：
     - 提交SHA
     - 分支名
     - 语义化版本（如果适用）

3. **部署阶段（可选）**
   - 通过SSH连接到服务器
   - 拉取最新镜像
   - 重启容器服务

## 本地部署

可以使用Docker Compose在本地或服务器上部署：

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d
```

## 注意事项

1. 确保Dockerfile正确配置，特别是构建参数和环境变量
2. 如果修改了依赖，需要重新构建镜像
3. 部署后建议检查服务健康状态

## 故障排除

- 如果构建失败，检查Node.js版本兼容性
- 如果Docker推送失败，验证DockerHub凭证是否正确
- 如果部署失败，检查服务器连接和权限设置