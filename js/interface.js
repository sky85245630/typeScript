"use strict";
function keypairIf() {
    //這樣會出錯
    // let kp1 :keypairInterface={1,'asd'}
    // 這樣才不會 key跟value顛倒也沒關係
    var kp2 = {
        key: 1,
        value: 'asd'
    };
}
var calculaterIf = {
    sum: function (first, second) {
        return first + second;
    }
};
console.log(calculaterIf.sum(1, 2));
