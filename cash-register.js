function checkCashRegister(price, cash, cid) {
  let change = cash - price;

  let result = {};

  
  cid.map((el) => {
    
    
    
    if () {
      result['status'] = "CLOSED";
      result['change'] = [el[0], change]
    }
  })

  return changeCurrency;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
