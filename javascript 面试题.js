/**
 *
 * 对于MVVM的理解
 * MVVM是 Model View ViewModel 的缩写, 他是一种可以根据Model数据改变 而自动传递给View 更新展示, 即所谓的双向绑定
 *
 * 开发中常用的指令有哪些
 * v-bind   单向数据绑定
 * v-show   用于css display 去控制的显示隐藏 条件渲染指令
 * v-if     用于js 去控制改元素节点 是否渲染  条件渲染指令
 * v-for    用于数据源遍历渲染 元素或者模块
 * v-model  一般用在表单输入, 实现表单控件和数据的双向绑定
 * v-html   用于更新元素的 innerHTML
 * v-on:click   用于触发该事件, 可指定事件拥有一个回调函数
 *
 * 请详细讲解你对 Vue 生命周期的理解
 * Vue生命周期可以分为八个阶段
 * 创建前后、载入前后、更新前后、销毁前后
 * beforeCreate (创建前) 此时实例对象还未进行创建,挂载元素 $el 和 data都处于undefined, 并未初始化.
 * created (创建后) 此时的data数据 已经初始化, 但 $el 还未初始化
 * beforeMount (载入前) Vue实例的$el和data 已经初始化,相关的render函数首次调用并已经创建好虚拟Dom, 但未挂载到html上.
 * mounted (载入后) 在虚拟Dom载入html之后.
 * beforeUpdate (更新前) 在数据更新的时候, 发生在虚拟Dom 重新渲染, 可以在该钩子进一步该更状态, 不会触发附加的重新渲染.
 * updated (更新后) 在由于数据更改导致的虚拟Dom重新渲染后, 大多情况下, 应该避免在此钩子内更改状态, 因为容易导致无限循环.
 * beforeDestroy (销毁前) 在实例销毁之前调用, 实例仍然可以使用.
 * destroyed (销毁后) 在实例销毁之后调用, 所有的事件监听都会被移除, 所有的子实例也会被销毁.
 * 
 * 
 *
 *
 *
*/