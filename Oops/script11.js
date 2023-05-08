function addition(x,y){
    console.log(x+y)
}
addition(12,2)

// lexical scope

// program 1
function addition(){
    let x = 10
    let y = 5
    console.log(x+y) // 15
    //console.log(s)

    function additionB(){

        let s = 50
        let t = 100

        console.log(x+y) // 15
        console.log(s+t)

        function additionC(){
            let j  = 100
            let k = 50

            console.log(x+y+s+t)
            console.log(j+k)
        }

        additionC()
    }
    additionB()
}
addition()

// closures 

// program 2
function Multiplication(x,y){
    console.log(x*y) // 18
    return x*y
    console.log("hello")
}
let q1 = Multiplication(3,6)
console.log(q1)

// program 3
function Re(){
    return function(){
        console.log("hello")
    }
}

let a = Re()
// let a = function(){
//     console.log("hello")
// }
console.log(a)
a()

// program 4

function Qwerty(){
    let x = 10
    let y = 15

    return function(){
        console.log(x+y)
    }
}

let q11 = Qwerty()
console.log(q11)

// let q11  = function(){
//     console.log(x+y)
// }

q11()

// program 4
function additionC(){
    let x = 10
    let y = 22
    return [x,y]
}
let [c1,c2] = additionC()
console.log(c1,c2)







