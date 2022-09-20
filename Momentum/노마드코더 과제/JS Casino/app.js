const takeNumber = document.querySelector("#random-game")
const rangeNumber = document.querySelector("#random-game input:first-child")
const selectNumber = document.querySelector("#random-game input:nth-child(2)")
const explain = document.querySelector("#explain")
const result = document.querySelector("#result")


const COMPUTER_KEY = "computer"
const USER_KEY = "user"

function informationThing(event) {
    event.preventDefault()
    const rangeNumberValue = rangeNumber.value
    const selectNumberValue = selectNumber.value
    const randomNumber = Math.round(Math.random() * rangeNumberValue)
    function showResult() {
        explain.innerText = `You chose:${selectNumberValue},the machine chose:${randomNumber}`
        if (selectNumberValue == randomNumber) {
            result.innerText = `You win!`
        } else {
            result.innerText = `You lost!`
        }
    }
    showResult()
}

takeNumber.addEventListener("submit", informationThing)