const fs = require('fs');
const path = require('path');

/**
 * resolve
 */
const filePath = path.resolve(__dirname, 'index.html');
console.log(filePath);

/**
 * sep 分隔符
 */

console.log(path.sep)

/**
 * parse  方法 
 */

// __filename 是当前文件的绝对路径
console.log(__filename)

const str = "/Users/lidongyang/codeLife/project/node_learn/node/path/path.js"

console.log(path.parse(str)) 
/**
 * {
  root: '/',
  dir: '/Users/lidongyang/codeLife/project/node_learn/node/path',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}

 */

// basename 获取文件名 
console.log(path.basename(str)) // path.js

// dirname 获取文件所在的目录
console.log(path.dirname(str)) // /Users/lidongyang/codeLife/project/node_learn/node/path

// extname 获取文件的扩展名
console.log(path.extname(str)) // .js

