// 1.导入http模块

const http = require("http")

// 2.创建web服务器实例
const server = http.createServer((requeset, response) => {

    // 1.获取请求报文
    // console.log(requeset.method) 

    // 2.获取请求路径
    // console.log(requeset.url) // 只包含 url 中的路径与查询字符串

    //3. 获取http版本
    // console.log(requeset.httpVersion)

    //4. 获取请求头
    // console.log(requeset.headers)

    let body = "";
    requeset.on("data", (chunk) => {
        console.log(chunk.toString())
        body += chunk.toString();
    })

    requeset.on("end", () => {
        console.log("end",body)
        // 响应 
        response.end("hello HTTP Server");
    })

    // response.end("hello HTTP Server");
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
