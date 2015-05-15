var playerTurn = "red";
$(document).ready(function () {

    $('.Board').click(function (e) {
        var myClass = $(e.target).attr("class");

        $('.' + myClass).last().css("background-color", playerTurn).removeClass(myClass).addClass('.' + playerTurn);
        if (playerTurn == "red") {
            playerTurn = "yellow"
        } else {
            playerTurn = "red";
        }

        board = [];
        var rows = $('.Board').children().children();
        storeRows = [];
        for (var i = 0; i < rows.length; i++)
        {
            storeRows.push(rows[i].children);
            array = []
                for (var j = 0; j < 8; j++)
                    {
                        array.push(storeRows[i][j].className)
                    }
            board.push(array)
        }
        console.log(board)

            }
    );
}
);








