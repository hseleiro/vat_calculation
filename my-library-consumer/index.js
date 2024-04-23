'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const myLibrary_1 = require('../src/myLibrary');
function sumNumbers() {
  const number = (0, myLibrary_1.getInputValueById)('product');
  const vatResult = (0, myLibrary_1.vat)(number);
  const differenceBetweenVatAndInputValues = (0,
  myLibrary_1.differenceBetweenVatAndInputValue)(number, vatResult);
  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.innerHTML = `No VAT: ${differenceBetweenVatAndInputValues}€`;
  }
}
function addEuroSymbolToInput() {
  const inputElement = document.getElementById('product');
  if (inputElement instanceof HTMLInputElement) {
    inputElement.addEventListener('input', function () {
      // If the value is not empty and doesn't already start with €, add € to the start
      if (this.value && !this.value.startsWith('€')) {
        this.value = '€' + this.value;
      }
    });
  }
}
addEuroSymbolToInput();
window.sumNumbers = sumNumbers;
window.getInputValueById = myLibrary_1.getInputValueById;
window.differenceBetweenVatAndInputValue =
  myLibrary_1.differenceBetweenVatAndInputValue;
window.addEuroSymbolToInput = addEuroSymbolToInput;
