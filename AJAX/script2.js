
// sync
// function additionA(){
//     console.log('A is executed')
// }
// function additionB(){
//     console.log('B is executed')
// }
// additionB()
// additionA()

// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log('C is executed')
//     },3000)
// }

// function addtionD(){
//     console.log('D executed')
// }

// additionC()
// addtionD()

//  usercreate -------> id --------- id info


function getInfo(){

    setTimeout(function(){
        console.log('user created')
    },5000)

    setTimeout(function(){
        console.log('id retrived')
    },4000)

    setTimeout(function(){
        console.log('user info')
    },3000)

}

//getInfo()


// Async in nature -----> sync 
function getInfo(){
    setTimeout(function(){
        console.log('user created')
        setTimeout(function(){
            console.log('id retrived')
            setTimeout(function(){
                console.log('user info')
            },3000)
        },4000)
    },5000)
}
getInfo()






