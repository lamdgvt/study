/**
 * state 存储在一颗 object tree 中, 只存在唯一一个 store 中
 * 改变 state 触发的是 action
 * reducers 纯函数 先接收 state 和 action 并返回新的 state
 *  
 * store.getState() 获取state
 * store.dispatch() 将 action 传递给 store
 * store.subscribe() 来注册监听
 * store.subscribe() 返回来注销监听
 * 
*/
