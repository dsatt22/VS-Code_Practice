// Objects

// An object is a collection of related information
//  -They consists of properties and methods
//  -They can contain properties of all other types (numbers, strings, booleans, arrays,and even other objects)
//  -They can also consist of functions
//  -They store multiple values
//      -These values are written in the form of key-value pairs
//          Example - name: "John"
//      -In the above example, 'name' is the key and "John" is the value
//      -Such named values are called as properties of that object


// There are 3 ways to define an object:
//      1) Using an object literal
//      2) Using the new keyword
//      3) Using object constructor 


// Using an object literal
// Example:

// This will create an object with different items
var Student = {
    // First item
    name: "John",
    // Second item
    class: 12,
    // Third item
    roll_no: 45
};


// Using the new keyword
// Example:

// This will create an object with new keyword
var student = new Object();
// This will access the 1st item of object and assign string value
student.name = "John";
// This will access the 2nd item of object and assign integer value
student.class = 12;
// This will access the 3rd item of object and assign integer value
student.roll_no = 45;


// Using object constructor
// Example:

// This will define a constructor with same name as object
function Student(name, class, roll_no) {
    // This will assign the uerdefined values to items
    this.name = name;
    this.class = class;
    this.roll_no = roll_no;
}
// This will create an object and sending values in the argument to constructor
var Student1 = new
Student("John", 12, 45);


// How to access an object

// There are two waysto access properties of the object
//      1) Using a dot operator
//      2) Using bracket notation