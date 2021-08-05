// How to make changes to HTML using JS
//  First you have to make changes to the DOM
//  The changes made to the DOM are reflected on the webpage

// Accessing HTML elemnts by CSS Selectors
//  CSS selectors are used to select the elements you want to style
//  There are 2 methods that can be used to access HTML elements
//      1) querySelector()
//          -This method returns only the first element that matches with the specified selector
//      2) querySelectorAll()  
//          -This method will return all the matching elements
//      Both method take class name, id and element name as arguments
//      Examples:
document.querySelector(".className");
//              used to access using class
document.querySelector("#idName");
//              used to access using id
document.querySelector("tagName");
//              used to access using tag name
//      You can use 'querySelectorAll() the same as the above example