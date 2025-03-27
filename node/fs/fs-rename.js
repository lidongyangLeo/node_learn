const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../fs")
console.log("filePath", filePath);

const files = fs.readdirSync(filePath);
console.log(files);

files.forEach((item) => {
    console.log(item);
    // 拆分文件名
    let data = item.split("-");
    console.log(data);
})