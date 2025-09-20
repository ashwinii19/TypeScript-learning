// // Type inference in TypeScript = TypeScript can automatically determine 
// //                                (infer) the type of a variable based on its initial value.
//  ##############################################################################################
// // ----- 1. Variable Inference -----
// TypeScript infers 'string'
var username = "ashwini";
username.toUpperCase();
// TypeScript infers 'number'
var score = 100;
// TypeScript infers 'boolean[]'
var flags = [true, false, true];
//  ##############################################################################################
// // ----- 2. Function Return Type Inference -----
function greet(name) {
    return "Hello, ".concat(name, "!");
}
greet("Ashwini");
// greet returns a string (inferred)
function add(a, b) {
    return a + b;
}
add(5, 3);
//  ##############################################################################################
// // ----- 3. Array Inference -----
var colors = ["red", "green", "blue"];
colors.push("yellow");
// colors.push(2);     // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// colors is inferred as string[]
colors.forEach(function (color) {
    console.log(color.toUpperCase);
});
//  ##############################################################################################
// // ----- 4. Object Inference -----
var car = {
    type: "Toyota",
};
car.type = "Ford"; // no error
// car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
// user is inferred as { id: number; username: string }
var userr = {
    id: 1,
    name: "Ashwini",
    email: "ashwini@gmail.com",
    active: true,
    details: {
        age: 22,
        address: {
            city: "New York",
            country: "USA"
        }
    }
};
console.log(userr.name.toUpperCase());
console.log(userr.details.age.toFixed(0));
console.log(userr.details.address.city.toLowerCase());
// // TypeScript infers of the object
var user = {
    name: "Ashwini",
    age: 22,
    isAdmin: true
};
console.log(user.name);
// console.log(user.email); // Error: Property 'email' does not exist
