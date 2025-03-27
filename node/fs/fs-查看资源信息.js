const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../static/video.mp4")
// stat 方法  status 缩写状态
fs.stat(filePath, (err, data) => {
  if (err) {
    console.log("操作失败", err);
    return;
  }
  console.log(data);
  // isFile 是文件
  console.log(data.isFile());
  // isDirectory 是文件夹
  console.log(data.isDirectory());
});
