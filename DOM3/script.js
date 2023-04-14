
let ulList = document.querySelector('ul')
console.log(ulList)
let buttonA = document.querySelector('button')
console.log(buttonA)
let inputText  = document.querySelector('input')
console.log(inputText)


buttonA.addEventListener('click',function(){
    let ftext = inputText.value
    let newL = document.createElement('li') // <li></li>
    newL.textContent = ftext  // <li>papaya</li>
    ulList.appendChild(newL)
    inputText.value =  ""

})


