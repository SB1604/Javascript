//for of
const arr=[10,43,65,92,15]

for (const ele of arr) {
    console.log(ele)
}

//maps
const mp= new Map()
mp.set('SB',"Sara Brahma")
mp.set('DB',"Debdyuti Brahma")
mp.set('JB',"Jini Brahma")

for (const [initials,name] of mp) {
    console.log(`${initials} :- ${name}`)
}

//for of doesn't work on objects

const myobj={
    name:'Sara',
    age:'21',
    height:5.2
}

/*for (const person of myobj) {
    console.log(person)//output: myobj is not iterable 
}*/

//for in ---- does not work on maps
for (const key in myobj) {
    console.log(`${key} is ${myobj[key]} `)
}

//for each ---- does not return anything
const coding=["js","java","cpp","c","ruby","python"]
/*coding.forEach((value) => {
    console.log(value)
});*/

coding.forEach((val,i,arr)=> {
    console.log(val,i,arr)
});

let arrObj=[
    {
        name:"Javascript",
        file:"js"
    },
    {
        name:"Java",
        file:"jv"
    },
    {
        name:"python",
        file:"py"
    },
]
arrObj.forEach((val)=>{
    console.log(val.name)
})