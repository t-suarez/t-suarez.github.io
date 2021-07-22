/**
 * CONTROL FLOW:
 * In Javascript, control flow is the order in which the computer executes
 * statements in a script. (MDN)
 * 
 * Code is processed from the first line to the last line, unless structures
 * (such as conditionals, loops) are encountered that change the flow. This
 * happens very frequently.
 * 
 * A conditional statement is a statement that executes based off of a 
 * particular "condition" expression that resolves to a boolean value.
 * 
 */
 
 //Conditional statements are if, for, and while loops
 //For loop:
 for(let i = 0; i < 5; i++){
     console.log(i)
 } //prints "0, 1, 2, 3, 4" to console.
 
 //while loop:
 while(2 < 1){
     console.log("This will never execute");
 }
 
 //If-else statements
 if(true){
     console.log("This will print");
 }
 else{
     console.log("This will NOT print")
 }
 
 /**
  * IF ELSE CHAINING:
  * If statements can be chained to form a continuous conditional chain that
  * builds on itself. An else statement will only execute if the if statement
  * conditional expression evaluates to false. An else does not take in a 
  * separate conditional statement unless it is followed by another "if" 
  * keyword. An else-if statement will only execute if the conditional
  * evaluates to true and if the preceding "if" statement condition evaluates to
  * false.
  */
  
    if(true){
     console.log("This will print");
     }
    if(false){
         console.log("This will NOT print");
     }
    else if(1 + 1 === 2){
         console.log("This will print");
     }
    else{
         console.log("This will NOT print")
     }
 
 
 /**
  * SWITCH STATEMENTS:
  * In Javascript, switch statesment can be used to perform any number of 
  * actions based on case outcomes from a conditional expression. Switch
  * statements are an old style of coding and are typically advised against
  * because they're syntax is cumbersome and verbose.
  */
 //SWITCH SYNTAX:
 switch(true) {
  case true:
    console.log(true);
    break;
  case false:
    console.log(false);
  default:
    console.log("default switch case");
}

/**
 * Switch statements have a conditional expression and cases for any particular
 * outcome from the expression. Each case must be stopped with the "break" 
 * keyword. A default case may also be declared in the case of a case not being
 * explicitly defined in the switch table. 
 */ 
 
 
 /**
 * NORMAL CONTROL FLOW IN JAVASCRIPT:
 * Here is an example of normal control flow in Javascript: 
 * 
 */
 
 var test2 = "456";
 var test1 = "123";
 
 /**
  * test2 is declared and assigned before test1
  */
  
if(test1 === "456"){
    console.log("test1 === " + test1);
}
else{
    console.log("test1 !== 456");
}

/**
 * In the above example, typical top-down control flow is interrupted by the
 * conditional if statement. When test1 is used in the conditional statement
 * "test1 === 456", it evaluates to false and control flow is interrupted
 * and the program jumps lines to get to the else statement.
 */
 
/**
 * Because of things like this, it's important to logically follow the code
 * and be aware of the intricacies of how control flow is interrupted. It is
 * the only way to be able to follow the process of how a program is executed
 * in Javascript.
 */