# vue之双向数据绑定

> 总所周知，作为前端的伙伴都知道 vue 的双向数据绑定的使用的 api 是 Object.defindeProperty,这是2.0的版本，但是vue3.0的版本进行了一些优化，使用的是 Proxy 这次我们就一起来探讨一下，这两个 api 有什么区别


### Object.defindeProperty 数据拦截

> 直接上代码

```
let data = {
    name:'张三',
    age:12
}
let temp = data['name']
//参数一：对象，参数二：对象的值 参数三配置
Object.defindeProperty(data,'name',{
    configurable:true,//可配置
    enumerable:true,//可枚举
    get:function(){
        console.log('get')
        return temp
    },
    set:function(newValue){
        console.log('set')
        temp = newValue
    }
})

for(key in data){
    console.log(key)
}
```

##### 升级一下代码

```
function observer(obj,key,value){
    Object.defineProperty(obj,key,{
        eumerable:true,//可遍历
        configurable:true,//可配置
        get(){
            console.log('get')
            return value
        }
        set(newValue){
            console.log('set')
            value = newValue
        }
    })
}

for(key in data){
    observer(data,key,data[key])
}
```

#### 我们使用观察-订阅实现业务场景

> 什么是观察订阅模式，就相当于我们以前订报纸一样，每天出新闻了，不需要我们去守在报社等这个报纸，报社会将报纸给中间人，中间人根据订阅给你送报纸过去，对于你来说，不需要关心什么时候来报纸。对于报社来说，不需要关心谁定了报纸。他们的关系是 发布者通知给中间层=> 中间层接收并通知订阅者 => 订阅者收到并发生变化

```
//现在模拟vue的订阅发布模式
Complie:解析
Dep:存储
Watcher:通知

    let data = {
        value:0
    }
    //compile
    function renderInput(newValue){
        let el = document.getElementById('inp')
        if(el){
            el.value = newValue
        }
    }

    function renderTitle(newValue){
        let el = document.getElementById('h1')
        if(el){
            el.innerHTML = newValue
        }
    }
    //用于管理watcher的Dep对象
    let Dep = function(){
        this.list = []
        this.add = function(watcher){
            this.list.push(watcher)
        }
        this.notify = function(newValue){
            this.list.forEach(function(fn){
                fn(newValue)
            })
        }
    }

    //将解析出来的watcher存入dep中待用
    let dep = new Dep()
    dep.add(renderInput)
    dep.add(renderTitle)

    //事件
    function inputChange(event){
        let value = Number.parseInt(event.target.value)
        data.value = (Number.isNaN(value)) ? 0 : value
    }
    function btnAdd(){
        data.value = data.value + 1
    }


    //双向绑定函数
    function observer(obj,key,value){
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get(){
                console.log('get')
                return value
            },
            set(newValue){
                console.log('set')
                if(value===newValue){
                    return
                }
                value = newValue
                dep.notify(newValue)
            }
        })
    }
    //初始化双向绑定
    function initMVVM(data){
        Object.keys(data).forEach(key=>{
            observer(data,key,data[key])
        })
    }

    initMVVM(data)
    dep.notify(data.value)
```

#### 但是 Object.defineProperty有一个缺陷，就是没有办法拦截数组的方法

> 举一个例子

```
let arr = [1,2,3]
function observer(obj,key,value){
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get(){
            console.log('get')
            return value
        },
        set(newValue){
            console.log('set')
            if(value===newValue){
                return
            }
            value = newValue
        }
    })
}
arr.forEach((item,index)=>{
    observer(arr,index,arr[index])
})

// 在控制台上打印 arr
// arr.push(4)会发现，只有前面三个有双向绑定
// arr.unshift(0)会发现，只有前面三项有双向绑定
//总结：在数组做双向数据绑定的时候，是绑定了 index,而新增的索引相当于新增的属性，需要重新手动绑定
```

#### 问题的解决

```
//问题解决：hack 数组的方法
let arr = [1,2,3]
function observer(obj,key,value){
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get(){
            console.log('get')
            return value
        },
        set(newValue){
            console.log('set')
            if(value===newValue){
                return
            }
            value = newValue
        }
    })
}
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto);

['push','pop','shift','unshift','splice','sort','reverse'].forEach(method=>{
    const original = arrayProto[method]
    Object.defineProperty(arrayMethods,method,{
        enumerable: true,
        configurable: true,
        value(...args){
            console.log(`method:${method}`)
            original.apply(this,args)
        },
    })
})
console.log(arrayMethods)
//将方法赋值给原型
arr.__proto__ = arrayMethods
```


#### Proxy的优势是什么

> proxy是es6新出来的 api 它跟 Object.defineProperty的区别是什么

```
// proxy的优势在于，只需要对对象进行代理，不需要像 Object.defineProperty那样对对象的属性进行劫持


    let data = [1,3,5]
    let proxy = new Proxy(data,{
        set(target,key,value){
            console.log(target,key,value)
            Reflect.set(target, key, value);
            return true
        }
    })
```