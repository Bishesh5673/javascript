// event handle
// 1. event handler(On)
// const info=()=>{
//     alert("hahahaha")
// }

// 2. event listener
// const btn=document.querySelector("#btn")
// btn.addEventListener("click",()=>{
//     alert("addEventListener")
// })

// const parent=document.querySelector(".parent")
// const btn=document.querySelector("#btn")

// let isTrue=true
// btn.addEventListener("click",()=>{
//     if(isTrue){
//         parent.classList.add("changeColor");
//         btn.innerText="Change color to White"
//         isTrue=false;
//     } else{
//         parent.classList.remove("changeColor");
//         btn.innerText="Change color to Black"
//         isTrue=true;
//     }
// });

const box = document.querySelector(".box");
const dog=document.createElement('h1')
dog.innerText=`D for dog`
const eleph=document.createElement('h1')
eleph.innerText=`E for elephant`

const btn=document.querySelector("#btn")
let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    box.appendChild(dog)
    box.appendChild(eleph)
    btn.innerText = "See Less";
    isTrue = false;
  } else {
    box.removeChild(dog)
    box.removeChild(eleph)
    btn.innerText = "See More";
    isTrue = true;
  }
});


