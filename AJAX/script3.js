// program 1
// let proOne = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 10
//     if (x == y) {
//         resolve('both are equal')
//     }
//     else {
//         reject('both are not equal')
//     }
// })

// proOne.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })

// program 2
let pro2 = new Promise(function (resolve, reject) {
    let x = 10
    let y = 100

    if (x == y) {
        resolve([11, 22, 33, 44])
    }
    else {
        reject([-11, -22, -33, -44])
    }
})

pro2.then(function (arr) {
    console.log(arr[2])
}, function (arr) {
    console.log(arr[1])
})

// program 3


let pro3 = new Promise(function (resolve, reject) {
    let firstName = "chy"
    if (firstName.length > 5) {
        resolve("Long name")
    }
    else {
        reject('shortName')
    }

})

pro3
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })

// program 4
let pro4 = new Promise(function (resolve, reject) {
    let firstName = "chinmay"
    if (firstName.length > 5) {
        resolve("Long name")
    }
    else {
        reject('shortName')
    }

})

pro4
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log("i will always execute")
})










