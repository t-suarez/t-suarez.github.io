// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lowdown-t-suarez");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//i: array
//o: number of elements in array that have the property gender = male
//c: must use filter()
//e: none
var maleCount = function(array) {
    return _.filter(array, function(e, i, a){
        return e.gender === "male";
    }).length;
};

//i: array
//o: number of elements in array that have the property gender = female
//c: must use reduce()
//e: none
var femaleCount = function(array) {
    return _.reduce(array, function(a, e, i){
        return (e.gender === "female") ? a += 1 : a;
    }, 0);
};

//i: array
//o: string of name of customer with the highest age property
//c: none
//e: none
var oldestCustomer = function(array){
    var old = array[0];
    _.each(array, function(e, i, a){
        old = (e.age > old.age) ? e : old;
    })
    return old.name;
};

//i: array
//o: string of name of customer with the lowest age property
//c: none
//e: none
var youngestCustomer = function(array){
    var young = array[0];
    _.each(array, function(e, i, a){
        young = (e.age < young.age) ? e : young;
    })
    return young.name;
};;

//i: array
//o: number of the average balance of every customer in the array
//c: none
//e: none
var averageBalance = function(array){
    return _.reduce(array, function(a, e, i){
        return a += Number(e.balance.replace("$","").replace(",",""));
    }, 0) / array.length;
};

//i: array, letter
//o: number of objects that have that letter as the first letter in their name
//c: none
//e: none
var firstLetterCount = function(array, letter){
    var normalized = letter[0].toUpperCase(); //normalize to upper case
    return _.filter(array, function(e, i, a){
        return e.name[0] === normalized; 
    }).length
};

//i: array, customer, letter
//o: number of friends a given customer has that start with a given letter
//c: none
//e: none
var friendFirstLetterCount = function(array, customer, letter){
    var normalized = letter[0].toUpperCase(); //normalize to upper case
    var subject = _.filter(array, function(e, i, a){
      return e.name === customer;
    })[0];
    return _.filter(subject.friends, function(e, i, a){
        return e.name[0] === normalized; 
    }).length;
};

//i: array, name
//o: an array of names of people who have the given name argument as a friend
//c: none
//e: none
var friendsCount = function(array, name){
    var friends = _.filter(array, function(e, i, a){ //for every friend in array
        return _.filter(e.friends, function(ee, ii, aa){ // look into their friends
            return ee.name === name; //for argument "name"
        }).length > 0; //if length is greather than 0 then "name" is a friend
    });
    _.each(friends, function(e, i, a){ //for each element in friends array
      a[i] = e.name; //log their names only
    });
    return friends;
};

//i: array
//o: array of the top 3 tags in all of the elements in the array objects
//c: none
//e: none
var topThreeTags = function(array){
    
    var tagArray = [];                                  
    _.each(array, function(e, i, a){            //for every element in array
        _.each(e.tags, function(e2, i2, a2){    // push their "tags" array
            tagArray.push(e2);                  //element-wise into tagArray,
        });                                     //tagArray is now a flat array
    });                                         //of all tags
    
    var countedArray = []; //declaring the array that will be hashed
    
    _.each(tagArray, function(e, i, a){                 // These nested each() 
      var counter = 0;                                  // calls take each 
      var subject = e;                                  // element and count
      if(_.indexOf(countedArray, subject) === -1){      // the instances of that
        _.each(tagArray, function(ee, ii, aa){          // element in the array.
            if(ee === subject) counter += 1;            // IF: we encounter the
        });                                             // element, increment
                                                        // counter.
        while(countedArray[counter] !== undefined){     // WHILE searches array
            counter += 61;                              // for empty spaces
        }                                               // to avoid collisions.
        countedArray[counter] = subject;                //61 is arbitrary prime
      }                                                 //number for hashing
    });
   
   var rankedArray = []; //declaring array that will hold items by rank
   
   for(let i = 0; i < countedArray.length; i += 61){    // Nest for loops find
       let sectionMax;                                  // the local maxes for
       for(let j = i; j < i + 61; j++){                 // every hash area in 
            if(countedArray[j] !== undefined){          // counted array and
            sectionMax = countedArray[j];               // pushes all maxes
            }                                           // to rankedArray.
       }
       rankedArray.push(sectionMax);                    // The first 3 items in 
   }                                                    // rankedArray will be
                                                        // the top 3 tags.
    var topThreeArray = []; // declaring return array                       
    
    topThreeArray.push(rankedArray.shift());            // Push first 3 items
    topThreeArray.push(rankedArray.shift());            // to final array and
    topThreeArray.push(rankedArray.shift());            // return array.
    return topThreeArray;
};

//i: array
//o: object with "male", "female", and "non-binary" properties and those counts
//c: use reduce
//e: none
var genderCount = function(array){
    var men = _.reduce(array, function(acc, e, i){
        return acc = (e.gender === "male") ? acc += 1 : acc;
    }, 0);
    var women = _.reduce(array, function(acc, e, i){
        return acc = (e.gender === "female") ? acc += 1 : acc;
    }, 0);
    var nb = array.length - (men + women);
    return {
        "male": men,
        "female": women,
        "non-binary": nb
    };
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
