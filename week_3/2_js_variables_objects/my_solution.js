
// I paired  on this challenge.

//1. Kris Shanks
//2. Kendall Carey




// Pseudocode
// var secretNumber is 12
// var password is "password"
// var allowedIn is false
// members is an array with 'John', 'Kris', and 'Kendall'
//push 'Mary' into the array


// __________________________________________
// Write your code below.
var secretNumber = 12;
var password = "password";
var allowedIn = false;
members = ['John'];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber=7;
var password="just open the door";
members = ['John', 'Kris', 'Kendall'];
members.push('Mary');
//tried member=new.Array but received an error message. It worked without it.
//tried the members array with and without var, both worked fine.
//Previously, just edited code to be correct and then rewrote everything out 
//and pushed 'Mary' into the array rather than just edit previous code.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// We both found this exercise rather easy. We didn't run into any problems.
// We both enjoyed the challenge and feel confident about the learning objectives.
// The process of test driven development was more fun with a partner.
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}



assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
