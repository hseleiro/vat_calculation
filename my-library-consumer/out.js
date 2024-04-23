"use strict";
(() => {
  // ../src/myLibrary.js
  function differenceBetweenTwoValues(value1, value2) {
    return value1 - value2;
  }
  function calculateVat(value) {
    return value * 0.13;
  }
  function getInputValueById(elementId) {
    let element = document.getElementById(elementId);
    if (element instanceof HTMLInputElement) {
      return parseInt(element.value);
    }
  }

  // index.ts
  function sumNumbers() {
    const expenseValue = getInputValueById("product");
    const vatResult = calculateVat(expenseValue);
    const valueIfNoVat = differenceBetweenTwoValues(expenseValue, vatResult);
    const resultElement = document.getElementById("result");
    const resultElementVat = document.getElementById("vat");
    if (resultElement && resultElementVat) {
      resultElementVat.innerHTML = `TAXES: ${expenseValue - valueIfNoVat}\u20AC`;
      resultElement.innerHTML = `NO VAT: ${valueIfNoVat}\u20AC`;
    }
  }
  window.sumNumbers = sumNumbers;
  window.getInputValueById = getInputValueById;
  window.differenceBetweenTwoValues = differenceBetweenTwoValues;
})();
