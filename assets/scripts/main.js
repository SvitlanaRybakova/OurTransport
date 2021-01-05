const confirmBtn = document.querySelector('#confirm_btn');
const calculateTheCost = document.querySelector('#calculateTheCost');
const closeModals = document.querySelector('#close_modals');


confirmBtn.addEventListener('click', () => {
  console.log('in');
  calculateTheCost.style.display = "none"; 
});

closeModals.addEventListener('click', () => {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  modalBackdrop.style.visibility = 'hidden';
  location.reload();
});  