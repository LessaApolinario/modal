const openModalButton = document.querySelector('#open')
const modalWrapper = document.querySelector('.wrapper-container')

openModalButton.addEventListener('click', () => {
  modalWrapper.classList.remove('hidden')
})

const closeModalButton = document.querySelector('#close')

closeModalButton.addEventListener('click', () => {
  modalWrapper.classList.add('hidden')
})

// Fechando o modal com a tecla Esc
document.addEventListener('keydown', (event) => {
  const isEscKey = event.key === 'Escape'
  const hasHiddenClass = modalWrapper.classList.contains('hidden')

  if (isEscKey && !hasHiddenClass) {
    modalWrapper.classList.add('hidden')
  }
})
