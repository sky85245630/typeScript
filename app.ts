var num1:number = 100;
var num2:number = 200.2;

var num3 = 300;
var num4 = 400.4;

//寫這樣也可以
//function add(a,b)
function add(a:number,b:number){
    let asd = a+b;
    console.log('asd',asd)
}

//這樣就會報錯
// add('100',200)

//這樣不會報錯
add(100,200)
