let fs = require('fs');
let datastrings = fs.readFileSync('data.txt', 'utf8').split('\n');

const convertBinaryStringtoDecimal = (binaryString) => {
    let nums = [];
    for (let i=binaryString.length-1; i>-1; i--) {
        nums[i] = parseInt(binaryString[i])*2**(binaryString.length-i-1)
    }

    return nums.reduce((a,b) => a+b,0)
}

const calculateGammaEpsilon = (binaryArray) => {

    let gamma = "";
    let epsilon = "";

    for (let i =0;i<12;i++) {
        let sumBit = 0;
        for (let j=0; j<binaryArray.length; j++) {
            sumBit = sumBit + parseInt(binaryArray[j][i])
        }
        if (sumBit > binaryArray.length/2) {
            gamma = gamma + "1"
            epsilon = epsilon + "0"
        } else {
            gamma = gamma + "0"
            epsilon = epsilon + "1"
        }
    }

    let gammaDecimal = convertBinaryStringtoDecimal(gamma);
    let epsilonDecimal = convertBinaryStringtoDecimal(epsilon);
    let decimalProduct = gammaDecimal*epsilonDecimal;
    

    return {gamma, epsilon, decimalProduct}
}

console.log(calculateGammaEpsilon(datastrings))
