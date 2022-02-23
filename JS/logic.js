let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
  board = [
    ["", "", ""], // 00 01 02
    ["", "", ""], // 10 11 12
    ["", "", ""], // 20 21 22
  ];

  activePlayer = players[0];
  renderBoard(board);
}

function click(col, row) {
  board[col][row] = activePlayer;
  renderBoard(board);

  if (
    (board[0][0] === activePlayer &&
      board[0][1] === activePlayer &&
      board[0][2] === activePlayer) ||
    (board[1][0] === activePlayer &&
      board[1][1] === activePlayer &&
      board[1][2] === activePlayer) ||
    (board[2][0] === activePlayer &&
      board[2][1] === activePlayer &&
      board[2][2] === activePlayer) ||
    (board[0][0] === activePlayer &&
      board[1][0] === activePlayer &&
      board[2][0] === activePlayer) ||
    (board[0][1] === activePlayer &&
      board[1][1] === activePlayer &&
      board[2][1] === activePlayer) ||
    (board[0][2] === activePlayer &&
      board[1][2] === activePlayer &&
      board[2][2] === activePlayer) ||
    (board[0][0] === activePlayer &&
      board[1][1] === activePlayer &&
      board[2][2] === activePlayer) ||
    (board[0][2] === activePlayer &&
      board[1][1] === activePlayer &&
      board[2][0] === activePlayer)
  ) {
    showWinner(players.indexOf(activePlayer));
  } else {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
    } else if ((activePlayer = players[1])) {
      activePlayer = players[0];
    }
  }
}