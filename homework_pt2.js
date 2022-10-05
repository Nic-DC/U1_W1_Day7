// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;
let gender = isMale ? "male" : "female";
console.log({ gender });

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let num1 = 8;
let num2 = 308;
let subtraction = Math.abs(num1 - num2);
console.log({ subtraction });
let addition = num1 + num2;
console.log({ addition });
if (num1 === 8 || num2 === 8 || subtraction === 8 || addition === 8) {
  console.log("something checks. I wouldn't know what though....");
} else {
  console.log("NOTHING checks!");
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/
let string1 = "Week 2";
let string2 = "Day 7";
let concatString = string1 + ", " + string2;
console.log({ concatString });

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
let n1 = 23;
let n2 = -3446;
let n3 = 92329029952;
let sortArray = [n1, n2, n3];
sortArray.sort((a, b) => a - b);
console.log({ sortArray });

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
let int1 = 25235;
let int2 = 98450203432;
let average = (int1 + int2) / 2;
console.log({ average });

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/
let str1 = "baosdigh[asphgj e    ";
console.log("str1 length: ", str1.length);
let str2 = "askhdgashdg'asjdga";
console.log("str2 length: ", str2.length);
if (str1.length < str2.length) {
  console.log("str1 is shorter than str2");
} else if (str1.length === str2.length) {
  console.log("str1 is the same length as str2");
} else {
  console.log("str1 is longer than str2");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/
let value = "32";
let isInteger = Number.isInteger(value);
let result = isInteger ? "value is an integer" : "value is NOT an integer";
console.log({ result });

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
let number = 400;
let percentage = 0.2;
let percentageResult = number * percentage;
console.log({ percentageResult });

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
let checkNr = 329;
let isEvenOrOdd =
  checkNr % 2 === 0 ? "the number is even" : "the number is odd";
console.log({ isEvenOrOdd });
