let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount*tileSize;
const boardHeight = rowCount*tileSize;
let context;

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function() {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d")
}

function loadImages() {
  wallImage = new Image();
  wallImage.src = "wall.pmg";

  blueGhostImage = new Image();
  blueGhostImage.src = "blueGhost.png";
  orangeGhostImage = new Image();
  orangeGhostImage.src = "orangeGhost.png";
  pinkGhostImage = new Image();
  pinkGhostImage.src = "pinkGhost.png";
  redGhostImage = new Image();
  redGhostImage.src = "redGhost.png";
}
