// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
define adam as object without properties

2. Give adam a name property with the value "Adam".

adam.name is "Adam"

3. Add a spouse property to terah and assign it the value of adam.

terah.spouse is adam

4. Change the value of the terah weight property to 125.

terah.weight is 125

5. Remove the eyeColor property from terah.

delete terah.eyeColor

6. Add a spouse property to adam and assign it the value of terah.

adam.spouse is terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

   terah.children is empty object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

terah.children['carson'] is empty object
terah.children.carson.name is "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

as above, terah.children.carter is empty object
terah.children.carter.name is "Carter"
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

    terah.children.colton is empty object
    terah.children.colton.name  is "Colton"

11. Add a children property to adam and assign it the value of terah children.

adam.children is terah.children
*/

// __________________________________________
// Write your code below.
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {};
terah.children.carson.name = "Carson";
terah.children.carter = {};
terah.children.carter.name = "Carter";
terah.children.colton = {};
terah.children.colton.name = "Colton";
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// 
//I'm glad I did the gps1.2 before tackling this challenge. In general this challenge
//went prety smoothly, although I had trouble getting the driver code to run in node,
// but it worked fine in the Firebug console. The one thing I had to look up was how
// to remove a property, and I found a good article on StackOverflow that explained
// how to use delete. I'm still finding it a little complicated to deal with nested
// objects, but once I was able to diagram out the different levels it started to 
// make sense to me.  The last few (8-10) seemed rather repetitive, and I wonder if
// there is a way to make it less so. I also found writing the pseudocode sort of 
// awkward for this challenge as it looks an awful lot like my final code. I feel like
// I'm missing the point of the pseudocode step in this example, although the idea
// makes a lot of sense for more complicated code.


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
