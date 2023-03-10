const Abuttons = document.querySelectorAll('button');

Abuttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('you will die');
  });
});

const buttons = {
  topLeft: document.getElementById('top-left'),
  topMid: document.getElementById('top-mid'),
  topRight: document.getElementById('top-right'),
  midLeft: document.getElementById('mid-left'),
  center: document.getElementById('center'),
  midRight: document.getElementById('mid-right'),
  bottomLeft: document.getElementById('bottom-left'),
  bottomMid: document.getElementById('bottom-mid'),
  bottomRight: document.getElementById('bottom-right'),
  clear: document.getElementById('clear'),
  playAgain: document.getElementById('play-again'),
};

let gameData = {
  gameBoard: [
    null, // top left
    null, // top mid
    null, // top right
    null, // mid left
    null, // mid mid
    null, // mid right
    null, // bottom left
    null, // bottom mid
    null, // bottom right
  ],
};

function turn() {
  let counter = 0;
  counter++;
  if (counter % 2 === 0) {
    innerHTML = 'X';
  } else {
    innerHTML = 'O';
  }
}

function place() {}
