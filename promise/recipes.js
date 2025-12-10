fetch("https://dummyjson.com/recipes", {
  method: "GET",
})
  .then((data) => {
    return data.json();
  })
  .then((d) => {
    let name = d.recipes.filter((item)=>{
        return item.cuisine=='Asian'
    })
    console.log(name)
  })
  .catch((err) => {
    console.log(err);
  });
