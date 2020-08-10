/**
 * String API
 *
 * capitalize()
 * 字符串首字母大写
 *
 * title()
 * 每个单词的首字母大写
 *
 * upper()
 * 全部字转母大写
 *
 * lower()
 * 全部字母转小写
 *
 * find(string, start, end)
 * 检测 str是否在指定范围内,返回下标位置 否则返回-1
 *
 * rfind(string, start, end)
 * 从右侧检测 str是否指定在范围之内, 返回下标位置, 否则反回-1
 *
 * replace 替换
 * replace(string, string, max)
 *
 * startwitch()  判断开头是否以xxx开头
 * endswitch()   判断结尾是否以xxx结尾
 * 应用于 文件上传 限制文件后缀名
 *
 * isaplpha() 是否是字母
 * isdigit() 是否是数字
 * join() 分隔符拼接
 * lstrip() 去除左侧空格
 * rstrip() 去除右侧空格
 * strip() 去除两侧空格
 * split(string, num)  切割
 * count() 个数
 *
 * if String in Array  语法
 * String 内是否含有 Array
 *
 * 删除
 * del brands[0]
 *
*/

/**
 * Array API
 *
 * append 追加
 * extend 扩展
 * insert(index, value) 插入
 * sort(key=None, reverse=False) 排序
 * remove(value) 删除
 * pop() 移除最后一个
 * clear() 清除
 * reverse() 翻转
 *
 * + ===> 合并 [] + []
 * * ===> [] * n
 *
 * len(list) ===> int
 * sorted(list) ===> 排序
 * max() 最大值
 * min() 最小值
 * list() 强制转换成列表类型
 * enumerate() 枚举
 *
*/

/**
 * tuple API
 * 
 * len()
 * min() 
 * max()
 * sum()
 * sorted()
*/

/**
 * Dict API
 * items()      查询键值对
 * values()     查询值
 * keys()       查询键
 * get(key) ----> value 如果娶不到值不会报错 返回None
 * get(key, default)  ----> 如果取不到值 返回 default 默认值
 * 
 * del dict[key]
 * dict.pop(key[, default])
 * dict.popitem()
 * dict.clear()
 * dict1.update(dict2) 更新
 * dict1.fromkeys(sqe, [default]) seq转成字典的形式, 如果没有 default 默认用 None
 * 
*/

/**
 * 类型转换
 * str() int () list() dict() set() tuple()
 * 
 * str ===> int, list, set, tuple 
 * str() <=== int, list, set, tuple, dict, float
 * 
 * list ---> set(), tuple(), dict()
 * list(set, tuple, dict) 转列表
 * 
*/
