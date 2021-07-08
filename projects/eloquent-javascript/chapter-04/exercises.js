////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * range: function that takes in start and end paramters and returns an array
 * of the range from start to end, going up by increments of <step>, if step is
 * not provided then step defaults to 1. 
 */
//I: NUMBERS start, end, and optional step
//O: ARRAY ranging from <start> up to and including <end>, increment by <step>
//C: none
//E: none

function range(start, end, step){
  step = (!step) ? 1 : step;
  var array = [];
  if(start === end) return array;
  if(step < 0){
    for(let i = start; i >= end; i += step){
      array.push(i);
    }
  }
  else{
    for(let i = start; i <= end; i += step){
      array.push(i);
    } 
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * sum: function that takes in an array of numbers and returns a single integer
 * value that represents the sum of all of the elements in the array.
 */
//I: ARRAY
//O: NUMBER sum of all elements in the array
//C: none
//E: none
function sum(array) {
  var sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * reverseArray: function that takes in an array of elements and returns a new
 * array with the elements in reverse order
 */
//I: ARRAY
//O: ARRAY new array with reverse elements
//C: none
//E: none
function reverseArray(array) {
  var newArray = [];
  var x = 0;
  for(let i = array.length - 1; i >= 0; i--){
    newArray[x] = array[i];
    x++;
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * reverseArray: function that takes in an array of elements and returns the 
 * same array with the elements in reverse order
 */
//I: ARRAY
//O: ARRAY same aray with reverse elements
//C: none
//E: none
function reverseArrayInPlace(array) {
  var placeHolder;
  var x = array.length - 1;
  for(let i = 0; i < array.length/2; i++){
    placeHolder = array[i];
    array[i] = array[x];
    array[x] = placeHolder;
    x--
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * arrayToList: function takes an array and converts all elements into objects
 * that have a "value" property that holds the value of the original element,
 * and a "rest" property that links the object to the next object in the list,
 * and if the object is the last object in the list then the "rest" property
 * holds the value null. Returns a reference to the first index of the array
 * which is the first element of the new list.
 */
//i: array to be converted to list
//o: reference to the first element of the list, an object
//c: must be an array argument
//e: none
function arrayToList(array) {
  for(let i = 0; i < array.length; i++){  //turning into objects
    array[i] = {
      value: array[i],
      rest: null
    }
  }
  for(let i = 0; i < array.length; i++){  //listifying objects
    if(array[i+1]){
      array[i].rest = array[i+1];
    }
    else{
      array[i].rest = null;
    }
  }
  return array[0]; //returning first object in list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * listToArray: function takes a reference to a listified object and converts
 * each object.value in the list to it's corresponding array index and then 
 * returns the array.
 */
//i: listified obj
//o: array of the list
//c: must be a listified object
//e: none
function listToArray(obj) {
  var array = [];
  var counter = 0;
  while(obj !== null){
    array[counter] = obj.value;
    obj = obj.rest;
    counter++;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * prepend: function takes an element and a list object and returns an object
 * with property value of <element> and property rest with a reference to list
 */
//i: element and list object
//o: object with element value and link to list
//c: list argument must be a listified object
//e: none
function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * nth: function takes a listified object and a number representing the number
 * of the object in the list to retrieve and traverses the list and returns
 * the nth object's value property.
 */
//i: list object and number representing the nth place
//o: value of the object at the nth place in the list
//c: list argument must be a listified object
//e: none
function nth(list, n) {
  if(n < 0) return undefined;
  if(n === 0) return list.value;
  return (list.rest !== null) ? nth(list.rest, n-1) : null;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * deepEquals: function takes 2 elements and compares them and returns true if
 * they are either strictly equal or equivalent objects.
 */
//i: 2 elements to compare
//o: true if both elements are either strictly equal or equivalent objects
//c: none
//e: none
function deepEqual(val1, val2){
  function isEmpty(obj) {                    //function isEmpty to check if
    for(let key in obj) {                    //objects have keys
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }   
  if(val1 === val2) return true;
  if(typeof val1 === "object" && typeof val2 === "object" &&
    !!val1 && !!val2){
      if(isEmpty(val1) && isEmpty(val2)) return true;
      var flag = true;
      for(let key in val1){
        if(!deepEqual(val1[key], val2[key])) flag = false;
      }
      return flag;
    }
  return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
