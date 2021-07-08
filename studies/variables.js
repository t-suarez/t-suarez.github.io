/*
 * VARIABLES:
 *
 * In JavaScript, a loosely-type (dynamic) language, variables are not 
 * associated with any particular data type. A variable can be assigned any 
 * value.
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**************************************************
***************************************************
***************************************************
**************************************************/
//TAYLOR SUAREZ CODE//

//1. Declaration and assignment
var declared = "and Assigned";
//in the above example we have DECLARED variable "declared" and ASSIGNED a string value of "and Assigned" on a single line

//2. var, let, const
/* In Javascript we can declare a variable in 3 different ways: var, let, and const
    var: we when we create a var keyword variable, we create a variable that is:
        1.reassignable
        2.hoisted
        3.scope to functions
        4.not scoped to if or loop blocks
    let: when we create a let keyword variable, we create a variable that is:
        1.reassignable
        2.not hoisted
        3.not scope to functions
        4.scoped to if or loop blocks    
    const: when we create a const keyword variable, we create a variable that is:
        1.not reassignable
        2.hoisted
        3.scope to functions
        4.scoped to if or loop blocks
*/
//Reassignability
//A variable that is reassignable is one that can have its value changed after its initial assignment.
//A "var" variable can be reassigned after the initial assignment
var reassign = "x";
reassign = "y"; //this is a valid statement

//A "let" variable can also be reassigned
let reassign2 = "z";
reassign2 = "a"; //this is a valid statement

//Unlike var and let, "const" cannot be reassigned after its inital declaration, and attemtping to do so
//will result in an error
const forever = "forever";
//a line of code following the previous line saying something like "forever = 'x'; " would throw an error

//Scope
//Another difference between the variable keywords is the scope that the variable occupies
//The scope is the area of code in which a variable exists and can be referenced after declaration.
/*  All of the 3 variable keywords are scoped to functions, meaning that 
    when they are declared in a function, they exist only within that function
    and do not persist outside of it
    
    "const" and "let" keywords are scoped also to if and loop blocks, meaning that they can be 
    declared within an if or loop block and only exist within those blocks and do not persist
    outside of the loop blocks. "var" variables declared within if and loop blocks DO persist
    outside of the loop blocks.
*/

//Hoisting
//At runtime, the Javascript compiler will pull all "var" keyword variable and function declarations
//to the top of the program. No values are assigned at this point, they are only declared. If you try to
//reference a "var" after it has been declared but before value has been assigned you will get the value "undefined",
//this is in opposition to what would happen if you referenced a variable before it was declared, which would result
//in a ReferenceError.

/*  "let" and "const", on the other hand, are NOT hoisted by the compiler, and as such will throw ReferenceErrors
    if they are referenced before they are declared with the code. 
    

        console.log(hoist1); <-----prints "undefined"
        var hoist1 = "x";
        
        console.log(hoist2); <-----ReferenceError
        let hoist2 = "y";
        
        consolt.log(hoist3); <-----ReferenceError
        const hoist3 = "z";
*/

