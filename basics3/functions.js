function shop(...num1){ //rest operator
    return num1
}

console.log(shop(70,80,90,200))//array of all the numbers

function shop2(num1,num2,...num3){ //rest operator
    return num3
}

console.log(shop2(70,80,90,200))//array of all numbers except the first and second number

//object as parameter

function handleObject(whateverObject){
    console.log(`The username is ${whateverObject.username} and the age is ${whateverObject.age}`)
    return whateverObject.mail
}

const user={
    username:"Sara",
    age:21,
    mail:"sb16"
}

console.log(handleObject(user))//sb16

console.log(handleObject({
    username:"SHINJINI",
    age:25
}))//undefined as the object doesn't have a 'mail' key