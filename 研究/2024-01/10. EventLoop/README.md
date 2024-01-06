# 宏任务
```
setTimeout
setInterval
```
# 微任务
```
Promise
```
## 执行顺序
```
js 单线程
静态文件 html 内 script 代表一个大型的宏任务
执行里面每个微任务和宏任务时, 会分别插入进 对应的队列中.

执行完script的宏任务后, 才开始执行 内置的微任务、宏任务(顺序)
```
