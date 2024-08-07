//old type for adding the string

const name = "vedant"
let coding_level = " = 99+"

console.log(name + coding_level);

//string interplilation
//new way 

console.log(`my name is ${name} and my coding level is ${coding_level}`)

//here we are creating a variable `name` inside inside the object by using new 
// gooo to the console of chrome then paste this and enter this , after that check by enter name it provide a object  
const namme = new String (`vedantgc`);

console.log(namme[0]);
console.log(namme.__proto__)//for exploring the object 

console.log(namme.length)
console.log(namme.toUpperCase());
console.log(namme.charAt(2));
console.log(namme.indexOf());
