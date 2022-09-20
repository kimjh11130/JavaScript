const colors = ["red", "orange", "yellow", "green", "blue", "purple", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "cornflowerblue", "crimson", "cornsilk", "cyan", "darkblue", "darkcyan", "darkgoldnrod", "darkgray", "darkgreen", "darkmagenta", "darkolivegreen", "darkorange", "drkorchid", "darkseagreen", "darkslateblue", "deeppink", "greenyellow", "khaki", "indigo", "lightblue", "lightblue", "ltightcyan", "lavenderblush", "whitesmoke", "violet", "springgreen", "teal", "snow", "mediumslateblue", "lime", "lavendar", "lightgreen", "lightgoldenrodyellow"]
const button = document.querySelector("button")
const background = document.querySelector("body")

function changeColor(){
    const randomColors1 = colors[Math.round(Math.random() * colors.length)]
    const randomColors2 = colors[Math.round(Math.random() * colors.length)]
    background.style.backgroundImage = `linear-gradient(to right, ${randomColors1},${randomColors2})`;
}

button.addEventListener("click", changeColor)