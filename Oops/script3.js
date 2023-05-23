// // object literal

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     rollNo:23,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.displayName()

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:32,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// chinmay.displayName()

// function constructor 

function PersonB(fn,ln,rollNo){
    this.firstName = fn 
    this.lastName = ln 
    this.rollNo = rollNo
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let maya = new PersonB("mayuri","katwe",23)
let chinmaya = new PersonB("chinmaya","deshpande",34)

// maya.display()
// chinmaya.display()
// console.log(maya)
// console.log(chinmaya)


// Every object has __proto__  === Parent.prototype

console.log(maya.__proto__ === PersonB.prototype)
PersonB.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
PersonB.prototype.country = "india"


console.log(chinmaya)
console.log(maya)
maya.display()
chinmaya.display()

console.log(maya instanceof PersonB)
console.log(chinmaya instanceof PersonB)

console.log(maya.country)
console.log(chinmaya.country)

console.log(maya.hasOwnProperty('firstName'))
console.log(maya.hasOwnProperty('country'))

let names = ["chinmay","sarika","poorva"]
console.log(names instanceof Array)
console.log(names.__proto__ === Array.prototype)
console.log(names)
console.log(names.pop())

// es6 class 


class PersonC {

    // common field
    constructor(fn,ln,rollNo){  
        this.firstName = fn
        this.lastName = ln 
        this.rollNo = rollNo
    }
    display(){
        console.log(this.firstName + this.lastName)
        console.log(this.rollNo)
    }
}

let ch = new PersonC("chinmaya","deshpandey",23)
let ch2 = new PersonC("chinmaya2","deshpandey",24)

console.log(ch)
console.log(ch2)

ch.display()
ch2.display()


// object create

// let amolC = Object.create({})
// console.log(amolC)

let obj = {
    init:function(fn,ln,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.rollNo = rollNo
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amolD = Object.create(obj)


amolD.init("amolD","rao",34)
amolD.display()
console.log(amolD)