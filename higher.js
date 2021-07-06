function add(a,b){
    return a+b
}


function manipulate(a,b, fun){
    var c=a+b
    var d=a-b
    // function multyply(){
    //     var m=func(a,b)
    //     return c*d*m
    // }
    return  function (){
        var m=fun(a,b)
        return c*d*m
    }
}

var multiply=manipulate(3,4,add)
console.log(multiply())