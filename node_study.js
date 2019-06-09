/**
 * node.js
 * node 控制台
 * 
 * __dirname 当前文件所属目录绝对路径
 * __filename  当前文件绝对路径
 */

/* 
 * fs 核心模块
 * 文件操作能力
*/

// 使用 require 方法 加载 fs 模块
let fs = require('fs')

/**
 *  读取文件
 *  readFile
 *  @params
 *  读取文件路径
 *  回调函数
 *  data 如果成功 就是 成功对象, 否则 null
 *  error 如果失败 就是 失败对象, 否则就是 null
 */

// fs.readFile('./es6.js', (error, data) => { })

/**
 *  编写文件
 *  writeFile
 *  @params
 *  编写文件路径
 *  content
 *  error, data
 *
 *  写文件时, 路径如果没有该文件, 则会 创建该文件并写入信息
 *  写文件错误情况下,一般不是指 不允许特殊字符出现在文件名中
 */

// fs.writeFile('./text.txt', 'Hello World', (error) => { })



/**
 * 服务器
 * http 核心模块
 */
let http = require('http')

/**
 * http.createServer() 方法创建一个 Web 服务器
 * 返回一个 server 实例
*/
let server = http.createServer()
/**
 *  注册 request 请求事件
 *  @params 
 *  request 请求对象, 获取客户端请求信息
 *  response 响应对象, 用来响应客户端发送响应对象
 *  
 *  response.write('') 可以用来给客户端 发送响应数据, 响应完 需要用end结束响应
 *  response.end('')  发送响应数据, 并结束响应
 *  
 *  所有请求都走 request 事件, 根据不同的 url 返回不同的数据
*/
server.on('request', (req, res) => {
    /** 
    * 设置发送数据 响应头部信息
    * 设置成 utf-8, 告诉浏览器解析信息 需要使用 utf-8 解析
    * 
    * text/plain 指文本信息, html 只会将其当做 普通文本, 不会当做 html 处理
    * text/html 返回 html 字符串, 浏览器会当成 html 代码处理
    * 
    * 返回不同的资源, 需要指定不一样的 Content-Type
    * http://tool.oschina.net/commons
    */
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    /** 
     * 响应状态码 设置为 302, 重定向, 页面会自动跳转 头部信息的 Location
    */
    res.statusCode = 302
    res.setHeader('Location', 'https://www.baidu.com')


    /** 
     * art-template  模板引擎
     * 加载 node_modules 第三方模块 也是使用require()
     * let art = require('art-template')
     * 客户端渲染不利于 SEO 搜索引擎优化
     * 服务端渲染是可以被爬虫抓取到的, 客户端异步渲染是很难被爬虫抓取到的
    */

    /** 
     * link script img iframe video audio
     * 具有 src 、 href (link) 属性
     * 静态资源请求
     * 
     * /assets
     * 将静态资源 放入 /assets 文件夹内
     * 判断 url.indexOf /assets === 0
     * 则统一访问 静态资源
     * fs.readFile('.' + url, function(err, data){
     *      if (err) {
     *          return res.end('404 Not Found.')
     *      }
     *      res.end(data)
     * })
     */
    res.end()
})

/**
 * url 模块
 * url.parse('/.......', Boolean)
 * url.parse(req.url,true)
 */
let url = require('url')
// 


/**
 *  绑定端口号, 启动服务器, 网上部署的时候 默认用80, 否则用户需要输入 端口号
 *  一台计算机, 一个端口号只能占用一个应用程序
 *  服务器启动的回调
*/
server.listen(8090, () => {
    console.log('服务器已启动: 8090端口')
})

/**
 *  os 当前机器 CPU 信息模块
 *  path 获取路径操作 模块
*/

/**
 * require 用于加载模块
 * node 中,没有全局作用域, 只有模块作用域
 * 
 * 模块与模块之间的通信
 * exports 默认是一个空对象
 * 
 * module.exports && exports
 * 
*/
require('./ES6.js')


/**
 * nodemon
 * 监听js.改变
 * npm install --save-dev nodemon
 *
 * nodemoin app.js
 *
*/


/**
 * path 模块
 * 
 * 获取当前路径的目录路径
 * dirname(path)
 * 
 * 判断是否绝对路径
 * path.isAbsolute(path)
 * 
 * 解析路径
 * path.parse(path)
 * 
 * 拼接路径
 * path.join('c:/window', 'root')
 * 
*/
let path = require('path')

