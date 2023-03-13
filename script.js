const buttons = {
  topLeft: null,
  topMid: null,
  topRight: null,
  midLeft: null,
  center: null,
  midRight: null,
  bottomLeft: null,
  bottomMid: null,
  bottomRight: null,
};

const boardButtons = document.querySelectorAll('.board');
const clearButton = document.querySelector('#clear');
const playAgain = document.querySelector('#play-again');
const display = document.querySelector('.display');

// done grabbing shit

let turnNumber = 0;

const symbolPlacer = (player) => {
  if (player === 1) {
    return 'X';
  } else if (player === 2) {
    return 'O';
  } else {
    console.log('ERROR: symbolPlacer');
  }
};

const playerDeterminer = () => {
  turnNumber++;
  if (turnNumber % 2 === 0) {
    return 2;
  } else {
    return 1;
  }
};

const disableBoard = (boolean) => {
  if (boolean === true) {
    boardButtons.forEach((button) => (button.disabled = true));
  } else {
    boardButtons.forEach((button) => (button.disabled = false));
  }
};

const determineWinner = () => {
  const keys = Object.keys(buttons);
  const values = [];
  // values always has 9 items in it at all times
  keys.forEach((item) => {
    values.push(buttons[item]);
  });
  // horizontal win conditions, these arrays just "looks at values"
  const topRow = [values[0], values[1], values[2]];
  const midRow = [values[3], values[4], values[5]];
  const bottomRow = [values[6], values[7], values[8]];
  // vertical win conditions
  const leftCol = [values[0], values[3], values[6]];
  const midCol = [values[1], values[4], values[7]];
  const rightCol = [values[2], values[5], values[8]];
  // diagonal wins
  const criss = [values[0], values[4], values[8]];
  const cross = [values[2], values[4], values[6]];
  const winConArray = [
    topRow,
    midRow,
    bottomRow,
    leftCol,
    midCol,
    rightCol,
    criss,
    cross,
  ];
  function checkArray(winCon) {
    if (false === true) {
      return 'butthole';
    } else if (
      winCon[0] === winCon[1] &&
      winCon[0] === winCon[2] &&
      winCon[2] === winCon[1]
    ) {
      if (winCon[0] === 'X') {
        display.innerHTML = "X's has won! Yupee!";
        disableBoard(true);
      } else if (winCon[0] === 'O') {
        display.innerHTML = "O's has won! Booyah!";
        disableBoard(true);
      } else {
        console.log('super massive error has occured');
      }
    } else {
      console.log('error');
    }
  }
  winConArray.forEach((item) => {
    checkArray(item);
  });
};
// done with the helper functions

boardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerHTML === '') {
      button.innerHTML = symbolPlacer(playerDeterminer());
    } else {
      display.innerHTML =
        "Don't try to steal people's squares you vile pumpkin eater!";
    }
    const id = button.id;
    const keys = Object.keys(buttons);
    keys.forEach((key) => {
      if (id === key) {
        buttons[id] = button.innerHTML;
      }
    });
    determineWinner();
    // console.log(keys);
    // console.log(buttons);
  });
});

clearButton.addEventListener('click', () => {
  boardButtons.forEach((button) => (button.innerHTML = ''));
  // clear the rest of the object
  const keys = Object.keys(buttons);
  keys.forEach((key) => (buttons[key] = null));
  display.innerHTML = 'No one has won yet';
  disableBoard(false);
});
