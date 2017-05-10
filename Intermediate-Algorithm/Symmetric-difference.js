function sym() {
  var args = [].slice.call(arguments);
  var buffer = [];
  var bufferSub = [];
  var final = [];
  var s = 0;
  
  for (i=args.length; i > 0; i --){
  
   args[0] = args[0].filter(function(element, index){ return args[0].indexOf(element) === index;});
   
    for( j=0 ; j < args[0].length; j++){
      //console.log(args);
      console.log(final, buffer,final.indexOf(args[0][j]));
      
      if (final.indexOf(args[0][j]) == -1){
      
        buffer.push(args[0][j]);
      
      } else {
        
        final.splice(final.indexOf(args[0][j]),1);
        args[0].splice(j,1);
        j--;
        
      }
      
    }
    
    
    final = final.concat(buffer);
    buffer = [];
    args.shift();
  }

  return final;
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
