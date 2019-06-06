/**
 * node.js
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
 *  response.end()
 *  
 *  所有请求都走 request 事件, 根据不同的 url 返回不同的数据
*/
server.on('request', (req, res) => {
    console.log(req, res)
    res.end()
})

/**
 *  绑定端口号, 启动服务器
 *  服务器启动的回调
*/
server.listen(8090, () => {
    console.log('服务器已启动: 8090端口')
})

