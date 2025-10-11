# 部署指南

本项目使用GitHub Actions进行CI/CD自动化部署。以下是配置和使用说明：

## 配置要求

### 1. GitHub Secrets

#### 阿里云容器镜像服务配置

需要配置以下Secrets：

- `ALIYUN_REGISTRY_URL`: 阿里云容器镜像服务的Registry地址（例如：`registry.cn-hangzhou.aliyuncs.com`）
- `ALIYUN_NAMESPACE`: 阿里云容器镜像服务中的命名空间
- `ALIYUN_REGISTRY_USERNAME`: 阿里云容器镜像服务的登录用户名
- `ALIYUN_REGISTRY_PASSWORD`: 阿里云容器镜像服务的访问凭证

#### 部署服务器配置

如果使用了部署到远程服务器的步骤，还需要：
- `SERVER_HOST`: 服务器地址（腾讯云服务器IP或域名）
- `SERVER_USERNAME`: 服务器用户名（腾讯云服务器SSH登录用户名）
- `SERVER_KEY`: SSH私钥（用于连接服务器）
- `SERVER_PORT`: 服务器SSH端口（可选，默认为22）

### 2. 环境变量

在`.env.template`中定义了需要的环境变量，部署前请确保正确配置。

## CI/CD流程

### 触发条件
- 推送到`main`分支时触发完整CI/CD流程（构建、测试、Docker镜像构建推送、部署）
- 拉取请求到`main`分支时只运行构建和测试

### 工作流步骤

1. **构建和测试阶段**
   - 检出代码
   - 设置Node.js环境
   - 安装pnpm
   - 安装项目依赖
   - 构建项目
   - 运行代码检查（如果有）

2. **Docker构建和推送阶段**
   - 仅在推送到main分支时运行
   - 构建Docker镜像
   - 登录到阿里云容器镜像服务
   - 推送到阿里云容器镜像仓库，标签包括：
     - 提交SHA（短格式）
     - 分支名

3. **腾讯云部署阶段**
   - 通过SSH连接到腾讯云服务器
   - 从阿里云容器镜像仓库拉取最新镜像
   - 停止并移除旧容器
   - 启动新容器（映射3000端口）

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

- 如果构建失败，检查Node.js版本兼容性和pnpm安装
- 如果Docker推送失败，验证阿里云容器镜像服务凭证和命名空间设置是否正确
- 如果部署失败，检查腾讯云服务器连接、SSH密钥和权限设置
- 确保腾讯云服务器已安装Docker且服务正常运行