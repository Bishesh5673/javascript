// const product=[
//     { name:"iphone11",price:20000 },
//     { name:"iphone12",price:30000 },
//     { name:"iphone13",price:88000 },
//     { name:"iphone15",price:50000 },
// ]
// console.log(product[0].name)
// console.log(product[0].price)
// console.log(product[1])
// product.forEach((i)=>{
//     console.log(i.name)
//     console.log(i.price)
// })
// let sum=product.reduce((acc,i)=>{
//     return acc+i.price
// },0)
// console.log(sum)

// double the price
// let doub=product.map((i)=>{
//     return {...i,price:i.price*2}
// })
// console.log(doub)

// item with price greater than 30000
// let newPro= product.filter((i)=>{
//     return i.price>30000
// })
// console.log(newPro)

// item whose price is 50000
// let newPro= product.find((i)=>{
//     return i.price==50000
// })
// console.log(newPro)
// console.log(newPro.name)

// const arr=[1,2,3,4,5]
// const [a,b,c]=arr
// console.log(a)
// console.log(b)
// console.log(c)

// const user={
//     name:"eren",
//     age:22
// }
// const {name,age}=user
// console.log(name)
// console.log(age)

// rest and spread op(...)
// spread
// const arr=[1,2,3,4,5]
// const another=[67,68,69,70,...arr]
// console.log(another)

// const user={
//     name:"eren",
//     age:22,
// }

// const phone={
//     ...user,
//     ph:9869676773,
// }

// console.log(phone)

// rest
// function add(...list){
//     console.log(list)
//     return list.reduce((acc,item)=>acc+item)
// }
// console.log(add(12,23,45,34,67,73,56,666,777,999))

// wrt a arrow function that will make n natural number and find the sum of even number from that
// const add=(...list)=>{
//     const even= list.filter((item)=>item%2==0)
//     return even.reduce((acc,item)=>acc+item)
// }

// console.log(add(1,2,3,4,5,6,7,8,9,10))

const products = [
 { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 10 },
 { id: 2, name: "Phone", category: "Electronics", price: 800, stock: 20 },
 { id: 3, name: "Shoes", category: "Fashion", price: 150, stock: 50 },
 { id: 4, name: "Watch", category: "Fashion", price: 200, stock: 30 },
 { id: 5, name: "Bag", category: "Fashion", price: 100, stock: 40 },
 { id: 6, name: "Headphones", category: "Electronics", price: 150, stock: 15 },
 { id: 7, name: "Keyboard", category: "Electronics", price: 100, stock: 25 },
 { id: 8, name: "T-shirt", category: "Fashion", price: 50, stock: 100 },
 { id: 9, name: "Monitor", category: "Electronics", price: 300, stock: 5 },
 { id: 10, name: "Sunglasses", category: "Fashion", price: 80, stock: 60 },
];

// 1. create an array of objects with only name and price
// products.forEach((item)=>{
//     console.log({name:item.name,price:item.price})
// })

// 2. Increase the price of all products by 10% and return the updated array.
// let inc=products.map((item)=>{
//     return{...item, price: item.price+0.1*item.price}
// })
// console.log(inc)

// 3. Get all products in the "Electronics" category.
// let electro=products.filter((item)=>{
//     if(item.category=="Electronics"){
//         return item
//     }
// })
// console.log(electro)

// 4. Get all products with a price greater than 200
// let arr=products.filter((item)=>{
//     if(item.price>200){
//         return item
//     }
// })
// console.log(arr)

// 5. Get all products that are out of stock (stock = 0).
// let arr=products.filter((item)=>{
//     if(item.stock==0){
//         return item
//     }
// })
// console.log(arr)

// 6. Calculate the total stock of all products.
// let stock=products.reduce((acc,item)=>{
//     return acc+item.stock
// },0)
// console.log(stock)

// 7. Calculate the total price of all products combined.
// let price=products.reduce((acc,item)=>{
//     return acc+item.price
// },0)
// console.log(price)

// 8. Find the most expensive product
// let max=products.reduce((acc,item)=>{
//     if(acc>item.price){
//         return acc
//     } else{
//         return item.price
//     }
// },0)
// console.log(`The most expensive product is ${max}`)

// 9. Find the product with the name "Shoes".
// let shoe=products.filter((item)=>{
//     if(item.name=="Shoes"){
//         return item
//     }
// })
// console.log(shoe)

// 10. Find the first product with stock less than 10.
// let stck=products.filter((item)=>{
//     if(item.stock<10){
//         return item
//     }
// })
// console.log(stck)

// 11. Print the name of each product in the console.
// products.forEach((item)=>{
//     console.log(item.name)
// })

// 12. Print all products with a custom message: "Product: <name>, Price: <price>".

// 13. Reduce the stock of each product by 1 (simulate selling one item).
let reduc= products.map((item)=>{
    return{...item,stock:item.stock-1}
})
console.log(reduc)

// 14. Add a new field discount with value 0 to each product.
let disc=products.map((item)=>{
    return{...item,discount:0}
})
console.log(disc)