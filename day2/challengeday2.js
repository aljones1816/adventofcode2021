let fs = require('fs');
let datastrings = fs.readFileSync('data.txt', 'utf8').split('\n');

// let's turn the array of strings into an array of objects with the distance and direction properties so we can use map reduce
const newData = datastrings.map((value) => {
    let direction = value.substring(0,value.indexOf(' '))
    let distance = parseInt(value.substring(value.indexOf(' '), value.length))
    
    return {
            direction: direction,
            distance:distance
            }
})

//convert data into a Map with reduce
let counts = newData.reduce((prev, curr) => {
    let count = prev.get(curr.direction) || 0;
    prev.set(curr.direction, curr.distance + count);
    return prev;
  }, new Map());

// map counts object back to an array
let reducedObjArr = [...counts].map(([key, value]) => {
    return {key, value}
  })

let vertical = reducedObjArr.find(( { key } ) => key === 'down').value - reducedObjArr.find(( { key } ) => key === 'up').value
let horizontal = reducedObjArr.find(( { key } ) => key === 'forward').value

// Answer to part one
console.log("Change in depth: ",vertical)
console.log("Depth times distance: ",vertical*horizontal)