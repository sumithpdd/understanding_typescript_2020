function addNumber(n1 : number, n2 :number) { 
   const result = n1+n2;

    return result;
}
function printAsResult(num:number):void{
    console.log('Result: ' + num);
}
printAsResult(addNumber(5,12));