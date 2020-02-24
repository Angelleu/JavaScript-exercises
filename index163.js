/*Create a new index163.js

Define a add function

This function will return a numeric value with result of adding all the numbers that we pass as parameter

As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality

Call the add function passing 5 numbers and show the result as output

Call the add function passing 10 numbers and show the result as output*/



const add = function(number){
    var result=0;
    for(var i=0; i<arguments.length;i++){
        result = result+arguments[i];   
        
    }
        return result;
 
}
console.log(add(1,2,6,1,5));
console.log(add(10,20,30,40,50,60,70,80,90,100));