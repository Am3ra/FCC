function pairElement(str) {
  str= str.split("");
  var final = [];
  str.map(function(element){
    switch(element){
      case "G":
        final.push(["G","C"]);
        break;
      case "C":
        final.push(["C","G"]);
        break;
      case "T":
        final.push(["T","A"]);
        break;
      case "A":
        final.push(["A","T"]);
        break;
    }
  });
  return final;
}


pairElement("GCG");
