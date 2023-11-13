const romanSymbols = [
  ['M', 1000],
  ['C', 100, 'D', 500],
  ['X', 10, 'L', 50],
  ['I', 1, 'V', 5]
];

function addMultipleSymbols(times, romanSymbol) {
  let answer = '';
  for (let i = 0; i < times; i++) {
    answer = answer.concat(romanSymbol);
  }
  return answer;
}

function convertToRoman(num) {
  let aux;
  let result = '';
  for (let i = 0; i < romanSymbols.length; i++) {
    aux = Math.trunc(num / romanSymbols[i][1]);
    if (aux < 4) {
      result = result.concat(addMultipleSymbols(aux, romanSymbols[i][0]));
    }
    if (aux >= 5 && aux < 9) {
      result = result.concat(romanSymbols[i][2]);
      result = result.concat(addMultipleSymbols(aux - 5, romanSymbols[i][0]));
    }
    if (aux == 4) {
      result = result.concat(romanSymbols[i][0]).concat(romanSymbols[i][2]);
    }
    if (aux == 9) {
      result = result.concat(romanSymbols[i][0]).concat(romanSymbols[i - 1][0])
    }
    num = num - (aux * romanSymbols[i][1]);
  }
 return result;
}

console.log(convertToRoman(9));
