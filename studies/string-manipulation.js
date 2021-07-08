/**
 * STRING MANIPULATION
 * In Javascript methods and properties are available to primitive values. This
 * is because Javascript treats these primitives as objects, and allows the
 * execution of methods and properties on them.
 * 
 * Strings has many methods that are used to manipulate and process them.
 */
 
/**
 * String length
 * Like arrays, strings have a length property.
 */

var str = "abc";
console.log(str.length); // -> 3

/**
 * slice(start, end)
 *extracts part of a string and returns the extracted section
 */

var newstring = str.slice(1,2); // "bc"

/**
 *substring(start, end)
 *substring is similar to slice, but slice is able to accept negative arguments
 *if the second parameter is omited then substring() will slice the rest of the
 *string
 */

var newerstring = str.substring(1); // "bc"

/**
 *substr(start, length)
 *substr() is similar to substring except that the 2nd parameter represents the
 *length of the string to extract.
 */

var substr = str.substr(0, 2); // "ab"

/**
 * replace()
 * This method replaces a specified value with another value. replace() is case
 * sensitive and can also work using regular expressions.
 */
 
var text = "Hi World";
var newtext = text.replace("Hi", "Hello"); // "Hello World"

/**
 * toUpperCase() and toLowerCase()
 * These methods take the contents of a string and convert them to upper or 
 * lower case. This is very useful in normalizing data to be read.
 */

var uppertext = newtext.toUpperCase(); // "HELLO WORLD"
var lowertext = newtext.toLowerCase(); // "hello world"

/**
 * concat()
 * concat() is used to concatenate two strings into a single string value
 */
console.log(uppertext.concat(lowertext)); // -> "HELLO WORLDhello world"

/**
 * trim()
 * This method removes white space from either side of a string, this is also
 * helpful in normalizing data.
 */

var whitespacetext = "      text     ";
var trimmedtext = whitespacetext.trim(); // "text"

/**
 * String Padding
 * As of ECMAScript 2017, we can use padStart() and padEnd() to add padding to
 * the beginning and end of strings, respectively.
 */
 
var text = "test";
text.padStart(4,"x"); // "xxxtest"
text.padEnd(2, "y"); // "xxxtestyy"

/**
 * charAt() and charCodeAt()
 * These methods return the element at whatever index is passed in the argument.
 * charAt() returns the string character while charCodeAt() returns the 
 * UTF-16 code (integer between 0 and 65535) of the char at the given index.
 */
 
var text = "Hi";
text.charAt(1); // "i"
text.charCodeAt(0); // 72 (UTF-16 code for "H")

//we can also access indexes directly using property access

text[0]; // "H"

/**
 * split()
 * With the split() method we can turn a string into an array. Split takes a 
 * single parameter that is use as a delimiter to separate the string by the
 * given value, or if no value is given then the string will be separated
 * by each character in the string.
 */

var text = "abc 123";
text.split(" "); // splits the string at the space " " character
//text is now an array
console.log(text); // -> [ "abc" , "123" ]



