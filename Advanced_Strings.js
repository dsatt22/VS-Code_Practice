// Operations with Strings

// Finding the length of string
//  -You will use the length property
//  -The property will look like this
//      stringName.length

// Example of finding string length

// create a new variable with string value "Hello World!"
var newStr = "Hello World!";

// create a new variable that will find the length of previously created variable 'newStr'
var strLength = newStr.length;

// now print new variable to find the length of the string
console.log(strLength)

// the output of the above command will result in the numeric value 12


// Joining two strings
//  -There are 2 methods to combine 2 strings

// First method is concat()
// The 'concat()' method will be used to combine two strings together
//    Example: string1.concat(string2);

// Example of combining combining 2 strings

// Create 2 variable and store a string value in each
var string1 = "Hello";
var string2 = "World!";

// Create a third variable that will store the 2 previous variables in and use the concat() command
var string3 = string1.concat(string2);

// Now use the console.log command to print new variable 'string3'
console.log(string3)

// Method 2 is using the '+' operator

// Example

// I will use the previous variables for this example
// Recreate string 3 and instead of using the concat() method, insert the '+' operator inbetween string1 and string2
var string3 = string1 + string2;

// Use the console.log command again to print the variable 'string3'
console.log(string3);

// Both the 'concat()' method and '+' operator will combine the 2 strings together and print out the same result


// Finding a substring
//  -You will use the 'substr()' method to extract a substring from a string
//  -It takes to parameters
//      stringName.substr(starting index of substring, length of substring);

// Example
// create a variable and store a string value
var myString = "I am in love with Strings.";

// This will extract a string from the variable from position 5 upto length 7
console.log(myString.substr(5, 7));

// ** Don't forget to add in console.log command to print your results to the terminal **


// Converting a string to uppercase and lowercase
// The commands for this is as follows:
//     Uppercase: toUpperCase();
//     Lowercase: toLowerCase();

// Example
// create a variable and store a string value
var newString = "This is just an example";

// convert to uppercase
console.log(newString.toUpperCase());

// converto to lowercase
console.log(newString.toLowerCase())