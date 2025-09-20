// // Basic Types
// //         Number, String, Boolean
// //         Arrays, Tuples,
// //         Any, Unknown, Never, Void
// //         Enums


// // ------------------- Declaration -------------------------------
// // ----- Number -----
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point


//  ##############################################################################################
// // ----- String -----
let color: string = "Blue";
let fullName: string = "Ashwini Dagale";
let age: number = 23;

let sentence: string = `Hello, my name is ${fullName} and I'll be ${age} next year.`;
console.log(sentence);


//  ##############################################################################################
// // ---------------- Explicit Typing: You explicitly declare the type of a variable ----------------------
// // =----- Basic Explicit Types -----
let greeting: string = "Hello, TypeScript!";
let userCount: number = 42;
let isLoading: boolean = true;
let scores: number[] = [100, 200, 300];

// // ----- Function with Explicit Types -----
function greet(name: string): string{
    return `Hello ${name}!`;
}
greet("Ashwini");
// greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'


//  ##############################################################################################
// // ----- Any ----
let variable: any = true;
variable = "string";
variable = 12;
Math.round(variable);


//  ##############################################################################################
// // Key differences between unknown and any:
// //  unknown must be type-checked before use
// //  You can't access properties on an unknown type without type assertion
// //  You can't call or construct values of type unknown

// // ----- Unknown -----
let variables: unknown = 1;
variables = 12;
variables = "hey";


//  ##############################################################################################
// // The never type represents the type of values that never occur.
// // Never -- used when code - throw errors, infinite loop  // never return nothing
function throwError(message: string): never {
  throw new Error(message);
}


//  ##############################################################################################
// //  ----- Arrays -----
const userNames: string[] = [];
userNames.push("Ashwini");

// The readonly keyword can prevent arrays from being changed.
const names: readonly string[] = ["Ashwini"];
// names.push("Dagale"); //Error: Property 'push' does not exist on type 'readonly string[]'.


//  ##############################################################################################
// // ----- Tuples -----
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');  // throws error as it is readonly.

//Named Tuples
const graph: [x:number, y:number] = [55.2, 41.3];

//Destructing Tuples
const graphs: [number, number] = [52.3, 42.3];
const [x, y] = graphs;


//  ##############################################################################################
// // ----- Void -----
function abcd(): void{
    console.log("Hey");
}
abcd();


//  ##############################################################################################
// // ----- TypeScript Object -----
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
console.log(car);

// // ------------------------------
const cars: { type: string, model: string, year?: number } = {
  type: "Toyota",
  model: "Corolla",
};
cars.year = 2009;
console.log(cars);


//  ##############################################################################################
// // An enum is a special "class" that represents a group of constants (unchangeable variables).
// // ----- Numeric Enums - Default -----
enum CardinalDirections {
//   North,
//   East,
//   South,
//   West
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection);

// // ----- Numeric Enums - Initialized -----
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
console.log(CardinalDirections.North);

// // ----- Numeric Enums - Fully Initialized -----
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.NotFound);

// // ----- String Enums -----
enum Direction{
    top = "TOP",
    left = "LEFT",
    right = "RIGHT",
    bottom = "BOTTOM",
}
console.log(Direction.bottom);




