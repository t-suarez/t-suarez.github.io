/**
 * CONTROL FLOW:
 * In Javascript, control flow is the order in which the computer executes
 * statements in a script. (MDN)
 * 
 * Code is processed from the first line to the last line, unless structures
 * (such as conditionals, loops) are encountered that change the flow. This
 * happens very frequently.
 * 
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