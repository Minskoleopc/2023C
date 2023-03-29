let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:32,
        skills:["django","html","css","javascript"],
        marks:[44,55,66,77,88],
        city:"pune"
    },
    {
        firstName:"poorva",
        lastName:"vyas",
        age:29,
        skills:["python","django","javascript"],
        marks:[44,55,66,77,88],
        city:"ujjain"
    },
    {
        firstName:"sarika",
        lastName:"pansare",
        age:25,
        skills:["python","cypress","html","css","javascript"],
        marks:[44,85,66,79,88],
        city:"sangamner"
    },
    {
        firstName:"mayuri",
        lastName:"katwe",
        age:26,
        skills:["python","django","selenium","css","javascript"],
        marks:[43,53,60,77,88],
        city:"sinnar"
    },
    {
        firstName:"ram",
        lastName:"dani",
        age:32,
        skills:["sql","html","javascript"],
        marks:[44,57,66,77,88],
        city:"pune"
    }

]

//console.log(students[0].firstName)
// print fullName for all students
students.forEach(function(el){
    console.log(el.firstName+ el.lastName)
})

// print city for all city 
// firstName:city

students.forEach(function(el){
    console.log(el.firstName+":"+el.city)
})


// only people with pune city
students.forEach(function(el){
    //console.log(el.city)
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})

//name:countOfskills
students.forEach(function(el){
    console.log(el.firstName+":"+el.skills.length)
})

// averageAge
let q11 = students.reduce(function(acc,el){
    return el.age + acc
},0)
console.log(q11/students.length)

students.forEach(function(el){
    //console.log(el)
    let totalMarks = el.marks.reduce(function(acc,el){
        return acc + el
    },0)

    console.log(el.firstName +":"+totalMarks)
})

students.forEach(function(el){
    //console.log(el)
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})

students.forEach(function(el){
    if(el.skills.includes("python") && el.skills.includes("css")){
        console.log(el.firstName)
    }
})

// add coutry property
students.forEach(function(el){
    //console.log(el)
    el.country = "india"
})
console.log(students)