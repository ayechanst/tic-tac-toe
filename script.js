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
  // ----------------------------------------------------
  // const winVault = [
  //   topRow,
  //   midRow,
  //   bottomRow,
  //   leftCol,
  //   midCol,
  //   rightCol,
  //   criss,
  //   cross,
  // ];
  // winVault.forEach((win) => {
  //   if (topRow == true) {
  //     display.innerHTML = 'someone has won';
  //   }
  // });

  console.log(topRow);
};
// done with the helper functions

boardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.innerHTML = symbolPlacer(playerDeterminer());
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
})``;
