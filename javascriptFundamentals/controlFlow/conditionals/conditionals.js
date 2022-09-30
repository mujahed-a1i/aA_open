// this is the test expression
if (3 === 3) {
    // this is the then expression
    // this code will run if the above statement is true
    console.log("this is a three!");
  }

function mathFun(){
  let x = 2 + 3;

  if (x === 3){
    console.log('We have a 3');
  } else if (x === 4){
    console.log('We have a 4!');    
  } else if (x === 5){
    console.log('We have a 5!');
  }

}; 

mathFun(); // We have a 5!

function mathFun1() {
  let x = 19;
  if (x === 3) {
    console.log("we have a 3.");
  } else if (x === 4) {
    console.log("we have a 4.");
  } else {
    console.log("I will return if everything above me is falsey!");
  }
};

mathFun1() // I will return if everything above me is falsey!

let x = 3;
if (x === 3) {
  console.log('This will run.');
} else {
  console.log('This will not run.')
}

// Additionally, you can nest conditional statements within each other
// but it will quickly become difficult to read and is discouraged:
// Nested Conditional Statements

function mathFun2(x){
  if (x === 'math'){
    if (x === 'math' && x[0] === 'm') {
      if (x[1] === 'a') {
      console.log('This is got confusing fast!');
      } else {
        console.log('that is not math!');

      }
    } else {
      console.log('that is for sure not math!');
    }
  } else {
    console.log("I will return if everything above me is false!")
  }
}

mathFun2('math'); // I will return if everything above me is false!
// *Stay away from nested conditionals as much as you can*
