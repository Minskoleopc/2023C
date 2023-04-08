//<h1 id = one  class = "two"  name = "nm">Hello</h1>

// with javascript 
// create  element 
// retrive element 
// update  element
// delete  element

// add  attribute
// update attribute 
// delete attribute
// retrive attribute value

//----------------------------------------------------------------------------
//id 
let byId = document.querySelector('#one')
console.log(byId)

//className 
let byClass = document.querySelector('.two')
console.log(byClass)

//tagName 
let headOne = document.querySelector('h1')
console.log(headOne)

//attribute
let headThree = document.querySelector('h1[name="nm"]')
console.log(headThree)


headThree.addEventListener('click',function(){
    headThree.textContent = "headFour"
    headThree.style.color = "red"
    headThree.style.backgroundColor = "yellow"
})







// Explanation

// console.log(headThree.textContent) // bracket notation / dot notation
// headThree.textContent = "headFour"

//                 0          1       2
// let names = ["chinmay","sarika","poorva"]
//names.length


// let info = {
//     fullName:"chinmay deshpande",
//     parent:{
//         father:"shirish deshpande",
//         mother:"kanchan deshpande"
//     }
// }

// info.parent.father = "shirish m deshpande"




