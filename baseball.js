function generateRandomNumber() {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = "";

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        number += digits[randomIndex];
        digits.splice(randomIndex, 1);
    }

    return number;
}

const uniqueThreeDigitNumber = generateRandomNumber();
// console.log(uniqueThreeDigitNumber);

console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요! ' + uniqueThreeDigitNumber)

const prompt = require("prompt-sync")();


function matcher(generatedNumber, trials) {
    let userNum = prompt();
    let s = 0;
    let b = 0;
    let outputString = '';
    trials += 1;
    console.log(`${trials}번째 시도 : ${userNum}`);

    userNum.split('').forEach((element, index) => {
        // console.log("element: " + element + " index: " + index);
        // console.log("index of element in generatedNumber: " + generatedNumber.indexOf(element));

        if (generatedNumber.indexOf(element) === index) {
            s += 1;
        }
        else if (generatedNumber.split('').includes(element)) {
            b += 1;
        };
    })

    if (s === 3) outputString = `${s}S`;
    else if (b === 3) outputString = `${b}B`;
    else outputString = `${b}B${s}S`;
    console.log(outputString);

    if (generatedNumber !== userNum) {
        matcher(generatedNumber, trials)
    } else {
        console.log(`${trials}번만에 맞히셨습니다.`);
        console.log('게임을 종료합니다.');
    }

}

matcher(uniqueThreeDigitNumber, trials = 1)