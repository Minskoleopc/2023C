// // program 

// // Object literal

// let amol = {
//     firstName: "amol",
//     lastName: "rao",
//     age: 34
// }

// let chinmay = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     age: 31
// }


//Es6 

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
// }

// let amolB = new Person()
// amolB.firstName = "amol"
// amolB.lastName = "rao"
// amolB.age = 34
// console.log(amolB)

// Constructor

// class PersonC {
//     constructor(fn, ln, ag) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//     }
// }

// let amolC = new PersonC("amolC", "RaoC", 34)
// let chinmayC = new PersonC("chinmayC", "DeshpandeC", 34)
// console.log(amolC)
// console.log(chinmayC)


class PersonD {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.lastName = ln
    }
    setAge(ag) {
        this.age = ag
    }
}

let amolD = new PersonD()
console.log(amolD)
amolD.setAge(23)
amolD.setFirstName("chinmay")
amolD.setLastName("deshpande")
console.log(amolD)



// let r = {

//     color:"red"
// }

// r.color = "blue"
// r['color'] = "green"


// set and get


class PersonE {

    set setFn(fn){
        this.firstName = fn
    }
    set setLn(ln){
        this.lastName = ln
    }
    set setAge(ag){
        this.age = ag
    }

    get setFn(){
        return this.firstName 
    }
    get setLn(){
        return this.lastName
    }
    get setAge(){
        return this.age 
    }

}

let amolE = new PersonE()
console.log(amolE)

amolE.setFn = "amolE"
amolE.setLn = "Rao"
amolE.setAge = 34

console.log(amolE)
console.log(amolE.setAge)
console.log(amolE.setFn)
console.log(amolE.setAge)