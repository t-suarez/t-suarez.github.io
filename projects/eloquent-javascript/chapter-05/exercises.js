// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * flatten: takes an array of arrays and uses reduce combined with concat to 
 * returns all elements from each array combined into a single array
 */
//i: an array of arrays
//o: a single array of all elements from original array
//c: must be an array of arrays
//e: none
function flatten(array) {
  return array.reduce((x, y) => x.concat(y));
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * loop: takes a value representing number of iterations, a test function that
 * tests if the loop conditions are still met, an update function that updates
 * the loop counter, and a body function that performs an action to be repeated
 */
//i: number value, func test, func update, func body
//o: whatever actions are performed by the body function
//c: must fulfill all parameters
//e: none
function loop(value, test, update, body) {
  for(let i = value; test(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * every: takes an array and a test and returns true if every element of the
 * array evaluates to true after going through the test function. Returns false
 * if any elements test false.
 */
//i: array and test function
//o: true if all elements test true and false otherwise
//c: none
//e: none
function every(array, test) {
  var flag = true;
  loop(0, n => n < array.length, n => n += 1, function(n){
    if(!test(array[n])) flag = false;
  });
  return flag;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * dominantDirection: takes an string of text and returns the direction of the 
 * language with the most representation by percentage in the string.
 */
//i: string of text
//o: the direction of the language with the most representation in the string
//c: must contain at least one textual character
//e: none
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });

  let total = scripts.reduce((n, {
    count
  }) => n + count, 0);

  var array = scripts.map(({                 // this function hacks the countBy
    name,                                    // function and instead of the 
    count,                                   // language name it holds the 
  }) => {                                    // direction so "name" from line 76
    return {name,count};                     // down actually refers to the
  });                                        // language direction
  
  if(array.length === 1) return array[0].name;
  var max;
  for(let i = 0; i < array.length - 1; i++){
    max = (array[i].count > array[i + 1].count) ? 
      array[i] : array[i + 1];
  }
  return max.name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
