import {
  calculateVat,
  getInputValueById,
  differenceBetweenTwoValues,
} from '../src/myLibrary';

function sumNumbers() {
  const expenseValue = getInputValueById('product');
  const vatResult = calculateVat(expenseValue);
  const valueIfNoVat = differenceBetweenTwoValues(expenseValue, vatResult);

  const resultElement = document.getElementById('result');
  const resultElementVat = document.getElementById('vat');
  if (resultElement && resultElementVat) {
    resultElementVat.innerHTML = `TAXES: ${expenseValue - valueIfNoVat}€`;
    resultElement.innerHTML = `NO VAT: ${valueIfNoVat}€`;
  }
}

(window as any).sumNumbers = sumNumbers;
(window as any).getInputValueById = getInputValueById;
(window as any).differenceBetweenTwoValues = differenceBetweenTwoValues;
