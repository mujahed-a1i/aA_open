/*let sentence = "Jump, jump for joy";
let newArray = sentence.split(' ');

console.log(newArray); */

/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("3e") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
// reverseSentence("Jump, jump for joy")
function reverseSentence(sentence) { 
    let newArray = sentence.split(' ') // ['Jump', 'jump', 'for', 'joy']
    let newArray2 = [];
    let i = newArray.length;

    for (let i = newArray.length; i  > newArray.indexOf([i - 1]) ;  i--) { 
       newArray2.push(newArray[i - 1]);
  
    }
    
    return newArray2.join(' ');



} 
console.log(reverseSentence("Jump, jump for joy"));

