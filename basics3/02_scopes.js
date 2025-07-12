if(true){
    let a=10
    const b=80
    var c=60
}
//console.log(a)//error
//console.log(b)//error
//console.log(c)//60 (no scope maintained)

//--------SCOPES-------------

if(true){
    const web="google"
    if(true){
        const app="Insta"
        console.log(`IF STATEMENT SCOPE : App is ${app} and web is ${web}`)// NO error here cause web is in global scope of this "if statement"
    }
    //console.log(`App is ${app} and web is ${web}`) //-------ERRORRRRRRRRRR--------- cause app is in local scope and cannot be accessed outside the local scope
}

function one(){
    const web="google"
    function two(){
        const app="Insta"
        console.log(`FUNCTION SCOPE:App is ${app} and web is ${web}`)
    }
    two()
    //console.log(`App is ${app} and web is ${web}`)
    
}
one()

//----------------hoisting----------------

add(4) // NO error
function add(num){
    return num+10
}

//add(4) // NO ERROR

//add_2(4)  ------ ERROR as this can't be declared before 
const add_2=function (num){
    return num+100
}
add_2(4)//NO ERROR 