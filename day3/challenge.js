let fs = require('fs');
let datastrings = fs.readFileSync('data.txt', 'utf8').split('\n');

const convertBinaryStringtoDecimal = (binaryString) => {
    let nums = [];
    for (let i = binaryString.length - 1; i > -1; i--) {
        nums[i] = parseInt(binaryString[i]) * 2 ** (binaryString.length - i - 1)
    }

    return nums.reduce((a, b) => a + b, 0)
}

const calculateGammaEpsilon = (binaryArray) => {
                                  
    let gamma = "";
    let epsilon = "";



    for (let i = 0; i < 12; i++) {
        let sumBit = 0;
        for (let j = 0; j < binaryArray.length; j++) {
            sumBit = sumBit + parseInt(binaryArray[j][i])
        }
        if (sumBit > binaryArray.length / 2) {
            gamma = gamma + "1"
            epsilon = epsilon + "0"
        }
        else if (sumBit === binaryArray.length / 2)
        {
            gamma = gamma + "1"
            epsilon = epsilon + "0"
        }
         else {
            gamma = gamma + "0"
            epsilon = epsilon + "1"
        }
    }

    let gammaDecimal = convertBinaryStringtoDecimal(gamma);
    let epsilonDecimal = convertBinaryStringtoDecimal(epsilon);
    let decimalProduct = gammaDecimal * epsilonDecimal;


    return { gamma, epsilon, decimalProduct }
}

const calculateO2CO2 = (binaryArray) => {
    let o2 = binaryArray;
    let co2 = binaryArray;
    let curGamma = '';
    let curEpsilon ='';

    for (let i = 0; i < 12; i++) {
        curGamma = calculateGammaEpsilon(o2).gamma;
        curEpsilon = calculateGammaEpsilon(co2).epsilon;
        if (o2.length>1) {
            
            o2 = o2.filter(s => s[i] === curGamma[i]);
            
        } else {
            break
        }

        if (co2.length>1) {
            co2 = co2.filter(s => s[i] === curEpsilon[i]);
        } else {
            
        }

    }

    let o2num = convertBinaryStringtoDecimal(o2[0]);
    
    let co2num = convertBinaryStringtoDecimal(co2[0]);
    let product =  o2num * co2num;

    return { o2, co2, product }
}

//console.log(calculateGammaEpsilon(datastrings))
console.log(calculateO2CO2(datastrings)
)
