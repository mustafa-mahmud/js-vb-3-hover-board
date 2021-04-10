'use strict';

const container = document.querySelector('.container');

const allSquare = 1000;
const colors = [
  '#82b74b',
  '#405d27',
  '#6b5b95',
  '#feb236',
  '#d64161',
  '#ff7b25',
  '#80ced6',
  '#4040a1',
];

for (let i = 0; i < allSquare; i++) {
  const div = document.createElement('div');

  div.classList.add('square');
  div.addEventListener('mouseover', () => setColor(div));
  div.addEventListener('mouseout', () => removeColor(div));

  container.appendChild(div);
}

function setColor(div) {
  const color = randomColor();
  div.style.backgroundColor = color;
  div.style.boxShadow = `0 0 2px ${color}`;
}

function removeColor(div) {
  div.style.backgroundColor = '#1d1d1d';
  div.style.boxShadow = 'none';
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
