

let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let buttonE = document.querySelector('#one')

buttonE.addEventListener('click', function () {
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Papaya</li>
    CreateButtons(newLi)
    ulList.appendChild(newLi)
    inputBox.value = ""

})

ulList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {


        if (e.target.className === "remove") {
            // this code will run when someone clicks on remove button

            let li = e.target.parentElement
            let uLList = li.parentElement
            uLList.removeChild(li)


        }
        else if (e.target.className === "up") {
            // this code will run when someone clicks on up button
            let liElement = e.target.parentElement
            let ulList = liElement.parentElement
            let  prev = liElement.previousElementSibling
            if(prev){
                ulList.insertBefore(liElement,prev)
            }
            
        }
        else if (e.target.className === "down") {
            // this code will run when someone clicks on down button
            let liElement = e.target.parentElement
            let ulList = liElement.parentElement
            let  next = liElement.nextElementSibling
            if(next){
                ulList.insertBefore(next ,liElement)
            }
            
        }


    }


})












function CreateButtons(li) {

    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>

    let remove = document.createElement('button') //<button></button>
    remove.textContent = "remove"   // <button>remove</button>
    remove.classList.add("remove") // <button class = "remove">remove<button>
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add("up")
    li.appendChild(up)


    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add("down")
    li.appendChild(down)



}