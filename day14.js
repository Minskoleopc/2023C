// array , string , objects , userdefined , map , set
// object literal
let amol = {
    firstName:"amol",
    lastName:"rao",
    skills:["python","java","javascript"]
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    skills:["javascript","python","c#"]
}

// // retrive (dot notation and bracket)

// console.log(chinmay.firstName)
// console.log(chinma['lastName'])


// // update (dot notation and bracket)

// chinmay.firstName = "chinmay s"
// chinmay['firstName'] = "chinmay d"

// // delete (dot notation and bracket)

// delete chinmay.firstName
// delete chinmay['firstName']

// // add(dot notation and bracket)

// chinmay.city ="pune"
// chinmay['language'] = "hindi"


// 100 - 300 lines 
// class Person {



// }

// class Person {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     skills = ["python","javascript","html","css"]
// }

// let swapnil  = new Person()
// console.log(swapnil)
// swapnil.firstName = "swapnil"
// swapnil.lastName = "despande"
// swapnil.skills = ["c","html","css"]




// let chinmay2 = new Person()
// let amol2 = new Person()
// console.log(chinmay2)
// console.log(amol2)

// amol2.firstName = "amol2"
// amol2.lastName = "rao2"
// amol2.skills = ["html","css","sql"]

// console.log(amol2)
// console.log(chinmay2)


class PersonB {

    constructor(fn,ln,skills){
        this.firstName = fn
        this.lastName = ln 
        this.skills = skills
    }
}

let amol3 = new PersonB("amol3","rao3",["html","css"])
let chinmay3 = new PersonB("chinmay3","deshpande3",["html","css","javascript"])

console.log(amol3)
console.log(chinmay3)