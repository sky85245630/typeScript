"use strict";
var num1 = 100;
var num2 = 200.2;
var num3 = 300;
var num4 = 400.4;
//寫這樣因為沒有約定他的型別會報錯
//function add(a,b)
function add(a, b) {
    var asd = a + b;
    console.log('asd', asd);
}
//這樣就會報錯
// add('100',200)
//這樣不會報錯
add(100, 200);
