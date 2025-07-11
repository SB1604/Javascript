/*const user={
    name:"Sara",
    age:21,
    email:"sarab@gmail.com",
    isLoggedIn: false
}

console.log(user)
console.log(Object.keys(user))//returns array of keys

const obj1={
    1:'a',
    2:'b',
    3:'c'
}

const obj2={
    4:'d',
    5:'e',
    6:'f'
}

const obj5={
    10:'d',
    11:'e',
    12:'f'
}

const obj3=Object.assign({},obj1,obj2,obj5)
console.log(obj3)
console.log(obj1)//this will hold the original value of obj1

const obj4=Object.assign(obj1,obj2,obj5)
console.log(obj4)//gives the same output as obj3
console.log(obj1)//this will now hold all the values together as the concatenated values are stored here

//spread operator
const objnew={...obj1,...obj2,...obj5}
console.log(objnew)//same output as the previous ones just easier syntax*/

//objects retrieved from databases

const instaUser=[
    {
        name:"Sara",
        age:21,
        mail:"sb@gmail.com"
    },
    {
        name:"Shinj",
        age:25,
        mail:"shin@gmail.com"
    },
    {
        name:"Avi",
        age:21,
        mail:"jeet@gmail.com"
    },
    {
        name:"Labony",
        age:21,
        mail:"madslab@gmail.com"
    }
]

console.log(instaUser)
console.log(instaUser[1].name,instaUser[2].age)

//Singleton Object
//A singleton object is a single instance that is shared throughout your code. No matter how many times you access it, you're always interacting with the same object.

const Singleton = {
  name: "I am the only one",
  greet() {
    console.log(`Hello from ${this.name}`);
  }
};

Singleton.greet(); // Hello from I am the only one
Singleton.greet("Sara"); // Hello from I am the only one

/*Non-Singleton Object
A non-singleton is a class-based or function-based object where each time you create it, a new instance is made. Each instance has its own separate state.*/

function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello from ${this.name}`);
  };
}

const p1 = new Person();
const p2 = new Person("Bob");

p1.greet("Sara"); // Hello from undefined
p2.greet(); // Hello from Bob

//OBJECT DESTRUCTURING

const user={
    name:"Sara",
    age:21,
    email:"sarab@gmail.com",
    isLoggedIn: false
}
const {name} = user
console.log(name)//Sara

const {name : n} = user
console.log(n)//Sara

