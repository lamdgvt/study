
### band,call,apply的区别,常见面试题以及手动封装

> 这三个api都是改变this的指向问题， 在前端开发过程中，会经常使用到这三个api,那么需要我们非常清楚，这三个之间的区别，话不多说，代码实现


### call,apply的区别
> 这两个 api 非常相似，只是在传递参数上的细微区别

```
let person1 = {
    name:"张三",
    age:19,
    say(...arg){
        console.log(`姓名是：${this.name},年龄是：${this.age},参数：${arg}`)
    }
}

let person2 = {
    name:"李四",
    age:23
}

person1.say.call(person2,1,2,3,4) // 姓名是：李四,年龄是：23,参数：1,2,3,4
person1.say.apply(person2,[1,2,3,4]) // 姓名是：李四,年龄是：23,参数：1,2,3,4

```

#### 常见的面试题

+ 1、如何将伪数组装换成真数组

> 在 js 里面会有很多伪数组的概念，伪数组和真数组的有什么区别

    + 伪数组具 length 属性，但是，不具备数组的方法，伪数组长度不可变
    + 常见的伪数组有哪些，querySelectorAll，getElementByclassName,getElementsByTagName,arguments的集合,都是伪数组

```
let person1 = {
    name:"张三",
    age:19,
    say(){
        console.log(`姓名是：${this.name},年龄是：${this.age}`)
        console.log(arguments)
        arguments.push(8)
        console.log(arguments)
    }
    let person2 = {
    name:"李四",
    age:23
}
person1.say.call(person2,1,2,3,4)
```


+ 2、怎么无侵入无序数组求最大值

> 这一道面试题也是在考验call，apply的用法，无侵入，就是不对数组的进操作，但是拿到最大值

```
let arr = [1,4,6,88,34,7,9,23,95]
// 方法有两个
let res1 = Math.max.apply(null,arr) // 95
let res1 = Math.max.call(null,...arr) // 95
```

### bind与 call,apply的区别
    
> bind 的区别就是在改变 this 的指向的时候，并不会调用这个方法


```
let person1 = {
    name:"张三",
    age:19,
    say(...arg){
        console.log(`姓名是：${this.name},年龄是：${this.age},参数：${arg}`)
    }
    let person2 = {
    name:"李四",
    age:23
}
person1.say.bind(person2,1,2,3,4) // 没有任何打印
person1.say.bind(person2,1,2,3,4)() // 姓名是：李四,年龄是：23,参数：1,2,3,4
```

#### bind,call,apply的手动封装

> 本人的封装可能不够严谨，不会对传递的类型参数进行严密的判断，只针对核心代码的实现

```
// bind ,call ,apply 的封装
Function.prototype.myCall = function(obj,...args){
    obj = obj || window
    const key  = Symbol()
    obj[key] = this
    obj[key](...args)
    delete obj[key]
}
Function.prototype.myApply = function(){
    let obj = arguments[0] || window
    const args = arguments[1]
    const key  = Symbol()
    obj[key] = this
    let result;
    if(args){
        if(Array.isArray(args)){
            result = obj[key](...args)
        }else if(arguments.length === 2){
            result = obj[key](args)
        }else{
            console.error('MyApply传递多个参数的时候，第二个参数必须是数组')
        }
    }else{
        result = obj[key]()
    }
}
Function.prototype.myBind = function(obj,...args){
    let self = this
    return function(){
        let newArgs = args.concat(...arguments)
        self.myCall(obj,newArgs)
    }
}
```