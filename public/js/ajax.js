$(document).ready(function(){

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/api/winners",
    success: function(data){
      sortedScores = data.sort(compare);
      console.log(sortedScores);
    },
    error: function(){
      console.log("Error");
    }

  });

});

function compare(a,b) {
  if (a.win_count < b.win_count)
     return -1;
  if (a.win_count > b.win_count)
    return 1;
  return 0;
}

