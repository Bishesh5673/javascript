// object

// let user ={
//     name:"Benjamin",
//     age:22
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user["name"])
// console.log(user["age"])

// update
// user.age=23
// // add
// user.phone="9869318185"

// delete
// delete user.name
// console.log(user)

const user={
    name:'ereh',
    age:25,
    address:{
        temp:"BKT",
        per:"KTM"
    },
    sub:{
        math:[90,20,40]
    }
}

// console.log(user.address.temp)
// console.log(user.address.per)


console.log(user.sub.math.reduce((acc,item)=>{
    return acc+item
},0))