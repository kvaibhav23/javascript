const myarray = [0,1,2,3,4,5]  //Javascript arrays are resizable
//console.log(myarray[0])
//++++++++++Array Methods++++++++++++
myarray.push(6)
//console.log(myarray)
myarray.pop()
//console.log(myarray)
//myarray.unshift(9)  ===> adds the value in the beginning of the array
//myarray.shift()    ====> removes the value from the beginning of the array
//console.log(myarray.includes(9)) ====>false
//console.log(myarray.indexof(5)) =====>5

//+++++++++++  slice/splice  +++++++++++++++++
//slice and splice : are the functions that returns subarray
//console.log(myarray.slice(1,3))   =====> 1,2
//console.log(myarray.splice(1,3))  ====> 1,2,3   also splice removes the subarray from the original array 
// like now--
//console.log(myarray)   ===> [0,4,5]
