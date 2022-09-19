/**
 * Javascript coding task 1
 * ---description---
 * Write a function that will take a student's grade and print out if they passed or failed the exam.
 * - if the student's grade is 70 or higher, print "passed"
 * - if the student's grade is below 70, print "failed"
 * - if the student's grade is 100, print "perfect score"
 * - if the student's grade is below 0, print "invalid grade"
 * - if the student's grade is not a number, print "invalid grade"
 * ---example---
 * studentGrade(100) // "perfect score"
 * studentGrade(70) // "passed"
 */

// ---Solution---
function studentGrade(grade){
  if(grade === 100){
    console.log("perfect score");
  }else if(grade >= 70 && grade < 100){
    console.log("passed");
  }else if(grade < 70 && grade >= 0){
    console.log("faild");
  }else{
    console.log("invalid grade");
  }
}

/**
  [review]
  ・function
      →It is a way to combine various processes into one and give it a name. It is often used to streamline monotonous processes by combining them into a single process that can be used from anywhere. By combining various processes into one, there is no need to write the same process over and over again, which reduces mistakes, and it is also possible to use the same process in different programs.
  ・"=="
      →Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.
  ・"==="
      →Triple equalsis (===) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type
**/



/**
* Javascript coding task 2
* ---description---
* Write a function that will take a number and print out if it is even or odd.
* - if the number is even, print "even"
* - if the number is odd, print "odd"
* - if the number is not a number, print "invalid number"
* - if the number is less than 0, print "invalid number"
* - if the number is 0, print "even"
*/

// ---Solution---
function evenOrOdd(num) {
  if (num % 2 === 0) {
      console.log("even");
  } else if (num % 2 === 1) {
      console.log("odd");
  } else {
      console.log("invalid number");
  }
}



/**
* Javascript coding task 3
* ---description---
* Write a function that will take a number and print out if it is positive, negative, or zero.
* - if the number is positive, print "positive"
* - if the number is negative, print "negative"
* - if the number is 0, print "zero"
* - if the number is not a number, print "invalid number"
*/

// ---Solution---
function positiveOrNegative(num) {
  if (num > 0) {
      console.log("positive");
  } else if (num < 0) {
      console.log("negative");
  } else if (num === 0) {
      console.log("zero");
  } else {
      console.log("invalid number");
  }
}



/**
* Javascript coding task 4
* 
* ---description---
* Write a function that will take a person object and print out if they are a minor or an adult.
* - if the person is a minor, print "minor"
* - if the person is an adult, print "adult"
* - if the person's age is not a number, print "invalid person"
*/

// ---Solution---
function isMinor(person) {
  if (person.age >= 18) {
      console.log("adult");
  } else if (person.age < 18 && person.age >= 0) {
      console.log("minor");
  } else {
      console.log("invalid person");
  }
}

isMinor({ name: "John", age: 17 });
isMinor({ name: "John", age: 18 });
//



/**
* Javascript coding task 5
* 
* ---description---
* Write a function that will concatenate two strings together.
* - if the first string is not a string, print "invalid string"
* - if the second string is not a string, print "invalid string"
* - if both strings are not strings, print "invalid strings"
* - if both strings are strings, print the concatenated string
* ---example---
* concatStrings("hello", "world") // "helloworld"
* concatStrings("hello", 1) // "invalid string"
* concatStrings(1, 2) // "invalid strings"
* concatStrings("hello", "world") // "helloworld"
* concatStrings("hello", "world") // "helloworld"
* concatStrings("hello", "world") // "helloworld"
*/

// ---Solution---
function concatStrings(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
      console.log(str1 + str2);
  } else if (typeof str1 !== "string" && typeof str2 !== "string") {
      console.log("invalid strings");
  } else {
      console.log("invalid string");
  }
}

/**
  [review]
  ・string
      →strings are used to represent and work with a sequence of characters. A string can represent an object as well as the primitive data type. JavaScript automatically converts primitive strings to String objects so that it's possible to use String methods and access properties even for primitive strings.
  ・typeof
      →The typeof operator returns a string indicating the type of the operand's value.
  ・"!=="
      →The strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.
**/