//primitive 
//7 types : String, Number, boolean, String, Null, Undefined, Symbol, BigInt

//Non-Primitive
//--Arrays,Objects, Functions
const heroes = ["leo", "star","hena"]
const hell = 1
let useremail = undefined
const pd = Symbol('123')     //=> this one and the below one is not same even if the values are same
const id = Symbol('123')
console.log(pd==id)
let myObj={
    hell:1,
    heaven:2,
}
const myFunction = function(){
    console.log("Hello world")
}
const jojo = null
console.log(typeof heroes) // typeof null is object