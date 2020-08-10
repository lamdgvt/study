/**
 * 文件操作
 *
 * 系统函数 open()
 *
 * path 路径
 *
 * mode: r  w
 *       rb wb
 *
 * r: read 读
 * s.read()
 * s.readline()     # 字符串可行
 * s.readlines()    # 字符串可行
 * s.readable()     # 判断是否可读
 *
 * w: write 写
 * open('al.text', 'w') as wstream:
 *  pass
 *
 * s.write()
 * s.writelines()
 * s.writeable()
 * s.close() 关闭
 * 
 * with open(path )
 *
 * os模块:
 * os.path
 * absolute 绝对路径
 * os.path.isabs(r'c:\') 是否绝对路径
 *
 * 获取路径:
 * os.path.dirname(__file__)
 *
 * 获取绝对路径:
 * os.path.abspath(__file__)
 *
 * 获取当前文件的文件夹路径
 * os.getcwd()
 *
 * 返回指定目录所有的 文件和文件夹
 * os.listdir(__file__)
 * 
 * 创建文件夹
 * os.mkdir(__file__)
 * 
 * 删除文件夹 (只能删除空的文件夹)
 * os.mkdir(__file__)
 * 
 * 删除文件
 * os.remove(__file__)
 * 
 * 删除多个文件的文件夹
 * os.removedirs
 * 
 * 切换目录
 * os.chdir(__file__)
 *
 *
 *
 * b: binary 二进制 字节
 *
 *
 *
 *
*/