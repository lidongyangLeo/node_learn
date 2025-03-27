const fs = require("fs");
const path = require("path");
const sourcePath = path.join(__dirname, "./观书有感.txt");
fs.unlink(sourcePath, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("删除成功");
  }
})

// 调用rm 方法  
const rmPath = path.join(__dirname, "./论语.txt");
fs.rm(rmPath, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("删除成功");
  }
})