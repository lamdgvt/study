/**
 * 旧的列表 ---> 新的列表
 *
 * 列表推导式:  格式: [表达式 for 变量 in 旧列表] 或者 [表达式 for 变量 in 旧列表 if 条件]
 *
 * names = ['tom', 'lily', 'abc', 'jack']
 *
 * result = [name.capitalize() for name in names if len(name) > 3]
 *
 * dict1 = { 'name': 'tom1', salary: 9000 }
 * dict2 = { 'name': 'tom2', salary: 4000 }
 * dict3 = { 'name': 'tom3', salary: 5000 }
 * dict4 = { 'name': 'tom4', salary: 7000 }
 *
 * list1 = [dict1, dict2, dict3, dict4]
 *
 * list = [item['salary'] + 200  if item['salary'] > 5000 else item['salary'] + 500  for item in list1]
 * 
 * 集合推导式: 
 * dict: { 'a': 'A', 'b': 'B', 'c': 'C' }
 *  { value: key for key, value in dict1.items() }
 * 
 * 
*/