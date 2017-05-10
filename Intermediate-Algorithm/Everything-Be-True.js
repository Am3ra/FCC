function truthCheck(collection, pre) {
   
  return collection.every(function(element){
    return element.hasOwnProperty(pre) && !!element[pre]===true;
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
