function spinalCase(str) {
  
  str= str.replace(/([a-z])([A-Z])/g, function(substr, p1, p2){return p1 + "-" + p2 ;});
  str= str.replace(/( )(\w)/g, function(substr, p1, p2){return "-" + p2;});
  str= str.replace(/(_)(\w)/g, function(substr, p1, p2){return "-" + p2;});
  
  
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
