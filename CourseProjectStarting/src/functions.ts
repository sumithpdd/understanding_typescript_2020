function addNumber(n1 : number, n2 :number) { 
   const result = n1+n2;

    return result;
}
function printAsResult(num:number):void{
    console.log('Result: ' + num);
}

function addAndHandle(n1:number,n2 :number,cb:(num:number)=>void){
    const result = n1+n2;
    cb(result);
}
printAsResult(addNumber(5,12));

let combineValues: (a:number, b:number)=>number;

combineValues=addNumber;
console.log(combineValues(8,8));

addAndHandle(10,20 ,(result)=>{
    console.log(result);
})