//var msg = "Hello World!"
//console.log(msg)-->

// There are 2 types of scopes in JS
// #1: Local Scope
//    -Created inside of a function and can only be accessed using the function name
//    -If it is called, not using the function name, the ouput will produce an error
// #2: Global scope
//    -Can be called on from anywhere

// Create a variable and store the value 5
var globalVar = 5;

// Define a new function. This creates a function that you can call on later
function newFunction() {
    // Print the value of the global variable
    console.log(globalVar);
};

// Print global variable here
console.log(globalVar)

// Call the function to print using the function name
newFunction()

// Both of the instances will print the variable value 5