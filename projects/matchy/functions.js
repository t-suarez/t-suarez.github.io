/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement function called search() that
//input: array of "animals", and a string "name"
//output: object of animal with the given name, or null if it doesn't exist
//constraints: must be an array of animal objects
//edge: none

function search(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name == name){
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement a function called replace() that takes 3 parameters and 
//replaces an animal object with the provided replacement
//if the animal with the name given doesn't exist do nothing
//input: array "animals", string "name", object "replacement"
//output: none
//constraints: none
//edge: none

function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name == name){
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement remove(animals, name) function that takes array of animals
//and a name of an animal to remove and removes that element from the array
//input: array "animals", string "name"
//output: none
//constraints: none
//edge: none

function remove(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name == name){
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement function add(animals, animal) that takes an array of animals,
//and a new animals object to be added
//input: array "animals", object "animal"
//output: none
//constraints: object must have name (unique) and species properties 
//edge: none

function add(animals, animal){
    if(search(animals, animal.name) == null && animal.name.length > 0 && animal.species.length > 0){
        animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
