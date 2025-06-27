// stack - primitive data types
// heap - non primitive data type

/*Stack Memory*/

let myName = "Sara"
newName = myName // not original data just a copy
newName="bons"

console.log(myName) // myName does not change
console.log(newName) //only the copy changes

/*heap memory*/

let obj1={
    name:"Sara",
    age:21
}

let obj2=obj1

obj2.age=22 // changes the original obj too

console.log(obj1)
console.log(obj2)