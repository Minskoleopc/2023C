let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        city: "pune",
        skills: ["python", "java", "javascript", "html"]
    },

    {
        firstName: "samay",
        lastName: "dani",
        city: "nagpur",
        skills: ["python", "html", "javascript"]

    },
    {
        firstName: "mayuri",
        lastName: "katwe",
        city: "sinnar",
        skills: ["javascript", "html5"]
    },
    {
        firstName: "ram",
        lastName: "dani",
        city: "pune",
        skills: ["python", "html", "javascript"]

    },

]
console.log(students[0].firstName)
console.log(students[0]['firstName'])
console.log(students[1].city)
console.log(students[1]['city'])

// name:
for (let i = 0; i < students.length; i++) {
    //console.log(i)
    console.log(students[i].firstName + ":" + students[i].skills.length)
}

students.forEach(function (el) {
    console.log(el.firstName + ":" + el.city)
})


students.forEach(function(el){
    if(el.city == "pune" && el.skills.includes("python")){
        console.log(el.firstName)
    }
})



