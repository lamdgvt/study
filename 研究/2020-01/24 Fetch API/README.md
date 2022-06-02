#### 24. Fetch API

```
await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // 请求的模式, 如 cors、no-cors 或者 same-origin.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // 请求的 credentials, 如 omit、same-origin 或者 include.
                // include       为了让浏览器发送包含凭据的请求（即使是跨域源）
                // same-origin   请求URL与调用脚本位于同一起源处时发送凭据
                // omit          浏览器不在请求中包含凭据
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
})

```
