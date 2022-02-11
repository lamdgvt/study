### 前端一键部署

```
# 安装
    npm install deploy-cli-service -g
    npm install deploy-cli-service --save-dev

# 部署
    deploy-cli-service deploy --mode dev # 或者使用 deploy-cli-service d --mode dev

# 初始化配置信息
    deploy-cli-service init # 或者使用简写 deploy-cli-service i 生成 deploy.config.js


// deploy.config.js
module.exports = {
  projectName: 'vue_samples', // 项目名称
  privateKey: '/Users/fuchengwei/.ssh/id_rsa',
  passphrase: '',
  dev: {
    // 环境对象
    name: '开发环境', // 环境名称
    script: 'npm run build', // 打包命令
    host: '192.168.0.1', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '123456', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true // 是否删除远程文件（默认true）
  },
  test: {
    // 环境对象
    name: '测试环境', // 环境名称
    script: 'npm run build:test', // 打包命令
    host: '192.168.0.1', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '123456', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true // 是否删除远程文件（默认true）
  },
  prod: {
    // 环境对象
    name: '生产环境', // 环境名称
    script: 'npm run build:prod', // 打包命令
    host: '192.168.0.1', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '123456', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true // 是否删除远程文件（默认true）
  }
}

# 本地扩展
"scripts": {
    "deploy:dev": "deploy-cli-service deploy --mode dev",
    "deploy:test": "deploy-cli-service deploy --mode test",
    "deploy:prod": "deploy-cli-service deploy --mode prod"
}

```