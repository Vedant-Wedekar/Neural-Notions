// data type 
// 1) primitive 2)non primitive

//primitive -> 7 
//string,number , boolean , null (empty), undefined , symbol ,bigint

// non primitive 
//array , function , object 

//declare for symbol

const a = Symbol('123');
const b = Symbol('123');

console.log(a === b);  // false

const name = "vedant"
let age = 19  
const adult = true
let salary 
let stud_time = undefined
let bigint = 9325255755559
const ao = Symbol("123")
let hero = ["vedant","spidy","iron man","ben 10"]
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person1 = new Person("vedant",19,"Nagpur");
console.log(person1);




function pokemon (name,type,colour){
    this.name=name;
    this.type=type;
    this.colour=colour;
}
let pokemon1 = new pokemon("pikachu","electric","yellow");
console.log(pokemon1);

