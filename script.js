const charAmountRange = document.getElementById('characterAmountRange');
const charAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('password-display');

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

charAmountNumber.addEventListener('input', syncCharAmount);
charAmountRange.addEventListener('input', syncCharAmount);

form.addEventListener('submit', e => {
  e.preventDefault();
  const charAmount = charAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols);
  passwordDisplay.innerText = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase)
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers)
    charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbols)
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  
  const passwordChars = [];
  for (let i = 0; i < characterAmount; ++i) {
    const chrCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordChars.push(String.fromCharCode(chrCode));
  }
  return passwordChars.join('');
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; ++i) {
    array.push(i);
  }
  return array;
}

function syncCharAmount(e) {
  const value = e.target.value;
  charAmountNumber.value = value;
  charAmountRange.value = value;
}