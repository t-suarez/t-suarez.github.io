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
  *A function call is when a function is invoked and resolves to a value. 
  * A function call is done by stating the function name followed by parantheses
  * that wrap around any arguements (or nothing if there are no arguments).
  * 
  * A function named "test" that takes no arguments would be invoked like this:
  * test();
  * 
  * If test took 2 numbers as arguments, you would separate the arguments with
  * a comma like this:
  * test(1, 2);
  * 
  * console.log() is a function call that calls the "log" method of the console
  * object and prints the arguments to the console.
  */
  
  /**
   * Parameters vs arguments
   * Parameters of a function are declared during the function definition and 
   * they indicate what the arguments will be. Arguments are the values that
   * are passed through to the function when the function is invoked
   */ 
   function fun(parameter1, parameter2){
    return parameter1 + parameter2;
   }
   var argument1 = 1;
   var argument2 = 2;
   
   console.log(fun(argument1, argument2));
   
/**
 * FUNCTION EXPRESSIONS:
 * A function expression is like a function statement but it lacks a function
 * name and merely evaluates to a value, and can actually be given a name
 * by declaring a variable and assigning it to the function expression.
 */
 
 var expression = function(){
  console.log("expression() evaluates to function which prints this message");
 };
 
 expression();
 
 
/**
 * FUNCTION SCOPE:
 * Function's operate within their own scope. A function can read the variables
 * of any scope upstream on the scope chain from itself (like the global scope).
 * If a variable is not declared within a function it will go up in scope until
 * it finds a reference and will only throw undefined if that variable was never
 * declared.
 * 
 * While functions can read up in scope, they can't read down in scope. 
 * Variables inside a function cannot be read from outside the function.
 * 
 * function foo(){
 *   var test = 123;
 * }
 * console.log(test); //this will not work
 * 
 * We cannot read variable "test" outside of the function scope in which it is
 * decalred, but we can do the opposite:
 */ 
 
 var foo = 123;
 function bar(){
  console.log(foo);
 }
 bar(); //prints 123 to console
 
 /**
  * So you can see that we can access variable foo from within the function even
  * though it was not declared within the function scope.
  */
  
  
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
 
 
/**
 * HOISTING FOR FUNCTION EXPRESSIONS vs STATEMENTS
 * 
 * Function statements are hoisted and that function can be invoked before it is
 * actually declared, however we can prevent this from happening by using a
 * function expression instead. Since variables are hoisted but initially 
 * assigned "undefined" until that are declared, we can use a variable that 
 * resoves to a function expression so that the function will not be hoisted
 * and therefor won't be accessible until the variable is properly declared.
 */
 
 hoistedFunc(); //this will print "This is hoisted" to the console
 
 function hoistedFunc(){
  console.log("This is hoisted");
 }
 
 //notHoistedFunc(); //this will not work because the expression isn't hoisted
 
 var notHoistedFunc = function(){
  console.log("This is NOT hoisted");
 }
 
 
/**
 * END
 */