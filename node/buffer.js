// Buffer 是 Node.js 中的一个核心模块，用于处理二进制数据
// 在 Node.js 中，Buffer 是一个全局对象，可以直接使用
// Buffer 是一个类数组对象，每个元素是一个字节
// Buffer 的大小是固定的，不能动态改变
// Buffer 的默认编码是 utf-8
// Buffer 的默认长度是 16

// 创建 Buffer

// 1. 使用 Buffer.alloc()
const buffer = Buffer.alloc(10);
// console.log("buffer", buffer);

// 2. 使用 Buffer.allocUnsafe()
const buffer2 = Buffer.allocUnsafe(10);
// console.log("buffer2", buffer2);

// 3. 使用 Buffer.from()
const buffer3 = Buffer.from("hello");
// console.log("buffer3", buffer3);

// buffer 与字符串的转换

let buffer4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buffer4.toString());
// toString 默认是按照 utf-8编码方式进行转换的。

console.log(buffer4[0]);
