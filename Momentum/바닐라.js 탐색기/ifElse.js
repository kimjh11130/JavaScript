const age = parseInt(prompt("How old are you"))

if (isNaN(age) || age < 0) { // isNaN은 NaN판별, number이면 flase로 실행 ㄴ
    console.log("please write a real positive number")
} else if (age < 18) {
    console.log("You are too young")
} else if (age >= 18 && age <= 50) {
    console.log("You can drink")
} else if (age > 50 && age <= 80) {
    console.log("You should exercise")
} else if (age === 100) {
    console.log("wow you are wise")
} else if (age > 80) {
    console.log("You can do whatever you want.")
}