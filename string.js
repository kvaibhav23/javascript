const name = "hitesh"
const repocount = 50
//console.log(name+repocount+ "Value")  --------- Outdated Method
//console.log(`Hello my name is ${name} and my repocount is ${repocount}`)       //New Method (can be called as string interpolation method)
const gamename = new String ('hiteshhc')
//console.log(gamename.__proto__)
const newString = gamename.substring(0,4)
//console.log(newString)
const namee = "  hites  "
//console.log(namee.trim())
const numbee = 100
const nimbee = new Number(100)   //the new keyword creates a new object with the proper datatype written after that
console.log(nimbee)
//console.log(nimbee.tostring.length)  ===> gives 3 and as well converting the datatype to string from number
//console.log(nimbee.toFixed(1))  ====> the precision after decimal is fixed to 1 digit 
//console.log(nimbee.toPrecision(4))    ===> the precision is fixed to 4 digits that is total 4 digits including before and after decimal places also it consists rounding off to the nearest operations if required while precising the value

//++++++++++++++++++ Maths +++++++++++++++++++++
//console.log(Math)  ==> it is itself a object containing various mathematical operations
//console.log(Math.abs(-4))   =====> returning absolute value
//console.log(Math.round(4.6))  ===> rounding off
//console.log(Math.ceil())   ===> ceiling function,,,,, similarly there is floor operation
//console.log(Math.max(1,2,3,4,5))   ===>max 
//console.log(Math.min(1,2,3,4,5))   ===>min

// console.log(Math.floor(Math.random()*5 + 1))
const min = 10
const max = 20
console.log(Math.floor((Math.random()*(max - min + 1) + 10)))