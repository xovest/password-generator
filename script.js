const charAmountRange = document.getElementById('characterAmountRange');
const charAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const form = document.getElementById('passwordGeneratorForm');

charAmountNumber.addEventListener('input', syncCharAmount);
charAmountRange.addEventListener('input', syncCharAmount);

form.addEventListener('submit', e => {
  e.preventDefault();
  const charAmount = charAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(charAmountNumber, includeUppercase, includeNumbers, includeSymbols);
});

function generatePassword(characterAmountNumber, includeUppercase, includeNumbers, includeSymbols) {
  String.fromCharCode(65);
}

function syncCharAmount(e) {
  const value = e.target.value;
  charAmountNumber.value = value;
  charAmountRange.value = value;
}