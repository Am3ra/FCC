function sumFibs(num) {
  var fib1 = 1;
  var fib2 = 1;
  var fib3;
  var odds = [1];
  while (fib1 <= num){
    
    
    if (fib1 % 2 == 1){
      
      odds.push(fib1);
      
    }
    
    fib3 = fib1 + fib2;
   
    fib2 = fib1;
    fib1 = fib3;
    
  }  
  
  odds=odds.reduce(
  function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  }
);
  
  
  return odds;
}

sumFibs(75025);
