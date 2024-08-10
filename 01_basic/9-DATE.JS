console.log(`vedant`)
let mydate = new Date();//in js date is date is object 
console.log(mydate)

// to method for printing date in differ difer format 
console.log(mydate.toString())
console.log(mydate.toJSON())
console.log(mydate.toDateString())
console.log(mydate.toTimeString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleTimeString())
 
//create your own date 
//but remenber month is always starts from 0 =jan in js 

let mydateown = new Date(2024,9,5);
console.log(mydateown.toDateString())