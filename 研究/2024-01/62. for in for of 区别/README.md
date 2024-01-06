#### for...in、for...of

```
for...in    遍历得到key     可枚举数据
可枚举: 数组、字符串、对象
判断 是否可枚举 Object.getOwnPropertyDescriptors(obj)
属性内 enumerable: true 可枚举


for...of    遍历得到value   可迭代数据
可迭代: 数组、字符串、Set、Map

arr[Symbol.iterator]
含有 next() 函数 可迭代


for await..of 作用

for await..of 接收一个 Promise 的数组
依次遍历出对应的 res

例子:
(() => {
    for await(let res of promiseList) {
        console.log(res)
    }
})()
```
