// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// // let chinmay = new Student()
// // console.log(chinmay.firstName)
// // console.log(chinmay.lastName)
// // chinmay.displayName()

// class Teacher  extends  Student{
//     salary = 1000   
// }

// let chinmayT = new Teacher()
// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.salary)
// chinmayT.displayName()


// program  2

// class Student {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln 
//     }

//     display(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class Teacher extends Student{
//     salary = 1000
// }

// let chinmayT = new Teacher("chinmay","deshpande")
// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.salary)
// chinmayT.display()

// program 3

class Student {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayS(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    constructor(fn,ln,sl){
        super(fn,ln)   
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let TeacherC = new Teacher ("chinmay","deshpande",1000)
console.log(TeacherC.firstName)
console.log(TeacherC.lastName)
console.log(TeacherC.salary)
TeacherC.displayS()
TeacherC.displaySalary()