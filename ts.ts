/**
 * let 变量: 类型;
 * let 变量: 类型 = 值
 *
 * boolean 类型
 * number 数字
 * string 字符串
 *
 * 数组
 * number[] = [1, 2, 3, 4]
 * Array<number> = [1, 2, 3]
 * 
 * 对象
 * Object 
 * // 属性名加个问号 可有可无
 * let obj : { name: string, age?: number }
 * obj = { name: '123', age: 12 }
 *
 * Tuple
 * let x: [string, number]
 *
 * enum 枚举
 * enum Color {Red, Green, Blue}
 * let c: Color = Color.Green;
 * 
 * Any 任意数值
 * unknown 类型安全的any
 * 
 * Void 当一个函数没有返回值
 * 它只能赋值 null 和 undefined
 * 
 * Null 和 Undefined
 * 
 * Never 没有值 不能是任何值  throw new Error('报错了') 属于没有值
 * 
 * 联合类型
 * let b : boolean | string
 * 
 * function fn(参数: 类型, 参数: 类型): 类型 {
 *   ...
 * }
 * 
 * 
 * 类型断言
 * let e: unknown;
 * e = 10;
 * e = 'string'
 * let s: string;
 * 
 * 当e 是 string 时 e赋值给s
 * 写法一: s = e as string;
 * 写法二: s = <string>e;
*/


let action: string = '123';

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

