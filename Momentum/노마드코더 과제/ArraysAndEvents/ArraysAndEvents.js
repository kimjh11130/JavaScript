const title = document.querySelector("h1")


function mouseEnterH1(){
    title.innerText="The mouse is here!"
    title.style.color="green"
}
title.addEventListener("mouseenter", mouseEnterH1)

function mouseLeftH1(){
    title.innerText="The mouse is gone!"
    title.style.color="blue"
}
title.addEventListener("mouseleave", mouseLeftH1)

function resizeWindow(){
    title.innerText="You just resized!"
    title.style.color="purple"
}
window.addEventListener("resize", resizeWindow)

function rightClick(){
    title.innerText="That was a right click!"
    title.style.color="red"
}
window.addEventListener("contextmenu", rightClick)