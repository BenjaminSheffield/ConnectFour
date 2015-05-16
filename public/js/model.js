var playerTurn = "red";
var winner;
$(document).ready(function () {

    $('.Board').click(function (e) {
        var myClass = $(e.target).attr("class");

        $('.' + myClass).last().css("background-color", playerTurn).removeClass(myClass).addClass('.' + playerTurn);
        if (playerTurn == "red") {
            playerTurn = "yellow"
            winner = "Red";
        } else {
            playerTurn = "red";
            winner = "Yellow";
        }

        board = [];
        var rows = $('.Board').children().children();
        storeRows = [];
        for (var i = 0; i < rows.length; i++) {
            storeRows.push(rows[i].children);
            array = []
            for (var j = 0; j < 8; j++) {
                array.push(storeRows[i][j].className)
            }
            board.push(array)
        }

        setTimeout(checkRow, 10);
        setTimeout(checkUpDiagonal, 10);
        setTimeout(checkDownDiagonal, 10);
        setTimeout(checkRedDown, 20);
        setTimeout(checkYellowDown, 20);
    }
    );
}
);

function checkRedDown() {
    var i;
    for (m = 0; m < 8; m++) {
        for (var k = 0; k < 8; k++) {

            if (board[m][k] == (".red") && board[m][k] == board[(m - 1)][k] && board[m][k] == board[(m - 2)][k] && board[m][k] == board[(m - 3)][k]) {
                GameEnds();
                alert("Red wins!");
            }
        }
    }
}

function checkYellowDown() {
    var i;
    for (m = 0; m < 8; m++) {
        for (var k = 0; k < 8; k++) {

            if (board[m][k] == (".yellow") && board[m][k] == board[(m - 1)][k] && board[m][k] == board[(m - 2)][k] && board[m][k] == board[(m - 3)][k]) {
                GameEnds();
                alert("Yellow wins!")
            }
        }
    }
}
function checkRow() {
    var i;
    for (m = 0; m < 8; m++) {
        for (var k = 0; k < 8; k++) {
            if (board[m][k] == board[m][(k + 1)] && board[m][k] == board[m][(k + 2)] && board[m][k] == board[m][(k + 3)]) {
                GameEnds();
                alert(winner + " player wins!");
            }
        }
    }
}

function checkDownDiagonal() {
    var i;
    for (m = 0; m < 8; m++) {
        for (var k = 0; k < 8; k++) {

            if (board[m][k] == board[(m + 1)][(k + 1)] && board[m][k] == board[(m + 2)][(k + 2)] && board[m][k] == board[(m + 3)][(k + 3)]) {
                GameEnds();
                alert(winner + " player wins!");
            }
        }
    }
}

function checkUpDiagonal() {
    var i;
    for (m = 0; m < 8; m++) {
        for (var k = 0; k < 8; k++) {

            if (board[m][k] == board[(m + 1)][(k - 1)] && board[m][k] == board[(m + 2)][(k - 2)] && board[m][k] == board[(m + 3)][(k - 3)]) {
                GameEnds();
                alert(winner + " player wins!");
            }
        }
    }

}

function GameEnds() {
    var something = $('.Board').children().children().children().removeClass();
    console.log(something);
}






