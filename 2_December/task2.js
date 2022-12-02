const { Console } = require('console');
let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let totalPoints = 0;

for (let i = 0; i < array.length; i++) {
    let string = array[i]
    let pointsForMatch = 0;
    let opponentPlay = string.slice(0, 1);
    let resultedNeeded = string.slice(2, 3);


    // LOSS
    if (opponentPlay === "A" && resultedNeeded === "X") {
        myPlay = "SISSORS"    
    }

    if (opponentPlay === "B" && resultedNeeded === "X") {
        myPlay = "ROCK"
    }

    if (opponentPlay === "C" && resultedNeeded === "X") {
        myPlay = "PAPER"
    }

    // DRAW
    if (opponentPlay === "A" && resultedNeeded === "Y") {
        myPlay = "ROCK"    
    }

    if (opponentPlay === "B" && resultedNeeded === "Y") {
        myPlay = "PAPER"
    }

    if (opponentPlay === "C" && resultedNeeded === "Y") {
        myPlay = "SISSORS"
    }

    // WIN
    if (opponentPlay === "A" && resultedNeeded === "Z") {
        myPlay = "PAPER"    
    }

    if (opponentPlay === "B" && resultedNeeded === "Z") {
        myPlay = "SISSORS"
    }

    if (opponentPlay === "C" && resultedNeeded === "Z") {
        myPlay = "ROCK"
    }
    

    // A Rock  
    // B Paper 
    // C Sissors

    // 0 loss
    // 3 draw
    // 6 won

    // X Need to Loose
    // Y Need to Draw
    // Z Need to Win

    if (myPlay === "ROCK") pointsForMatch = 1 // Rock
    if (myPlay === "PAPER") pointsForMatch = 2 // Paper
    if (myPlay === "SISSORS") pointsForMatch = 3 // Sissors 

    // DRAW
     if ((opponentPlay === "A" && myPlay === "ROCK") || (opponentPlay === "B" && myPlay === "PAPER") || (opponentPlay === "C" && myPlay === "SISSORS")) {
         pointsForMatch = pointsForMatch + 3 
     }

     // WIN
     if ((opponentPlay === "A" && myPlay === "PAPER") || (opponentPlay === "B" && myPlay === "SISSORS")  || (opponentPlay === "C" && myPlay === "ROCK") ){
         pointsForMatch = pointsForMatch + 6 
     }

    totalPoints = totalPoints + pointsForMatch;
}

console.log("TotalPoints: " + totalPoints)