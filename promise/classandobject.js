// class is used to create object
// DRY = Do not repeat yourself

class User {
    constructor(name,age,phone){
        this.userName=name;
        this.userAge=age;
        this.userPhone=phone;
    }
    printInfo =()=>{
        console.log(this.userName)
        console.log(this.userAge)
        console.log(this.userPhone)
    }
}
const u1=new User("eren",22,9867667699)
const u2=new User("armin",21,9869667677)

// console.log(u1.userName)
// console.log(u1.userAge)
// console.log(u2.userPhone)

u1.printInfo()
u2.printInfo()