let currentPlayer = "X";
let cells = Array(9).fill(null);
let count = 0;
let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");
let alertmsg = document.getElementById("about")
p1.style.background = "white";
p1.style.color = "black";
let gameover = false
let restartbutton = document.getElementsByid("restart")
console.log(cells);

function restart(){
cells = Array(9).fill(null);
p1.style.background = "white";
p1.style.color = "black";
p2.style.background = "black";
p2.style.color = "white";
gameover = false
currentPlayer = "x";
let boardCells = document.querySelectorAll('.block');
  boardCells.forEach(cell => cell.innerText = "");
  alertmsg.innerText=""
}
function wins() {
  const winningIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningIndices.length; i++) {
    const [a, b, c] = winningIndices[i];
    if (cells[a] != null && cells[a] === cells[b] && cells[a] === cells[c]) {
      return true;
    }
  }
  return false;
}

function fillBlock(x) { 
  
  if(gameover){
    return;
  }
    if (cells[x.id] !== null) {
      // Cell already filled, return early
      return;
    }

  cells[x.id] = currentPlayer;
  x.innerText = currentPlayer;
  count ++;
  if(count === 9){
    alertmsg.innerText="It's a draw!! Click on the Restart button to play again"
   }

  if (wins()) {
   
    console.log("win", currentPlayer);
    gameover = true
     alertmsg.innerText = `${currentPlayer} is the winner! Click on Restart button to play again... `
    // Add any additional logic here for handling a win
    return;
  }


  // Switch player and update styling
  if (currentPlayer === "X") {
    p2.style.background = "white";
    p2.style.color = "black";
    p1.style.background = "black";
    p1.style.color = "white";
    
    currentPlayer = "O";
  } else {
    p1.style.background = "white";
    p1.style.color = "black";
    p2.style.background = "black";
    p2.style.color = "white";
    currentPlayer = "X";
  }

}
