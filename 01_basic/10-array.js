//simple array part 1  
let hero = [`spider`,`iron`,1,2,3,4,5,];
console.log(hero[0])

//as a object
let yt = new Array("sourav joshi","uk joker","badmosi")
console.log(yt[0])

//array method 

//push any element
yt.push(`dhruv rathi`)
console.log(yt)

//deleting the lastest element
yt.pop()
console.log(yt)

yt.unshift(`kanishka`)
yt.shift()

//questioning method
console.log(yt.includes(`badmosi`))
console.log(yt.indexOf(`badmosi`))

//converting data into string
const nyt = yt.join()
console.log(nyt)
console.log(typeof nyt)

///+++++++++++++++++++important+++++++++++++++++++++++++          
//slice, splice

const myarr = [1,2,3,4,5,6,7,8]
console.log(`a`,myarr)//our normal array

console.log(myarr.slice(1,3))//print array data from index 1 and 2 it does not include 3 the last index
console.log(`b`,myarr)//printing the array for knowing if any changes has doned or not 

console.log(myarr.splice(1,3))//print array data from index 1 and 3 also affecting the original array
console.log(`c`,myarr)//printing the sliced array 
 
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//simple array part 2


const pokemon  = [`pikachu`,`raichu`,`infrenate`,`draganite`]
const bb = [`tison`,`kai`,`gc`,`ray`]

pokemon.push(bb)
console.log(pokemon)

pokemon.concat(bb)
console.log(pokemon)

const k = pokemon.concat(bb)
console.log(k)

////    spread = ...
const allk = [...pokemon,...bb]
console.log(allk)

const eee = [12,3,4,5,[5,4,7,64,3,],5,7,5,4,6,67,[3,6,8,7,5,4]]
console.log(eee.flat(Infinity )) 

console.log(Array.isArray`vedant`
)
console.log(Array.isArray(`vedant`))
console.log(Array.from('vedant'))

let score = 100
let score1 = 1100
let score2 = 2100
let score3 = 3100

console.log(Array.of(score,score1,score2,score3))
