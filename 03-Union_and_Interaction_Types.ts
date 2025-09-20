// // Union types are used when a value can be more than a single type.
// // It uses the | (pipe) symbol.
let variable: string | null;
variable = null;
variable = "Ashwini";
// variable = 12;          // ❌


// // ----------------------------------------------------------------------------
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


// // ----------------------------------------------------------------------------
function handleUnion(input: string | number) {
  if (typeof input === "string") {
    console.log("String:", input.toUpperCase());
  } else {
    console.log("Number:", input.toFixed(2));
  }
}



//  ##############################################################################################
// // An intersection type means a value must include all the properties of multiple types.
// // It uses the & (ampersand) symbol.
type Classmates = {
  section: string;
}
type Students = {
  name: string;
}
 
type ClassmatesInStudents = Classmates & Students;
let a: ClassmatesInStudents = {
  section: 'a',
  name: 'Ashwini'
}
console.log(a);



// // ----------------------------------------------------------------------------
type A = {
    name: string;
}

type B = {
    age : number;
}

type AandB = A & B;
let ab: AandB = {
  name: 'Ashwini',
  age: 22
}

console.log(ab);