// Title: FizzBuzz

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

    if (intCheck(num1, 15)) {
        conLog("Fizzbuzz")

    } else if (intCheck(num1, 3)) {
        conLog("fizz");

    } else if (intCheck(num1, 5)) {
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

selectTest(1, 30, "if")

selectTest(1, 30, "switch")