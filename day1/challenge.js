let fs = require('fs');

let datastrings = fs.readFileSync('data.txt', 'utf8').split('\n');

let data = []


for (i in datastrings) {
    data.push(parseInt(datastrings[i]))
}



const calcsum1 = () => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i+1] - data[i] > 0) {
            sum++
        }
    }

    return sum
}

const calcsum2 = () => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        let sum1 = data[i] + data[i+1] + data [i+2]
        let sum2 = data[i+1] + data [i+2] + data [i+3]
        if (sum2 > sum1) {
            sum++
        }
    }

    return sum
}

console.log("first method: ", calcsum1(), "second method: ", calcsum2())
