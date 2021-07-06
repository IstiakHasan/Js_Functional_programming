//What is Pure Function?
/* `*It Returns the same result if given the same arguments`
`*It does not cause any observable side effects` */


function sqr(n){//pure function
    return n*n
}

console.log(sqr(2))
console.log(sqr(3))


var n=10
function change(){
    n=100
}
change()
console.log(n)//output hbe 100  , tai aita pure function na 



var point={

    x:45,
    y:30
}

function printpoint(point){
    point.x=100// value change kore dicche  so aita k side effect bolbo , tai aita pure function na 
    point.y=200

    console.log(point)
}
printpoint(point)
console.log(point)


