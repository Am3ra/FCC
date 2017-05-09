function steamrollArray(arr) {  
   return arr.reduce(function(acc, currVal){     
     return acc.concat(Array.isArray(currVal) ? steamrollArray(currVal) : currVal);   
   }, []); 
}

steamrollArray([1, [2], [3, [[4]]]]);
