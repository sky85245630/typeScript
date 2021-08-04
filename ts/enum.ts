enum color{
    red,
    green,
    blue
}

let myColor = color.blue;
//2
console.log(myColor)

enum color1{
    red = 1,
    green =5,
    blue
}

let myColor1 = color1.blue;
//會隨著前一個而去遞增
//6
console.log(myColor1)


enum directionEnum{
    up='UP',

    // down  如果只有設定這樣會出錯
}

//UP
console.log(directionEnum.up)