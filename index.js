let scoreHome = document.getElementById("score-home")
console.log()
let scoreGuest = document.getElementById("score-guest")

scoreH = 0
scoreY = 0

function btn1() {
    let save = scoreH += 1
    scoreHome.innerText = save
}
function btn2() {
    let save = scoreH += 2
    scoreHome.innerText = save
}
function btn3() {
    let save = scoreH += 3
    scoreHome.innerText = save
}
function btn4() {
    let save = scoreY += 1
    scoreGuest.innerText = save
}
function btn5() {
    let save = scoreY += 2
    scoreGuest.innerText = save
}
function btn6() {
    let save = scoreY += 3
    scoreGuest.innerText = save
}

function resetshome() {
    scoreHome.textContent = 0
}

function resetsguest() {
    scoreGuest.textContent = 0
}
