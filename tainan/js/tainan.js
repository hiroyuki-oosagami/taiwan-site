'use strict';

// button1

document.getElementById('form1').onsubmit = function (event) {
  event.preventDefault();
  const dialog = document.getElementById('dialog1');
  dialog.showModal();
  const ok = document.querySelector('.btn1');
  ok.addEventListener('click', () => {
    dialog.close();
  })
}

// button2

document.getElementById('form2').onsubmit = function (event) {
  event.preventDefault();
  const dialog = document.getElementById('dialog2');
  dialog.showModal();
  const ok = document.querySelector('.btn2');
  ok.addEventListener('click', () => {
    dialog.close();
  })
}

// button3

document.getElementById('form3').onsubmit = function (event) {
  event.preventDefault();
  const dialog = document.getElementById('dialog3');
  dialog.showModal();
  const ok = document.querySelector('.btn3');
  ok.addEventListener('click', () => {
    dialog.close();
  })
}
// button4
document.getElementById('form4').onsubmit = function (event) {
  event.preventDefault();
  const dialog = document.getElementById('dialog4');
  dialog.showModal();
  const ok = document.querySelector('.btn4');
  ok.addEventListener('click', () => {
    dialog.close();
  })
}