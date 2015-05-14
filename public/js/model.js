$(document).ready(function(){
	$('.column1').click(function(){
		$('.column1').last().css("background-color","red").removeClass('column1').addClass('new_class');
});
})
