//在 worker 线程中监听主线程发送过来的数据
self.onmessage = (data) => {
  console.log("主线程发送过来的数据", data);
};
// 在 worker 中，向主线程发送数据
self.postMessage(data);
// 在 worker 中监听错误
self.onerror = (err) => {};

// 在 worker 中关闭自己
self.close();
