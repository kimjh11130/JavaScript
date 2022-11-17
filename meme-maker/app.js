const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eraseBtn = document.getElementById("eraser-btn")
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
)
const color = document.getElementById("color")
const lineWidth = document.getElementById("line-width")
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 800

canvas.width = 800
canvas.height = 800
ctx.lineWidth = lineWidth.value
let isPainting = false
let isFilling = false

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    return
  }
  ctx.moveTo(e.offsetX, e.offsetY)
}

function startPainting(e) {
  isPainting = true
}

function cancelPainting(e) {
  isPainting = false
  ctx.beginPath()
}

function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value
}

function onColorChange(e) {
  ctx.strokeStyle = e.target.value
  ctx.fillStyle = e.target.value
}

function onColorClick(e) {
  const colorValue = e.target.dataset.color
  ctx.strokeStyle = colorValue
  ctx.fillStyle = colorValue
  color.value = colorValue
}

function onModeClick(e) {
  if (isFilling) {
    isFilling = false
    modeBtn.innerText = "Fill"
  }
  else {
    isFilling = true
    modeBtn.innerText = "Draw"
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  }
}

function onDestroyClick(e) {
  ctx.fillStyle = "white "
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function onEraserClick() {
  ctx.strokeStyle = "white"
  isFilling = false
  modeBtn.innerText = "Fill"
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
document.addEventListener("mouseup", cancelPainting)
document.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)

colorOptions.forEach((color) => color.addEventListener("click",
  onColorClick))

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)
eraseBtn.addEventListener("click", onEraserClick)