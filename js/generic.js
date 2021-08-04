"use strict";
//範型
// T可以改為任何大小寫字母
// 第一個T showGR是一個範型函數
// 第二個T 參數是範型型態
// 第三個T 函數返回的是範型型態
function showGR(args) {
    return args;
}
var generic1 = showGR('hello world');
var generic2 = showGR(123);
