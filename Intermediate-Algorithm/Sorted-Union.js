// version with no real array flattening

function uniteUnique(arr) {
 var args = [].slice.call(arguments);
 
 arr = args.reduce(function(acc, currVal){     
     return acc.concat(currVal);   
   }, []); // flatten the arrays
  
 arr = arr.filter(function(element, index){ return arr.indexOf(element) === index;}); //filter repeats
  
  return arr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);


// version with complete array flattening

function steamrollArray(arr) {  
   return arr.reduce(function(acc, currVal){     
     return acc.concat(Array.isArray(currVal) ? steamrollArray(currVal) : currVal);   
   }, []); 
}

function uniteUnique(arr) {
 var args = [].slice.call(arguments);
  
 arr = args.reduce(function(acc, currVal){     
     return acc.concat(Array.isArray(currVal) ? steamrollArray(currVal) : currVal);   
   }, []); // flatten the arrays
  
 arr = arr.filter(function(element, index){ return arr.indexOf(element) === index;}); //filter repeats
  
  return arr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
