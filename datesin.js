let mydate = new Date()
// console.log(mydate)     
// console.log(mydate.toString())
// console.log(mydate.getDate())
// console.log(mydate.getFullYear())
// console.log(mydate.getMinutes())
/*  ===Output===
2025-01-12T08:33:37.882Z
Sun Jan 12 2025 14:03:37 GMT+0530 (India Standard Time)
12
2025
3
*/
let newDate =new Date('2023-10-14')
// console.log(myCreatedate)
let myTimestamp = Date.now()  //====> Gives in millisecond
//console.log(Date.now()/1000)
newDate.toLocaleString('default', {
    weekday: "long"
})
