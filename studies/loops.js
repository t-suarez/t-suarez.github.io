/**
 * LOOPS
 * In programming, loops are built-in constructs with execute a block of code
 * any amount of times as long as a particular condition is met. Loops breakout
 * of typical Javscript control flow and make the program execution jump 
 * between lines of code instead of running top-down. Loops, like functions, 
 * are an important building block for programming.
 */
 
 /**
  * The for loop
  * "for" loops are (usually) used to iterate through an array. A for loop is
  * declared with a variable declaration, a condition, and an incrementer.
  * The for loop will continue to execute until the variable declared, 
  * increments/decrements until it no longer passes the conditional statement
  * in the for loop's signature.
  */
  
for(var i = 0; i < 100; i++){
    console.log(i); //0 ... 100
}

 /**
  * The for-in loop
  * "for-in" loops are used to iterate specifically through object properties.
  * They are declared in such a manner: "for(var key in object){//code}",
  * where "key" is a variable and "object" is a reference to an object. 
  */
  
var obj = { a: "1", b: "2" };
for(var key in obj){
    console.log(obj[key]); // -> 1 \ 2
}

//Notice that in the console.log statement we access the property value using
//bracket notation, this is because if we had used dot notation (obj.key) then
//the compiler will look for a property literally named "key" within obj,
//which would throw a reference error, since key is undefined. To get around 
//this, we sue bracket notation, which allows us to referencially access the
//property within obj.

/**
 * The while loop
 * Using the while loop allows us to execute a code block any amount of times
 * as long as a given conditional is true. While loops will gladly become 
 * infinite loops if the programmer is not careful to change the conditional.
 */
 
var one = 1;
while(one < 2)
{
    console.log("infinite loop"); // -> prints "infinite loop" forever, unless:
    one++; // <----------- this statement stops the code from running again
}