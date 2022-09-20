const calculator = {
    add: function (a, b) {
        return (a + b)
    },
    minus: function (a, b) {
        return (a - b)
    },
    times: function (a, b) {
        return (a * b)
    },
    divide: function (a, b) {
        return (a / b)
    },
    powerof: function (a, b) {
        return (a ** b)
    }
}

const addResult = calculator.add(2, 3)
const minusResult = calculator.minus(addResult, 10)
const timesResult = calculator.times(10, minusResult)
const divideResult = calculator.divide(timesResult, addResult)
const powerofResult = calculator.powerof(divideResult, minusResult)


document.write(addResult + "<br>")
document.write(minusResult + "<br>")
document.write(timesResult + "<br>")
document.write(divideResult + "<br>")
document.write(powerofResult + "<br>")