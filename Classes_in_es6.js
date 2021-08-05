// Classes is es6

//   What is a class?
//      -the newly introduced class syntax is just a syntax upgrade from the existing object based JS
//      -classes are more or less a special type of functions
//      -they are variables and methods bunched together
//          -methods are nothing but the functions declared inside a class

//      -members in the class can be assessed by creating the instance of the class
//          -they are nothing but the objects
//          -when an object is created from a class, it is known as an instance of the class

//   Writing a class
//      -To declare a class, the keyword 'class' is used
//      -They can be written in 2 ways:
//          1) class className{
//                 class body
//             };
//              -className is the name of the class
//          2) 
//             -Declare a class without name and store in a variable
//                  var varName = class (className is optional here){
//                      class body
//                  };

//   Constructor method is a special method in a class
//      -used for creating and initializing the objects created within its class
//      -only 1 constructor method in a class
//      Example: write a class Student which takes name and roll number of the student and returns it as well
//        -Define a class
class Student {
    //              -define a constructor for the class
    constructor(name, roll_number) {
            //                  -initialize the variables
            this.name = name;
            this.roll_number = roll_number;
        }
        //              -define a method to return name
    showName() {
            //                  -here is a method to return name
            return name;
        }
        //              -define another method of the class
    showRoll() {
        //                  -here is a method to return roll_number
        return this.roll_number;
    }
}

//   Accessing members of the class
//      -they can be accessed by creating the instance of the class
//      -objects are used to access and assign values to the variables
//      -it is done using the 'new' keyword
let objName = new ClassName();
//      -the new keyword instantiates the object for use
//      -ClassName() is the name of the constructor of the class
//      -Lets write an instance of the class Student
//   -Create an instance of defined class with parameters
let Student1 = new
Student("John", 30);
//   -Now we can call the function 'showName() and showRoll()
//      -Call the first method using instance variable
Student1.showName();
//      -Call the second method using instance variable
Student1.showRoll();