const user= {
    username:'Vedant',
    prize:999,
    welmsg: function(){
        console.log(`${this.username},is very very welcome `);
    }
}
user.welmsg()

user.username='ved'
user.welmsg()

function hislop (){
     user:"vedant"
     console.log(this.user)
}
hislop();

const addtwo  = (a,b) => {
    return a +b
}

console.log(addtwo(3,7));



//preset


const user = {
    username: "mahakaya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function ai(){
//     let username = "mahakaya"
//     console.log(this.username);
// }

//  ai()

// const fav = function () {
//     let username = "mahakaya"
//     console.log(this.username);
// }

const charger =  () => {
    let username = "mahakaya"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "mahakaya"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()














