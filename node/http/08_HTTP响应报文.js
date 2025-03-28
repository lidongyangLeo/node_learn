const http = require("http")
const url = require("url")


const server = http.createServer((requeset, response) => {
    // 状态码
    response.statusCode = 200;
    // 响应状态描述
    response.statusMessage = 'OK'
    // 响应头
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.setHeader("Customer-Header", [1, 2,3])

    // 响应体
    response.write("响应体");
    response.end('response')
});


server.listen(9000, () => {
    console.log("HTTP Server is running at ，会执行回调函数");
})

server.on("error", (err) => {
    console.log("HTTP Server is  error", err);
})
