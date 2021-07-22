/**
 * OPERATORS
 * In javascript, operators act on data. They are classed by what they do
 * and how many operands (things operated on) they use.
 * 
 * Types of operators:
 * Assignment
 * Comparison
 * Arithmetic
 * Logical
 * String
 * Conditional (ternary)
 * Unary
 */
 
 /**
  * Assignment operators take the value on the left side of the operator and 
  * sets it to the value on the right side of the operator.
  */
 
 var test = 123; //variable test is equal to 123
 var foo = test;// variable foo is now equal to test, which is 12
 console.log(foo)// -> 123;
 
 /**
  * The assignment operator can also be paired with arithmetic operators, which
  * is explained later on in the document
  */
 
 /**
  * Comparison operators compare 2 values and evaluate to a boolean value
  */
  
 console.log(1 < 2); //true
 console.log(1 > 2); //false
 console.log(1 <= 2);//true
 console.log(1 >= 2);//false
 
 //there are other comparison operators, such as the Strict comparison
 
 1 === 1; //true
 1 !== 1; //false
 
 //strict comparison checks for type, while loose comparison doesn't
 1 == "1"; //true
 1 === "1";//false
 
 /**
  * Unary operators act on a single operand. 
  */
  
  //examples of unary operators are the typeof operator:
  typeof 1; //"number"
  
  //and also the bang operator (negation)
  !true; //false
  
  
 /**
  * Logical operators evaluate to boolean expressions, these are commonly
  * used in conditional statements.
  */
  
 if(true && true){console.log(true);} // -> true
 if(true && false){console.log(false);} // -> false
 if(true || false){console.log(true);} // -> true
 if(false || false){console.log(false);} // -> false
 
 //the bang operator mentioned in the unary section is also a logical operator
 //a double bang (!!) can be used to coerce a value to become a boolean
 
 !1; //false
 !!1; //true
 
/**
 * Arithmetic operators in Javascript are basic math operators, like
 * +, -, *, /
 * along with some other coding specific assignment/arithmetic operations like
 * +=, -=, *=, /=
 * these operators above apply to the left operand the result of the left and 
 * the right operands change, based on the mathmatical operation before the "=".
 * So "x += 1" is a representation of "x = x + 1", etc.
 */
  var x = 0;
  console.log(2 + 1);  // -> 3
  console.log(2 - 1);  // -> 1
  console.log(2 * 1);  // -> 2
  console.log(2 / 1);  // -> 2
  console.log(x += 1); // -> 1
  console.log(x -= 1); // -> 0
  console.log(x *= 3); // -> 0
  console.log(x /= 1); // -> 0
  
 //negation is unary arithmetic function
 x = 3;
 console.log(-x); // -> -3
 
/**
 * String operators
 * Strings can also be operated on in Javascript. We can use comparison 
 * operations or even + operations (concatenation), as well as +=. 
 */

var a = "hi";
var b = " there";
console.log (a + b); // -> "hi there" this is an example of string concatenation

a += b;
console.log(a); // -> "hi there" we have added value of b to a 