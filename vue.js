/**
 *  Vue.js
*/

/**
 *  全局配置
 *
 *  silent    取消Vue 所有日志与警告
 *  Vue.config.silent = true
 *
 *  devtools    配置是否允许 vue-devtools 检查代码
 *  Vue.config.devtools = true
 *
 *  errorHandler    渲染和观察期未捕获的处理函数. 可获取错误信息和 Vue 实例
 *  Vue.config.errorHandler = function(){}
 *
 *  warnHandler   Vue 运行时警告时执行的 自定义回调函数. 仅限开发环境
 *  Vue.config.warnHandler = function(){}
 *
 *  ignoredElements   Vue 忽略报错 使用了未注册的组件名称
 *  Vue.config.ignoredElements = []
 *
 *  keyCodes  自定义 v-on 键位别名
 *  Vue.config.keyCodes = {
 *    // 不可使用驼峰式
 *    "media-play-pause": 179,
 *  }
 *  <input type="text" @keyup.media-play-pause="method" />
 *
 *  performance   设置浏览器开发工具的性能、时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪.
*/


/**
 *  全局API
 *
 *  Vue.extend()
 *  组件构造器, 使用Vue构造器, 创建一个'子类'
 *  与后缀 .vue 文件一致
 *
 *  let Promise =  Vue.nextTick(() => {})
 *  在下次DOM 更新循环结束后执行的回调函数, 且返回一个 Promise 实例
 *
 *  Vue.set(target, key/index, value)
 *  target { Object || Array }
 *  key/index { String || Number }
 *  value { any }
 *  修改 data 里的Object 或 Array
 *
 *  Vue.delete(target, key/index)
 *  target { Object || Array }
 *  key/index { String || Number }
 *  删除对象的属性.
 *
*/


/**
 *  生命周期钩子
 *  beforeCreate ——>  Vue 实例中 初始化调用
 *  created ——> Vue 实例创建完成后 调用
 *  beforeMount ——> 在 DOM 节点渲染完之前
 *  mounted ——>  在 DOM 节点渲染完之后
 *  beforeUpdate  ——>  数据更新时调用,
 *  updated ——> 在 data 数据更改的回调
 *  activated ——>  keep-alive 组件激活时调用
 *  deactivated ——>  keep-alive 组件停用时调用
 *  beforeDestroy ——>  实例销毁前调用
 *  destroyed  ——>  实例销毁后调用
 *  errorCaptured ——>   子组件错误调用时候的回调
*/

/** 
 *  
*/
