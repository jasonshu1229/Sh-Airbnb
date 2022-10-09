## 项目相关文档📚

- 项目更新日志：[CHANGELOG.md](./CHANGELOG.md)

## 一、项目初始化的操作

### 删除脚手架默认生成的无关文件

### 建立目录结构

sh_airbnb
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ assets              # 静态资源文件
│  ├─ base-ui             # 可抽离的公共组件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ hooks               # 常用 Hooks
│  ├─ router              # 路由管理
│  ├─ services            # 请求接口管理
│  ├─ store               # redux/redux-toolkit
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.jsx              # 入口页面
│  └─ index.js            # 入口文件
├─ .gitignore             # git 提交忽略
├─ CHANGELOG.md           # 项目更新日志
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
└─ vite.config.ts         # vite 配置

### 使用standard-version发版与Changelog同步

1. 安装standard-version

```shell
# npm install -D standard-version
```

2. 在 package.json 中编写响应的脚本：

```shell
"scripts": {
  "release": "standard-version"
}
```

先执行 git add .，然后执行 git commit -m xxx，最后执行 npm run release。就可以自动生成`CHANGELOG.md`文件

### 使用 @craco 库进行 webpack 相关的配置（比如：别名）

```shell
# npm install @craco/craco@alpha -D 
```

### 使用 craco-less 库配置less

```shell
# npm i craco-less@2.1.0-alpha.0
```

### CSS样式重置

- 使用 normalize；
- 自己编写 reset.css

```shell
# npm i normalize.css
```
