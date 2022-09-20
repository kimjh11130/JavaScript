const loginForm = document.querySelector("#login-form") //입력란
const loginInput = document.querySelector("#login-form input") //이름입력칸
const greeting = document.querySelector("#greeting") // h1 출력하기 위한

const HIDDEN_CLASSNAME = "hidden" //클래스 hidden추가할려고 만든 것
const USERNAME_KEY = "username" //localStorage에 있는 username문자열

function onLoginSubmit(event) {
    event.preventDefault() //submit 할때 새로고침 멈추게하기
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value; //입력값 저장
    localStorage.setItem(USERNAME_KEY, username) //입력값 브라우저에 저장
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) { // 저장값 없으면 입력칸 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else { //바로 Hello 출력하기
    paintGreetings(savedUsername)
}