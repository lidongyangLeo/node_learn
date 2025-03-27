// fs 是 Node.js 中的一个核心模块，用于处理文件系统
// fs模块可以实现与硬盘的交互
// 例如文件的创建、删除、重命名、移动、复制等。

/**
 * 需求
 * 新建一个文件，座右铭.txt 写入内容 三人行，则必有我师焉
 *
 *
 */

// 导入 fs 模块
const fs = require("fs");

// 写入文件 (异步写入)
fs.writeFile("./座右铭.txt", "三人行, 则必有我师焉", (err) => {
  // 如果文件写入成功，则 err 为 null
  // 如果文件写入失败，则 err 为错误对象
  if (err) {
    console.log("文件写入失败", err);
  } else {
    console.log("文件写入成功");
  }
});

// 同步写入
fs.writeFileSync("./data.txt", "同步写入");
console.log(1 + 1); // 优先输出

// 读取文件 (异步读取)
fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log("读取失败", err);
  } else {
    console.log("读取成功", data);
    // 读取成功后，将读取到的内容转换为字符串
    const result = data.toString();
    console.log(result);
  }
});

// appendFile 追加文件

fs.appendFile("./座右铭.txt", "择其善者而从之, 其不善者而改之", (err) => {
  if (err) {
    console.log("追加失败", err);
  } else {
    console.log("追加成功");
  }
});

// writeFile 也可以实现追加写入
fs.writeFile("./座右铭.txt", "\n追加", { flag: "a" }, (err) => {
  if (err) {
    console.log("追加失败", err);
  }
});
