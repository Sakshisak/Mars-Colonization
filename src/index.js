import Board from './classes/Board';
import Player from './classes/Player';

let board = new Board(['x','o','','','','','o','','x']);
board.printFormattedBoard();
let p = new Player();
console.log(p.getBestMove(board,false));
console.log(p.nodes_map);