/* Variable
1. Intialization by let
2. Declaration: let a 
3. Assignment: let a = 7
*/

/*
declare variables using the let keyword
assign values to variables using the assignment operator (=)
use the shortcuts +=, -=, ++, -- to reassign variables
i
*/

let bootcamp = 'App Academy'; 
console.log(bootcamp);

let birthYear = 1997;
console.log(birthYear);

// variable declaration. If a varaible is not assigned it will reutrn undefined.
let name;
console.log(name); // undefined
name = 'Mujahed'; // assigning a variable
console.log(name); // Mujahed 

// Manipulating a variable
// To change the value of a variable, we need to reassign it to a new value with =

let number = 42;
console.log(8 + number); // this will not reassign variable number
//instead
number = number + 5; // number variable reassignment
console.log(number);

//Assignment Shorthand
let num = 15
num += 13; // 28
num -= 5; // 23
num *= 4 // 92
num /= 2 // 46
console.log(num);

//Assignment Shorthand increment and dr
let num1 = 16
num++; // 17   ++ is increment of 1
num--; // 16   -- is decrement of 1
console.log(num1);

let num2
console.log(num2 + 16); //NaN (Not a Number) NaN appeared bc variable num2 was not assigned and then was added by 16

let city = 'New York';
console.log(city + 12);