let express = require('express')

let app = express()

/** 
 * 中间件
*/
// app.use((req, res) => {
//     console.log('loading')
// })



/**
 * 查询 音乐基础列表
 */
app.post('/server/music/basic/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    let data = {
        status: true,
        code: 200,
        result: {
            totals: 9,
            rows: [
                { name: '月牙湾', singer: 'F.I.R', timeLength: new Date(1970, 1, 1, 5, 8).getTime(), isLike: true },
                { name: '空心', singer: '光泽', timeLength: new Date(1970, 1, 1, 4, 39).getTime(), isLike: true },
                { name: '过客', singer: '阿函', timeLength: new Date(1970, 1, 1, 4, 30).getTime(), isLike: false },
                { name: '只是太爱你', singer: '丁芙妮', timeLength: new Date(1970, 1, 1, 4, 7).getTime(), isLike: false },
                { name: '淋雨一直走', singer: '张韶涵', timeLength: new Date(1970, 1, 1, 3, 24).getTime(), isLike: false },
                { name: '说爱你', singer: '刘至佳', timeLength: new Date(1970, 1, 1, 3, 22).getTime(), isLike: true },
                { name: '出山', singer: '花粥/胜娚', timeLength: new Date(1970, 1, 1, 3, 20).getTime(), isLike: false },
                { name: 'Wonderful U (Demo Version)', singer: 'AGA', timeLength: new Date(1970, 1, 1, 4, 8).getTime(), isLike: false },
                { name: '为你我受冷风吹', singer: '胡彦斌', timeLength: new Date(1970, 1, 1, 4, 39).getTime(), isLike: true },
            ],
        }
    }
    res.end(JSON.stringify(data))
})


app.listen(8090, function () {

})

// let server = http.createServer().on('request')

