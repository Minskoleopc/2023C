
//                0    1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [34,33,32,31]

for(let i = 0 ; i < birthYear.length ;i++){ // 1 // 2 //3 // 4
    //console.log(i) // 0 , 1 , 2 , 3
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let ag = 2023 - birthYear[i] // 34
    ages.push(ag)
    // i -- 0
    // i -- 1
    // i -- 2
    // i -- 3
}
console.log(ages)

birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2023 - el
})
console.log(q1)

// program2 - filter()

let marks = [45,33,44,66,33,77]
let grtOrEq45 =[]
//[45,66,77]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    console.log(marks[i])
    if(marks[i] >= 45){
        grtOrEq45.push(marks[i])
    }
}
console.log(grtOrEq45)
let q22  = marks.filter(function(el,index,arr){
    return el >= 45
})
console.log(q22)

// reduce

let nums = [11,22,33]
let total = 0

for(let i = 0 ; i < nums.length ; i++){
    //console.log(i)
    //console.log(nums[i])

    total = total + nums[i]
    //        0   +   11    =======>   11
    //       11   +   22    =======>    33
    //       33   +   33    ========>   66
}

console.log(total)


let qq = nums.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(qq)
let cities = ["nagpur", "pune","mumbai","banglore"]

let qq2 = cities.forEach(function(el){
    console.log(`welcome ${el}`)
})
//console.log(qq2)



let numbs = [11,22,44,11,233,444,555]
let qq3  =numbs.filter(function(el){
    return el > 200
})
console.log(qq3)

let qq4  =numbs.find(function(el){
    return el > 200
})
console.log(qq4)

let qq5  = numbs.findIndex(function(el){
    return el > 200
})
console.log(qq5)

numbs = [11,22,44,11,233,444,555]


let q44 = numbs.every(function(el){
    return el > 100
})
console.log(q44)

let q55 = numbs.some(function(el){
    return el > 1000
})
console.log(q55)
