fetch("https://dummyjson.com/users", {
  method: "GET",
})
  .then((data) => {
    return data.json();
  })
  .then((d) => {
    // let name = d.users.filter((item)=>{
    //     // return item.age>30
    //     // return item.eyeColor=='Hazel'
    //     return item.gender=='female'
    // })
    // console.log(name)
    let bg = d.users.find((item) => {
      return item.bloodGroup == "A+";
    });
    console.log(bg);
  })
  .catch((err) => {
    console.log(err);
  });
