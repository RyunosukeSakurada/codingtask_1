/**
 * 
 * Javascript coding task 1
 * 
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

  const studentGrade = 80;
  if(studentGrade == 100){
    console.log('perfect score');
  }else if(studentGrade >= 70){
    console.log('passed');
  }else if(studentGrade < 70){
    console.log('failed')
  }else if(studentGrade <= 0){
    console.log('invalid grade');
  }else{
    console.log('invalid grade');
  }


//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 2
 * 
 * ---description---
 * Write a function that will take a number and print out if it is even or odd.
 * - if the number is even, print "even"
 * - if the number is odd, print "odd"
 * - if the number is not a number, print "invalid number"
 * - if the number is less than 0, print "invalid number"
 * - if the number is 0, print "even"
 */

const number = 80;
const remainder = (number % 2)
if( remainder == 0){
  console.log('${number} is even');
}else{
  console.log('${number} is odd')
}



//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 3
 * 
 * ---description---
 * Write a function that will take a number and print out if it is positive, negative, or zero.
 * - if the number is positive, print "positive"
 * - if the number is negative, print "negative"
 * - if the number is 0, print "zero"
 * - if the number is not a number, print "invalid number"
 */

const typedNumber = 80;
if( typedNumber == 0){
  console.log('it is a Zero');
}else if( typeNumber >= 1){
  console.log('it is positive');
}else if( typedNumber < 0){
  console.log('it is negative');
}else{
  console.log('invalid number');
}



//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 4
 * 
 * ---description---
 * Write a function that will take a person object and print out if they are a minor or an adult.
 * - if the person is a minor, print "minor"
 * - if the person is an adult, print "adult"
 * - if the person is not a person, print "invalid person"
 * - if the person is not a number, print "invalid person"
 * ---example---
 * const person = {
 *   name: "John",
 *   age: 25
 * }
 * isMinor(person) // "adult"
 * 
 */

minor <= 19
const person = {
  name:'James',
  age:'20'
}
const adult = 19
if( age <= adult){
  console.log('${age} is a minor');
}else if( age > adult){
  console.log('${age} is a adult');
}else{
  console.log('invalid person');
}





//-----------------------------------------------------------------------------------------------//

/**
 * 
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
*/



// i coundn't do this