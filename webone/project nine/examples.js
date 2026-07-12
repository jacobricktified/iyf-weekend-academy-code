/*EXAMPLE 1

first line defines a function named square that accepts one parameter called number.
return multiplies the number by itself and returns the result to wherever the function was called.
(square(5)) it calculates 5 * 5, which equals 25. console.log() then prints 25 to the console.
 */
function square(number) {
  return number * number;
}
 console.log(square(5));
 /*EXAMPLE 2
When you pass an object as a parameter, 
if the function changes the object's properties, that change is visible outside 
the function
The second console.log prints toyota because the function call modified the original code

 */

 function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

/*EXAMPLE 2
When you pass an array as a parameter, if the function changes 
any of the array's values, that change is visible outside the function,
The second console.log prints 30 because the function call modified the original code
 */

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

/*EXAMPLE 3
Function declarations and expressions can be nested, which forms a scope chain
the first function is  the main function that takes two parameters 
the second function is a nested function that takes the square of a number
the return calls two functions for a and b then adds them up to return the result
 */

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(addSquares(1, 2));

/*EXAMPLE 4
Function expressions are convenient when passing a function as an argument to another function. 
The following example defines a map function that should receive a
 function as first argument and an array as second argument. 
 Then, it is called with a function defined by a function expression
 the function passed to map() cubes each number , so the array becomes 0, 1, 8, 125, 1000
 */
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]

/*EXAMPLE 5
a function can be defined based on a condition. For example, the following 
function definition defines myFunc only if num equals 0
 */
num = 0
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}

/* EXAMPLE 6
Calling the function actually performs the specified actions with the indicated parameters

*/
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


/*EXAMPLE 7
Function hoisting
This code runs without any error, despite the square() function being called before it's declared.
 This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope
*/
console.log(square(5)); // 25

function square(n) {
  return n * n;
}

/*EXAMPLE 8
Recursion -A function can refer to and call itself
*/

function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  console.log(x);
  loop(x + 1); // the recursive call
}
loop(0);

/*EXAMPLE 9
However, some algorithms cannot be simple iterative loops. For example, getting all
 the nodes of a tree structure (such as the DOM) is easier via recursion*/
 function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (const child of node.childNodes) {
    walkTree(child);
  }
}