const arr=[1,2,3,3,6]
arr.push(9)
console.log(arr)
arr2=arr
arr.pop(1)
console.log(arr)
console.log(arr2)

const newarr=new Array(10,20,50,80)
console.log(newarr)

//ARRAY METHODS
newarr.unshift(9)//9,10,20,50,80
console.log(newarr)
newarr.shift()//10,20.50.80
newarr.shift()//20,50,80
console.log(newarr)

const change_arr=newarr.join()//chnages array to string
console.log(typeof(change_arr))
console.log(change_arr)

//slice,splice