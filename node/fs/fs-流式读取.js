const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "static", "video.mp4");

// 创建读取流对象
const rs = fs.createReadStream(filePath);

rs.on("data", (chunk) => {
  console.log("chunk", chunk.length); // 65536 字节  => 64KB
});

rs.on("end", () => {
  console.log("读取完成");
});

rs.on("error", (err) => {
  console.log("读取失败", err);
});
