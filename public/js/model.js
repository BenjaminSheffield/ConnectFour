var playerTurn = 'red';
$(document).ready(function () {
    $('.column1').click(doMove);
}
);

function doMove() {
    if (playerTurn == 'red') {
        playerRed()
    } else {
        playerYellow()
    };
}

function playerRed() {
    $('.column1').last().css("background-color", "red").removeClass('column1').addClass('RedClass');
    playerTurn = 'yellow';
}


function playerYellow() {

    $('.column1').last().css("background-color", "yellow").removeClass('column1').addClass('YellowClass');
    playerTurn = 'red';

};