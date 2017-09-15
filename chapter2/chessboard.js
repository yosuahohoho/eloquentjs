//eloquent javascript, chapter 2, chessboard
var size = 8;

for (var y=0; y < size; y++) {
    var board = '';
    for (var x=0; x < size; x++) {
        if ((x+y) % 2 == 0 ) {
            board += '#';
        }
        else {
            board += ' ';
        }
    }
    console.log(board);
}
