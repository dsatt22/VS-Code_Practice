// The Date Object

// The date is a built-in JS object
// It understands and stores date based on a Unix time timestamp
//      -It is the number of milliseconds that have passed since Thursday, January 1st 1970


// Operations on date
// Define an instance of the date object
// Example:

// This will create an instance of the Date object
var myDate = new Date();
console.log(myDate)

// The above example will print out the current day, time, year, etc. 

// Common methods using the Date object
//      -getDate() will return the current day of the month. A number between 1 and 31
//      -getDay() will return the current day of the week. A number between 0 and 6
//      -getTime() will return the number of milliseconds elapsed since January 1st, 1970
//      -getFullYear() will return the current year
//      -getMonth() will return the current month of the year
//      -Other similar methods are:
//          -getMinutes()
//          -getHours()
//          -getSeconds()
// Now, how to use these methods
// The first thing you would do is to create a new variable. I am just going to use the above variable for these examples
// Then you will want to make sure you use 'console.log();' to print out your results
// Lastly you will you the variable you created along with the DOT notation with the mothods used to get your results
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());

// After you type in your variable and then a DOT, you will get a long list of all the commands you can use with it

// Just like the way we can obtain the data from the date object, we can also set out own
// The way to do that is exactly the way you do to retrieve the date object
//      -Instead of using the 'get' method, you will use the 'set' method
//      -Examples are as follows:
//          -setDate()
//          -setDay()
//          -setTime()
//          -setFullYear() etc.