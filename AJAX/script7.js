// api -----   list of users -------single user id
// id ----- next

let body = document.querySelector('button')

function renderHtml(el) {
    document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
    document.write(`<h2>${el.id}</h2>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<img src = ${el.avatar}>`)
}


function getUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data[0].id
        })
}

function getUserById(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })

}
async function getUserInfo(pageNumber){
    let id  = await  getUsers(pageNumber)
    let info = await getUserById(id)
    renderHtml(info)
}
getUserInfo(2)

// monday
// friday , sat ,sun









// body.addEventListener('click', function () {
//     getUsers(1)
//         .then(function (id) {
//             return getUserById(id)
//         })
//         .then(function (info) {
//             renderHtml(info)
//         })


// })




