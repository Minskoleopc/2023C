
let info = ["chinmay","deshpande",45,77]

// retrive
console.log(info[0])
// update 
info[1] = "dani"
console.log(info)
// add
info.push("hindi")
info.unshift("Mr")
console.log(info)
// delete
info.pop()
info.shift()
info.splice(1,1)

// Object 
//["chinmay","deshpande",45,77]

let info2 = {
    // key     : value
    // property: value
    firstName:"chinmay",
    lastName:"deshpande",
    age:45,
    rollNo:77
}
// Object does not stores the value by index
//console.log(info2[0])

// dot notation and bracket notation

// retrive 
console.log(info2.firstName)
console.log(info2['lastName'])

// update 
info2.firstName = "tanmay"
info2['firstName'] = "Manjeet"
// add
info2.language = "hindi"
info2['city'] = "pune"
console.log(info2)
// delete
delete info2.city
delete info2.language


let vehicle = {
    color:"red",
    type:"sedane"
}

console.log(vehicle.color)
vehicle.color = "blue"
vehicle.city = "nagpur"
delete vehicle.color

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['regNo'] = 134
delete vehicle['regNo']

let n = [11,22,33,44,55]
for(let i = 0 ; i < n.length ; i++){
    //console.log(i)
    console.log(n[i])
}

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}

for(let prop in info3){
    console.log(prop,info3[prop])
}