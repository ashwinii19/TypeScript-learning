// // A Type Alias is a way to give a name to any type in TypeScript.

// // ---------------- type alias ----------------------------
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year : CarYear,
    type: CarType,
    model: CarModel
}



const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year : carYear, 
    type: carType,
    model: carModel
};



// // --------------- Union and Intersection Types -------------------
type age = string | number;
let ageofUser: age = 12;
let ageofUsers: age = "twelve";


type Animal = {
    name: string;
}
type Bear = Animal & {
    honey: boolean;
}
const bear: Bear ={
    name: "Winnie",
    honey: true
};
