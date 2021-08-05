// BOM (Browser Object Model)

//  What is a BOM?
//    -It enables JS to interact with the browser
//    -It consists of an object known as WINDOW
//      -The WINDOW OBJECT represents the browser window, every object is a child of the window object

//                                  Window
//                           _________|_________
//                          |         |         |
//                       Document   Object    Screen

//      -Even the document object is a child of the window object
//      -The screen object contains the information about the user's screen
//          -To access this we use 'window.screen' or 'screen'
//              -Using this we can get the following:
//                  -height (screen.height)
//                  -width (screen.width)
//                  -color depth
//                  -pixel depth and many more
//      -The history object contains the browser's history
//          -We can navigate back and forth using the history object
//          -It provides 2 methods
//              1) back()
//              2) forth()
//          -Writing history.back() is like hitting the back button of the browser
//          -Same goes for history.forward(), it will move forward to the next screen
//      -The location object gives us access to the URL
//          -With the location object, we can get details about the URL, hostname & protocol
//          -Some of the properties it provides are:
//              -window.location.href
//                  -returns the URL of the current page
//              -window.location.hostname
//                  -returns the domain name of the website
//              -window.location.protocol
//                  -returen the protocol of the website
//      -The navigator object gives us the details about visitor's browser
//          -Used to detect the browser's information such as appName, appVersion, etc. 
//              -appName
//                  -returns the name
//              -appVersion
//                  -returns the version
//              -cookieEnabled
//                  -returns true if cookie is enables else returns false
//              -online
//                  -returns true if browser is online else returns false
//          -Can be accesses with window.navigator or just navigator

//      -The window object stores the information about the window size of the user's browser
//          -We can find out the hight and width of the window
//          -To do that we use the innerHeight and innerWidth properties of the window object
//              window.innerHeight will return the innerHeight of the browser window
//              window.innerWidth will return the innerWidth of the browser window
//                  -the returned values will be in pixels
//                  -only the browser's view part is considered
//                      -the toolbar and scroll bar are excluded