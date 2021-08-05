// Getting started with es6

//  ECMAScript
//    -ECMA is a standard organization for information and communication systems
//    -The standarized implementation of JavaScript came to be known as ECMAScript
//    -In simple terms, JavaScript is governed by ECMA standards

//  The standardization continued in cycles and the 6th major release of ECMAScript, also known as, es6, came out in 2015

//  There are many new features in es6:
//      -in es6 we can declare variables using 'let' and 'const'
//          -before es6, variables were declared using 'var'
//              -variables declared using var are 'function scoped'
//              -let is similar to var, except it is 'blocked scoped'
//      -a function scope is created for every function
//      -a block scope is created whe we write conditional statements or loops
//      -Arrow function
//          -a shorthand and an efficient was to write functions
//              (parameters) => {
//                  this is the function body
//              };
//          -you can ommit the curly braces if the function body is confined to 1 statement
//          -you can assign the function to a variable
//              let varName = (parameters) => {function body};
//      -Template strings
//          -to write template strings we use backticks (` `) instead of single or double quotes
//              let str = `Hey! String me.`; 
//            -Declare a variable and assign an integer value-
//              let a = 5;
//            -Declare another variable and assign a template string value-
//              let str1 = `I am ${a} years old.`;
//                  -this will return 'I am 5 years old 

//  let vs var
//    - a variable declared inside a function using var is not available outside of that function
//    - a variable declared inside of a block scope using var, however, can be accessed outside of the block
//      Example:
//          for(var count=0; count<5; count++){//some action }
//          console.log(count);
//     -We don't really need block scope variable to exist outside the block
//          -here is where 'let' comes in the picture
//          Example:
//              for(let count=0; count<5; count++){//some action }
//              console.log(count);
//              output: reference error

//  const is used to declare constant variables
//     -the variable declared by consts will remain the same throuout the program

//  Examples of let and const
//      let variable_name = value;
//      const variable_name = value;

//  It is advised to avoid the use of 'var' and use block scoped 'let' and 'const'