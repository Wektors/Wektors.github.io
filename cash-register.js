function checkCashRegister(price, cash, cid) {

  let change = cash - price;

  let result = {};

  result['status'] = "";

  let cidSum = 0.0;

  cid.forEach((curr) => {
      cidSum += curr[1];
  })

  if (cidSum < change) {
    result['status'] = "INSUFFICIENT_FUNDS";
    result['change'] = [];
    return result
  }

  if (cidSum == change) {
    result['status'] = "CLOSED";
  }

  if (cidSum > change) {
    result['status'] = "OPEN";
  }


  let changeArr = [];

  if (cidSum >= change) {

    for (let i = cid.length - 1; i >= 0; i--) {

      let currUnit = 0;

        if (cid[i][0] == "PENNY" && cid[i][1] > 0) {
          currUnit = 0.01;
        }
        if (cid[i][0] == "NICKEL" && cid[i][1] > 0) {
          currUnit = 0.05;
        }
        if (cid[i][0] == "DIME" && cid[i][1] > 0) {
          currUnit = 0.1;
        }
        if (cid[i][0] == "QUARTER" && cid[i][1] > 0) {
          currUnit = 0.25;
        }
        if (cid[i][0] == "ONE" && cid[i][1] > 0) {
          currUnit = 1.0;
        }
        if (cid[i][0] == "FIVE" && cid[i][1] > 0) {
          currUnit = 5.0;
        }
        if (cid[i][0] == "TEN"  && cid[i][1] > 0) {
          currUnit = 10.0;
        }
        if (cid[i][0] == "TWENTY" && cid[i][1] > 0) {
          currUnit = 20.0;
        }
        if (cid[i][0] == "ONE HUNDRED" && cid[i][1] > 0) {
          currUnit = 100.0;
        }

        let currAvailable = cid[i][1];
        let changeSum = 0;

        let amountToSubtract = 1;

        amountToSubtract = Math.round(cid[i][1] / currUnit) + 1;

        for (let j = 0; j <= amountToSubtract; j++) {
          if (change - currUnit >= 0 && currAvailable >= currUnit) {
            change -= currUnit.toFixed(2);
            changeSum += currUnit;
            change = change.toFixed(2);
            currAvailable -= currUnit;
          }

          if (change - currUnit < 0) {
            break
          }

        }

        if (changeSum > 0) {
          changeArr.push([cid[i][0], changeSum])
        }
        
        if (change == 0.0) {
          break
        }

      }

  }

  if (change == 0) {
    result['change'] = changeArr;
  }

  if (change > 0) {
    result['status'] = "INSUFFICIENT_FUNDS";
    result['change'] = [];
    return result
  }

  return result
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
