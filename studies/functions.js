/**
 * FUNCTIONS
 * Functions in javascript are encapsulated blocks of code that can be invoked
 * at any time, any amount of times. Functions can perform actions or they can
 * be used to result in a value. Functions are declared using the "function"
 * keyword, and are given 0 to X parameters to process or use.
 * 
 * Function code is wrapped in curly braces {} and execute in regular Javascript
 * control flow. A function will cease running once it has run out of code or
 * until it hits a return statement.
 */
 
 function hi(name){
     console.log("hi " + name);
 }
 
 /**
  * The above function hi() takes a single parameter (ostensibly a string value)
  * and logs to the console "hi " plus the given parameter. If we call this
  * function with a string then we can have it print the passed argument.
  */
  
  var me = "Taylor";
  hi(me); // -> "hi Taylor"
  
/**
 * In Javascript, functions are first class objects. "First class" means that 
 * the function can be treated like any variable. It can be assigned a
 * reference, used as a parameter in another function, get returned, renamed,
 * stored in a property as a method, etc.
 */
 
 const add = function(num1, num2){
     return num1 + num2;
 }
 
 function callAdd(func, num1, num2){
     return func(num1, num2);
 }
 
 console.log(callAdd(add, 2, 3)); // -> 5
 
/**
 * Functions are important building blocks in Javascript code. They are 
 * extremely important and will see day-to-day use by working programmers.
 */