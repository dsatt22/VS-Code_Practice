// Document Object Model

// What is a DOM?
//  It is the soul of web applications
//  It is a tree structure of objects created by the browser
//      This tree consists of:
//          -Elements
//          -Attributes
//          -Values
//          -Content
//          -Basically everything that we have written in HTML
//  HTML DOM outlines a standard using which we can add, delete, get or change the elements of HTML
//  It enables us to manipulate the content or the HTML using JS

// Example using a basic HTML webpage w/the following markup
//<html>
//    <head>
//    </head>  
//    <body>
//        <p>
//        </p>  
//    </body>  
//</html>

// DOM is created when such a file is opened in the web browser
// The tree structure looks like this:

//         Document
//            |
//           HTML
//          /    \
//        head  body
//                |
//                p

//   The 'Document' is the root node
//   HTML is the child of the Document node
//   Head and Body is the child of HTML
//   Paragraph (p), is the child element of Body

// How to access the objects of the DOM

//  To access any of the nodes (HTML, head, body, p), we need to access the root node first (Document), always
//  There are 3 ways we can access the nodes:
//      1) Tag name - The name of the tag
//      2) Class - The classes attached to the nodes/elements
//      3) ID - The id assigned to the nodes/elements
//  The methods which are used to access the elements by their identifier are:
//      1) getElementsByTagName()
//      2) getElementsByClassName()
//      3) getElementsById()