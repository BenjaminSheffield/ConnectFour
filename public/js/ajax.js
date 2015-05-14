$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://localhost:9393/api/winners",
    success: function(data){
      sortedScores = data.sort(compare);
      for (var i = 0; i < sortedScores.length; i++) {
          var scores = sortedScores[i];
          renderWinners(scores);
        }
    },
    error: function(){
      console.log("Error");
    }
  });
});

function compare(a,b) {
  if (b.win_count < a.win_count)
     return -1;
  if (b.win_count > a.win_count)
    return 1;
  return 0;
}

function renderWinners(scores) {
    var htmlString = "<li>" +
                       "<h2>" + scores.name + "</h2>" +
                       "<h3>" + scores.win_count + "</h3>" +
                     "</li>";
    $('#winners').append(htmlString);
  }

