//First class Function

function add(a,b){
    return a+b
}
//1.A function can be stored in variable
var sum=add
console.log(sum(3,3))
console.log(typeof sum)//type dekhar jonno
//2.A function  can be stored in an Array
var arr=[]
arr.push(add)
console.log(arr)
console.log(arr[0](5,9))

//3.A function can be stored in an object
var obj={
    sum:add
}
console.log(obj)
console.log(obj.sum(4,5))
//4.we can create Function as Need
setTimeout(function(){
    console.log('I have created...')

},100)


//5.we can pass function as an arguments
//6.we can return functions from another function