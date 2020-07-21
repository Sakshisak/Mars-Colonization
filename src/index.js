import Board from './classes/Board';

let board = new Board(['x','o','','x','o','','o','','x']);
board.printFormattedBoard();
console.log(board.insert('x',2));
board.printFormattedBoard();
console.log(board.getAvailableMoves());