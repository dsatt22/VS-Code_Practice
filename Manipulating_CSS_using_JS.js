// Manipulating CSS using JS

//  Just like with HTML, JS can manipulate everything in CSS
//      -fonts
//      -font sizes
//      -colors
//      -add images
//      -and more

//  You can add or change any element in CSS
//      To do so, we will use the STYLE property of the element
//          The syntax is as follows:
//              el.style.CSSProperty = value;
//                  -el is the element
//                  -style is the element of the property
//                  -CSSProperty is the property to be manipulated
//                  -value is the value of that property
//      You need to access the element first to change its property
//          This will print the paragraph text
//              <p> Here I come, again. </p>
//      Here is how you will change the font-size of the text in the p tag
//          This will access the paragraph element
//              var el = document.querySelector("p");
//          This will make paragraph font-size 25px
//              el.style.fontSize = "25px";
//      To change the color of the text, it will look like this
//          el.style.color = "red";

//      Other example of CSS properties that can be manipulated are
//          -Margin
//          -Padding
//          -Border
//          -Alignment