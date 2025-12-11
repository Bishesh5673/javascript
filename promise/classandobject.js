// class is used to create object
// DRY = Do not repeat yourself

// class User {
//     constructor(name,age,phone){
//         this.userName=name;
//         this.userAge=age;
//         this.userPhone=phone;
//     }
//     printInfo =()=>{
//         console.log(this.userName)
//         console.log(this.userAge)
//         console.log(this.userPhone)
//     }
// }
// const u1=new User("eren",22,9867667699)
// const u2=new User("armin",21,9869667677)

// console.log(u1.userName)
// console.log(u1.userAge)
// console.log(u2.userPhone)

// u1.printInfo()
// u2.printInfo()


// Inheritance
// class User{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// class Student extends User{
//     constructor(name,age,college){
//         super(name,age)
//         this.college=college
//     }
// }
// class Emp extends User{
//     constructor(name,age,field){
//         super(name,age)
//         this.field=field
//     }
// }
// const s1=new Student("eren",22,"Omega")
// console.log(s1)
// console.log(s1.college)
// const e1=new Emp("Levi",44,"Scouts")
// console.log(e1)
// console.log(e1.name)

// switch case
const char="b"
switch(char){
    case "a":{
        console.log("A")
        break
    }
    case "b":{
        console.log("B")
        break
    }
    default:{
        console.log("default")
    }
}