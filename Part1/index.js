const progress = [];

function play (clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById('clickedId')
    if (playerSpan.innerText=== 'X'){
        playerSpan.innerText= 'O';
        clickedElement.innerText = 'X'
        progress[clickedId] = 'X'
        
    } else {
        playerSpan.innerText= 'X';
        clickedElement.innerText= 'O'
         progress[clickedId] = 'O'
    }
 console.log(progress)
}

const  topLeft = document.getElementById('0')
const  topMiddle = document.getElementById('1')
const  topRight = document.getElementById('2')
const  middleLeft = document.getElementById('3')
const  middleMiddle = document.getElementById('4')
const  middleRight = document.getElementById('5')
const  bottomLeft = document.getElementById('6')
const  bottomMiddle = document.getElementById('7')
const  bottomRight = document.getElementById('8')

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

   let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
  
