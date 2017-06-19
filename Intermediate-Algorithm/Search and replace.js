function myReplace(str, before, after) {
  str=str.split(" ");
  
  before= before.split('');
  after = after.split('');
  
  console.log(before[0]);
  if (before[0].toUpperCase()==before[0] && after[0].toLowerCase()==after[0]){
    after[0] = after[0].toUpperCase();
  }
  
  before=before.join('');
  after=after.join('');
  
  str.splice(str.indexOf(before),1,after);
  return str.join(" ");
}
