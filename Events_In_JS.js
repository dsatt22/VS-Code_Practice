// Events in JS

//  An even is an occurence
//  JS mostly interacts with the HTML when events are encountered
//      It can either occur by action of the user or by the action of the browser itself
//      Events done by the user could entail
//          -Clicking a button
//          -Hovering over something
//          -Resizing the browser window
//          -Pressing a key on the keyboard
//  Each event has an event handler which is a block of code that runs when an event occurs

//  The different types of events could include
//      onClick()
//          This event is fired when any HTML element is clicked
//      onload()
//          This event is fired when the browser finishes loading the web page
//      onkeydown()
//          This event occurs whe any key on the keyboard is pressed
//      onmouseout()
//          This event occurs when the pointer is moved out of any element
//      onmouseover()
//          This event occurs when the pointer moves over any element
//  The above list are the most commonly used events

//  Attaching the different types of events to HTML
//    Events can be written in two ways
//      1) Writing the events inline
//          Example:
//              <button onclick="alert('Oh! Clicked.')">Click me</button>
//          We defined the action that need to be performed with the onclick attribute of button itself
//      2) To call a function, which is defined elsewhere in the program
//          This approach is used when the functions are complex and it also structures the HTML code and the JS Code seperately
//          Example:
//              <button onclick="clicked()">Click me</button>
//            In JS:
//              function clicked(){
//                  alert('Oh! Clicked.');    
//              }

//    There is one more way to attach events to the HTML elements instead of directly inside of it
//          This is done using the 'addEventListener()' function
//              Using this function we can attach the events to the HTML elements
//          Example:
//              <button>Click Me</button>
//            In JS:
//              this will access the button
//                  var myBtn = document.querySelector("button");
//              this will add an event using the proper method
//                  myBtn.addEventListener('click',function()){
//                      alert("Oh! Clicked.");
//                  });
//          The addEventListener() takes 2 parameters
//              1) Type of event
//              2) Function
//                  This tells what to do when the event is encountered

//    To remove an attached event you can use the following function
//          removeEventListener()
//              this function also takes 2 arguments
//                  1) The event to remove
//                  2) The function to perform when the event is removed
//              The function is optional in this case