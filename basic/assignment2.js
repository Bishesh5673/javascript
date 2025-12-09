// 1. for loop to print 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. calculate and return the sum of first n natural numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// 3. even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4. odd numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 5. calulate and return the factorial of given number
// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);

// 6. print the multiplication table of 5
for (let i =1; i<=10; i++) {
    console.log( `5 x ${i} = ${5*i}`)
}

// 7. print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 8. print multiples if 3 from 1 to 30
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 9. calulate and return the sum of all even numbers from 1 to 50
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// 10. calulate and return the sum of all odd numbers from 1 to 50
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// 11. print numbers between 1 to 50 which are divisible by 5
for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

// 12. print the first 10 numbers in fibonacci sequence
let num1 = 0;
let num2 = 1;
for (let i = 1; i <= 10; i++) {
    console.log(num1);
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}

// 13. count and return the number of digits in a positive integer for loop
// let num = 12345;
// let count = 0;
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     count++;
// }
// console.log(count);

// 14. print the square of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

// 15. calculate and return the sum of the squares of the first n natural numbers
// let num = 10;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     sum = sum + i * i;
// }
// console.log(sum);

// 16. print the cube of each number from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
}

// 17.  find and return the smallest number greater than 0 and divisible by both 3 and 4
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        console.log(i);
        break;
    }
}

// 18. print first 10 even numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 19. print all numbers from 1 to 100 that are divisible by both 2 and 50
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 50 == 0) {
        console.log(i);
    }
}

// 20. calculate and return the sum of all multiples of 3 and 5 below 100
let sum = 0;
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
    }
}
console.log(sum);
