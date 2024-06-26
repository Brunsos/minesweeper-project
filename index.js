//Display js

import { createBoard } from "./minesweeper.js"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 2

const board = (createBoard(BOARD_SIZE,NUMBER_OF_MINES))
const boardElement = document.querySelector('.board')

board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
  })
})
boardElement.style.setProperty("--size",BOARD_SIZE)

/*
1. fill board with tiles and mines
2.left click listener
  -reveals tiles
3.right click listener
  -flags tiles
4. check for win/lose
*/