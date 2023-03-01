// for and while  loops 
// repeat actions 

// program 1
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for 
// for(initialization ; conditionCheck , increment/decrement){
//     // statements
// }
// print "hello"  5 types

for(let i = 1 ; i <= 5 ; i++){ //2 // 3 // 4 // 5 // 6

    console.log("hello") 
    // "hello"
    // "hello"
    // "hello"
    // "hello"
    // "hello"

}

// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

//print(5 to 1)
for(let i = 5 ; i >= 1 ; i--){
    console.log(i)
}

// table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){
    console.log(i)
}

for(let i = 30 ; i >= 3 ; i = i - 3){
    console.log(i)
}

// break statement with for loop
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i)  //1 // 2 //3
    if(i == 3){
        break
    }  
}

// continue  with for 
for(let k = 1  ; k <= 5 ; k++){ // 2 //3 // 4 // 5 // 6
    if(k == 3){
        continue;
    }
    console.log(k) //1 // 2 // 4 // 5
}


// while loop

// intilization 
// while(){

    // statement
    // increment / decrement

//}

// print  "hello" 5 types
let h1 = 1
while(h1 <= 5){
    console.log("hello")
    // h1 = h1 + 1
    // h1 += 1
    h1 ++ //2 //3 // 4 // 5 // 6

}

let h2 = 1
while(h2 <= 5){
    console.log(h2)
    h2 ++
}

let h3 = 5
while(h3 >= 1){
    console.log(h3)
    h3 --
}

let h4 = 2
while(h4 <= 20){
    console.log(h4)
    h4 = h4 +2 
}

let h5 = 30
while(h5 >= 3){
    console.log(h5)
    h5 = h5 - 3
}

// while  with break 

let h6 = 1
while(h6 <= 5){
    if(h6 == 2){
        break
    }
    console.log(h6) //1
    h6 = h6 + 1 // 2
}

let h7 = 1
while(h7 <= 5){
    console.log(h7)  // 1 // 2 // 3
    if(h7 == 3){
        break
    }
    h7 = h7 + 1  // 2 // 3
}


let h8 = 1
while(h8 <= 5){
    if(h8 == 3){
        h8 ++ // 4
        continue
    }
    console.log(h8) // 1 // 2 // 4 //5
    h8 ++ //2 // 3 // 5 // 6
} 









// while with continue














