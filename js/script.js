import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notNumber } from './utils.js';

// variaveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// 3 maneiras de criar e atribuir função a um evento
//1
form.onsubmit = function(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if(weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};
// 2
// form.onsubmit = () => {};
// 3
// form.onsubmit = handleSubmit;

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  
  Modal.message.innerText = message;
  Modal.open();
}