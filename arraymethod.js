let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
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
arr.forEach((item)=>{
        let count=0
        for(i=1;i<=item;i++){
            if(item%i==0){
                count++
            }
        }
        if(count==2){
            console.log(item)
        }
})

