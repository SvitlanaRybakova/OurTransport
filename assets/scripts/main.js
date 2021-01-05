const confirmBtn = document.querySelector('#confirm_btn');
const calculateTheCost = document.querySelector('#calculateTheCost');
const closeModals = document.querySelector('#close_modals');


confirmBtn.addEventListener('click', () => {
  calculateTheCost.style.display = "none"; 
});

closeModals.addEventListener('click', () => {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  modalBackdrop.style.visibility = 'hidden';
}  