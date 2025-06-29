let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof(myDate))

let createDate=new Date(2025,6,29)
console.log(createDate.toDateString())
console.log(createDate.toLocaleString())

let dt= new Date("08-12-2020")
console.log(dt.toLocaleString('default',{
    weekday:"long",
}))
console.log(dt.toLocaleDateString())

let timeStamp = Date.now()
console.log(timeStamp)
console.log(dt.getTime())

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getFullYear())

