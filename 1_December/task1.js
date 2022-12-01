
let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let elves = Array()
let j = 0;
elves[j] = 0;

for (let i = 0; i < array.length; i++) {
    
    if (array[i] === ""){
        j++;
        elves[j] = 0;
    } else {
        //elves[j] = array[i]
        console.log("number: " + elves[j])
        elves[j] = parseInt(elves[j]) + parseInt(array[i])
    }
   
    
}
console.log(Math.max(...elves))
