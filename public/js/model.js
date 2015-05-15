var playerTurn = "red";
$(document).ready(function () {
    $('.Board').click(function (e) {
        var myClass = $(e.target).attr("class");
        console.log(myClass);
        $('.' + myClass).last().css("background-color", playerTurn).removeClass(myClass).addClass('.' + playerTurn);
        if (playerTurn == "red") {
            playerTurn = "yellow"
        } else {
            playerTurn = "red"
        }
    }
    );
}
);






