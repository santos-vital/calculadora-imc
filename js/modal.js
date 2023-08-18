//Estrutura de dados object literals
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'), 

  open() {
    this.wrapper.classList.add('open');
  },
  close() {
    this.wrapper.classList.remove('open');
  }
}

Modal.btnClose.onclick = () => {
  Modal.close();
}