const title = document.querySelector("h1")

function handleTittleClick(){
    title.style.color="blue"
}

function handleMouseEnter(){
    title.innerText="Mouse is here!"
}

function handleMouseLeave(){
    title.innerText="Mouse is gone!"
}

title.addEventListener("click",handleTittleClick)
//원하는 elements.addEventListner("동작상태",원하는 함수)
title.addEventListener("mouseenter",handleMouseEnter)
title.addEventListener("mouseleave",handleMouseLeave)

title.onclick = handleTittleClick;
//원하는 elements.동작상태 = 원하는 함수

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffline() {
    alert("SOS no WIFI")
}

function handleWindowOnline() {
    alert("All Good")
}


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);