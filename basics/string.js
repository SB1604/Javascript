const name="Sara";
const surname="Brahma"

console.log(`Hello.. I am ${name} ${surname}`)

const newName=new String("SARAAAAA")

console.log(newName[1])
console.log(newName.__proto__)//object

console.log(newName.length)
console.log(newName.toLowerCase())

console.log(newName.charAt(2))
console.log(newName.indexOf('R'))

const str="This is Sara"
len=str.length
console.log(len)
console.log(str.substring(0,5))
console.log(str.slice(-12,8))

console.log("     Sara    ".trim())

const url="https://sara.com/bons%20brahma";
console.log(url.replace('%20','--'))

console.log(str.split(' '))
console.log(url.split('%20'))