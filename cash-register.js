function checkCashRegister(price, cash, cid) {
  let change = cash - price;

  let result = {};

  let currArr = []

  cid.forEach((currency) => {

      let rest = currency[1] - change

      let toChange = currency[1] - rest;

    if (rest > 0) {

      let unit = 1;
      if (currency[0] == "PENNY") {
        unit = 0.01;
      }
      if (currency[0] == "NICKEL") {
        unit = 0.05;
      }
      if (currency[0] == "DIME") {
        unit = 0.1;
      }
      if (currency[0] == "QUARTER") {
        unit = 0.25;
      }
      if (currency[0] == "DOLLAR") {
        unit = 1;
      }
      if (currency[0] == "FIVE") {
        unit = 5;
      }
      if (currency[0] == "TEN") {
        unit = 10;
      }
      if (currency[0] == "TWENTY") {
        unit = 20;
      }
      if (currency[0] == "ONE HUNDRED") {
        unit = 100;
      }
    
      let amountNeeded = toChange / unit;

      
      currArr.push([currency[0], amountNeeded])
      
      
      
    }

    if (rest == 0) {
      result['status'] = "CLOSED"; 
      }

    if (currency[1] - change < 0) {
      result['status'] = "INSUFICIENT_FUNDS";
    }
    
    else {
      result['status'] = "OPEN";
    }
    
  })

  let lowestAmount = 10000;
  let lowestAmountIndex = 0;


  for (let i = 0; i < currArr.length; i++) {
    if (currArr[i][1] < lowestAmount && currArr[i][1] >= 1) {
      lowestAmount = currArr[i][1];
      lowestAmountIndex = i;
    }
  }
  
  let changeResult = [[currArr[lowestAmountIndex][0], change]]

  result['change'] = changeResult;

  return result
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
