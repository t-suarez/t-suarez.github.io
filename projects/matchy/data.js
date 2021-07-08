/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "frog";
animal["name"] = "fred";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "rib";
noises.push("bit");
noises.unshift("croak");
noises[noises.length] = "bud";
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal.noises.push("weis");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  
 
    You can use dot or bracket notations
 
 * 2. What are the different ways of accessing elements on arrays?
 *
    You can use bracket notation or use array methods to access elements in indexes
 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck);

var ant = {
    species: 'ant',
    name: 'andy',
    noises: ['i am an ant', 'ant noise']
}

var cat = {
    species: 'cat',
    name: 'velcro',
    noises: ['meow', 'hiss', 'xD', 'hello']
}

var frog = {
    species: 'frog',
    name: 'frank',
    noises: ['ribbit', 'budweiser']
}

animals.push(ant);
animals.push(cat);
animals.push(frog);

console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//a collection that can be easily accessed with array functions
var friends = [];

function getRandom(animals){
    return Math.random(animals.length);
}

friends.push(animals[0].name);
console.log(friends);

frog['friends'] = friends;
console.log(frog);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}