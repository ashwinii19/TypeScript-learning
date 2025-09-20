// // Basic Types
// //         Number, String, Boolean
// //         Arrays, Tuples,
// //         Any, Unknown, Never, Void
// //         Enums
// // ------------------- Declaration -------------------------------
// // ----- Number -----
var decimal = 6;
var hex = 0xf00d; // Hexadecimal
var binary = 10; // Binary
var octal = 484; // Octal
var float = 3.14; // Floating point
//  ##############################################################################################
// // ----- String -----
var color = "Blue";
var fullName = "Ashwini Dagale";
var age = 23;
var sentence = "Hello, my name is ".concat(fullName, " and I'll be ").concat(age, " next year.");
console.log(sentence);
//  ##############################################################################################
// // ---------------- Explicit Typing: You explicitly declare the type of a variable ----------------------
// // =----- Basic Explicit Types -----
var greeting = "Hello, TypeScript!";
var userCount = 42;
var isLoading = true;
var scores = [100, 200, 300];
// // ----- Function with Explicit Types -----
function greet(name) {
    return "Hello ".concat(name, "!");
}
greet("Ashwini");
// greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'
//  ##############################################################################################
// // ----- Any ----
var variable = true;
variable = "string";
variable = 12;
Math.round(variable);
//  ##############################################################################################
// // Key differences between unknown and any:
// //  unknown must be type-checked before use
// //  You can't access properties on an unknown type without type assertion
// //  You can't call or construct values of type unknown
// // ----- Unknown -----
var variables = 1;
variables = 12;
variables = "hey";
//  ##############################################################################################
// // The never type represents the type of values that never occur.
// // Never -- used when code - throw errors, infinite loop  // never return nothing
function throwError(message) {
    throw new Error(message);
}
//  ##############################################################################################
// //  ----- Arrays -----
var userNames = [];
userNames.push("Ashwini");
// The readonly keyword can prevent arrays from being changed.
var names = ["Ashwini"];
// names.push("Dagale"); //Error: Property 'push' does not exist on type 'readonly string[]'.
//  ##############################################################################################
// // ----- Tuples -----
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');  // throws error as it is readonly.
//Named Tuples
var graph = [55.2, 41.3];
//Destructing Tuples
var graphs = [52.3, 42.3];
var x = graphs[0], y = graphs[1];
//  ##############################################################################################
// // ----- Void -----
function abcd() {
    console.log("Hey");
}
abcd();
//  ##############################################################################################
// // ----- TypeScript Object -----
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
// // ------------------------------
var cars = {
    type: "Toyota",
    model: "Corolla",
};
cars.year = 2009;
console.log(cars);
//  ##############################################################################################
// // An enum is a special "class" that represents a group of constants (unchangeable variables).
// // ----- Numeric Enums - Default -----
var CardinalDirections;
(function (CardinalDirections) {
    //   North,
    //   East,
    //   South,
    //   West
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
// // ----- Numeric Enums - Initialized -----
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
// // ----- Numeric Enums - Fully Initialized -----
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
// // ----- String Enums -----
var Direction;
(function (Direction) {
    Direction["top"] = "TOP";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
    Direction["bottom"] = "BOTTOM";
})(Direction || (Direction = {}));
console.log(Direction.bottom);
