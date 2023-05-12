
// function additionA(){
//     console.log('running A')
// }

// function additionB(){
//     console.log('running B')
// }

// additionB()
// additionA()


// function additionC(){
//     setTimeout(function(){
//         console.log("running c")
//     },3000)
// }

// function additionD(){
//     console.log('running D')
// }

// additionC()
// additionD()


// userCreate -----> id ------ info


function getInfo() {
    setTimeout(function () {
        console.log('user created ')
    }, 3000)

    setTimeout(function () {
        console.log('get id')
    }, 2000)

    setTimeout(function () {
        console.log('get info')
    }, 1000)

}
//getInfo()

// async code execution in sync order
// call back hell 

function getInfo() {
    setTimeout(function () {
        console.log('user created ')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('get info')
            }, 1000)

        }, 2000)
    }, 3000)
}
getInfo()

// promises


