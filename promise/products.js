fetch("https://dummyjson.com/products", {
  method: "GET",
})
  .then((data) => {
    return data.json();
  })
  .then((d) => {
    // d.products.forEach((item)=>{
    //     console.log(item.title)
    //     console.log(item.price)
    // })

    // let hundred=d.products.filter((item)=>{
    //     return item.price>100 
    // })
    // console.log(hundred)

    let sum= d.products.reduce((acc,item)=>{
        return acc+item.price
    },0)
    console.log(`The total sum of price of  all products ${sum}`)
  })
  .catch((err) => {
    console.log(err);
  });
