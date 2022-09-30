// The difference between Parameters and Arguments
// Parameters are comma separated variables specified as part of a function's declaration.
// Arguments are values passed to the function when it is invoked.

//function definition
function thisIsMyName (parameter1, parameter2) {
  // code to be run when the function is invoked(called).
}
//function invocation
thisIsMyName("argument1", "argument2");

function add(firstParameter, secondParameter) {
    console.log(firstParameter + secondParameter);
  }

add(1, 2); // 1 & 2 are arguements.

// Extra arguments
add(1, 2, 17, 14);  // 3
// this will ignore the 17 & 14
// the first two arguments passed in will be assigned to the first two parameters

// Not enough arguments
add(5); // NaN

function name(firstName, lastName){
  return firstName + lastName;
}
console.log("Mujahed"); // Mujahed      Strings not enough arguments will complete until the given arguments. 

// What you learned
// Parameters are variables defined as a part of a function's declaration.
// Arguments are values passed to the function when it is invoked.
// JavaScript functions can accept a different number of arguments than the number of parameters listed during function declaration.