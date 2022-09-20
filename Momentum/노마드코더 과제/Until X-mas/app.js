const input = document.querySelector("#clock")
const xmasDay = new Date(`${new Date().getFullYear()}--12-25:00:0000+0900`)
const now = new Date()
const difference = new Date(xmasDay-now)
const secondsInMs = difference/1000

input.innerText = difference

