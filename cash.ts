function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('From cash - ', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('new result - ', result)
        cash[n] = result
        return result;
    };
}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)

cashFactorial(1)
cashFactorial(2)
cashFactorial(3)
cashFactorial(1)
cashFactorial(2)
cashFactorial(4)

export { }