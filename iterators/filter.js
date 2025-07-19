const student=[
    {
        name:"Sara",
        age:21,
        college:"fiem"
    },
    {
        name:"Madhu",
        age:20,
        college:"jmn"
    },
    {
        name:"Labanya",
        age:21,
        college:"Ju"
    },
    {
        name:"Shinz",
        age:25,
        college:"HIT"
    },
    {
        name:"Avi",
        age:21,
        college:"fiem"
    }
    
]

let users=student.filter((user)=>user.age===21)
console.log(users)

users=student.filter((user)=>{
   return  user.name==="Madhu"
})
console.log(users)

//filter only returns when the condition is true otherwise not. Also needs explicit return 

users=student.filter((names)=>{
    return names.name.startsWith("S")
})
console.log(users)

users=student.filter((names)=>{
    return names.name.startsWith("S")
})
console.log(users)

