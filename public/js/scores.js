$(document).ready( function(){

$('#scorebutton').click( function() {
  $('#winners').toggle();
  $("body").animate({ scrollTop: 450 }, "slow");
})


$( "#newgamebutton" ).click(function() {
         location.reload(true);
});

});

