let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        city: "pune",
        skills: ["python", "java", "javascript", "html"],
        marks: [78, 89, 90, 88, 99]
    },

    {
        firstName: "samay",
        lastName: "dani",
        city: "nagpur",
        skills: ["python", "html", "javascript"],
        marks: [88, 89, 93, 82, 98]

    },
    {
        firstName: "mayuri",
        lastName: "katwe",
        city: "sinnar",
        skills: ["javascript", "html5"],
        marks: [82, 89, 66, 82, 55]

    },
    {
        firstName: "ram",
        lastName: "dani",
        city: "pune",
        skills: ["python", "html", "javascript"],
        marks: [82, 89, 35, 37, 58]

    }

]

// add sales force skills to every user

students.forEach(function(el){
    //console.log(el.skills)
    el.skills.push('salesforce')
})
console.log(students)


// add a property country:india
// students.forEach(function(el){
//     console.log(el)
//     el.country = "India"
// })
// console.log(students)



// name - total marks

// for (let i = 0; i < students.length; i++) {
//     //console.log(students[i].marks)
//     let totalMarks = students[i].marks.reduce(function (acc, el) {
//         return el + acc
//     }, 0)
//     //console.log(students[i].firstName + totalMarks)
//     console.log(`${students[i].firstName} : ${totalMarks}`)
// }


// for (let i = 0; i < students.length; i++) {
//     //console.log(students[i].marks)
//     let totalMarks = students[i].marks.reduce(function (acc, el) {
//         return el + acc
//     }, 0)
//     //console.log(students[i].firstName + totalMarks)
//     console.log(`${students[i].firstName} : ${totalMarks/students[i].marks.length}`)
// }

// students.forEach(function(el){
//     let totalMarks = el.marks.reduce(function(acc,el){
//         return acc + el
//     },0)
//     console.log(`${el.firstName}:${totalMarks}`)
// })








// let total = [11,22,33]
// let q11 = total.reduce(function(acc,el){
//     return acc + el
// },0)








// console.log(students[0].firstName)
// console.log(students[0]['firstName'])
// console.log(students[1].city)
// console.log(students[1]['city'])

// // name:
// for (let i = 0; i < students.length; i++) {
//     //console.log(i)
//     console.log(students[i].firstName + ":" + students[i].skills.length)
// }

// students.forEach(function (el) {
//     console.log(el.firstName + ":" + el.city)
// })

// students.forEach(function(el){
//     if(el.city == "pune" && el.skills.includes("python")){
//         console.log(el.firstName)
//     }
// })