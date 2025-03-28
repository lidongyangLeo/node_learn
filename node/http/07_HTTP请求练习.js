const http = require("http");

// 路由配置
const routes = {
  GET: {
    '/login': (req, res) => {
      res.end("登录页面");
    },
    '/reg': (req, res) => {
      res.end("注册页面");
    }
  }
};

// 请求处理函数
async function handleRequest(request, response) {
  try {
    const method = request.method;
    const url = new URL(request.url, `http://${request.headers.host}`);
    const pathname = url.pathname;

    console.log(`${method} ${pathname}`);

    // 设置响应头
    response.setHeader("Content-Type", "text/html;charset=utf-8");

    // 查找并执行对应的路由处理函数
    const routeHandler = routes[method]?.[pathname];
    console.log(routeHandler); // [Function: routeHandler]
    if (routeHandler) {
      await routeHandler(request, response);
      return;
    }

    // 未找到路由，返回默认响应
    response.statusCode = 404;
    response.end("404 Not Found");
  } catch (error) {
    console.error('请求处理错误:', error);
    response.statusCode = 500;
    response.end("服务器内部错误");
  }
}

const server = http.createServer(handleRequest);

server.listen(9000, () => {
  console.log("HTTP Server is running at port 9000");
});
