// // Union types are used when a value can be more than a single type.
// // It uses the | (pipe) symbol.
var variable;
variable = null;
variable = "Ashwini";
// variable = 12;          // ❌
// // ----------------------------------------------------------------------------
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
// // ----------------------------------------------------------------------------
function handleUnion(input) {
    if (typeof input === "string") {
        console.log("String:", input.toUpperCase());
    }
    else {
        console.log("Number:", input.toFixed(2));
    }
}
var a = {
    section: 'a',
    name: 'Ashwini'
};
console.log(a);
var ab = {
    name: 'Ashwini',
    age: 22
};
console.log(ab);
