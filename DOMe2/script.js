// javascript 

// to add the element 
// to update the element 
// to retrive the element 
// to delete the element 

// attribut 

// to add the attribute
// to retrive the attribute value
// to update the atrribute value 
// to delete the attribute



//<h1 id="one" class="two" name="nm">Hello</h1>
//tagName
let headOne = document.querySelector('h1')
console.log(headOne)
//id
let id = document.querySelector('#one')
console.log(id)
//className
let className = document.querySelector('.two')
console.log(className)
//name 
let nm = document.querySelector('h1[name="nm"]')
console.log(nm)

// console.log(headOne)
// console.log(id)
// console.log(className)
// console.log(nm)

// console.log(nm.textContent)
// nm.textContent = "bye"
// nm['textContent'] = "byeeee"

// nm.addEventListener('click',function(){
//     nm.textContent = "Bye"
//     nm.style.color = "green"
// })

// let info = {
//     fullName:"chinmay deshpande",
//     parent:{
//         mother:"kanchan",
//         father:"shirish"
//     }
// }

// console.log(info.parent.mother)
// info.parent.mother = "kanchan s"





// Program 2

{/* <h1>Chinmay</h1>
<button>ChangeColor</button> */}

// let headOnee = document.querySelector('h1')
// let buttonA = document.querySelector('button')

// buttonA.addEventListener('click',function(){
//     headOnee.style.color = "green"
// })






// program 3
{/* <h1>Head</h1>
<input type="text">  
<button>ButtonOne</button> */}

let headOnee = document.querySelector('h1')
let input = document.querySelector('input')
let buttonE = document.querySelector('button')

buttonE.addEventListener('click',function(){
    let text = input.value
    headOnee.style.color = text
    input.value = ""
})











