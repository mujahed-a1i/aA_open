// Boolean is either true or false
/* Logical Operators and Logical Order of Operations
1. ! not (aka bang)
2.   && and 
3.  || or 
*/

/* De Morgan's Law
!(A || B) is equivalent to !A && !B
!(A && B) is equivalent to !A || !B
*/

//! operator 
console.log(!true); // false
console.log(!false); // true
console.log(!false); // false

// && operator
console.log('\n')
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // true 

// || operator
console.log('\n')
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false