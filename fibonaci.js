let num1 =0, num2 =1, num3 ='', old = '', next = '' 
console.log("%s\n%s", num1, num2)
function fib() {
    for(let i = 0, j = 15; i < j; i++) {
    num3 = num1 + num2 // 1
    console.log(num3)
    old = num2, next = num3
    num1 = old, num2 = next     
    }
}

fib()