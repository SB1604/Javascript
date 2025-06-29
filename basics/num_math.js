const score=400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toFixed(3))
console.log(balance.toString())

const num=511.25
console.log(num.toPrecision(4))
console.log(num.toPrecision(3))
console.log(num.toPrecision(2))

const large=20000222000
console.log(large.toLocaleString('en-IN'))//to convert the representation of a number in indian number system format not US number system format

//*******************MATHS********** */

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4,7,9,2,3))
console.log(Math.max(4,7,9,2,3))

console.log(Math.random())
console.log((Math.random()*10) + 1)

//to generate random numbers for 10 to 20

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//VERY IMP SYNTAX
