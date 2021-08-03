function show():void{
    var num:number = 101;
    console.log('num',num);
    //會出錯Type 'number' is not assignable to type 'void'.
    // return num
    return undefined
}

show()

var a :void;
//兩個都是輸出undefined
console.log('a',a)
console.log('typeofA',typeof a)