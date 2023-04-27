// class Person {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     rollNo = 34
//     age= 33

//     display(){
//         console.log(this.firstName+ this.lastName)
//     }   
// }
// let amol  = new Person()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.rollNo)
// console.log(amol.age)

// amol.firstName  = "amol"
// amol.lastName = "rao"
// amol.display()

// let chinmay = new Person()
// console.log(chinmay)
// chinmay.display()

// program 2

// class PersonB {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName  = ln 
//         this.age = age
//         this.rollNo = rollNo
//     }

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol = new PersonB("amol","rao",12,4)
// let chinmay = new PersonB("chinmay","deshpande",34,6)
// console.log(chinmay.age)


// program 3

// class PersonC {
//     setFirstName(fn){
//         this.firstName = fn
//     }

//     setLastName(ln){
//         this.lastName = ln
//     }
//     setAge(ag){
//         this.age = ag
//     }

//     setRollNo(rn){
//         this.rollNo = rn
//     }

// }

// let amolC = new PersonC()
// console.log(amolC)
// amolC.setFirstName("amolC")
// amolC.setLastName("RaoC")
// amolC.setRollNo("12")
// amolC.setAge("34")
// console.log(amolC)

class PersonD {


    set FirstN(fn){
        this.firstName = fn
    }
    set LastN(ln){
        this.lastName = ln
    }
    set RollNo(rn){
        this.rollNo = rn
    }
    set Age(ag){
        this.age = ag
    }


}

let a = new PersonD()
console.log(a)
a.FirstN = "chinmay"
a.LastN = "deshpande"
a.RollNo = 33
a.Age = 66

console.log(a)

// hard coded 
// constructor 
// set method 
// set properties