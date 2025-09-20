// // -------------------- String Literals ----------------------
var direction;
direction = "north";
direction = "south";
function move(directions) {
    console.log("Moving".concat(direction));
}
move("east");
// // -------------------- number Literals ----------------------
var diceRoll;
diceRoll = 1;
diceRoll = 2;
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
var result = rollDice();
console.log("You rolled a ".concat(result));
function processResult(result) {
    if (result === true || result === "success" || result === 1) {
        console.log("Operation succeeded");
    }
    else {
        console.log("Operation failed");
    }
}
processResult(true); // "Operation succeeded"
processResult("success"); // "Operation succeeded"
processResult(1); // "Operation succeeded"
processResult(false); // "Operation failed"
