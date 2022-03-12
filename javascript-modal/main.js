var modal = document.querySelector('.modal-off');
var openModalButton = document.querySelector('.open-modal-button');
var closeModalButton = document.querySelector('.no-button');

function openModal(event) {
  if (modal.className === 'modal-off') {
    modal.className = 'modal';
  }
}

function closeModal(event) {
  if (modal.className === 'modal') {
    modal.className = 'modal-off';
  }
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
