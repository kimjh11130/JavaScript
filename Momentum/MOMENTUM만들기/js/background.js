const images = ["0.jpg", "1.jpg", "2.jpg"]
const body = document.querySelector("body")
const chosenImage = images[Math.floor(Math.random() * images.length)]

body.style.backgroundImage = `url(img/${chosenImage})`
body.style.backgroundSize = `cover`

