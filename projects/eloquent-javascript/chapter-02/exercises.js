
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var arr = [];
  var character = "#";
  for(let i = 1; i <= num; i++){
    arr.push(character);
    console.log(arr.join(""));
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 !== 0){
      console.log("fizz");
    }
    else if(i % 3 !== 0 && i % 5 === 0){
      console.log("buzz");
    }
    else if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    }
    else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var flag = true;
  var array = [];
  var white = "#";
  var black = " ";
  var boardArray = [];
  
  
  for(let j = 0; j < num; j++){
    flag = (j % 2 === 0) ? true : false;
    for (let i = 0; i < num; i++){
      (flag) ? (array.push(black)) : (array.push(white));
      flag = !flag;
      if(i === num - 1){
        array.push("\n");
        boardArray.push(array.join(""));
        array = [];
      }
    }
  }
  console.log(boardArray.join(""));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
