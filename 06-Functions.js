// // TypeScript has a specific syntax for typing function parameters and return values.
var Abcd = /** @class */ (function () {
    function Abcd(username) {
        this.username = username;
        this.username = username;
    }
    Object.defineProperty(Abcd.prototype, "name", {
        get: function () {
            return this.username;
        },
        set: function (value) {
            this.username = value;
        },
        enumerable: false,
        configurable: true
    });
    return Abcd;
}());
var abcd = new Abcd("Ashwini");
// // ---------------------- number -----------------------------
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// // ---------------------- void -----------------------------
function printhello() {
    console.log("Hello!");
}
printhello();
// // ---------------------- Parameters -----------------------------
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
// // ---------------------- Optional Parameters -----------------------------
function add(a, b, c) {
    return a * b + (c || 0);
}
console.log(add(2, 5));
// // ---------------------- Default Parameters -----------------------------
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return value * exponent;
}
console.log(pow(10));
// // ---------------------- Named Parameters -----------------------------
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
// // ---------------------- Rest Parameters -----------------------------
function addd(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(addd(10, 10, 10, 10, 10));
// // ---------------------- Arrow Function -----------------------------
var xyz = function () {
    return "hey";
};
