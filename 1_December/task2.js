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
        elves[j] = parseInt(elves[j]) + parseInt(array[i])
    } 
}
elves.sort(function(a, b){return b - a});

console.log(elves[0] + elves[1] + elves[2]);