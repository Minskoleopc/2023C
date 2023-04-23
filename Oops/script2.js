// // Object literal
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     rollNo:23,
//     age:26,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:27,
//     age:44,
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }


// // Templates =====> Objects 

// // function constructor

// function Person(fn,ln,age,rollNo){
//     this.firstName = fn
//     this.lastName = ln 
//     this.age = age
//     this.rollNo = rollNo
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }
// let amolB = new Person("amol","rao",33,44)
// let chinmayB = new Person("chinmay","deshpande",32,41)
// console.log(amolB)
// console.log(chinmayB)
// // amolB.display()
// // chinmayB.display()

// // Protype inheritance 
// // Every thing in js is object
// // Every object has __proto__ === Parent.prototype

// console.log(amolB.__proto__ === Person.prototype )
// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// amolB.display()
// chinmayB.display()


// program 2

function PersonB(fn,ln){
    this.firstName = fn
    this.lastName = ln 
    // this.display = function(){
    //     console.log(this.firstName  + this.lastName)
    // } 
}

let amolC = new PersonB("amolC","raoC")
let chinmayC = new PersonB("chinmayC","deshpandeC")

console.log(amolC)
console.log(chinmayC)

// amolC.display()
// chinmayC.display()

// Every object has one protype 
//object.__proto__ === parent.prototype
console.log(chinmayC.__proto__ === PersonB.prototype)
PersonB.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
PersonB.prototype.country = "India"

amolC.display()
chinmayC.display()


console.log(amolC.country) // __proto__  === parent.prototype
console.log(chinmayC.country) // __proto__ === parent.prototype

//----------------------------------------------------------------

let names = ["chinmay","sarika","ram"]
console.log(names.__proto__ === Array.prototype)
Array.prototype.greet = function(){
    console.log('hello')
}
names.pop()
console.log(names)
names.greet()
















// function constructor 


// Es6 class


// Object.create