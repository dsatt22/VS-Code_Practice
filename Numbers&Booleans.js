// Numbers and Booleans

// numbers are declared using the 'var' keyword
//  Examples:
//      var height = 5.62;
//      var age = 21;

// ** JS does not have different data types for integers and floating points **


// Operations that can be carried out on numbers

//  Rounding off numbers
//    to do this the 'toFixed()' method is used
//          variable_name.toFixed(number_of_decimal_places);

// Example:
var myNum = 3.142;
console.log(myNum.toFixed(2));

// The output will be 3.14 since we specified to only go 2 decimal places


// Converting a number to a string
//  to do this the 'toString()' method is used

// Example:
// create a variable and store an integer in it
var myNum = 456;

// convert number to string
console.log(myNum.toString());


// Writing numbers up to a precision
//  to do this the 'toPrecision()' method is used
//  this method also returns a rounded number off just like 'toFixed()'
//  difference is, this takes the total numver of digits as the argument

// Example:
// create a variable and store a decimal value
var myNumber = 34.563;

// use toPrecision() command to round off the variable value to 3 digits
console.log(myNumber.toPrecision(3));


// Boolean
//  a boolean is either True or False, nothing else

// Here is an example of a boolean 
// create a variable and store the value 'true' in it
var myBool = true;

// create another variable and stor the value 'false' in it
var newBool = false;

// Booleans are used to make decisions