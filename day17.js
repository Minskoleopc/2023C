
//                0        1        2       3
let names = ["chinmay","sarika","poorva","ninad"]

// array stores the value by index

// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let  [x1,x2,x3,x4] = names
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

//              0          1
//           0  1  2    0  1  2
let nums = [[11,22,33],[44,55,66]]

// console.log(nums[0][1])
// console.log(nums[1][1])

let [[a1,a2,a3],[a4,a5,a6]] = nums
console.log(a1)
console.log(a4)
console.log(a5)
console.log(a6)



// program3

let obj = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:56
}

let {firstName:fn,lastName:ln,age:ag,rollNo:rn} = obj
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)

console.log(fn)
console.log(ln)
console.log(ag)
console.log(rn)

let vehicle = {
    color:"red",
    type:"sedane"
}

let {color:q1,type:q2} = vehicle
// console.log(color)
// console.log(type)
console.log(q1)
console.log(q2)


// program 4

let family = {

    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName:f1,parent:{mother:f2,father:f3}} = family
console.log(f1)
console.log(f2)
console.log(f3)


// program 5


let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"poorva",
        lastName:"vyas"
    }
]

let [{firstName:fnn,lastName:lnn},{firstName:fnn2,lastName:lnn2}] = students
console.log(lnn)
console.log(lnn2)

let info3 = {
    full:"chinmay deshpande",
    skills:["python","java","css","html"]
}

let {full,skills:[l1,l2,l3]}  = info3
console.log(full)
console.log(l1)
console.log(l2)
console.log(l3)