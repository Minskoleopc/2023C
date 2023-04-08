// loops --- for loop and while loop


// for(initialization ; conditionCheck ; incrementDecremt){

// }

for(let i = 0 ; i <= 3 ; i++){ // 1 // 2 // 3 // 4
    console.log(i) // 0 , 1 , 2 , 3
}


for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) //1  // 2
}


for(let i = 1 ; i <= 5 ; i++){   // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i)  // 1 // 2 // 4 // 5
}



let i1 = 1

while(i1 <= 5){
    console.log(i1)
    i++
}

let i2 = 1
while(i2 <= 5){
    console.log(i2)
    if(i2 ==3){
        break
    }
    i2++
}

let i3 = 1
while(i3 <= 5){
    if(i3 ==3){
        i3 ++
        continue
    }
    console.log(i3)
    i3++
}






