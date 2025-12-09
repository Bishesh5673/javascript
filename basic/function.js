// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)
// add(20,50)

// function sub(a,b){
//     console.log(a-b)
// }
// sub(56,20)
// sub(67,21)

// function div(a,b){
//     console.log(a/b)
// }
// div(36,13)
// div(75,15)

// function mul(a,b){
//     console.log(a*b)
// }
// mul(6,12)
// mul(45,5)

// function mod(a,b){
//     console.log(a%b)
// }
// mod(144,12)
// mod(16,5)

// function add(a,b){
//     return a+b
// }
// let x=add(20,50)
// console.log(x)

// 1. normal (named) function
// function print(){
//     console.log("Print")
// }

// // 2. function expression
// const add=function(){
//     console.log("add")
// }
// add()

// // 3. Arrow function (this keyword doesnt exist)
// const val =()=>{
//     console.log("val")
// }
// val()

// 4. IIF
// (function(){
//     console.log("IIF")
// })()

// 5. Anonymous function
// setInterval(()=>{
//     console.log("Hi")
// },1000);

// let sum=(a,b)=>a+b
// let sum=a=>a+5
// console.log(sum(6))

// wrt a function that will calculate the sum of 1-100 number
function calc(){
    let sum=0
    for(let i=1;i<=100;i++){
        sum +=i
    }
    console.log(sum)
}
calc()

// function that prints even number only 1-100
// function even(){
//     for(i=1;i<=100;i++){
//        if(i%2==0){
//             console.log(i)
//        } 
//     }
// }
// even()

// count the total even number from 1 to 10
function count(){
    let count=0
    for(i=1;i<=10;i++){
       if(i%2==0){
            count += 1
       } 
    }
    console.log(count)
}
count()

// given number is prime or not
function prime(a){
    let count=0
    for(i=1;i<=a;i++){
        if(a%i==0){
            count++
        }
    }
    if(count==2){
        console.log("prime")
    }else{
        console.log("not prime")
    }
}
prime(67)

// calculate factorial of a given number
function factorial(a){
    let fact=1
    for(i=1;i<=a;i++){
        fact= fact*i
    }
    console.log(`factorial of ${a} is ${fact}`)
}
factorial(5)

// print prime number from 1 to 20
function printprime(a,b){
    for(i=a;i<=b;i++){
        let count=0
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
            console.log(i)
        }
    }

    // for (let i=a;i<=b;i++){
    //     let prime=true
    //     for(let j=2;j<i;j++){
    //         if(i%j==0){
    //             prime=false;
    //             break;
    //         }
    //     }
    //     if(prime){
    //         console.log(i)
    //     }
    // }
}
printprime(1,20)

// count the prime numbers from 1 to 20
function countprime(a,b){
    let pcount=0
    for(i=a;i<=b;i++){
        let count=0
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
            pcount++
        }
    }
    console.log(`The total prime number from ${a} to ${b} is ${pcount}`)
}
countprime(1,20)

// add the prime numbers from 1 to 20
function addprime(a,b){
    let sum=0
    for(i=a;i<=b;i++){
        let count=0
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
            sum+=i
        }
    }
    console.log(`The sum of prime numbers from ${a} to ${b} is ${sum}`)   
}
addprime(1,20)


// 6. callback function
const first =(a,b)=>{
    console.log("first")
    console.log(a+b)
}

const second =(x)=>{
    console.log("second")
    x(100,200);
}

second(first);

// wrf that will take a function, and a value and passed function will tell the given number is even or not
const fun=(a,b)=>{
    a(b)
}

// const even=(c)=>{
//     if(c%2==0){
//         console.log("even")
//     } else{
//         console.log("not even")
//     }

// }

fun((c)=>{
    if(c%2==0){
        console.log("even")
    } else{
        console.log("not even")
    }

},9)