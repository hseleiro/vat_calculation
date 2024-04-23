// get difference of two values
export function differenceBetweenTwoValues(value1, value2) {
  return value1 - value2;
}

// get vat value
export function calculateVat(value) {
  return value * 0.13;
}

// get difference between vat and input value
export function differenceBetweenVatAndInputValue(inputValue, vatValue) {
  return inputValue - vatValue;
}

// get input value by id from input element
export function getInputValueById(elementId) {
  let element = document.getElementById(elementId);
  if (element instanceof HTMLInputElement) {
    return parseInt(element.value);
  }
}