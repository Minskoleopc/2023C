// function getInfo(){
//     setTimeout(function(){
//         console.log('usercreated')
//     },3000)


//     setTimeout(function(){
//         console.log('getId')
//     },2000)

//     setTimeout(function(){
//         console.log('getInfo')
//     },1000)

// }
// getInfo()

// Asyn code ------ sync 

function getInfo() {
    setTimeout(function () {
        console.log('usercreated')
        setTimeout(function () {
            console.log('getId')
            setTimeout(function () {
                console.log('getInfo')
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()

// program 3

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})
// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })

// pro.then(function (str) {
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function (str) {
//     console.log(str)
//     return "ram"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("bye from finally")
// })


function userCreated() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('userCreated')
        }, 3000)
    })
}

function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('getId')
        }, 2000)
    })
}

function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('getInfo')
        }, 1000)
    })
}


// userCreated().
//     then(function(str) {
//         console.log(str)
//         return getId() 
//     })
//     .then(function(str){
//         console.log(str)
//         return getInfo() 
//     })
//     .then(function(str){
//         console.log(str)
//     })
//     .catch(function(){
//         console.log('fail')
//     })
//     .finally(function(){
//         console.log('hello')
//     })


async function Getinformation() {
    let j = await userCreated()
    console.log(j)
    let k = await getId()
    console.log(k)
    let l = await getInfo()
    console.log(l)
}
Getinformation()