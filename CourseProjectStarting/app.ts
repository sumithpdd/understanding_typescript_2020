function add(n1 : number, n2 :number, printResult : boolean,resultPhrase: String) { 
    
    // in javascript this is how we can handle incorrect type sent to the parameter
    if(typeof n1 !=='number' || typeof n2 !=='number')
    {
        throw new Error("Incorrect input!");        
    }
    const result = n1+n2;
    if(printResult){
        console.log(resultPhrase + result.toString());
    }

    return result;
}
const number1 = 5;
const number2=2.8;
const printResult = true;
const resultPhrase ='Result is: ';

  add(number1,number2,printResult, resultPhrase); 