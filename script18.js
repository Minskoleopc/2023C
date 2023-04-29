function addition(a,b){
    console.log(a+b)
}
addition('1','2')


function additionB(x,y){
    if(typeof x == "number" && typeof y == "number"){
        console.log(x+y)
    }
    else {
        console.log('incorrect input')
    }
}
additionB('12','6')
