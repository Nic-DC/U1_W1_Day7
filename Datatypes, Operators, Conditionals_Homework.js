/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */
// As per mdn: "The set of types in the JavaScript language consists of primitive values and objects"
// The primitive values are:
//    1. Boolean type: logical entity that can only have 2 values [true AND false]
//    2. Null type: can only have the value of null, which is nothing
//    3. Undefined type: the type used when a variable [a container] has not yet been assigned a value
//    4. Number type: the type capable of storing numerical values; it is capable of storing floating point-numbers and integers to only a certain limit
//    5. BigInt type:  this type is capable of storing and operating on large integers, beyond the limit for Number type.
//    6. NaN ["Not a Number"]: it is used as a result of arithmetic operations that can not be expressed as numbers [eg. division between a string and a number]
//    7. String type: the type used to represent text
//    8. Symbol type [aka "atoms" in other programming languages]: is the type that can be used as the key of an Object property

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */
// a variable is a concept used in in programming languages to represent a container that is used  to save different values at different steps;
// Javascript is a loosely-typed languages, meaning that the same variable can hold different data types in different steps [although NOT recommended]

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */
let sum = 12 + 20;
console.log("the sum is: ", sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */
let subtraction = 12 - x;
console.log({ subtraction });

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = "john";
let name2 = "John";
let different = name1 === name2;
console.log({ different });

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
x = 7;
if (x > 6 && x < 8) {
  console.log("seven");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
let age = 13;
let isAdult = age < 18 ? "minor" : "adult";
console.log({ isAdult });
