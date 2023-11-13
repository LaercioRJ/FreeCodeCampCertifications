function rot13(str) {
  let answer = '';
  let aux;
  for (let i = 0; i < str.length; i++) {
    aux = str.charCodeAt(i);
    if (aux < 65 || aux > 90) {
      answer = answer.concat(str[i]);
    } else {
      if (aux < 78) {
        answer = answer.concat(String.fromCharCode(aux + 13));
      } else {
        answer = answer.concat(String.fromCharCode(
          64 + (13 - (90 - aux))
        ));
      }
    }
  }
  return answer;
}

console.log(rot13("SERR PBQR PNZC"));
