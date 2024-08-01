// two type of memoery 
//stack (primetive types) 
//heap(non) 


//---------------heap example 

let meet = {
    gmail :"meet@gmail.com",
    ph_no :932658732 
    
}
let geet = meet 
geet.gmail = "geet@gmail.com"
// this is a heap memoery example where the reference is send thats why is posssible to do changes 
//that happen in orgianal variable
console.log(geet);
console.log(meet.gmail);



// this is a stack example whrer didnt change because it used to copy variable

let userone = "vedant"
let usertwo = userone
usertwo = "ved"
console.log(usertwo);

console.log(userone);

