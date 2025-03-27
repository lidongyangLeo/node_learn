const fs = require('fs');

// 相对路径 
// fs.writeFileSync('./index.html', 'love');
// fs.writeFileSync('index.html', 'love');

// 相对路径参照物: 命令行的工作目录

// 绝对路径 __dirname 是当前文件的绝对路径
console.log(__dirname);
