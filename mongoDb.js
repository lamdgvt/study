/**
 * mongobd
 *  
 * 设置 path:  ..../mongoDB/bin
 *
 * mongodb 默认使用执行 mongod 命令C盘符根目录下的 /data/db 作为自己的数据库存储目录
 * 第一次执行该命令时, 先手动新建一个 /data/db
 *
 * 如果想修改默认的数据库存储目录
 * mongod --dbpath=数据存储目录路径
 *
 * 启动
 * mongod
 *
 * 连接数据库(默认连接本机 mongoDB 服务)
 * mongo
 *
 * 退出数据库
 * exit
 *
*/

/**
 * 基本命令
 *
 * 查看显示所有数据库
 * show dbs
 *
 * 查看当前操作的数据库
 * db
 *
 * use 数据库名称
 * 切换到制定的数据库 (如果没有该数据库,则 自动创建)
 * 
 * 查看当前数据库所有的表
 * show collenctions 
 * 
 * 查看当前数据库的某个表数据
 * db.${表数据}.find()
 * db.cats.find()
*/

/**
 * node 去使用 mongodb
 *
 * https://github.com/mongodb/node-mongodb-native
 * npm install mongodb --save
 *
 * mongoose 第三方依赖包, 基于 mongodb 封装
 * https://mongoosejs.com/
*/

const mongoose = require('mongoose');

// 连接 MongoDB 数据库  localhost 本机的  test 数据库
mongoose.connect('mongodb://localhost/test');

// 创建一个 Cat 表, name 属性中, 是String 类型
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个 Cat
const kitty = new Cat({ name: 'Zildjian' });

// 持久化保存 kitty 实例
kitty.save().then(() => console.log('meow'));

// Schema 模式
const Schema = mongoose.Schema

// 架构约束
let blogSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

/**
 * mongoose.model 将架构, 实例化.
 * 第一个参数, 传入一个大写名词单数字符串, 用于表示数据库名词.
 * mongoose 将大写字符串 转成小写复数 的集合名称
 * 第二个参数, 架构
 * 
 * 返回值: 模型构造函数
 */
let user = mongoose.model('User', blogSchema)

// 实例化完, save() 保存
user.save().then(() => {

})

// 查询表格数据
user.find((err, ret) => {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})

// 带条件查询表格数据
user.find({
    username: 'zs'
}, (err, ret) => {
    if (err) '失败'
    else {
        console.log(ret)
    }
})

// 带条件查询表格数据 的第一个符合条件
user.findOne({
    username: 'zs'
}, (err, ret) => {
    if (err) '失败'
    else {
        console.log(ret)
    }
})

// 带条件删除表格数据
user.remove({ username: 'zs' }, (err, ret) => {
    if (err) {
        console.log('失败')
    } else {
        console.log('删除成功')
        console.log(ret)
    }
})

// 根据id 更新数据
user.findByIdAndUpdate('.....id', {
    parssword: 1234,
}, (err, ret) => {

})

// 根据条件更新一个数据
user.findOneAndUpdate({ name: 'zs' }, {
    parssword: 555
}, (err, ret) => { })



