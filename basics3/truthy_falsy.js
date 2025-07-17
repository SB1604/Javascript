//falsy values
// false,0,null,undefined,''

//truthy values
//true,'0',"false",[],{},function(){}

//nullish coalescing operator(??)---- for null and undefined values
val1=5??10
val2=null??10
val3=10??null
val4=undefined??5
val5=5??undefined

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)