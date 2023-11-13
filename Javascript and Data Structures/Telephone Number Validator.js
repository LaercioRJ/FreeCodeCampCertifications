function telephoneCheck(str) {
    const myRegParen = /1{0,1}\s{0,1}\([0-9]{3}\)(\s|\-){0,1}[0-9]{3}(\s|\-){0,1}[0-9]{0,4}/;
    const myReg = /1{0,1}\s{0,1}[0-9]{3}(\s|\-){0,1}[0-9]{3}(\s|\-){0,1}[0-9]{0,4}/;
    const val1 = str.match(myRegParen);
    const val2 = str.match(myReg);
    if(Array.isArray(val1) && val1[0].length > 9) {
      return (val1[0].length == str.length);
    }
    if(Array.isArray(val2) && val2[0].length > 9){
      return (val2[0].length == str.length);
    }
    return false;
 }
 
 telephoneCheck("555-555-5555");