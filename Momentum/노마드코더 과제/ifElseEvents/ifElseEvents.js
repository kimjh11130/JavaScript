const body = document.querySelector("body")
function checkingSizeResize(){
    const windowSize = window.innerWidth
    if(windowSize<1100&& windowSize>600){
        body.classList.add("middle")
        body.classList.remove("max", "small")
    }else if(windowSize>=1100){
        body.classList.add("max")
        body.classList.remove("middle", "small")
    }else{
        body.classList.add("small")
        body.classList.remove("max", "middle")
    }
}
window.addEventListener("resize", checkingSizeResize)