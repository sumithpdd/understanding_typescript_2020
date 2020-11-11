function addNumber(n1, n2) {
    var result = n1 + n2;
    return result;
}
function printAsResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printAsResult(addNumber(5, 12));
var combineValues;
combineValues = addNumber;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
