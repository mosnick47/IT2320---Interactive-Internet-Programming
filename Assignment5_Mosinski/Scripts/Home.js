$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {

        if (!holdingPiece) {                    // if the cell is not holding a piece
            if ($(this).hasClass("piece")) {    // if the cell has the class of piece - has a piece on that cell
                PickUpPiece(this)               // Call PickUpPiece method
            }
        }
        else {
            SetPiece(this)                      // if the cell is not holding a piece, set the piece being held on that cell.
        }
    });
});


var holdingPiece = false;
var pieceInHand;

PickUpPiece = function (piece) {

    // Highlight selected element.
    $(piece).css("border", "3px solid gold");

    // Update stateful variables.
    pieceInHand = piece;
    holdingPiece = true;
}

SetPiece = function (targetElement) {

    // Logic to handle a piece being move to a cell with a piece of the same color
    $(pieceInHand).css("border", "1px solid black");
    if (targetElement.className == pieceInHand.className) {         // if the target cell has the same class name as the piece,
        alert('Moving to a cell with the same color piece is illegal! \nPlease try again!');   // do not move the piece and alert the user that that move is illegal.
    } else {
        targetElement.className = pieceInHand.className;    // for everything else, move the piece and remove the piece from the old cell.
        pieceInHand.className = "cell";
    }


    // Update stateful variables.
    holdingPiece = false;
    pieceInHand = {};
}








