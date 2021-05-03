function add(n1, n2) {
    return n1 + n2;
}
var printResult = function (num) {
    console.log("RESULT as", num);
};
function addAndandle(n1, n2, cb) {
    cb(n1 + n2);
}
printResult(add(1, 2));
addAndandle(1, 33, printResult);
var func = add;
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: "Hi there!" });
}
sendRequest("Send this!", function (response) {
    console.log(response);
    return true;
});
