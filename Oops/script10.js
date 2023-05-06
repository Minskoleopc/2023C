// class Overloading {

//     addition(x,y){
//         console.log(x+y)
//     }

//     addition(x,y,z){
//         console.log(x+y+z)
//     }

//     addition(x,y,z,a){
//         console.log(x+y+z+a)
//     }

// }

// let a = new Overloading()

// a.addition(13,4)// NaN
// a.addition(13,4,4) // NaN
//a.addition(13,4,4,4) // 25


class Overloading {

    addition(x, y, z, a) {

        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }

}

let a = new Overloading()
a.addition(13, 4)
a.addition(13, 4, 4)
a.addition(13, 4, 4, 4)


// same class same method different signature - overloading 
// different class , same method name , same signature -overriding


class Student {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class Teacher extends Student {
    salary = 10000

    displayName(){
        console.log("Mr"+this.firstName + this.lastName)
        super.displayName()
    }

}


let chinmayT = new Teacher("chinmay","deshpande")

console.log(chinmayT.firstName)
console.log(chinmayT.lastName)
console.log(chinmayT.salary)
chinmayT.displayName()


// different class , same method name , same signature 
// overriding




