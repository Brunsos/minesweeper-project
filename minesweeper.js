//logic

function createBoard(boardSize, numberofMines){
  const board = [];
  for (let x = 0; x < boardSize; x++){
    const row = [];
    for (let y = 0; y < boardSize; y++){
    const tile = {
      x,
      y,
    }

    row.push(tile);
    }
  return board;
  }
}
