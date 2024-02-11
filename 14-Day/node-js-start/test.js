// console.log("hello world");

// console.log(window)
// Node Js --->> is no window object, no decument object
// document.addEventListener("click", () => {}); // can't use in node js

// console.log(global);
//Node Js -->> is global object

//Core NODE JS modules are :
// OS, FS, Path

const os = require("os");

console.log(os.type());

console.log(os.platform());

console.log(os.homedir());

console.log(os.release());
