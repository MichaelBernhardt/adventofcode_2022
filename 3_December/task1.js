let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let priorityString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let priorityTotal = 0;

for (let i = 0; i < array.length; i++) {

    // Each item into two
    let sackSize = array[i].length
    let compartmentSize = sackSize/2

    let compartment1 = array[i].slice(0, compartmentSize)
    let compartment2 = array[i].slice(compartmentSize)
    let notFound = true

    for (let i = 0; i < compartment1.length; i++) {
            for (let j = 0; j < compartment2.length; j++) { 
                if (compartment1[i] == compartment2[j]) {
               // 
                    //console.log(compartment1[i])
                    let priorityPoints = priorityString.indexOf(compartment1[i]) + 1
                    priorityTotal += priorityPoints
                }
            }
    }
}
    

console.log(priorityTotal/2)
