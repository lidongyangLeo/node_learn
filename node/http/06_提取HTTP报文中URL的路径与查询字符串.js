

const http = require("http")

// 1. 导入url 模块 
const url = require("url")


const server = http.createServer((requeset, response) => {
    // 实例化 URL 对象
    let url = new URL(requeset.url, "http://www.xxx.com")
    console.log(url);
    // 输出 查询字符串
    console.log("keyword",url.searchParams.get("keyword"))
    response.end('url new')
});


server.listen(9000, () => {
    console.log("HTTP Server is running at ，会执行回调函数");
})

server.on("error", (err) => {
    console.log("HTTP Server is  error", err);
})
