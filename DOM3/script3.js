

// add the new li element 

let ulList = document.querySelector('ol')
let buttonOne = document.querySelector('#one')
let input = document.querySelector('input')
buttonOne.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text //<li>Mango</li>
    CreateButtons(newLi)
    //add the button to newLiELement
    ulList.appendChild(newLi)
    input.value = " "

})


ulList.addEventListener('click', function (e) {

    // console.log(e.target)
    // console.log(e.target.tagName)
    // console.log(e.target.className)

    if (e.target.tagName === "BUTTON") {

        if (e.target.className == "remove") {

        }
        else if (e.target.className == "up") {

        }
        else if (e.target.className == "down") {

        }



    }







})






// For creating button 
function CreateButtons(li) {
    // <button class = "remove">Remove</button>
    // <button class = "up">Up</button>
    // <button class = "down">Down</button>

    let r = document.createElement('button') // <button></button>
    r.textContent = 'Remove' //<button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button') // <button></button>
    u.textContent = 'Up' // <button>Up</button>
    u.classList.add('up') // <button class = "up">Up<button>
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)


}





