function say (){
    // console.log("v")
    // console.log("e")
    // console.log("d")
    // console.log("a")
    // console.log("n")
    // console.log("t")
    // console.log("")
    // console.log("")

}
say()

function  add(num1,num2){
    num1+num2
    // console.log(num1+num2)
    return num1-num2;
    return num1*num2;
    
}
add(5,9)

//num1,num2 is parameter

//argument (5,9)



function login (name){
    return `${name} is logged in sucessfully`
}

// console.log(login('vedant'))

//now we are gonna to create program which print statement with added name 
function prog (name)
{
    if(name === undefined || name === 'ved')
    {
        console.log('i guess yor the sir ved or any other person ')
    }
    else{
        return  `${name} is here babyyyyy!`
    }
}

console.log(prog('radhika'));

    //in this code im tried to call the progg which some ststement whivh willl print with the help of of name 
    //in first we include the if condition for know the passing value is empty or not we also include the default value ved  for it 
    

// -----------------------------------------------------------------------------


//get multi ple value by use (...)

//  1   for  single output
function mutli_value1 (item){
    return item ;

}

console.log(mutli_value1 (200,300,400,))

//  2  for multiple output

function mutli_value2 (...item){
    return item ;

}

console.log(mutli_value2 (200,300,400,))



































