// if 
let a = 10 ;
if(a<20){
    console.log("yes")

}
else{
    console.log("No")

}

//  operater where used inn  the condition 
// < , > , == , <= , >= 

// === this is used for checking value or checking data type 

if ( 2 == "2"){
    console.log("same ")
}
else{
    console.log("diff")
}

if ( 2 === "2"){
    console.log("same ")
}
else{
    console.log("diff")
}



///               if  else if else 

const marks = 60;
if(marks>=90){
    console.log("A+++")
}
else if(marks>=80) {
console.log("B")
}
else{
    console.log("C")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}