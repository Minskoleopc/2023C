

let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let addButton = document.querySelector('#one')

addButton.addEventListener('click', function () {
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text  // <li>Papaya</li>
    CreateButtons(newLi)
    // <li>Papaya
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>
    //</li>
    ulList.appendChild(newLi)
    inputBox.value = ""
})


// 

ulList.addEventListener('click', function (e) {
    // console.log(e.target)
    // console.log(e.target.tagName)
    // console.log(e.target.className)

    if (e.target.tagName === "BUTTON") {

        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if (e.target.className === "up") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }

        }
        if (e.target.className === "down") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ul.insertBefore(next, li)
            }

        }





    }









})










function CreateButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}

