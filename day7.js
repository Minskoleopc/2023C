

let birthYear = [1989,1990,1991,1992]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let a = 2023 - birthYear[i]
    ages.push(a)

}
console.log(ages)
//birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el

})
console.log(q1)

let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let q2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q2)

// map method ---- array


// filter

let marks = [11,22,33,44,55,77,22,33,44,55,77]
let above50 = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)

let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)


// program 3 

let markss = [11,22,33] // 66
let total = 0
for(let i = 0 ; i < markss.length ; i++){
    //console.log(markss[i])
    total = total + markss[i]
    //       0    +   11      // 11
    //       11   +   22      // 33
    //       33   +   33      // 66
}
console.log(total)
let q4 = markss.reduce(function(acc,el,index,arr){
    return acc + el // 11
},0)
console.log(q4)


let names = ["mayuri","sarika","rasika","sunita","ramesh","suresh"]
for(let i = 0 ; i < names.length ; i++){
   // console.log(names)
    console.log('welcome '+ names[i])
}
names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// map() , filter() , reduce() , forEach()