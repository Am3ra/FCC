$(document).ready(function() {
  var search  = $("#Search"),
      results = $("#results"),
      input   = $("#input");
 search.on("click",function(){
  var value = input.val(),
    url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
  results.html("<h2>Results:</h2>");
  url += string(value);
   $.getJSON(url, function (json) {
     results.append(JSON.stringify(json));
   });
  results.show("slow");
  
  return false
 });

});
