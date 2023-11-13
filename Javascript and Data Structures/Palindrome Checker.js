function verifyPalindrome(str) {
    let firstHalf;
    let secondHalf;
    
    if (str.length % 2 == 0) {
      firstHalf = str.slice(0, (str.length / 2));
      secondHalf = str.slice(str.length / 2);
    } else {
      firstHalf = str.slice(0, (str.length - 1) / 2);
      secondHalf = str.slice((str.length + 1) / 2);
    }
    for (let i = 0; i < firstHalf.length; i++) {
      if (firstHalf[i] != secondHalf[firstHalf.length - (i + 1)]) {
        return false; 
      }
    }
    return true;
  }
  
  function extractNonAlpha(str) {
    const myReg = /[a-z0-9]/gi;
    const alpha = str.match(myReg);
    let answer = "";
    
    for (let i = 0; i < alpha.length; i++) {
      answer = answer.concat(alpha[i]);
    }
    
    return answer;
  }
  
  function palindrome(str) {
    str = str.toLowerCase();
    str = extractNonAlpha(str);
    console.log(str);
    return verifyPalindrome(str);
  }
  
  console.log(palindrome("_eye"));