// Array - collection of heterogeneous data types 

// let arr=[1,3,5,6,7,true,"helllooo"]
// console.log(arr)
// // console.log(arr.length)
// // console.log(arr[1])
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// 1. function that adds the number 7 at the end of the array using push method
// let arr=[1,2,3,4]
// arr.push(7)
// console.log(arr)

// 2. pop method
// let arr=["apple","banana"]
// arr.pop()
// console.log(arr)

// 3. shift method
// let arr=[10,20,30,40]
// arr.shift()
// console.log(arr)

// 4. unshift method
// let arr=["middle","end"]
// arr.unshift("start")
// console.log(arr)

// 5. toString method
// let arr=['one','two','three']
// str=arr.toString()
// console.log(str)

// 6. concat method
// let arr=['cat','dog']
// let arr2=['fish','bird']
// console.log(arr.concat(arr2))

// 7. slice method
// let arr=['red','green','blue']
// let newarr=arr.slice(0,2)
// console.log(newarr)

// 8. pop and unshift
// let arr=['x','y','z']
// arr.pop()
// arr.unshift('a')
// console.log(arr)

// 9. length of the string
// let arr=[100,200,300]
// str = arr.toString()
// console.log(str.length)

// 10. push method
// let arr=['apple','banana']
// arr.push('orange','grape')
// console.log(arr) 

// wrt a function that will calculate the sum of given array's value

// let arr=[1,2,3,4,5,6,7,8,9,10];
// const sum=()=>{
//     let add=0;
//     for(i=0;i<arr.length;i++){
//         add = add + arr[i];
//     }
//     return add
// };
// console.log(sum())


// sum of even numbers
// const even=()=>{
//     let add=0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             add = add + arr[i];
//         }      
//     }
//     return add
// };
// console.log(even())

// function that print the prime number from the given array
// const prime=()=>{
//     for(i=0;i<arr.length;i++){
//          let count=0;
//          for(j=1;j<=arr[i];j++){
//             if(arr[i]%j==0){
//                 count++
//             }
//          }
//          if(count==2){
//             console.log(arr[i])
//          }
//     }
// };
// prime()

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];

// arr.push(67,68,69)
// arr.pop()
// arr.shift()
// arr.unshift(56,73)

// console.log(arr.slice(5,9))
// console.log(arr.splice(6,6,67,68,69))
// console.log(arr)