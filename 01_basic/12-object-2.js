const tinderuser = new Object();
console.log(tinderuser);

//including the attribute  inside the object 
tinderuser.name = 'vedant wedekar'
tinderuser.gender = `male `

console.log(tinderuser);

//object  inside the objecbbb 
const obj1 = {
    email :`vedantwedekar@gmail.com`,
    username: {
        name :{
        fullname:`vedant wedekar`,
        last_name : `wedekar `,
        first_name : `vedant`
    }
}
}
console.log(obj1);

const poke   = {
    1:`vedant`,
    2:`wedekar`
}

const pokie = {1:`vihan`,2:`sharma`}

const sigma  = Object.assign({},poke,pokie)
console.log(sigma)
const pom = { ...poke , ...pokie}

console.log(pom)


const arr1 = [
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    },
    {
        name:`vedant`,
        age :19

    }
]


console.log(Object.keys(pokie));

console.log(Object.values(pokie));

console.log(Object.entries (pokie));


console.log(pokie.hasOwnProperty('islogged'))


































