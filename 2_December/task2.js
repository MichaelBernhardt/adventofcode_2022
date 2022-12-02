const { Console } = require('console');
let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let totalPoints = 0;

for (let i = 0; i < array.length; i++) {
    let string = array[i]
    let pointsForMatch = 0;
    let opponentPlay = string.slice(0, 1);
    let resultedNeeded = string.slice(2, 3);

    // Opponent play     
    // A = Rock  
    // B = Paper 
    // C = Sissors

    // LOSS
    if (resultedNeeded === "X") {
        if (opponentPlay === "A") myPlay = "SISSORS"
        if (opponentPlay === "B") myPlay = "ROCK"
        if (opponentPlay === "C") myPlay = "PAPER"
    }   

    // DRAW
    if (resultedNeeded === "Y") {
        if (opponentPlay === "A") myPlay = "ROCK"    
        if (opponentPlay === "B") myPlay = "PAPER"
        if (opponentPlay === "C") myPlay = "SISSORS"
    }

    // WIN
    if (resultedNeeded === "Z") {
        if (opponentPlay === "A") myPlay = "PAPER"
        if (opponentPlay === "B") myPlay = "SISSORS"
        if (opponentPlay === "C") myPlay = "ROCK"
    }    

    if (myPlay === "ROCK") pointsForMatch = 1 // Rock
    if (myPlay === "PAPER") pointsForMatch = 2 // Paper
    if (myPlay === "SISSORS") pointsForMatch = 3 // Sissors 

    // 0 loss
    // 3 draw
    // 6 won

    // DRAW
     if ((opponentPlay === "A" && myPlay === "ROCK") || (opponentPlay === "B" && myPlay === "PAPER") || (opponentPlay === "C" && myPlay === "SISSORS")) {
         pointsForMatch += 3 
     }

     // WIN
     if ((opponentPlay === "A" && myPlay === "PAPER") || (opponentPlay === "B" && myPlay === "SISSORS")  || (opponentPlay === "C" && myPlay === "ROCK") ){
         pointsForMatch += 6 
     }

    totalPoints += pointsForMatch;
}

console.log("TotalPoints: " + totalPoints);