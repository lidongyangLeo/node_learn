// 1. 导入 fs 模块
const fs = require("fs");
const path = require("path");

// 获取文件的绝对路径
const filePath = path.join(__dirname, "./观书有感.txt");

// 先检查文件是否存在
fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.log("文件不存在:", filePath);
    } else if (err.code === "EACCES") {
      console.log("没有权限读取文件:", filePath);
    } else {
      console.log("无法访问文件:", err);
    }
    return;
  }

  // 文件存在且可读，尝试读取
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("读取失败", err);
    } else {
      console.log("读取成功:\n" + data);
    }
  });
});
