// //             0      1      2         3         4
// let names = ["ram","ravi","laxman","sachin","sanket"]
// console.log(names)

// // Everthing in js is object 
// // Object has property and methods
// // Method will have action and return type
// console.log(names.length)
// console.log('--------------------')
// // length property
// for(let i = 0 ; i  < 5 ; i++){
//     console.log(i)
// }
// // 0 ,1,2,3,4
// // Length -1 is always the last index

// //              0        1        2         3         4
// let cities = ["pune","mumbai","banglore","kolkata","chennai"]
// console.log(cities.length)

// // length -1 is  always last index

// for(let i = 0 ; i < cities.length ; i++){
//    // console.log(i)
//    console.log(cities[i])
// }


// // Array object 
// // property and methods 

// // property ---- length 

// // methods 

// // Method -- Gym 
// // action  -- excercise
// // return  -- fitness

// // push()
// // action - add the element to the last 
// // return - new length of array

// let fruits  = ["apple","mango","banana"]
// let x1= fruits.push("papaya")
// console.log(x1)
// console.log(fruits)

// // unshift()
// // action - adds the element at first 
// // return - new length of array

// //                  0           1       2        3
// let vegetables = ["cabbage","brinjal","onion","tomato"]
// console.log(vegetables)
// let x2 = vegetables.unshift('cauliflower')
// console.log(x2)
// console.log(vegetables)

// // pop()
// // action - removes the last element
// // return - return last element

// let animals = ["tiger","lion","giraffe","rabbit"]
// let x3 = animals.pop()
// console.log(x3)
// console.log(animals)

// // shift()
// // action - removes the firstElement
// // returns the  first element

// let x4 = animals.shift()
// console.log(animals)
// console.log(x4)

// // includes()
// // action - search for the element 
// // return - boolean value
// let country = ["india","srilanka","pakistan","bangladesh"]
// let x5  = country.includes("india")
// console.log(x5)

// // indexOf()
// let  flowers = ["rose","lily","jasmine"]
// let q5 = flowers.indexOf("Rose")
// console.log(q5)

// // reverse()
// let j = [11,22,33,44,55,66,77,88,99]
// let k = j.reverse()
// console.log(k)


//program 1
//                 0     1    2    3
let birthYear  = [1989,1990,1991,1992]
//[34,33,32,21]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
   // console.log(2023 - birthYear[i])
   let ii = 2023 - birthYear[i]
   ages.push(ii)
}

console.log(ages)


// program 2 
//             0  1   2   3  4   5 6  7   8  9
let numbers = [22,34,111,222,55,66,77,88,334,55]
// [111,222,77,66,88,334]
let above60 = [] // 
for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    if(numbers[i] > 60){
        above60.push(numbers[i])
    }
}
console.log(above60)


// program 3
//           0  1  2
let marks = [11,22,33]  // 66
let total = 0

for(let i = 0 ; i < marks.length ; i++){
   // console.log(i)
   //console.log(marks[i])
    total = total + marks[i]

   //            0   +    11     =======> 11
   //            11  +    22     =======> 33
   //             33 +     33    =======> 66
}
console.log(total)














