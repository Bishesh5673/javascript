// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// foreach,map,filter,reduce,find

// calculate the sum of numbers from a given array using foreach
// let sum=0
// arr.forEach((item)=>{
//     sum+=item
// })
// console.log(sum)

// calculate the even number from a given array using foreach
// arr.forEach((item,index)=>{
//     if(item%2==0){
//         console.log(item)
//     }
// })

// calculate the sum of even number from given array using foreach
// let sum=0
// arr.forEach((item,index)=>{
//     if(item%2==0){
//         sum+=item
//     }
// })
// console.log(sum)

// display the prime number from given array using foreach
// arr.forEach((item)=>{
//         let count=0
//         for(i=1;i<=item;i++){
//             if(item%i==0){
//                 count++
//             }
//         }
//         if(count==2){
//             console.log(item)
//         }
// })

// filter
// const newArr = arr.filter((item)=>{
//     return item%2!=0
// })
// console.log(newArr)

// reduce
// const sum= arr.reduce((acc,item)=>{
//     return acc+item
// },0)
// console.log(sum)

// filter out even numbers
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// const newArr = arr.filter((item)=>{
//     return item%2==0
// })
// console.log(newArr)

// filter out string with length more than 3 characters
// let str=["arr","eren","mun","mikasa","armin","hi","hello","hehehehe"]
// const newStr= str.filter((item)=>{
//     return item.length>3
// })
// console.log(newStr)

// filter out negative numbers
// let arr=[-1,2,-23,4,5,-67,7,8,-69,10,-11,12,-13];
// const newArr = arr.filter((item)=>{
//     return item<0
// })
// console.log(newArr)

// filter out true values from given array of boolean
// let bool=[true,false,true,1,1,0,0,"hahaha"]
// const newTru= bool.filter((item)=>{
//     return item==true
// })
// console.log(newTru)

// filter out strings that contain the letter a
// let str=["arr","eren","mun","mikasa","armin","hi","hello","hehehehe","hahaha"]
// const newStr= str.filter((item)=>{
//     return item.includes("a")
// })
// console.log(newStr)

// filter out number that are greater than 5
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// const newArr = arr.filter((item)=>{
//     return item>5
// })
// console.log(newArr)

// filter out empty string
// let str=["","arr","eren","mun","mikasa","armin","hi","hello","hehehehe","",""]
// const newStr= str.filter((item)=>{
//     return item.length == 0
// })
// console.log(newStr)

// sum of[1,2,3,4,5] using reduce
// let arr=[1,2,3,4,5]
// const sum= arr.reduce((acc,item)=>{
//     return acc+item
// },0)
// console.log(sum)

// maximum number using reduce
// let arr=[12,45,7,,89,34]
// const max = arr.reduce((acc,item)=>{
//     if(acc>item){
//         return acc
//     } else{
//         return item
//     }
// },0)
// console.log(max)

// Flatten an array of arrays [[1,2], [3,4], [5,6]] using reduce.
// const arr=[[1,2], [3,4], [5,6]]
// let newArr= arr.reduce((acc,item)=>{
//     return acc.concat(item)
// },[])
// console.log(newArr)

// foreach item doubles
// let arr=[1,2,3,4,5]
// let newArr = []
// arr.forEach((item)=>{
//    newArr.push(item*2)
// })
// console.log(newArr)

// filter out odd numbers than find the sum of remaining numbers
// let arr=[1,2,3,4,5]
// const newArr= arr.filter((item)=>{
//     return item%2!=0
// })
// console.log(newArr)

// const sum= newArr.reduce((acc,item)=>{
//     return acc+item
// },0)
// console.log(sum)

// map
let arr=[1,2,3,4,5,6,7,8,9,10,"ereh"]
// let newArr=arr.map((item)=>{
//     return item**2
// })
// console.log(newArr)

// find
let val=arr.find((item)=>{
    return item=='ereh'
})
console.log(val)
