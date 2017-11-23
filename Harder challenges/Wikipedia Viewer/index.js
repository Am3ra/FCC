$(document).ready(function() {
  var search  = $("#Search"),
      results = $("#results"),
      input   = $("#input");
 search.on("click",function(){
  var value = input.val(),
    url = "https://en.wikipedia.org/w/api.php?action=query";
  results.html("<h2>Results:</h2>");
  
  results.show("slow");
  
  return false
 });

  $.ajax({
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function (data) {
      // do something with data
    }
  });
});
