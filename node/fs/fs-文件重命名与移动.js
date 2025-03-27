const fs = require("fs");
const path = require("path");

const sourceFilePath = path.join(__dirname, "./座右铭.txt");
const targetFilePath = path.join(__dirname, "./论语.txt");

// 调用 rename 方法
// fs.rename(sourceFilePath, targetFilePath, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("重命名成功");
//   }
// });

const sourceDirPath = path.join(__dirname, "./data.txt");
const targetDirPath = path.join(__dirname,"..", 'static/data.txt');

// 文件移动 
fs.rename(sourceDirPath, targetDirPath, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("文件移动成功");
  }
})
// 同步
// fs.renameSync

