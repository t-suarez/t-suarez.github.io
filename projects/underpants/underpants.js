// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//input: value
//output: value returned
//constraints: none
//edge cases: none

_.identity = function(value){
    return(value);
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//input: value
//output: checks for value of argument and returns a string representation of value
//constraints: none
//edge cases: none

_.typeOf = function(value){
    if(typeof value !== "object"){
        return typeof value;
    }
    else{
        if(Array.isArray(value)){
            return "array"
        }
        else if(value === null){
            return "null";
        }
        else if(value === undefined){
            return "undefined";
        }
        else{
            return "object";
        }
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//input: an array and a number "num"
//output: an array with 0 to "num" indexes, an empty array if "array" not an array or negative "num", the first index if "num" is Nan or undefined
//constraints: none
//edge cases: num must be a positive number

_.first = function(array, num){
    if(_.typeOf(array) !== "array" || num < 0){
        return [];
    }
    if(num === undefined || isNaN(num)){
        return array[0];
    }
    
    else{
        return array.slice(0, num);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//input: an array and a number "num"
//output: an array with "num" to "array.length-1" indexes, an empty array if "array" not an array or negative "num", the first index if "num" is Nan or undefined
//constraints: none
//edge cases: num must be a positive number

_.last = function(array, num){
    if(_.typeOf(array) !== "array" || num < 0){
        return [];
    }
    if(num === undefined || isNaN(num)){
        return array[array.length-1];
    }
    if(num > array.length){
        return array;
    }
    else{
        return array.slice(num-1, array.length);
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

//input: array, value
//output: the index of "array" w/ first value of "value", -1 if not in array
//constraints: none
//edge cases: 
_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
    
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//input: array, value
//output: true if <array> contrains <value>, false otherwise
//constraints: must use ternary operator in implementation
//edge cases: value must strictly equal index, and value must be given

_.contains = function(array, value){
   return (_.indexOf(array, value) !== -1) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    }
    else{
        for(var key in collection){
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//input: array
//output:new array with duplicates removed
//constraints: use _.indexOf()
//edge cases: none
_.unique = function(array){
    var newArray = [];
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//input: array, function
//output: new filtered array (the <function> argument called on all indexes from <array>)
//constraints: none
//edge cases: none

/*********************
 * this was my original function before I tried to implement _.each()*
 * *********************************************
 * 
_.filter = function(array, func){
    var newArray = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){  
            newArray.push(array[i]);
        }
    }
    return newArray;
}
*/

//create new array and for each element in the array that returns "true" from <func> push() to <newArray> and return it
_.filter = function(array, func){
    var newArray = [];
    _.each(array, function(e, i, a){
        if(func(e, i, a) === true){
            newArray.push(e);
        }
    });
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//input: array, function
//output: new array of all elements that return false from 
//constraints: none
//edge cases: none

//logical inverse of _.filter(), only the boolean in the conditional has changed

_.reject = function(array, func){
    var newArray = [];
    _.each(array, function(e, i, a){
       if(func(e, i, a) === false){
           newArray.push(e);
       } 
    });
    return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//input: array, function
//output:array of 2 sub arrays, one with truthy elements and the other with falsy elements 
//constraints: none
//edge cases: none
_.partition = function(array, func){
    return [_.filter(array, func), _.reject(array, func)];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//input:collection, function
//output: a new array of elements from original array with the <func> argument applied
//constraints: none
//edge cases: none
_.map = function(collection, func){
    var newArray = [];
    _.each(collection, function(e, i, a){
        newArray.push(func(e, i, a));
    });
    return newArray;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//input: array of objects
//output: an array in which every element contains the value of <prop> for the object elements from the original array
//constraints: must be an array of objects, must use _.map()
//edge cases: none
_.pluck = function(objArray, prop){
    return _.map(objArray, function(e, i, a){
       return e[prop];
    });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//input: <collection>, <function> to implement on every element in collection
/*output: true if all elements in collection return true when function is called, false if any falsy values
    and in the event of no function argument, return true if all values are truthy, and false otherwise
    */
//constraints: function must return boolean
//edge cases: if no function, return true if all values are truthy and false otherwise

//if: if the func is undefined, go through each element in collection and flip the boolean flag if any values are falsy
//return: true if the length of _.reject(collection, func) === 0, false otherwise 

_.every = function(collection, func){
    if(func === undefined){
        var flag = true;
        _.each(collection, function(e, i, a){
           if(!e){
               flag = false;
           }
        });
        return (flag) ? true : false;
    }
    return (_.reject(collection, func).length === 0) ? true : false;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//input: <collection>, <function> to implement on every element in collection
/*output: true if any element in collection returns true when function is called, false if none are true
    and in the event of no function argument, return true if any values are truthy, and false otherwise
    */
//constraints: function must return boolean
//edge cases: if no function, return true if any values are truthy and false otherwise

//if: if the func is undefined, go through each element in collection and flip the boolean flag if any values are truthy
//return: true if the length of _.filter(collection, func) > 0, false otherwise 
_.some = function(collection, func){
    if(func === undefined){
        var flag = false;
        _.each(collection, function(e, i, a){
           if(e){
               flag = true;
           }
        });
        return (flag) ? true : false;
    }
    return (_.filter(collection, func).length > 0) ? true : false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//input: array, function, seed
//output: the value of the final <function> call
//constraints: none
//edge cases: if no seed is given, use first element/value of <array> as <seed>, and continue from the next element

/*If seed is undefined, create a copy of the array and shift() the first element to <acc>, then use
_.each on the rest of the newArray, with i+1 in the <func> argument to account for the removed element.

If seed is defined, <acc> is equal to seed, and _.each() through the array and have <acc> = func(acc, element, index)
Return <acc>
*/

_.reduce = function(array, func, seed){
    if(seed === undefined){
        var newArray = array.slice(); //new array so no side effects on <array>
        var acc = newArray.shift();
        _.each(newArray, function(e, i, a){
              acc = func(acc, e, i+1); //i+1 to account for the first element being provided for the missing <seed>
        });
        return acc;
    }
    var acc = seed;
    _.each(array, function(e, i, a){
        acc = func(acc, e, i);
    });
    return acc;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//input: multiple objects
//output: one object with all properties from succeeding objects copied into it
//constraints: must be objects
//edge cases: none

/*
for _.each() element in [...objs], use _.each() to cycle through properties and assign properties of the same name
in obj1 with the value of the properties from the current object in [...objs].

then return obj1
*/
_.extend = function (obj1, ...objs){
  _.each([...objs], function(e, i, a){
    _.each(e, function(v, k, o){
            obj1[k] = v;
    })
  });
  return obj1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
