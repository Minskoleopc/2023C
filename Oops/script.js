// Object literal

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    skills:["python","java","javscript"]
}

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:32,
//     skills:["python3","java","javscript","Es6"]
// }
// console.log(amol)
// console.log(chinmay)


//function constructor 
function Person(fn,ln,ag,sks){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.skills = sks
}
let amol2 = new Person("amol2","rao2",34,["html","css","python"])
let chinmay2 = new Person("chinmay2","deshpande",31,["html5","css3","python3"])
console.log(amol2)
console.log(chinmay2)


let Vehicle = function(cl,type){
    this.color = cl
    this.type = type
}
let audi = new Vehicle("red","SUV")
console.log(audi)


// Es6 class

class PersonB {
    constructor(fn,ln,age,skills){
        this.firstName = fn
        this.lastName = ln
        this.age = age 
        this.skills = skills
    }
}

let amol3 = new PersonB("amol3","rao3",23,["html","css","java"])
console.log(amol3)
amol3.city = "pune"
console.log(amol3)

class VehicleB {
    constructor(color,type){
        this.color = color
        this.type = type
    }
}

let audi2 = new VehicleB("blue","sedane")
console.log(audi2)

// Object.create()

let amol4 = Object.create({})
console.log(amol4)
amol4.firstName = "amol4"
amol4.lastName = "rao4"
amol4.age = 24
amol4.skills = ["c#","python","html","css"]