function createBoard(size = 8) {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');

      if ((i + j) % 2 === 0) {
        square.classList.add('white');
      } else {
        if (i < 3) {
          square.innerHTML = `<div class="blackFig"></div>`
        } else if (i >= size - 3) {
          square.innerHTML = `<div class="whiteFig"></div>`
        }
        square.classList.add('green');
      }

      row.appendChild(square);
    }

    board.appendChild(row);
  }

  return board;
}

const chessboard = createBoard();
document.body.appendChild(chessboard);