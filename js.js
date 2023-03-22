const chessBoard = document.querySelector('.chess-board')

function createBlockX() {
  for (let i = 1; i <= 4; i++) {
    const whiteBlock = document.createElement('div')
    const blackBlock = document.createElement('div')

    whiteBlock.classList.add('whiteBlock')
    blackBlock.classList.add('blackBlock')

    chessBoard.appendChild(whiteBlock)
    chessBoard.appendChild(blackBlock)
  }
}

function createBlockY() {
  for (let i = 1; i <= 4; i++) {
    const whiteBlock = document.createElement('div')
    const blackBlock = document.createElement('div')

    whiteBlock.classList.add('whiteBlock')
    blackBlock.classList.add('blackBlock')

    chessBoard.appendChild(blackBlock)
    chessBoard.appendChild(whiteBlock)
  }
}

for (let i = 0; i <= 3; i++) {
  createBlockX()
  createBlockY()
}