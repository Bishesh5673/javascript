// error handling
// 1. Runtime error
// 2. Compile time error

// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError

try {
  console.log(a);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("finally");
}
console.log("end");

async function getProducts() {
  try {
    let res = await fetch("https://dummyjson.com/products");
    res = await res.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
console.log("out")
getProducts();
