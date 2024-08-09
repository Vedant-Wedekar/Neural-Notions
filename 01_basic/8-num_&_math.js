//part_1_num

//simple integer value printing
const score = 120
console.log(score)

//it help to find the lenght of num which is sotre in the string form 
const num = new Number(100)
console.log(num.toString().length)

//it help to  create decimal enter 
console.log(num.toFixed(2))//100.00

//it help to round off numbers
const all = 128.67
console.log(all.toPrecision(3))//129

//it help to insert comma in international and indian form 
const hun = 1000000
console.log(hun.toLocaleString('en-IN'))//10,00,000

////////////////math//////////////////////

console.log(Math)
console.log(Math.abs(-5))//for changing into positive
console.log(Math.abs(5))//not for negsative to positive

console.log(Math.round(5.6))//round off
console.log(Math.ceil(7.2))//it considered the first no for round off 
console.log(Math.floor(7.6))//actual i didnt understand
/////////////////

console.log(Math.min(-5,7,4,67,89,0,7,5))//find the minimum value for given array
console.log(Math.max(-5,7,4,67,89,0,7,5))//find the maxium value for given array

console.log(Math.random())//give a random number betw 0-0.9999
console.log(Math.random()*10 +1)//for getting a output  which is grater than 0.99 by multiplying 10 it will be 9.9 or
                               // +1 is used because if after the multiplication output will be 
console.log((Math.random()) +1)
console.log(Math.floor(Math.random()*10) +1)//for round off

//this code is help fulll when we need and seres of rendom num betw 1-6 like lodo game !!!!!!!!!!!!!!!!!!!!!!!!!!!!
const min =1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1 ) + min))












