console.log("hello, Node.js");

// 注意 BOM 和 DOM 是浏览器环境的东西
// console.log(window);

// 在 Node.js 中，没有 window 对象，但是有 global 对象
// console.log(global);

// 在 Node.js 中，没有 document 对象
// console.log(document);
setTimeout(() => {
  console.log("hello, setTimeout");
}, 1000);

// global 顶级对象
// globalThis
console.log(globalThis === global);
