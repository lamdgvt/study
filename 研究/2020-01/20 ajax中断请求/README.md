#### 20. ajax 中断请求

```
XMLHttpRequest.readyState
0	UNSENT	                    代理被创建，但尚未调用 open() 方法。
1	OPENED	            open()  方法已经被调用。
2	HEADERS_RECEIVED    send()  方法已经被调用，并且头部和状态已经可获得。
3	LOADING	                    下载中；responseText 属性已经包含部分数据。
4	DONE	                    下载操作已完成。


XMLHttpRequest.abort()      // 中断 ajax 操作

它的 readyState 将被置为 XMLHttpRequest.UNSENT (0), 并且请求的 status 置为 0.

```
