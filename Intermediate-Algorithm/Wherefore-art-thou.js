function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var properties= Object.keys(source);   
  arr= collection.filter(function(argument){ 
    return properties.every(function(element){
      return argument.hasOwnProperty(element) && argument[element] == source[element];   
    });
  });
   
  // Only change code above this line
  return arr;
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
