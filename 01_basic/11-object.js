// singleton
// create.object()

//object literals

//a normal declaretion an object 


//symbol access
const mysym = Symbol("ogsymbol")
const jsuser = {
    mysym : `fakesymbol`,
    [mysym] : `fakesymbol`,
    name:`vedant`,
    age: 18,
    loc : `nagpur`,
    "email":`xyz@gmail.com`,
    favpeople:[`m`,`p`,`a`,`n`,`p`,`m`]

    //symbol 

}
console.log(jsuser.mysym)
console.log(jsuser[mysym])
console.log(typeof jsuser.mysym)
console.log(typeof jsuser[mysym])
console.log(jsuser.age)
console.log(jsuser["email"])


