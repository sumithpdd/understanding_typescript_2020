function add(n1, n2, printResult, resultPhrase) {
    // in javascript this is how we can handle incorrect type sent to the parameter
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("Incorrect input!");
    }
    var result = n1 + n2;
    if (printResult) {
        console.log(resultPhrase + result.toString());
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
