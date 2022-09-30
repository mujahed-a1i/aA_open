let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

console.log(alphabet);

//Calculating an Array Length
console.log([4, 7, 9].length) // 3
console.log([1, 2].length); //  2
console.log([].length); // 0
console.log(alphabet.length); // 26 

//Properly indexing an array
console.log(alphabet[25]); // z
console.log(alphabet[15]); // p
console.log(alphabet[23]) // x

let numbersAndLetters = ["b", "z", 17, "cat"];

console.log(numbersAndLetters[0]); // => "b"
console.log(numbersAndLetters[1]); // => "z"
console.log(numbersAndLetters[2]); // => 17
console.log(numbersAndLetters[3]); // cat
console.log(numbersAndLetters[4]); // undefined

let testArray = [4, 7, 9];
let finalIndex = testArray.length - 1; // (3 - 1) = 2
console.log(testArray[finalIndex]); // 9

console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // 1
console.log([1, 3, 5, "apple", "jet"].indexOf(5)); // 2
console.log([1, 3, 5, "apple", "jet"].indexOf("jet")); // 4

// concating an array
// if you use the + operator for arrays. The arrays now become a string. Use the concat method when concating an array.

console.log([1, 2, 3] + [4, 5, 6]); // 1,2,34,5,6 
console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]

/* Mutating an array methods
.push adds an element to the end
.pop removes an element to the end
.unshift adds an element to the beginning 
.shift removes from the front 
*/ 

let fruits = ['apple', 'orange', 'pear'];
fruits.push('watermelon'); // pushes watermelon to the end [ 'apple', 'orange', 'pear', 'watermelom' ]
console.log(fruits);
fruits.pop() // [ 'apple', 'orange', 'pear' ] 
console.log(fruits);
fruits.unshift('watermelon'); // [ 'watermelon', 'apple', 'orange', 'pear' ]
console.log(fruits);
fruits.shift(); // [ 'apple', 'orange', 'pear' ] 
console.log(fruits);


function tripler(array) {
    let i = array;
    i *= 3;
    return array;
  // your code here...
}

console.log(tripler([1,2,3]));

function oddRange(end) {
    let oddArray = [];
    for (i = 0; i <= end; i++){
      if (i % 2 === 1){
        oddArray.push(i);
      }
      
    }
    return oddArray;
    
  }

  console.log(oddRange(13));