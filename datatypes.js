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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Used in Primitive datatypes)  Heap(Used in Non Primitve Data types)
//variable2=variable1
// In primitive datatypes(stored in stack) if the variable2 value is change then the variable1's value on which variable2 is dependent will not change.
//while in non-primitive datatypes(stored in heap) have diiferent working like their value got change as they are referred to the original value while in case primitive datatypes the copy was supplied for changing of data.
let userOne = {
    email:"kalpakag23@iitk.ac.in",
    name: "Kalpak Agrawal",

}
let userTwo = userOne
userTwo.email = "aryan23@iitk.ac.in"
console.log(userOne)
console.log(userTwo)

//We got copy in case of Stack, while we got original reference in case of heap