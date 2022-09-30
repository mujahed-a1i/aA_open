// for loop
// for (<initial expression>;<condition>;<loopEnd expression>)
for (let i = 0; i < 10; i++) {
  // the code inside this block will run 10 time
  console.log(i);
}



// convrting for loop into while 
// these two do the exact same thing!
function forLoopDoubler (array) {
  // it is convention to shorten index to just i in most cases
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
};

function whileLoopDoubler (array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] * 2;
    i++;
  }
  return array;
};

let x = [5, 10, 20];
console.log(forLoopDoubler(x));
console.log(forLoopDoubler([1, 2, 3])); // => [2,4,6]
console.log(whileLoopDoubler([1, 2, 3])); //=> [2,4,6]

function print(word){
  for (let i = 0; i < 5; i++){
    console.log(word);
  }
}

print('Hello world!');

function print1(word){
  let i = 0;
  while (i < 5){
    console.log(word);
    i++;
  }
}

print1('Hi');



function logBetween(lowNum, highNum){
  let i = lowNum;
  while (i <= highNum){
      console.log(i);
      i++;
  }
}


logBetween(-1, 2); 
logBetween(14, 6); 
logBetween(4, 6); 