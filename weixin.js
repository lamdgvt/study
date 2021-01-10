/**
 *  wx 小程序
*/

/**
 *  全局配置
 *  小程序根目录的 app.json 文件全局配置.
 *
 *  pages   array[string]   页面路径列表
 *
 *  window  Object  全局的默认窗口表现
 *  {
 *      navigationBarBackgroundColor    // 导航栏背景颜色
 *      navigationBarTextStyle	        // 导航栏标题颜色
 *      navigationBarTitleText          // 导航栏标题文字内容
 *      navigationStyle                 // 导航栏样式
 *      backgroundColor                 // 窗口的背景颜色
 *      backgroundTextStyle             // 下拉loading 的样式
 *      backgroundColorTop              // 顶部窗口的背景颜色
 *      backgroundColorBottom           // 底部窗口的背景颜色
 *      enablePullDownRefresh           // 是否开启全局的下拉刷新
 *      onReachBottomDistance           // 页面上拉触底事件触发时距页面距离
 *      pageOrientation                 // 屏幕旋转设置
 *  }
 *
 *  tabBar  Object  底部 tab 栏的表现
 *  多个 tab 应用
 *  {
 *      color               //  tab 上文字默认颜色
 *      selectedColor       //  tab 选中文字颜色
 *      backgroundColor     //  tab 背景色
 *      borderStyle         //  tabbar 边框颜色
 *      position            //  tabbar 的位置
 *      custom              //  自定义tabbar
 *      list                //  tab的列表 最少2个, 最多5个
 *      {
 *          pagePath        //  页面路径
 *          text            //  tab 文本
 *          iconPath        //  图片路径
 *          selectedIconPath    //  选中图片途径
 *      }
 *  }
 *
 *  networkTimeout
 *  各类网络请求的超时时间, 单位均为毫秒
 *  {
 *      request         wx.request 超时
 *      connectSocket   wx.connectSocket 超时
 *      uploadFile      wx.uploadFile 超时
 *      downloadFile    wx.downloadFile 超时
 *  }
 *
 *  functionalPages  启用插件
 *
 *  subpackages 启用分包加载, 声明项目分包结构
 *
 *  workers  使用 worker 处理多线程任务, 设置worker 代码放置的目录
 *
 *  plugins  声明小程序需要使用的插件
*/


/**
 *  页面配置
 *
 *  navigationBarBackgroundColor    导航栏背景颜色
 *  navigationBarTextStyle      导航栏标题颜色
 *  navigationBarTitleText      导航栏标题文字内容
 *  navigationStyle     导航栏样式
 *  backgroundColor     窗口的背景色
 *  backgroundTextStyle     下拉loading 的样式
 *  backgroundColorTop      顶部窗口的背景色, 仅 IOS 支持
 *  backgroundColorBottom   底部窗口的背景色, 仅 IOS 支持
 *  enablePullDownRefresh   是否开启当前页面下拉刷新
 *  onReachBottomDistance   页面上拉触底事件的距离
 *  pageOrientation         屏幕旋转设置
 *  disableScroll           设置整体页面不能上下滚动
 *  usingComponents         页面自定义组件配置
*/

/**
 *  sitemap 配置
 *  用于配置小程序及页面是否允许被微信索引
 *
 *  rules
 *
 *  action  'allow', 'disallow'   命中该规则的页面是否能被索引
 *  page  '*'  页面的路径
 *  params  当 page 字段指定的页面在本规则匹配时 可能使用的页面参数名称的列表
 *  matching   当 page 字段指定的页面在被本规则匹配时, 此参数说明 params 匹配方式
 *  priority   优先级, 值越大则规则越早被匹配, 否则默认按顺序
*/

/**
 * 注册小程序
 *
 * App 生命周期
 * onLaunch  小程序初始化时调用
 * onShow   当展示时调用 / 切前台
 * onHide   当小程序切后台时
 * onError  错误监听函数时
 * onPageNotFound   页面不存在时
 * 
 * getApp()  获取小程序全局唯一的 App 实例
*/

/**
 * page 生命周期
 * data  页面初始化数据
 * onLoad  页面加载时
 * onShow  页面显示
 * onReady  页面初次渲染完后
 * onHide   页面隐藏
 * onUnload     页面卸载
 * onPullDownRefresh    下拉动作回调
 * onReachBottom        上拉动作触底回调
 * onShareAppMessage    用户点击右上角转发
 * onPageScroll     页面滚动触发事件
 * onResize     页面尺寸发生改变时
 * onTabItemTap     点击tab 页签触发
 * 
 * getCurrentPages()    获取当前页面的栈
*/

/**
 * Component 组件定义
 * 
*/
