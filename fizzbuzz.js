// Title: FizzBuzz
let check1 = 3, check2 = 5, check3 = check1 * check2, startValue = 0, stopValue = 0

// Setup function to check if num1 modulus num2 is an integar
const intCheck = (num1, num2) => {
    return (num1 % num2) == 0
}

// Quick console.log 
const conLog = txt => {
    console.log(txt)
}

// Setup function to implement a for loop using the chosen test method
const selectTest = (startValue, stopValue, _testType) => {

    for (let i = startValue; i <= stopValue; i++) {

        if (_testType = "if") {
            ifTest(i);
        } else if (_testType = "switch") {
            switchTest(i);
        }

    }

    conLog("");
}

// Setup function to use if-else statements to check if num1 is a multiple of 15, 3, or 5 and if not returns num1
const ifTest = num1 => {

    if (intCheck(num1, check3)) {
        conLog("Fizzbuzz")

    } else if (intCheck(num1, check1)) {
        conLog("fizz");

    } else if (intCheck(num1, check2)) {
        conLog("buzz");

    } else {
        conLog(num1);
    }

}

// Setup function using a switch statement to check if num1 is a multiple of 15, 3, or 5 and if not returns num1
const switchTest = num1 => {

    switch (num1) {
        case intCheck(num1, 15):
            conLog("Fizzbuzz")
            break;

        case intCheck(num1, 3):
            conLog("Fizzbuzz")
            break;

        case intCheck(num1, 5):
            conLog("buzz");
            break;

        default:
            conLog(num1);
    }
}

function adjustableFizzbuzz(adjCheck, adjCheck2, adjStart, adjStop) {
    check1=adjCheck, check2=adjCheck2, check3 = check1 * check2
    startValue = adjStart, stopValue = adjStop
    selectTest(adjStart, adjStop, "if")
}

selectTest(1, 30, "if")

// selectTest(1, 30, "switch")

adjustableFizzbuzz(6, 9, 1, 100)