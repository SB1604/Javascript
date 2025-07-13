//------------THIS keyword-------------
/*const obj={
    username:"Sara",
    age:21,

    name:function(){
        console.log(`HIIIII, Welcome ${this.username}`);
        console.log(this)//object details
    }
}

obj.name()
obj.username="shinz"
obj.name()
console.log(this)//empty object(windows object in browser)*/

/*function one(){
    console.log(this)// a lot of details
}
one()

const two = function(){
    console.log(this)//same as that of function one
}
two()*/

function one(){
    name:"Sara Brahma"
    console.log(this.name)//undefined
}
one()

const two=function(){
    name:"Sara Brahma"
    console.log(this.name)//undefined
}

two()

//-----------ARROW FUNCTIONS-----------------

const arr=()=>{
    name:"Sara Brahma"
    console.log(this.name)//undefined 
}
arr()


//explicit arrow function declaration
const add=(num1,num2)=>{
    return num1+num2
}

console.log(add(16,7))
//implicit arrow function declaration
const add2=(num1,num2)=>(num1+num2)

console.log(add2(16,7))//same as the explicit function