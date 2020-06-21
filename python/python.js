/**
 * Python
 * PEP8 编码规范
*/


/**
 * 解释器
 * lib.exe (内置库)
 * pip.exe (包管理器, 第三方依赖包)
 *
 * python -m pip install --upgrade pip (升级 pip)
 *
 * pip list (包管理器列表)
 * pip install 包名 (安装)
 * pip install -r requirements.txt (安装该文件的依赖包)
 * pip uninstall 包名 (卸载)
 * pip -V (查看版本)
 * pip freeze > requirements.txt (依赖包列表输出至该文件)
 *
 * 退出 exit() / ctrl-z
*/

/**
 * DOS 命令
 * cd 切换目录
 * dir 浏览目录
 * mkdir 创建新的目录
 * rmdir 删除目录
 * ipconfig 查看Ip配置
 * ping -t 网络测试
*/

/**
 * 语法
 * Print() 打印
 * type() 变量类型
 *
 * 转移符
 * \n 换行  \t Tab符  \r 回车
 *
 * 查看python关键字
 * import keyword
 * keyword.kwlist
 *
 * 报错
 * SyntaxError 语法错误
 * NameError 名字错误
 * Invalid 无效的
 * character 字符
*/

/**
 * 变量
 * python 是面向对象, 解释型和弱类型语言
 *
 * 类型: 字符串、整型、浮点数、布尔类型、
 * 列表 Array 、字典dict、去重列表 set
 *
 * 常量
 * 命名的时候, 名字是大写的.
 *
 * %s (str()) 占位符
 * 字符串 格式化输出
 * print('订单的收件时: %s, 联系方式: %s, 商品数量是: %s' %(person, address, phone, num))
 *
 * %d (digit()) 占位符
 * 整型  格式化输出
 * print('%02d', 3) // 03
 *
 * %f (float()) 占位符
 * 浮点数 格式化输出
 * print('我的薪水是: %.1f' %8888.44)
 *
 * api
 * str(int) --> (int -> str)    字符串转换
 * Int(str) --> (str -> int)    整数转换
 *
 *
 * 字符串的 format 函数
 * age = 24
 * '我说: 我今年{}岁了'.format(age)
 *
 * 阻塞式
 * input() 光标捕获
 * input 键盘输入的都是字符串类型
 *
 * 运算符:
 * 赋值运算符
 * =
 * id() 变量存储地址.
 *
 * 算数运算符
 * a = 3; b = 8
 * a ** b = 512    8*8*8   平方法
 * a // b = 2    8/3  整除法
 *
 * 'str' * 3   结果 3个str  strstrstr
 *
 * 关系运算符
 *
 * is  > <
 *
 * Python为了优化速度，使用了小整数对象池， 避免为整数频繁申请和销毁内存空间.
 * Python 对小整数的定义是 [-5, 256] 这些整数对象是提前建立好的，不会被垃圾回收.
 * 在一个Python的程序中, 无论这个整数处于LEGB中的哪个位置, 所有位于这个范围内的整数使用的都是同一个对象。同理，单个字母也是这样的.
 * 大整数对象池。说明：终端是每次执行一次，所以每次的大整数都重新创建，而在pycharm中，每次运行是所有代码都加载都内存中，属于一个整体，所以
 * 这个时候会有一个大整数对象池, 即处于一个代码块的大整数是同一个对象.
 * c1 和d1 处于一个代码块, 而c1.b和c2.b分别有自己的代码块,所以不相等.
 *
 * 逻辑运算符
 * and or not
 * and 与   &
 * or 或    |
 * not 非   ~
 *
 * 位运算符
 *
 * 二进制表示: 0b 开头  例如: 0b1101
 * 八进制表示: 0o 开头  例如: 0o3207
 * 十六进制 表示: 0x 开头 例如: 0x39a3d    (0-9a-f)
 *
 * bin()  十进制转二进制
 * int()  二进制转十进制
 *
 * 三目运算符
 * reulst = (a+b) if a < b else (b-a)
 *
 * 条件语句
 * if 判断条件 :
 *      print('111')
 * else:
 *      print('222')
 *
 * for循环语句
 *
 * for value in [1,2,3]
 * for index, value in enumerate([1,2,3])
 * pass, break
 * 
 * while循环语句
 * i = 0
 * while i <= 10:
 *      print(i);
 *      i += 1;
 *
 * 跳转语句
 *
 * 随机数 random
 * import random
 * random.randint(1 ,20)
 * 
 * 范围指定
 * range(8)  # range(0, 8) 包含0 但是不包含8  0,1,2,3,4,5,6,7 
 * 
 * 
 * String
 * name = 'steven'
 * 
 * # in  在...里面
 * result = 'eve' in name  # 返回值是布尔类型 True False
 * 
 * # not in 没有在...里面
 * result = 'tb' not in name # 返回值是布尔类型 True False
 * 
 * # % 字符串的格式化
 * print('%s 说: %s' %(name, '123'))
 * 
 * # r 保留原格式  有r 则不发生转义, 没有r 则发生转义
 * print(r'%s 说: ' %name)
 * 
 * 字符串取值
 * name[1:4]
 * 倒序
 * name[::-1]
 * 
 * 
*/

