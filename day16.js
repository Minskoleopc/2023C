// let names = ["chinmay","sarika","poorva","chinmay"]
// console.log(names)
// let firstName = "chinmay"
// let mapA = new Map()

// let setA  = new Set()
// console.log(setA)

// // Object --- property and method
// console.log(setA.size)

// // set stores the value by index ????
// // adding values 

// setA.add('chinmay')
// setA.add('sarika')
// setA.add('poorva')
// setA.add('ram')
// setA.add('chinmay')

// console.log(setA)
// console.log(setA[0])

// setA.clear()
// console.log(setA)


// //has()
// let setB = new Set(["apple","banana","payapa","grapes","apple"])
// console.log(setB)

// let q11 = setB.has("apple")
// console.log(q11)

// let q12 = setB.has("Apple")
// console.log(q12)

// setB.forEach(function(el){
//     console.log(el)
// })

// console.log(setB.keys())
// console.log(setB.values())
// console.log(setB.entries())

// let q123 = setB.delete('Apple')
// console.log(setB)
// console.log(q123)


// let rr = console.log("hello")
// console.log(rr)




// Map

let roles = new Map(
    [
        [1,"admin"],
        [2,"cusomter"],
        [3,"support"],
        [4,"manager"],
    ]
)

console.log(roles)


//roles.clear()
//roles.delete(1)


for(let [key,value] of roles.entries()){
    console.log(key,value)
}


for(let k of roles.keys()){
    console.log(k)
}

for(let v of roles.values()){
    console.log(v)
}
roles.forEach(function(v,k){
    console.log(v,k)
})

console.log(roles.get(2))
let q1234=roles.has(2)
console.log(q1234)


roles.set(5,"L1 support")
console.log(roles)
console.log(roles.size)








