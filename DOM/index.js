// console.log("THis is DOMJS")
// console.log(document)
// How to access
// Selectors
// id selectors
// class selectors
// tag selectors
// query selectors
// queryAll selectors

// id selectors
// const div=document.getElementById('second')
// console.log(div)
// console.log(div.innerText)
// console.log(div.innerHTML)

// class selectors
// const box=document.getElementsByClassName('box')
// console.log(box[0].innerText)
// console.log(box[1].innerText)

// tag selectors
// const divs = document.getElementsByTagName("h1")
// console.log(divs[0].innerText)

// query selectors
// const que =document.querySelector("div")
// console.log(que)

// queryAll selectors
// const que =document.querySelectorAll("div")
// const que =document.querySelectorAll(".box")
// console.log(que)

// modify
// const second=document.querySelector('#second')
// second.innerText="Hello, my name JEff"
// second.innerHTML=`
//     <h1>HAHAHAHHA</h1>
//     <h2>huuhuhuhuhuhhehehehehe</h2>`

const par=document.querySelector(".parent")
// const div=document.createElement('div')
// div.innerHTML=`
// <h1>About JS</h1>
// <p>This is all about Js</p>`

// div.classList.add("js_class")

// par.appendChild(div)
// console.log(div)

par.style.border="2px solid black"
par.style.height="200px"
par.style.width="200px"
par.style.borderRadius="50%"
par.style.backgroundColor="red"
par.style.margin="auto"
par.style.marginTop="100px"