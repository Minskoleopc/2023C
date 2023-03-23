// let and const 
let a = 10
console.log(a)
a = 50
console.log(a)



const h = 100
console.log(h)
//h = 600
console.log(h)

// Arithmetic operation


let a1 = 10
let a2 = 5

console.log(a1+a2)
console.log(a1-a2)
console.log(a1*a2)
console.log(a1/a2)
console.log(a1%a2)

let s1 = 8
let s2 = 4

console.log(s1+s2)
console.log(s1-s2)
console.log(s1*s2)
console.log(s1/s2)
console.log(s1%s2)


function addition(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
addition(12,4)
addition(60,30)

// function without parameter and without return type

function add(){
    console.log(9+9)
}
add()
add()
add()


// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}
addB(123,5)
addB(12,5)


// function with parameter and with return type 

function addC(x,y){
    return x + y
}

let q = addC(12,14)
console.log(q)
console.log(q+q)
console.log(q*10)



// comparison 
console.log(typeof '10')
console.log(typeof 10)
console.log(typeof true)


// Type - properties and methods
// comparison operator
// <, > , <= , >= ,== ,!= ,=== ,!===
// == , != 
console.log(2 == 3) // false
console.log(2 <= 3) // true
console.log(2 >= 3) // false
console.log(2 != 3) // true 
console.log(2 < 3) // true
console.log(2 > 3) // false
console.log(2 == '2')  // true
console.log(2 === '2') // false
console.log(2 === 2) // true 
console.log(2 !== 2) // false
console.log(2 === '2')  // false

// Logical operator 


// AND &&

// True   &&   True   =====> True
// False  &&  False  =====> False
// True   &&  False  =====> Fasle
// False  &&  True   =====> False

console.log(2 == 2 && 3 != 4)
console.log(2 != 2 && 3 == 4)
console.log(2 == 2 && 3 == 4)
console.log(2 != 2 && 4 == 4)


// OR 

// True   ||  True   =====> True
// False  ||  False  =====> False
// True   ||  False  =====> True
// False  ||  True   =====> True


// console.log(2 == 2 || 3 != 4)
// console.log(2 != 2 || 3 == 4)
// console.log(2 == 2 || 3 == 4)
// console.log(2 != 2 || 4 == 4)

// NOT
// True   - False 
// False  - True

console.log(! 6 == 6)
console.log(! 6 != 6)

// conditional statements


let numberT = 110
// if(numberT > 0 && numberT <=5){
//     console.log("5 % discount")
// }
// if(numberT >  5 && numberT <=10){
//     console.log("10 % discount")
// }
// if(numberT > 10){
//     console.log("15 % discount")
// }


if(numberT > 0 && numberT <=5){
    console.log("5 % discount")
}
else if(numberT >  5 && numberT <=10){
    console.log("10 % discount")
}
else if(numberT > 10){
    console.log("15 % discount")
}


let marks = 92

if(marks > 90){
    console.log("Grade A")
}
if(marks > 70){
    console.log("Grade B")
}
if(marks > 60){
    console.log("Grade C")
}

/////////////////////////////////////

if(marks > 90){
    console.log("Grade A")
}
else if(marks > 70){
    console.log("Grade B")
}
else if(marks > 60){
    console.log("Grade C")
}


// Tenary operator

let a11= 10
let b11 = 5
if(a11 > b11){
    console.log("a11 is greater")
}
else {
    console.log("b11 is greater")
}


a11 > b11 ? console.log("a11 is greater"):console.log("b11 is greater")


// Switch case 

// program1 
let city = "nagpdsdur"
// switch(city){
//     case 'pune':
//         console.log("MH")
//     case 'jaipur':
//         console.log("RJ")
//     case 'raipur':
//         console.log("CG")
//     default:
//         console.log('incorrect city name')
// }

// switch(city){
//     case 'pune':
//         console.log("MH")
//         break
//     case 'jaipur':
//         console.log("RJ")
//         break
//     case 'raipur':
//         console.log("CG")
//         break
//     default:
//         console.log('incorrect city name')
// }

switch(city){
    case 'pune':
    case 'nagpur':
        console.log("MH")

        break
    case 'jaipur':
    case 'udaipur':
        console.log("RJ")
        break
    case 'raipur':
    case 'a':
        console.log("CG")
        break
    default:
        console.log('incorrect city name')
}
















































