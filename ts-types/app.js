function add(n1, n2, sResult) {
    if (sResult)
        console.log({ n1: n1, n2: n2, result: n1 + n2 });
    return n1 + n2;
}
var n1 = 2;
var n2 = 5;
var pResult = true;
var result = add(n1, n2, pResult);
console.log("result: ", result);
