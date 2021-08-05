// Cookies

//   -Cookies in JS enables us to store data in the user's browser
//   -It is a piece of data that is stored in the user's browser
//   -They are used to store session variables
//   -JS can read, create, modify, and delete cookies

//   -A cookie can be created using the cookie property of our document object
//   -To create a cookie, use the following syntax:
//      document.cookie = "key=value;";
//          -key is the name of the cookie
//          -value is the value of the cookie
//   -You cannot create multiple cookies at once
//   -You will have to write out each individually, like so:
//      document.cookie = "key1=value1;";
//      document.cookie = "key2=value2;";
//   -Cookies come with an expiry date
//      -You can, however, specify the expiry time manually
//          -To do this, you need to add an extra field (expired) while creating cookies
//              document.cookies = "key:value; expired:date";
//   -By default, though, cookies are deleted once the browser is closed

//   How to read cookies?
//     -Writing document.cookies returns the cookies which are already present
//          var myCook = document.cookies
//     -The above variable will store a string containing all the info about the cookies, which will be in the same key-value format

//   We can change the value of the cookie in the same way as we created it
//      Example:
//          document.cookie = "username=John Doe; expires=Thu, 24 Sep 2021 12:00:00 UTC; path=/";
//      -The old cookie is replaced with the new one

//   We can also delete the existing cookies
//      -To do this, you just need to simply write a past date in the expires field
//      Example:
//          document.cookie = "key=expires=Past_date;";
//              -key is the name of the cookie to be deleted
//              -value does not need to be specified when deleting a cookie