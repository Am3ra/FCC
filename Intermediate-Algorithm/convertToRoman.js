function convertToRoman(num) {
  var rom=[];
  
num= num.toString().split("").reverse();   
  
  for (i=0;i<=num.length;i++){
    switch(num[i]){
      case "1":
        switch(i){
          case 1:
						rom.unshift("X");
            break;
          case 2:
						rom.unshift("C");
            break;
          case 3:
						rom.unshift("M");
            break;
          case 0:
						rom.unshift("I");
            break;} 
        break;
      case "2":
        switch(i){
          case 1:
						rom.unshift("XX");
            break;
          case 2:
						rom.unshift("CC");
            break;
          case 3:
						rom.unshift("MM");
            break;
          case 0:
						rom.unshift("II");
            break;} 
        break;
      case "3":
        switch(i){
          case 1:
						rom.unshift("XXX");
            break;
          case 2:
						rom.unshift("CCC");
            break;
          case 3:
						rom.unshift("MMM");
            break;
          case 0:
						rom.unshift("III");
            break;} 
        break;
      case "4":
        switch(i){
          case 1:
						rom.unshift("XL");
            break;
          case 2:
						rom.unshift("CD");
            break;
          case 0:
						rom.unshift("IV");
            break;} 
        break;
       case "5":
        switch(i){
          case 1:
						rom.unshift("L");
            break;
          case 2:
						rom.unshift("D");
            break;
          case 0:
						rom.unshift("V");
            break;} 
        break;
       case "6":
        switch(i){
          case 1:
						rom.unshift("LX");
            break;
          case 2:
						rom.unshift("DC");
            break;
          case 0:
						rom.unshift("VI");
            break;} 
        break;
       case "7":
        switch(i){
          case 1:
						rom.unshift("LXX");
            break;
          case 2:
						rom.unshift("DCC");
            break;
          case 0:
						rom.unshift("VII");
            break;} 
        break;
       case "8":
        switch(i){
          case 1:
						rom.unshift("LXXX");
            break;
          case 2:
						rom.unshift("DCCC");
            break;
          case 0:
						rom.unshift("VIII");
            break;} 
        break;
       case "9":
        switch(i){
          case 1:
						rom.unshift("XC");
            break;
          case 2:
						rom.unshift("CM");
            break;
          case 0:
						rom.unshift("IX");
            break;} 
        break;
       case "0":
         break;        
    }
    
	}
return rom.join("");
}

convertToRoman(36);
