interface keypairInterface{
    //這邊是用分號隔開
    key:number;
    value:string;
}

function keypairIf() {   
    //這樣會出錯
    // let kp1 :keypairInterface={1,'asd'}

    // 這樣才不會 key跟value顛倒也沒關係
    let kp2 :keypairInterface={
        key:1,
        value:'asd'
    }
}



// 這邊比較重要
interface calIf{
    sum(first:number,second:number):number
}

let calculaterIf:calIf={
    sum(first:number,second:number){
        return first+second
    }
}

console.log(calculaterIf.sum(1,2))