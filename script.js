// variaveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//Estrutura de dados object literals
const Modal = {
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

// 3 maneiras de criar e atribuir função a um evento
//1
form.onsubmit = function(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;
  
  Modal.message.innerText = message;
  Modal.open();
};
// 2
// form.onsubmit = () => {};
// 3
// form.onsubmit = handleSubmit;

Modal.btnClose.onclick = () => {
  Modal.close();
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}