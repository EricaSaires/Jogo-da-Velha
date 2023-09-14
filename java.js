let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  let currentPlayer = 'X';
  let gameOver = false;

  function makeMove(row, col) {
    if (board[row][col] === '' && !gameOver) {
      board[row][col] = currentPlayer;
      document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
      if (checkWin()) {
        document.getElementById('status').innerText = `O jogador ${currentPlayer} venceu!`;
        gameOver = true;
      } else if (checkDraw()) {
        document.getElementById('status').innerText = 'Empate!';
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true;
      }
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true;
      }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true;
    }
    return false;
  }

  function checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }

  function resetGame() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  }