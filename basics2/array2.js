const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log("Merging 2 arrays by pushing")
//console.log(marvel_heroes)//not a good way to merge two arrays

const all_heroes=marvel_heroes.concat(dc_heroes)//returns new array
console.log("mergering by concat")
console.log(all_heroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log("merging by spread")
console.log(all_new_heroes)

const nest_arr=[1,2,3,[4,5,6,7],8,9,[11,[1,3,[6,7]]]]
console.log(nest_arr.flat(Infinity))
console.log(nest_arr.flat(2))

console.log(Array.isArray("Sara"))
console.log(Array.from("Sara"))
console.log(Array.from({name:"sara"}))//interesting

let marks1=98
let marks2=89
let marks3=95

console.log(Array.of(marks1,marks2,marks3))

const arr=new Array(marks1,marks2,marks3)
console.log(arr)
