
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // What it does: Take random number, multiplies by (the range +1), as Math.random() gives decimal between 0 and 1
  //Then, it rounds the result down (Math.floor) and it adds the min, so that the range begins in the min
  //Result is a radom range.
}

// Change these values to test your function
var myRandom = randomRange(5, 15);
