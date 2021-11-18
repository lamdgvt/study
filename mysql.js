/** 
 * mysql
 * 
 * mysql -uroot -p123456
 * -u用户名 -p密码
 * 
 * sql 语言分类
 * 数据定义语言 DDL     定义数据库对象、数据表、视图、索引
 * 数据操作语言 DML     数据库表更新、增加、删除 记录
 * 事务控制语言 TCL     数据库中的事务管理
 * 数据查询语言 DQL     查询数据库的数据
 * 数据控制语言 DCL     控制数据库的用户权限
 * 
 * 
 * 命令语句
 * 
 * 查看数据库
 * SHOW DATABASES
 * 
 * 创建数据库
 * CREATE DATABASE [IF NOT EXISTS] 数据库名
 * 
 * 查看指定数据库
 * SHOW CRETAE DATABASE 数据库名
 * 
 * 修改数据库
 * ALTER DATABASE 数据库名 CHARACTER SET 字符集 [COLLATE 排序规则]
 * 
 * 删除数据库
 * DROP DATABASE 数据库名
 * 
 * 查看正在使用的数据库
 * SELECT DATABASE()
 * 
 * 切换数据库
 * USE 数据库名
 * 
 * 创建表(创建表之前, 一定要先使用数据库, 表要创建在某个数据库中)
 * CREATE TABLE 表名(字段1 数据类型, 字段2 数据类型, ..., 字段名n 数据类型)
 * 建议格式: ddd
 * CREATE TABLE 表名 (
 *  字段名1 数据类型,
 *  字段名2 数据类型,
 *  ...,
 *  字段名n 数据类型ddd
 * )
 * 
 * 复制表结构
 * CREATE TABLE 新表名 LIKE 旧表名
 * 
 * 主键 id int primary key AUTO_INCREMENT / primary key(id)
 * 
 * 修改表
 * (1) 增加列
 * ALTER TABLE 表名 ADD 列名 类型
 * (2) 修改列类型
 * ALTER TABLE 表名 MODIFY 列名 新的类型
 * (3) 修改列名
 * ALTER TABLE 表名 CHANGE 旧列名 新列明 类型
 * (4) 删除列
 * ALTER TABLE 表名 DROP 列名
 * (5) 修改表名
 * RENAME TABLE 表名 TO 新表名
 * (6) 修改字符集
 * ALTER TABLE 表名 character set 字符集
 * (7) 删除表
 * DROP TABLE 表名
 * (8) 指定字段插入
 * INSERT INTO 表名 (id, name, age, sex, ...列名) VALUES(1, '张三', 20, '男', ...列值)
 * (9) 更新表记录
 *    不带条件的更新
 *      UPDATE 表名 SET 字段1=值1[, 字段2=值2, ...字段n=值n]
 *      UPDATE student SET sex='女'
 *    带条件的更新
 *      UPDATE 表名 SET 字段1=值1[, 字段2=值2, ...字段n=值n][WHERE 条件]
 * (10) 删除数据
 *    不带条件删除
 *      DELETE FROM 表名 WHERE 条件
 *    不带条件删除
 *      DELETE FROM 表名
 * (11) 查询全部数据
 *      SELECT * FROM 表名
 * (12) 根据列名数据
 *      SELECT name, age, ...列名 FROM 表名
 * (13) 去重复数据
 *      SELECT DISTINCT 字段名,...n字段名 FROM 表名
 * (14) 查询结果参与运算
 *      SELECT 列名1 + 固定值 FROM 表名
 *      SELECT 列名1 + 列名2 FROM 表名
 *      and(&&) 多个条件同时满足
 *      or (||) 多个条件其中一个满足
 *      not(!)  不满足
 * (15) 指定范围内查询 IN
 *      SELECT 字段名 FROM 表名 WHERE 字段 IN (数据1, 数据2...);
 *      IN 里面的每个数据都会作为一次条件, 只要满足条件的就会显示.
 * (16) 模糊查询 like
 *      SELECT * FROM 表名 WHERE 字段名 like '通配符字符串'
 *      满足通配符字符串规则的数据就会显示
 *      MySQL 通配符
 *      %:  表示0个或多个字符(任意个字符)
 *      _:  表示一个字符
 * (17) 升序降序排序
 *      SELECT * FROM 表名 ORDER_BY 列名 [ASC/DESC]
 * (18) 组合排序
 *      SELECT * FROM 表名 ORDER_BY 列名1 [ASC/DESC], 列名2 [ASC/DESC], ...n列名 [ASC/DESC]
 * (19) 限制
 *      SELECT * FROM 表名 [LIMIT offset, length];
 *      例如: SELECT * FROM student3 LIMIT 0,10;
 * (20) select 语句总结
 *      SELECT 字段 FROM 表名 WHERE 条件 GROUP  BY 字段 HAVING 条件 ORDER BY 字段 LIMIT offset, length
 * (21) 顺序
 *      1. From 表名
 *      2. WHERE 条件
 *      3. GROUP BY 字段
 *      4. HAVING 条件
 *      5. SELECT 字段
 *      6. ORDER BY 字段
 *      7. LIMIT 限制
 * (22) 数据库约束主要: 主键约束、非空约束、唯一约束、默认约束(缺省约束)、外键约束、检查约束(Mysql 不支持)
 *      主键: 唯一标识一条记录
 * (23) 
 *      
 * 
 * 函数
 * abs(x)   绝对值
 * ceil(x)  向上取整
 * floor(x) 向下整
 * rand()   随机数
 * round()  随机整数
 * concat(s1, ...sn) 多个字符串 合并为一个字符串
 * locate(s1, str) 查询s1 在 str字符串的位置
 * lower(s) 小写字母
 * upper(s) 大写字母
 * replace(s, s1, s2) 将s字符串 s2 替换掉 s1
 * substr(s, start, length) s 字符串 从start 截取长度 length
 * trim(s) 去掉字符串 首尾的空格和制表符
 * reverse(s) 反转字符串
 * now() 系统当前(执行前)时间  年月日时分秒
 * sysdate() 系统当前时间(执行后)  年月日时分秒
 * curdate() 当前年月日
 * curtime() 当前时分秒
 * month(date) 参数日期的月份
 * week(date) 参数是第几个星期
 * 
 * 聚合函数
 * count: 统计指定列记录数, null 不统计
 * sum: 总和
 * max: 最大值
 * min: 最小值
 * avg: 平均值
 * niguolai 
 * if(condition, expr1, expr2)  如果condition true 返回 expr1 否则 expr2
 * ifnull(expr1, expr2)  如果不为null 返回 expr1 否则 expr2
 * 
 * version() 查看数据库版本
 * user()    数据库的用户
 * MD5(str)  MD5加密数据
 * 
 * 
 * 数据类型
 * 整数类型     字节        说明
 * tinyint      1       无符号: 0 ~ 255         有符号: -128 ~ 127
 * smllint      2       无符号: 0 ~ 65535       有符号: -32768 ~ 32767
 * mediumint    3       无符号: 0 ~ 1677215     有符号: -8388608 ~ 8388607
 * int、integer 4       无符号: 0 ~ 4294967295  有符号: -2147483648 ~ 2147483647
 * bigint       8       无符号: 0 ~ 18446744073709551615
 *                      有符号: 0 ~ -9223372036854775808 ~ 9223372036854775807
 * 
 * 近似数类型
 * 
 * 浮点数   3.14
 * mysql 中的浮点数包括 float 和 double 两种, 定义格式为 float(M, D)、double(M, D)
 * M: 表示所存储的值总共有M位 (M的取值范围 0 ~ 255)
 * D: 表示小数点后有D位 (D的取值范围是 0 ~ 30)
 * 例如: float(7, 4) 存储的数据范围是 -999.9999 ~ 999.9999
 * 
 * 定点数
 * decimal 是mysql的定点数  比浮点数更加精确 decimal(M, D)
 * M: 表示所存储的值总共有M位 (M的取值范围 0 ~ 65)
 * D: 表示小数点后有D位 (D的取值范围是 0 ~ 30)
 * 
 * 字符串类型
 * char(M)              M 为 0 ~ 255 之间的整数
 * varchar(M)           M 为 0 ~ 65535 之间的整数
 * tinyblob             允许长度 0 ~ 255 字节
 * blob                 允许长度 0 ~ 65535 字节
 * meduimblob           允许长度 0 ~ 167772150 字节
 * longblob             允许长度 0 ~ 4294967295 字节
 * tinytext             允许长度 0 ~ 255 字节
 * text                 允许长度 0 ~ 65535 字节
 * meduimtext           允许长度 0 ~ 167772150 字节
 * longtext             允许长度 0 ~ 4294967295 字节
 * varbinary(M)         允许长度 0 ~ M 个字节的变长字节字符串
 * binary(M)            允许长度 0 ~ M 个字节的定长字节字符串
 * enum                 允许的值选自一个允许值列表, 这个列表最多能存储的值数量为 65535 个
 * set                  和 enum 类似, set 类型是一个多选字符串数据类型
 * 
 * 日期和时间类型
 * 类型         字节        最小值                          最大值
 * date         4       1000-01-01                      9999-12-31
 * datetime     8       1000-01-01 00:00:00             9999-12-31 23:59:59
 * timestamp    4       1970-01-01 00:00:01. 000000     2038-01-19 03:14:07. 999999
 * time         3       -838:59:59                      838:59:59
 * year         1       1901                            2155
 * 
 * 
*/

