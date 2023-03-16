const gameBoard = document.getElementById("gameboard")
const info = document.getElementById("info")
const cells = ["","","","","","","","",""];
let go = "circle"
info.textContent = "Player 1 Turn"
function createBoard(){
    cells.forEach((cell,index)=>{
        const cellEle = document.createElement('div')
        cellEle.classList.add('square')
        cellEle.id = index
        cellEle.addEventListener("click",addGo)
        gameBoard.append(cellEle)
    })
}
createBoard()

function addGo(e){
const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle"? "cross" : "circle"
    info.textContent = info.textContent==="Player 1 Turn" ? "Player 2 Turn" :"Player 1 Turn";
    e.target.removeEventListener("click",addGo)
    checkWinner()
}

 function checkWinner() {
    const allSq = document.querySelectorAll(".square");
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    let player1 = false;
    let player2 = false;
  
    for (let i = 0; i < winCombo.length; i++) {
      const array = winCombo[i];
  
      player1 = array.every((cell) =>
        allSq[cell].firstChild?.classList.contains("circle")
      );
  
      if (player1) {
        info.textContent = "Player 1 Wins..!";
        allSq.forEach((square) => {
          square.replaceWith(square.cloneNode(true));
        });
        break;
      }
  
      player2 = array.every((cell) =>
        allSq[cell].firstChild?.classList.contains("cross")
      );
  
      if (player2) {
        info.textContent = "Player 2 Wins..!";
        allSq.forEach((square) => {
          square.replaceWith(square.cloneNode(true));
        });
        break;
      }
    }
  
    if (!player1 && !player2) {
     
  
      let flag = false;
      for (let i = 0; i < 9; i++) {
        if (allSq[i].childElementCount == 0) {
          flag = true;
        }
      }
      if (flag == false) {
        info.textContent = "Match Drawn..!";
      }
    }
  }
  

const btnElement = document.getElementById("button");
btnElement.addEventListener("click",restart)

function restart(){
    const allSq = document.querySelectorAll(".square")
    allSq.forEach((cell)=>{
        cell.innerHTML = '';
        cell.addEventListener("click",addGo);
    })
    cells.fill("");
    info.textContent = "Player 1 Turn"
}
  
   
