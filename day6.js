// program 1
//                0    1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [34,33,32,31]
for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    //console.log(2023-birthYear[i])
    let qq = 2023-birthYear[i]
    ages.push(qq)

}
console.log(ages)
// program 2
let ia = [34,56,11,22,45,67,88]
let above30 = []
// [34,56,45,67,88]
for(let i = 0 ; i < ia.length ;i++){
    // console.log(i)
    // console.log(ia[i])
    if(ia[i] > 30){
        above30.push(ia[i])
    }
}
console.log(above30)
// program 3

let marks  = [11,22,33] // 66
let total = 0

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    total = total + marks[i]
    //       0    +    11     =====> 11
    //      11    +    22     =====> 33
    //      33    +    33     =====> 66
}
console.log(total)

// program 4

let cities = ["nagpur","pune","mumbai","jaipur"]

for(let i = 0 ; i < cities.length ; i++){
    // console.log(i)
    // console.log(cities[i])

    console.log("welcome "+cities[i])
}












// program 4