// GET MODAL ELEMENT
let modalOne = document.getElementById('firstModal');
let modalTwo = document.getElementById('secondModal');
let modalThree = document.getElementById('thirdModal');
let modalFour = document.getElementById('fourthModal');
// GET OPEN MODAL BTN
let modalBtn = document.getElementById('modalBtn');
let modalBtnTwo = document.getElementById('modalBtnTwo');
let modalBtnThree = document.getElementById('modalBtnThree');
let modalBtnFour = document.getElementById('modalBtnFour');
// GET CLOSE BTN
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let closeBtnTwo = document.getElementsByClassName('closeBtnTwo')[0];
let closeBtnThree = document.getElementsByClassName('closeBtnThree')[0];
let closeBtnFour = document.getElementsByClassName('closeBtnFour')[0];

// LISTEN FOR OPEN
modalBtn.addEventListener('click', openModal);
modalBtnTwo.addEventListener('click', openModalTwo);
modalBtnThree.addEventListener('click', openModalThree);
modalBtnFour.addEventListener('click', openModalFour);
// LISTEN FOR  CLOSE
closeBtn.addEventListener('click', closeModal);
closeBtnTwo.addEventListener('click', closeModalTwo);
closeBtnThree.addEventListener('click', closeModalThree);
closeBtnFour.addEventListener('click', closeModalFour);
// LISTEN FOR OUTSIDE CLICK (CLOSE)
window.addEventListener('click', outsideClick);

// FUNCTION TO OPEN MODEL
function openModal() {
  modalOne.style.display = 'block';
}

// FUNCTION TO OPEN MODEL 2
function openModalTwo() {
  modalTwo.style.display = 'block';
}

// FUNCTION TO OPEN MODEL 3
function openModalThree() {
  modalThree.style.display = 'block';
}

// FUNCTION TO OPEN MODEL 4
function openModalFour() {
  modalFour.style.display = 'block';
}

// FUNCTION TO CLOSE MODEL
function closeModal() {
  modalOne.style.display = 'none';
}

// FUNCTION TO CLOSE MODEL 2
function closeModalTwo() {
  modalTwo.style.display = 'none';
}

// FUNCTION TO CLOSE MODEL 3
function closeModalThree() {
  modalThree.style.display = 'none';
}

// FUNCTION TO CLOSE MODEL 4
function closeModalFour() {
  modalFour.style.display = 'none';
}

// FUNCTION TO CLOSE MODEL IF OUTSIDE THE WINDOW
function outsideClick(e) {
  if (e.target == modalOne) {
    modalOne.style.display = 'none';
  } else if (e.target == modalTwo) {
    modalTwo.style.display = 'none';
  } else if (e.target == modalThree) {
    modalThree.style.display = 'none';
  } else if (e.target == modalFour) {
    modalFour.style.display = 'none';
  }
}
