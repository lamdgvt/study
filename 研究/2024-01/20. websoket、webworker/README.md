### web socket

```
Socket.IO

实时通信协议
低延迟、全双工、长期运行的一种连接

项目：在线会议、及时聊天
旧技术: 轮询

ws 和 wss 对应 http 和 https
连接成功状态码是 101

安全性 本身不提供任何的加密功能.
```

### web worker

```
不会阻塞主线程、异步(非阻塞)的方式 后台任务

使用场景: 复杂运算、流媒体

const work = new Worker()

// 发送消息
work.postMessage(data)

// work 操作会被立即终止
work.terminate()

// 事件
Event: message、error、messageError



// self 接收数据
self.onmessage = (data) => {
  console.log("主线程发送过来的数据", data);
};

// self 发送数据
self.postMessage(data);

// 在 worker 中监听错误
self.onerror = (err) => {};

// self 关闭
self.close();


限制:
1. 同源策略
2. 没有 window
3. 不能再 file:// 协议下打开
4. 基本只能使用 self 和 XMLHttpRequest、indexedDB
```
