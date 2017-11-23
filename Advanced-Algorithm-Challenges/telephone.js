function telephoneCheck(str) {
  var regex = /^(1|1 )?(\(\d{3}\)|\d{3})((-|\s)?\d{3}(-|\s)?|\d{3})\d{4}$/;
  regex.lastIndex = 0;
  return regex.test(str);
}
//DONE
console.log(telephoneCheck("1 555 555 5555"));
