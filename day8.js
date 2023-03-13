

let city = "pune"
console.log(city)

let city2 = 'nagpur'
console.log(city2)

let city3 = `mumbai`
console.log(city3)


// number + string ====> string 
// string + number ====> string 
// string + string ====> string 
// number + number ====> number

let a = 10
let b = 20
let c = "hello"

console.log(a+b+c) 
console.log(a+c+b)
console.log(c+a+b)

//"hello" + 10 + 20
//"hello10"+20
// "hello1020"

// String stores the value by index
let city4 = "mumbai";

// 0   1   2   3  4  5
// m   u   m   b  a  i  

console.log(city4[0]) // m
console.log(city4[1]) // u
console.log(city4[2]) // m


// Object -- 
// Propery and methods
// String is also object 
// String property and method

//  0   1   2   3  4  5
//  w   a   r   d  h  a

let city5 = "wardha"
let q1 = city5.length
console.log(q1)

for(let i = 0 ; i < 6 ; i++){
   //console.log(i)
   console.log(city5[i])
}

// methods
//toUpperCase()
//action  -- convert every character to Uppercase()
//return  -- string 

let fruit = "apple"
let q11 = fruit.toUpperCase()
console.log(q11)
console.log(typeof q11)


// toLowerCase()
let fruit2 = "Banana"
let q12 = fruit2.toLowerCase()
console.log(q12)
console.log(typeof q12)

// includes()
let fruit3 = "papaya"
let q13 = fruit3.includes('ya')
let q14 = fruit3.includes('Ya')
console.log(q13)
console.log(q14)

// indexOf()
// 0   1   2   3  4
// m   a   n   g  o
let fruits4 = "mango"
let q15 = fruits4.indexOf('N')
console.log(q15)


// method chaining 


let fruit5 = "chikoo"
let q16 = fruit5.toUpperCase().toLowerCase().length 
console.log(q16)




























