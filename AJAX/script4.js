// sync and asyn 

function additionA() {
    console.log("A is running")
}
function additionB() {
    console.log("B is running")
}

additionA()
additionB()


// //program2 
// function additionC(){
//     setTimeout(function(){
//         console.log('c is running')
//     },2000)
// }

// function additionD(){
//     setTimeout(function(){
//         console.log('d is running')
//     },1000)
// }

// additionC()
// additionD()


// program async 


function getInfo() {
    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('getId')
    }, 2000)

    setTimeout(function () {
        console.log('getInfo')
    }, 1000)

}
//getInfo()


// asyn code ------ sync

function getInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('getId')
            setTimeout(function () {
                console.log('getInfo')
            }, 1000)
        }, 2000)

    }, 3000)
}
//getInfo()


// promise ---- pending resolve reject 
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5
//     if(a == b ){
//         resolve('a is called')
//     }
//     else {
//         reject('b is called')
//     }
// })

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10
//     if (a == b) {
//         resolve('a is called')
//     }
//     else {
//         reject('b is called')
//     }
// })

// pro.then(function (str) {
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })




// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10
//     if (a == b) {
//         resolve('a is called')
//     }
//     else {
//         reject('b is called')
//     }
// })

// pro.then(function (str) {
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('finally is executed')
// })



// let pro2 = new Promise(function(resolve,reject){
//     let arr = [11,33]
//     if(arr.length >= 3){
//         resolve({firstName:"chinmay",lastName:"deshpande"})
//     }
//     else {
//         reject({firstName:"kanchan",lastName:"dani"})
//     }
// })


// pro2
// .then(function(a){
//     console.log(a.firstName)
//     return "ram"
// }).then(function(str){
//     console.log(str)
// })
// .catch(function(b){
//     console.log(b.lastName)
// })
// .finally(function(){
//     console.log('hello')
// })

let pro2 = new Promise(function(resolve,reject){
    let arr = [11,33,44]
    if(arr.length >= 3){
        resolve({firstName:"chinmay",lastName:"deshpande"})
    }
    else {
        reject({firstName:"kanchan",lastName:"dani"})
    }
})

pro2
.then(function({firstName,lastName}){
   console.log(firstName)
   return lastName
}).then(function(str){
    console.log(str)
})
.catch(function({firstName,lastName}){
    console.log(firstName)
    console.log(lastName)
})
.finally(function(){
    console.log('hello')
})












































