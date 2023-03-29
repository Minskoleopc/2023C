let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:45
}

// retrive  (.notation and bracket notation)
console.log(info.firstName)
console.log(info['firstName'])
// update (.notation and bracket notation)
info.firstName = "sarika"
info['firstName'] = "pansare"

// add (.notation and bracket notation)
info.city = "pune"
info['language'] = "hindi"

// delete (.notation and bracket notation)
delete info.firstName
delete info['city']

