
// javascript 

// we create element 
// we update element 
// we retrive element 
// we can delete element

// javascript 

// we retrive attribute
// we delete attribute
// we update attribute
// we  add attribute

//<h1 id = "one"  class = "two" name = "nm">Hello</h1>

// css selector

// program1

// tagName 
// let headOne = document.querySelector('h1')
// console.log(headOne)
// // className 
// let className = document.querySelector('.two')
// console.log(className)
// // id 
// let id = document.querySelector('#one')
// console.log(id)
// // commonF
// let commonF = document.querySelector('h1[name="nm"]')
// console.log(commonF)
// console.log(commonF.textContent)
// commonF.textContent = "bye"
// program1
// commonF.addEventListener('click',function(){
//     commonF.textContent = "bye"
//     commonF.style.color = "red"
// })

// program 2

{/* <h1 id = "one"  class = "two" name = "nm">Hello</h1>
    <button>Click me</button> */}

// let headOne = document.querySelector('h1')
// console.log(headOne)
// let buttonA = document.querySelector('button')
// console.log(buttonA)

// buttonA.addEventListener('click',function(){
//     headOne.style.color = "green"
// })


// program 3

{/* <h1 id = "one"  class = "two" name = "nm">Hello</h1>
<input type="text">
<button>Button</button> */}


let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')
let input = document.querySelector('input')

console.log(headOne)
console.log(buttonA)
console.log(input)

buttonA.addEventListener('click',function(){
    let cl = input.value
    headOne.style.color = cl
    input.value = ""
})



