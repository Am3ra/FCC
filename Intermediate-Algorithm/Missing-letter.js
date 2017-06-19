function fearNotLetter(str) {
   var final;
    Array.from(str).map(function(element){
    if (str.charCodeAt(str.indexOf(element)) != str.charCodeAt(str.indexOf(element)-1)+1 && str.indexOf(element)!== 0)
      final=String.fromCharCode(str.charCodeAt(str.indexOf(element)-1)+1) ;
    });
  return final;
}

fearNotLetter("abce");
