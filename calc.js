function getDisplay() {
    return document.querySelector('input[name="display"]');
}

function clearDisplay() {
    getDisplay().value = '';
}

function deleteLastCharacter() {
    const display = getDisplay();
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = getDisplay();
    display.value += value;
}

  function calculate() {
    try {
      
      const display = document.querySelector('input[name="display"]'); 
      const result = Function('"use strict";return (' + display.value + ')')();
      display.value = result;
    } catch (e) {
      
    }
  }

