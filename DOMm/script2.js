let headOne = document.querySelector('h1')
console.log(headOne)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    headOne.textContent = "Bye"
    headOne.style.color = "yellow"
})