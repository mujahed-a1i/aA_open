// A function is a procedure of code that will run when called. When we write a function, we can use it as many times as we please. 
// We only write a function once. 
// Writing a function is known as a function declaration or function definition.
/* Function declaration
A function declaration is when a function is defined and saved so that we can use it or re-use it later. 
When we use a declared function, we are calling the function. 
Calling a function is also known as invoking a function. 
A function call is also known as a function invocation. 

A function definition consists of the function keyword, followed by three things:
1. The name of the function.
2. A list of parameters to the function, enclosed in parentheses (( )).
3. The code to be run when this function is run, enclosed in curly braces ({ }). 
*/


//function definition
function average (num1, num2){
    let avg = ((num1 + num2) / 2);
    return avg;
}

//calling a function. This function call passes the argument 30 and 40.
average(30, 40);

console.log(average(15,25));


// Returning a value
// Every function in JavaScript returns undefined unless otherwise specified.

function sayNumber(num){
    console.log(num);
}
sayNumber(2); // prints 2, but because there is no return value it will be undefined

function sayNumber1(num){
    console.log(num);
    return true; 
}
sayNumber1(15); // prints 15 and the return value is true

// Return Value
// Every function call evaluates to its return value! 
// Another important rule of the return statement is that it stops function execution immediately. 
// This means that any code after a return will not be executed!

// What you learned
// How to define and invoke a function in JavaScript
// How to use the return keyword to return a value from a function
// Writing readable JavaScript code by using meaningful names and following camelCase conventions for multiple word variables and functions