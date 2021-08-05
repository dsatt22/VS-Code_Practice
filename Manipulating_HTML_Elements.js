// How to manipulate HTML using JS

//  JS provides innerHTML property which can be used to set the contents of HTML
//  First thing to do is to access the element
//  Then use innerHTML property using a dot operator
//  Example:
document.getElementById("lone-p").innerHTML = "Here is some text for you";
//  What if there is text already present in the element that you want to manipulate?
//    You can then use this example
document.getElementById("not-alone").innerHTML = "Replaced you!";
//    This will overwrite the current text with the new value

//  You can also add HTML tags by writing the tags within values of innerHTML property
//  Example:
//     This will declare a paragraph with id name
//      <p id= "bold-me"></p>
//     Now to write some bold text inside the above mentioned p like this
document.getElementById("bold-me").innerHTML = "<b>Just like this</b>";

//  How to create new elements using JS
//   To do this, we will use the createElement() method of the document object
//   Example:
document.createElement("p");

//  Appending Elements
//   Consider that we have to insert a 'p' element inside an existing div
//   Example:
//      This will create a div with ID name
<
div id = "meDiv" > < /div>
    //      This will create a new element and store it in a variable
var newEl = document.createElement("p");
//      This will create some text for new element and store it in a variable
var someText = document.createTextNode("Some Text Here!");
//      This will insert text into newly created p element and store it in a variable
var insertThis = newEl.appendChild(someText);
//      This will insert the p element inside the present div
document.getElementById("meDiv").appendChild(insertThis)

//  To remove and element, use the following method
//      removeChild()

//  Setting an attribue
//   Attributes provide additional info about the element
//   We will use the 'setAttribute()' method
//   The setAttribute() method takes in 2 parameters:
//      1) "attribute"
//      2) "value"
//     They are inserted in the parentheses and separated by a commma
//   Example:
//      Let's try to add href attribute to the below anchor tag
<
a > google < /a> 
    //      This will access the anchor element
var aEl = document.querySelector("a");
//      This will set a href attribute int eh <a> tag
aEl.setAttribute("href", "http://google.com")

//   If an attribute already exists, then its value will be replaced

//  To remove an attribute, you will use the following method
//      removeAttribute()
//   Example:
//      This will create a link
<
a href = "http://google.com" > Google < /a>
    //      To remove it, we will write
document.querySelector("a").removeAttribute("href");