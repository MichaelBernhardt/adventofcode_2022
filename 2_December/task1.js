const { Console } = require('console');
let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let totalPoints = 0;

for (let i = 0; i < array.length; i++) {
    let string = array[i]
    let pointsForMatch = 0;
    let opponentPlay = string.slice(0, 1);
    let myPlay = string.slice(2, 3);

    // A Rock  
    // B Paper 
    // C Sissors

    // 0 loss
    // 3 draw
    // 6 won

    if (myPlay === "X") pointsForMatch = 1 // Rock
    if (myPlay === "Y") pointsForMatch = 2 // Paper
    if (myPlay === "Z") pointsForMatch = 3 // Sissors 

    // DRAW
    if ((opponentPlay === "A" && myPlay === "X") || (opponentPlay === "B" && myPlay === "Y") || (opponentPlay === "C" && myPlay === "Z")) {
        pointsForMatch = pointsForMatch + 3 
    }

    // WIN
    if ((opponentPlay === "A" && myPlay === "Y") || (opponentPlay === "B" && myPlay === "Z")  || (opponentPlay === "C" && myPlay === "X") ){
        pointsForMatch = pointsForMatch + 6 
    }

    totalPoints = totalPoints + pointsForMatch;
}

console.log("TotalPoints: " + totalPoints)