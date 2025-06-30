//singleton object
//object.create ---- to create singleton objects

//object literals
const mySym = Symbol("key1")
const user={
    name:"Sara",
    "full name":"Sara Brahma",
    [mySym]:"mykey1",
    age:21,
    location:"kolkata",
    email:"sara.brahma@gmail.com",
    isLoggedIn: false
}
console.log(user.name)
console.log(user["name"])
console.log(user["full name"])
//console.log(user.full name) ----- NOT POSSIBLE TO OBTAIN FULL NAME BY DOT OPERATOR
console.log(user.mySym)
console.log(typeof user.mySym)
console.log(user[mySym])
console.log([mySym])

//Object.freeze(user)
user.name="Bons"
console.log(user)

user.greet= function(){
    console.log(`Hello ${this["full name"]}`)
}

console.log(user.greet)
console.log(user.greet())