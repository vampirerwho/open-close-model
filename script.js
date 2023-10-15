'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//close modal function to make code dry...
const closer = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClose.addEventListener('click', closer);

overlay.addEventListener('click', closer);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closer();
  }
});
