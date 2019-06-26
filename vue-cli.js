/**
 *  Vue cli
*/

/**
 *  vue-cli 命令
 *
 *  vue serve [options] [entry]
 *  vue serve 使用了 vue create 创建项目相同的默认设置(webpack、 Babel、 PostCss、 ESLint)
 *  它会在当前目录内推动入口文件  main.js、 index.js、 App.vue、 app.vue
 *  也可以直接填写入口文件路径.
 *  vue serve src/main.js
 *  @Options
 *  -o, --open 打开浏览器
 *  -c, --copy 将本地URL复制到 剪切板
 *  -h, --help 输出用法信息
 *
 *
 *  vue build [options] [entry]
 *  vue build在生产环境模式下零配置构建一个 .js 或 .vue 文件
 *  @Options
 *  -t, --target <target>  构建目标 (app | lib | wc | wc-async) 默认值: app
 *  -n, --name <name> 库的名字 或 Web Components 组件的名字 默认值: 入口文件名
 *  -d, --dest <dir>  输出目录 默认值: dist
 *  -h, --help 输出用法信息
 *
 *
 *  cli service
 *
 *  vue-cli-service serve [options] [entry]
 *  vue-cli-service serve 命令会启动一个开发服务器 (基于webpack-dev-server) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)
 *  除了通过命令行 参数 vue.config.js 的 devServer 字段配置开发服务器.
 *  @Options
 *  --open  在服务器启动时, 打开浏览器
 *  --copy  在服务器启动时, 将URL复制到剪贴板
 *  --mode  指定环境模式 (默认值: development)
 *  --host  指定 host (默认值: 0.0.0.0, 即 localhost)
 *  --port  指定 port (默认值: 8080)
 *  --https  使用https (默认值: false)
 *
 *
 *  vue-cli-service build [options] [entry | pattern]
 *  @Options
 *  --mode  指定环境模式 (默认值: production)
 *  --dest  指定输出目录 (默认值: dist)
 *  --modern  面向现代浏览器带自动回退地构建应用
 *  --target  (app | lib | wc | wc-async) 默认值: app
 *  --name  库或 Web Components 模式下的名字 (默认值: package.json 中的 'name' 字段或入口文件名)
 *  --no-clean 在构建项目之前不清除目标目录
 *  --report  生成 report.html 以帮助分析包内容
 *  --report-json  生成 report.json 以帮助分析包内容
 *  --watch  监听文件变化
 *
 *
 *  vue-cli-service inspect [options] [...paths]
 *  vue-cli-service inspect 可以审查一个 vue-cli 项目的 webpack config.
 *  @Options
 *  --mode 指定环境模式 (默认值: development)
 *
 *
 *  查看所有的可用命令
 *  npx vue-cli-service help
 *
*/

/**
 *  browserslist 浏览器兼容配置表
 *  package.json 文件内有browserslist 字段 或者 单独的一个 .browserslist 文件, 用于指定项目的支持的浏览器范围.
 *  这个值会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 javascript 特性和 css 浏览器需要的前缀.
 *  配置语句的查询结果
 *  https://browserl.ist/
 *
 *
 *  Polyfill (不理解)
 *  babel
*/

/**
 *  HTML 和 静态资源
 *  pubilc/index.html 会被 html-webpack-plugin 处理, 资源链接会自动注入.
 *
 *  <%= VALUE %>  用于不转义插值
 *  <%- VALUE %>  用来做HTML转义插值
 *  <% expression %>  用来描述JavaScript 流程控制
 *
 *  Preload   不理解
 *  Prefetch    不理解
 * 
 *  当基于已有后端使用 Vue cli时, 相当于后台渲染页面, 不需要 index.html
 *  在 Vue.config.js 配置
 *  filenameHashing: false, // 去掉文件名的 hash
 *  chainWepack: config => {
 *    config.plugins.delete('html')
 *    config.plugins.delete('preload')
 *    config.plugins.delete('prefetch')
 *  }
 *  
 *   ——> 记录致 处理静态资源
 * 
 */

 

/**
 *  构建目标
 *  vue-cli-service build
 *  
 *  index.html 会带有注入的资源和 resource hint
 *  第三方库会被分到一个独立包以便刚好的缓存
 *  小于 4kb 的静态资源会被内联在 JavaScript 中
 *  public 中的静态资源会被复制到输出目录中
 *  
*/
