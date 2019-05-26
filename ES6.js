/** ECMAScript 6 要点
 *  'use strict' 严格模式
*/


{
    /**
     *  块级作用域  {}
     * 
     *  块级作用域的任意嵌套。
     * 
     **/
    {
        {
            {
                {
                    let insane = 'Hello World';
                    { let insane = 'Hello World' }
                }
            }
        }
    };
    // 匿名函数自调
    // es5:
    (function () {
        let temp = 1;
        return temp;
    })()
    // es6: 
    {
        let temp = 1;
        return temp;
    }
    // const 属性冻结
    const foo = Object.freeze({});
}


{
    /**
     *  对象扩展
     *  定义对象的属性,在声明对象的同时,可以将变量当做属性名
    */
    let propKey = 'name'
    let obj = {
        [propKey]: 'Lin',
        ['h' + 'ello']() {
            return 'hi';
        }
    }


    // 可枚举性 对象的每个属性都有一个描述对象(Descriptor)用来控制该属性的行为
    let obj2 = { test: 123 }
    Object.getOwnPropertyDescriptor(obj2, 'test')
    let result = {
        value: 123,
        writable: true,
        enumerable: true,
        configurable: true
    }

    // enumerable '代表可枚举性', 有四个操作会忽略 enumerable 为 false的属性
    // for...in循环：只遍历对象自身的和继承的可枚举的属性。
    // Object.keys() ：返回对象自身的所有可枚举的属性的键名。
    // JSON.stringify() ：只串行化对象自身的可枚举的属性。
    // Object.assign() ： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

    // 如果当前enumerable属性为false,以上四个操作, 都会忽略, 达不到期望原本的值.


    // super 关键字
    // this关键字总是指向函数所在的当前对象, super 指当前对象的原型对象 (看不懂)


    // Object.is  行为基本与运算符(===) 一致
    Object.is()
    // 不同之处 : 
    {
        + 0 === -0 //true
        NaN === NaN // false
        Object.is(+0, -0) // false
        Object.is(NaN, NaN) // true
    }


    // Object.assign()  对象合并, 浅拷贝, 同名属性是, 后面的对象属性会覆盖前面的对象属性
    Object.assign({}, {})
    // 数组处理
    Object.assign([1, 2, 3], [4, 5])
    // [4, 5, 3]


    // __proto__  用来设置原型 prototype 对象
    // Object.setPrototypeOf() 
    // Object.getPrototypeOf()


    // Object.keys() 可遍历对象, 返回以key组成的数组
    let keys = { foo: 'bar', baz: 42 };
    Object.keys(keys)
    // ["foo", "baz"]


    // Object.values() 可遍历对象, 返回以value 组成的数组

    // Object.entries()
    const obj3 = { foo: 'bar', baz: 42 };
    Object.entries(obj3)
    // [ ["foo", "bar"], ["baz", 42] ]


    // Object.fromEntries() 是 Object.entries()的逆操作，用于将一个键值对数组转为对象
    Object.fromEntries([
        ['foo', 'bar'],
        ['baz', 42]
    ])
    // { foo: "bar", baz: 42 }
}


{
    /**
     *  Symbol
     *  原始数据类型
     *  Symbol 值通过Symbol函数生成
     *  Symbol 生成的值是独一无二的 
     *  Symbol 可以转换成String 或者 Boolean, 但不可进行运算, 否则报错
     */
    let s = Symbol();
    typeof s
    // "symbol"
    const sym = Symbol('foo');
    String(sym) // "Symbol(foo)"
    sym.toString() // "Symbol(foo)"
    // 作为属性名,可以保证不会出现同名的属性

    // Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
    // 属性名的遍历
    // Object.getOwnPropertySymbols 可以指定当前对象所有用作属性名的 Symbol值

    // Symbol.for()
    // for的区别在于 for 会被登记在全局环境中搜索. 无for不登记也不搜索
    // 先检查给定的key 是否存在, 如果存在就会返回之前已经 创建过的, 否则才新建一个新的.

    // Symbol.keyFor() 
    // 该方法返回一个已登记的 Symbol 类型值的key.
    let s1 = Symbol.for("foo");
    Symbol.keyFor(s1) // "foo"

    let s2 = Symbol("foo");
    Symbol.keyFor(s2) // undefined
}


{

}


{
    /**
     * Set
     * 它类似于数组，但是成员的值都是唯一的，没有重复的值
     * 
     */
}


{
    /** 
     * Module 加载
     * 传统浏览器通过script 标签加载 javascript 脚本
     * 默认情况下, 浏览器是 同步加载 javascript 脚本后, 即渲染引擎会遇到 script 标签就会停下来,执行完脚本后 再继续渲染.
     * 如果是外部脚本, 还必须等待脚本下载完成的时间.
     * 如外部脚本过于庞大,或卡死.会造成 浏览器堵塞,用户体验会非常不友好.
     * 
     * 
     * 异步加载脚本的两种语法
     * <script src="path/to/myModule.js" defer></script>
     * <script src="path/to/myModule.js" async></script>
     * defer 或 async 属性属于异步加载.
     * defer 与 async 的区别: 
     * defer 要等待 整个页面在内存中正常渲染完结束.才会开始执行该脚本. ("渲染完再执行")
     * async 一旦下载完, 渲染引擎会暂停渲染,执行完该脚本后,再继续渲染. ("下载完就执行")
     * 多个defer脚本, 会按照他们的页面出现的顺序加载. 多个async 脚本是不可保证加载顺序的.
     * 
     * 
     * es6 异步加载. type="module"属性.
     * <script type="module" src="./foo.js"></script>
     * type="module" 等同于打开了script 标签的 defer属性
     * 
    */
}
