"use strict";
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var myColor = color.blue;
//2
console.log(myColor);
var color1;
(function (color1) {
    color1[color1["red"] = 1] = "red";
    color1[color1["green"] = 5] = "green";
    color1[color1["blue"] = 6] = "blue";
})(color1 || (color1 = {}));
var myColor1 = color1.blue;
//會隨著前一個而去遞增
//6
console.log(myColor1);
var directionEnum;
(function (directionEnum) {
    directionEnum["up"] = "UP";
    // down  如果只有設定這樣會出錯
})(directionEnum || (directionEnum = {}));
//UP
console.log(directionEnum.up);
