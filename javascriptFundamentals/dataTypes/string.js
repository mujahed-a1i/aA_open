// A string is a sequence of characters enclosed by quotation marks.


//Use .length to obtain a count of the number of characters that comprise a string
// calculating a string length
console.log('ramen'.length); // 5
console.log('go home!'.length) // 8
console.log(''.length); // 0

//indexing a string 
console.log('bootcamp'[0]); // b
console.log('bootcamp'[1]); // o
console.log('bootcamp'[2]); // o
console.log('bootcamp'[3]); // t
console.log('bootcamp'[10]); // undefined: invalid indexing returns undefined.
console.log('bootcamp'[-1]); // undefined

console.log('cat'.length); // 3
console.log('cat'[3]); // undefined
console.log('cat'[2]); // t

// Using indexOf
// We can also calculate the index of a given character within a string by using .indexOf()
// if the character is found in mutiple indices, the earliest index is returned
console.log('bagel'.indexOf('b')); // 0
console.log('bagel'.indexOf('a')); // 1
console.log('bagel'.indexOf('l')); // 4
console.log('bagel'.indexOf('z')); // -1 : .indexOf() a character that isn't in the string returns as -1
console.log('food'.indexOf('o')); // 1

//Using indexOf for a subtring
console.log('door hinge'.indexOf('oor')); // 1
console.log('door hinge'.indexOf('hi')) // 5
console.log('door hinge'.indexOf('hint')); // -1

//Concatenation
console.log('hello' + 'world'); // helloworld
console.log('goodbye' + ' ' + 'moon'); // goodbye moon
console.log('NY'.concat("Mets")); // NYMets .concat() method is the same as the +



//Methods
console.log("hello".toUpperCase()); // HELLO    makes string to Uppercase
console.log("HELLO".toLowerCase()); // hello    makes string to Lowercase
console.log("hello".slice()); // hello   no argument for slice gives a copy of a string
console.log("hello".slice(2)); // llo    .slice(2) deletes till  2 and then keeps the rest
console.log("hello".slice(1,3)); // el    slice (1 is inclusive, 3 is exclusive)

