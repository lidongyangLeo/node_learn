/**
 * 需求
 * 复制 static 文件夹下的 video.mp4
 */
const process = require("process");
const fs = require("fs");
const path = require("path");
const videoPath = path.join(__dirname, "..", "static", "video.mp4");

// 方式1  readFile + writeFile

const data = fs.readFileSync(videoPath);

const copyPath = path.join(__dirname, "..", "static", "video-copy.mp4");

fs.writeFileSync(copyPath, data);

console.log("方式1: process.memoryUsage()", process.memoryUsage()); //55427072

// 方式2 流式操作 (所占资源更少)

const rs = fs.createReadStream(videoPath);

const copy2Path = path.join(__dirname, "..", "static", "video-copy2.mp4");

const ws = fs.createWriteStream(copy2Path);

// 绑定data 事件
rs.on("data", (chunk) => {
  ws.write(chunk);
});

rs.on("end", () => {
  ws.end();
  console.log("复制完成");
});

console.log("方式2: process.memoryUsage()", process.memoryUsage()); // 38502400

// 方式3 pipe 流式操作 (读取流完成之后 交给写入流)
rs.pipe(ws);
