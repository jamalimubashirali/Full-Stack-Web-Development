function myFunction(num){
    var num1=6;
    console.log(num+num1);
}
myFunction(7);
var num2= 8;
try{
console.log(num1+num2);
throw new Error();
}catch(Err){
    console.log(Err);
}