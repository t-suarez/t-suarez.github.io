/**
 * DATA TYPES: 
 * 
 * In Javascript, there are nine defined standard data types:
 * 
 *THE PRIMITIVE DATA TYPES:
 * 
 * undefined
 * Boolean
 * Number
 * String
 * BigInt
 * Symbol
 * 
 * THE STRUCTURAL TYPES:
 * 
 * Object
 * Function (has its own page in Studies)
 * 
 * STRUCTURAL ROOT PRIMITIVE:
 * 
 * null
 */

/**
 * BOOLEAN
 * A Boolean represents one of two logical values: true and false
 */

var bool = true;
bool = !bool; //evaluates to false

/**
 * NULL
 * null is always null and never holds any other value. Null is a empty 
 * placeholder value which is similar to undefined in that it is falsy but 
 * different from undefined in that is it used purposely as an empty value.
 */
 
var purposelyNull = null;

/**
 * UNDEFINED
 * undefined is that consequence of a variable that has not been assigned a
 * value.
 */
 
var definitelyUndefined;
console.log(definitelyUndefined); // -> undefined

/**
 * NUMERIC TYPES (Number and BigInt)
 * "The Number type is a double-precision 64-bit binary format IEEE 754 value.
 * In addition to representing floating-point numbers, the number type has 
 * three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number")."
 * (MDN)
 * 
 * "The BigInt type is a numeric primitive in JavaScript that can represent 
 * integers with arbitrary precision. With BigInts, you can safely store and 
 * operate on large integers even beyond the safe integer limit for Numbers.
 *
 * A BigInt is created by appending n to the end of an integer or by calling 
 * the constructor." (MDN)
 * 
 * Numeric types can be used in conjunction with arithmetic operators:
 * +, -, *, /, **, %
 * 
 * Numbers and BigInts will not strictly equal each other but do have loose
 * equality.
 */

var num = 1;
var numBigInt = 1n;
console.log(num === numBigInt); // -> false
console.log(num == numBigInt); // -> true


/**
 * STRING
 * Javscript's String type is used to represent textual data. Strings are made 
 * up of 16-bit unsigned integer value elements, and each of those has a 
 * "position" in the String. Like arrays, a string is indexed starting from 0.
 * 
 * In Javascript, strings are immutable. Which means that a string is not 
 * modifiable. If you were to make changes to a string by processing it in some
 * way then the result would be a totally new string. The string type has built
 * in methods that we can use to process it in various ways.
 */
 
var str1 = "Hello";
var str2 = " World";
console.log(str1.concat(str2)); // -> "Hello World"

/**
 * SYMBOL
 * "A Symbol is a unique and immutable primitive value and may be used as the 
 * key of an Object property (see below). In some programming languages, 
 * Symbols are called 'atoms'." (MDN)
 */

/**
 * OBJECT
 * In Javascript, objects are values in memory that can be referenced by
 * indentifiers. Objects are also collections of key-value pairs called 
 * "properties". Objects are complex data types and are mutable. They can be
 * altered and can hold any data type inside of them, which makes them
 * powerful building blocks for complex data structures. The keys of an object
 * are either a String or Symbol value.
 * 
 * Objects have methods within them that we can use to access properties. 
 * Properties can be any type.
 */
 
 var obj = {} //object literal
 obj.prop1 = "abc";
 obj.prop2 = 123;
 obj.prop3 = [];
 
 console.log(obj); // -> { prop1: 'abc', prop2: 123, prop3: [] }
 
 //In order to access a value in an object we can use bracket or dot notation:
 console.log(obj.prop1); //dot notation
 console.log(obj["prop2"]); //brakcet notation
 
 /**
  * The use case for bracket notation would be if we had to use an expression
  * that would evaluate to the name of the object's property.
  */ 
 let objProp = "prop1";
 console.log(obj[objProp]); //prints "abc"
 
/**
 * ARRAYS
 * Arrays in javascript are actually objects with integer-keyed properties and
 * a length property. Arrays inherit from Array.prototype which provides arrays
 * with very useful methods to manipulate them. Exmaples of these useful
 * methods are push() and pop(), splice() and shift(), etc.
 * 
 * Arrays, like objects are collections and can be used to store any type 
 * within its indexes.
 */
 
 var arr = []; //array literal
 for(let i = 0; i < 5; i++){
     arr[i] = i;
 }
 console.log(arr); // -> [ 0, 1, 2, 3, 4 ]
 arr.push(5);
 console.log(arr); // -> [ 0, 1, 2, 3, 4, 5 ]
 
 /**
  * In order to access array values, we must use bracket notation or Array 
  * methods to manipulate and return values at particular array indexes.
  */
 console.log(arr[1]); //prints 1
 console.log(arr.pop()); //prints 0
 
