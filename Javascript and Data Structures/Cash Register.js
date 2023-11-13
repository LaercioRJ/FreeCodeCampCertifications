currencyValues = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
}

function fuseCidChange(cid, changeComposition) {
  for(let i = 0; i < cid.length; i++) {
    if (cid[i][0] == changeComposition[0][0]) {
      cid[i][1] = changeComposition[0][1];
    }
  }
  return cid;
}

function invertArray(arr) {
  let answer = [];
  
  for (let i = arr.length - 1; i > -1;i--) {
    answer.push(arr[i]);
  }
  
  return answer;
}

function countRemenantCash(cid) {
  let sum = 0;
  for (let i = 0; i < cid.length; i++) {
    sum = sum + cid[i][1];
  }
  return sum;
}

function checkCashRegister(price, cash, cid) {
  let changeComposition = [];
  let change = cash - price;
  
  let availableCurrency = Object.entries(currencyValues).filter((key) => 
    key[1] <= change
  ).map(value => value[0]);
  
  availableCurrency = cid.filter(item =>
    availableCurrency.lastIndexOf(item[0]) != -1);
  
  availableCurrency = invertArray(availableCurrency);
  
  let acumulator = 0;
  let actualCurrency = 0;
  
  for (let i = 0; i < availableCurrency.length; i++) {
    actualCurrency = currencyValues[availableCurrency[i][0]];
    while((change - actualCurrency >= -0.001) && (availableCurrency[i][1] - actualCurrency >= -0.001)) {
      acumulator = acumulator + actualCurrency;
      availableCurrency[i][1] = availableCurrency[i][1] - actualCurrency;
      availableCurrency[i][1] = Math.round(availableCurrency[i][1] * 100) / 100;
      change = change - actualCurrency;
      change = Math.round(change * 100) / 100;
    }
    acumulador = Math.round(change * 100) / 100;
    if (acumulator != 0) {
      changeComposition.push([availableCurrency[i][0], acumulator.toFixed(2)]);
    }
    acumulator = 0;
  }
  if (change <= 0) {
    if (countRemenantCash(cid) == 0) {
      changeComposition = invertArray(changeComposition);
      changeComposition = fuseCidChange(cid, changeComposition);
      console.log(changeComposition);
      return {status: "CLOSED", change: changeComposition};
    } else {
      return {status: "OPEN", change: changeComposition};
    }
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}
  

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
