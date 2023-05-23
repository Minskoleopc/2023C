// program 1

// class PersonB {

//     firstName = "chinmay"
//     lastName = "deshpande"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// let chinmay  = new PersonB()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// chinmay.displayName()


// let amol = new PersonB()
// console.log(amol.firstName)
// console.log(amol.lastName)
// amol.displayName()

// console.log(amol)

// amol.firstName = "amol"
// amol.lastName = "rao"
// console.log(amol)
// amol.displayName()


// // program 2

// class PersonB {
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// let amolB = new PersonB("rasika","kulkarni")
// let chinmayB = new PersonB("chinmayB","deshpande")
// amolB.displayName()
// chinmayB.displayName()

// chinmayB.age = 100
// console.log(chinmayB)
// console.log(amolB)


// program 3 
//set() , get()


class PersonC {

    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName
    }


}

let amolF = new PersonC()
console.log(amolF)

amolF.setFirstName("amolF")
amolF.setLastName("raoF")
console.log(amolF)

let q1 = amolF.getFirstName()
console.log(q1)

let q2 = amolF.getLastName()
console.log(q2)


// program 4

class PersonD {

    set fName(fn){
        this.firstName = fn
    }

    set lName(ln){
        this.lastName = ln
    }


    get fName(){
        return this.firstName
    }

    get lName(){
        return this.lastName
    }

}
let amolT = new PersonD()
console.log(amolT)

amolT.fName  = "amolE"
amolT.lName = "raoE"

console.log(amolT.fName)
console.log(amolT.lName)






