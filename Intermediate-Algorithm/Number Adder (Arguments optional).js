
function addTogether() {
  
  console.log(typeof arguments[0]);
  
   if (typeof arguments[0] != "number" || (arguments.length == 2 && (typeof arguments[1] != "number"))){
    return undefined; } // This shits cool... i think...
  
  if (arguments.length== 2){
    
    return arguments[0] + arguments[1];
    
  } else if (arguments.length == 1) {
    var add= arguments[0];
     return function(y) {
       if (typeof arguments[0] != "number"){
         return undefined;
       }
        return add + arguments[0];
     };
    
  }
  
}
addTogether(2)([3]);
