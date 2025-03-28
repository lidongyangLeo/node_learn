

const http = require("http")

// 1. 导入url 模块 
const url = require("url")


const server = http.createServer((requeset, response) => {
    // 2. 解析request.url
    // console.log(requeset.url)

    let res = url.parse(requeset.url, true)
    console.log(res)
    // 路径
    let pathname = res.pathname
    console.log(pathname)

    // 查询字符串
    let query = res.query
    console.log(query)

    response.end('url')
});


server.listen(9000, () => {
    console.log("HTTP Server is running at ，会执行回调函数");
})

server.on("error", (err) => {
    console.log("HTTP Server is  error", err);
})
