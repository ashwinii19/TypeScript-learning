// // TypeScript has a specific syntax for typing function parameters and return values.

class Abcd{
    constructor(public username: string){
        this.username = username;
    }

    get name(): string{
        return this.username;
    }

    set name(value: string){
        this.username = value;
    }
}
let abcd = new Abcd("Ashwini");



// // ---------------------- number -----------------------------
function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());


// // ---------------------- void -----------------------------
function printhello(): void{
    console.log("Hello!");
}
printhello();



// // ---------------------- Parameters -----------------------------
function multiply(a: number, b:number){
    return a*b;
}
console.log(multiply(2,5));




// // ---------------------- Optional Parameters -----------------------------
function add(a: number, b: number, c?: number){
    return a*b + (c||0);
}
console.log(add(2,5));



// // ---------------------- Default Parameters -----------------------------
function pow(value: number, exponent: number = 10){
    return value * exponent;
}
console.log(pow(10));



// // ---------------------- Named Parameters -----------------------------
function divide({dividend, divisor}: {dividend: number, divisor: number}){
    return dividend / divisor;
}
console.log(divide({dividend: 10, divisor: 2}));




// // ---------------------- Rest Parameters -----------------------------
function addd(a: number, b: number, ...rest: number[]){
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addd(10,10,10,10,10));




// // ---------------------- Arrow Function -----------------------------
const xyz = (): string =>{
    return "hey";
}