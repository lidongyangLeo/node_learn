// 1.导入http模块

const http = require("http")

// 2.创建web服务器实例
const server = http.createServer((requeset, response) => {
    // response.end("hello HTTP Server");
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.end("你好")
});

// 3. 监听端口， 启动服务器
server.listen(9000, () => {
    // 当服务启动成功之后，会执行回调函数
    console.log("HTTP Server is running at ，会执行回调函数");
})

server.on("error", (err) => {
    console.log("HTTP Server is  error", err)
    ;
})
