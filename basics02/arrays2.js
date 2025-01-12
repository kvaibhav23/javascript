const heroes1=["superman","batman","spiderman"]
const heroes2 = ["shakti","agni","jal"]
//heroes1.push(heroes2)
//console.log(heroes1)
// const yell = heroes1.concat(heroes2)
// console.log(yell)
// const allll = [...heroes1,...heroes2]
// console.log(allll)
const another = [1,2,3,[4,5,[6,7,[8,9,[0,1],7],6],5],4]
const realarray = another.flat(Infinity)
console.log(realarray)
console.log(Array.isArray("hitesh"))
console.log(Array.from("vaibhav"))
console.log(Array.of(heroes1,heroes2))