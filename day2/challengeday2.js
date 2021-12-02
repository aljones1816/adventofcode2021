let fs = require('fs');
let datastrings = fs.readFileSync('data.txt', 'utf8').split('\n');

// let's turn the array of strings into an array of objects with the distance and direction properties so we can use map reduce
const newData = datastrings.map((value) => {
    let direction = value.substring(0,value.indexOf(' '))
    let distance = parseInt(value.substring(value.indexOf(' '), value.length))
    
    return {
            direction: direction,
            distance: distance
            }
})


const adjustBearing = (input) => {
    let aim = 0;
    let horizontal_position = 0;
    let depth = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].direction === "down") {
            aim = aim + input[i].distance
        } else if (input[i].direction === "up") {
            aim = aim - input[i].distance
        } else {
            horizontal_position = horizontal_position + input[i].distance
            depth = depth + input[i].distance*aim
        }
    }

    return { 
            horizontal_position: horizontal_position,
            depth: depth
        }
}

const final = adjustBearing(newData)

console.log(final.depth*final.horizontal_position)