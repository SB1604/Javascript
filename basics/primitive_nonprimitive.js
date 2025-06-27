// primitive data types:
//7 types
/*String
Number
Boolean
null
undefined
Symbol
BigInt*/

const temp = null
const id= Symbol('12333')
const newId=Symbol('12333')
const bigNum=2738278732737
const big = 4562125n

console.log(temp)
console.log("Data type of temp :",typeof(temp))
console.log(bigNum)
console.log("Data type of bigNum :",typeof(bigNum))
console.log("Data type of big :",typeof(big))
console.log(id)
console.log(newId)
console.log("Data type of id:",typeof(id))
console.log(id==newId)
console.log(id===newId)

//Non primitive types
//Arrays , Objects, Functions

const heros =["shakti","nag","doga"]

const myobj={
    name: "Sara",
    age: 21
}

const funcName=function(){
    console.log("HI Sara here")
}
console.log("NON PRIMITIVE DATA TYPES")
console.log(heros)
console.log(myobj)
console.log(funcName)

console.log("Data type of Array:",typeof(heros))
console.log("Data type of object:",typeof(myobj))
console.log("Data type of function:",typeof(funcName))
