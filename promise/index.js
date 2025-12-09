// const data={
//     name:"eren",
//     age:25
// }

// const jsonData={
//     "name":"eren",
//     "age":22
// }

// const x=JSON.stringify(data)
// console.log(x)

// console.log(JSON.parse(x))

// promise - 3 states
// pending - fulfilled - rejected

// const prom = new Promise((resolve,reject)=>{
//     let isRead = false;
//     if (isRead){
//         resolve("data is read")
//     } else{
//         reject("data is not read")
//     }
// })
// console.log(prom)

// prom.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// API - Application Programming Interface
// frontend(html,css,js,react)---API---backend(node.js)---database(mongodb)

fetch('https://dummyjson.com/products',{
    method:"GET",
})
    .then((data)=>{
        return data.json()
    }).then((d)=>{
        console.log(d.products[0].title)
        console.log(d.products[1].title)
        console.log(d.products[23].title)
    })
    .catch((err)=>{
        console.log(err)
    })

// methods
// httpMethod(protocol) = https
// domain name= dummyjson.com
// end Point = products
// url = httpmethod + domain name + end point
// GET ==> to read
// POST ==> to create
// DELETE ==> to delete
// PUT ==> to update all fields
// PATCH ==> to update single field