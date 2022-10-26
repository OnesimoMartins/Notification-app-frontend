

export function ValidNumber(text:String) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  let hasLetter = false;

  Array.from(text).forEach((it) => {
    if (!numbers.includes(it as string)) hasLetter = true;
  });

  return !hasLetter
}


export function IsTextWithoutNumbers(text:String) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  let hasNumber = false;

  Array.from(text).forEach((it) => {
    if (numbers.includes(it))
       hasNumber = true;
  });

  return text && !hasNumber
}

export function IsTextWithoutSymbols(text:String) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  let hasSymbol = false;

  Array.from(text).forEach((it) => {
    if (!alphabet.includes(it))
       hasSymbol = true;
  });

  return text && !hasSymbol
}
