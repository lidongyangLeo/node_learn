const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "./html");
// 2. 创建文件夹
// fs.mkdir(dirPath, err => {
//     if (err) {
//         console.log("创建失败",err);
//     } else {
//         console.log("创建成功");
//     }
// })

//递归创建
const dirPath2 = path.join(__dirname, "./a/b/c");
// fs.mkdir(dirPath2, {recursive: true}, err => {
//     if (err) {
//         console.log("创建失败",err);
//     } else {
//         console.log("创建成功");
//     }
// })

// 3. 读取文件夹
const dirPath3 = path.join(__dirname, "../static");
// fs.readdir(dirPath3, (err, files) => {
//   if (err) {
//     console.log("读取失败", err);
//   } else {
//     console.log("读取成功", files);
//   }
// });

// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log("读取失败", err);
//   } else {
//     console.log("读取成功", files);
//   }
// });

// 删除文件夹 
// fs.rmdir(dirPath, err => {
//   if (err) {
//     console.log("删除失败", err);
//   } else {
//     console.log("删除成功");
//   }
// })

const dirPath4 = path.join(__dirname, "./a");
/**
 * (node:51498) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
(Use `node --trace-deprecation ...` to show where the warning was created)
 */
// fs.rmdir(dirPath4, {recursive: true}, err => {
//     if (err){
//         console.log("删除失败", err);
//     } else {
//         console.log("删除成功");
//     }
// })

fs.rm(dirPath4, {recursive: true}, err => {
    if (err){
        console.log("删除失败", err);
    } else {
        console.log("删除成功");
    }
})