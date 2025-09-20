// // -------------------- String Literals ----------------------
let direction: "north" | "south" | "east" | "west";

direction = "north";
direction = "south";


function move(directions: "north" | "south" | "east" | "west"){
    console.log(`Moving${direction}`);
}
move("east");




// // -------------------- number Literals ----------------------
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 1;
diceRoll = 2;


function rollDice(): 1 | 2 | 3 | 4 | 5 | 6{
    return Math.floor(Math.random() * 6) + 1 as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();
console.log(`You rolled a ${result}`);




// // -------------------- Boolean Literals ----------------------
type SuccessFlag = true | "success" | 1;
type FailureFlag = false | "failure" | 0;


function processResult(result: SuccessFlag | FailureFlag){
    if(result === true || result === "success" || result === 1){
        console.log("Operation succeeded");
    } else {
    console.log("Operation failed");
    }
}
processResult(true); // "Operation succeeded"
processResult("success"); // "Operation succeeded"
processResult(1); // "Operation succeeded"
processResult(false); // "Operation failed"




// // -------------------- Object Literals ----------------------
type HTTPSuccess = {
    status: 200 | 201 | 204;
    statusText: "OK" | "Created" | "No Content";
  data: any;
};


