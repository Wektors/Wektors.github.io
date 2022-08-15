function convertToRoman(num) {

let numStr = num.toString();

let numArr = numStr.split("");

let romArr = []

// function names come from positions in decimal
// last digit 'D0' because 10^0 = 1;

function convD0(num) {
  if (num == 1) {
    num = 'I'
  }
  if (num == 2) {
    num = 'II'
  }
  if (num == 3) {
    num = 'III'
  }
  if (num == 4) {
    num = 'IV'
  }
  if (num == 5) {
    num = 'V'
  }
  if (num == 6) {
    num = 'VI'
  }
  if (num == 7) {
    num = 'VII'
  }
  if (num == 8) {
    num = 'VIII'
  }
  if (num == 9) {
    num = 'IX'
  }
  if (num == 0) {
    num = ''
  }
  return num
}

function convD1(num) {
  if (num == 1) {
    num = 'X'
  }
  if (num == 2) {
    num = 'XX'
  }
  if (num == 3) {
    num = 'XXX'
  }
  if (num == 4) {
    num = 'XL'
  }
  if (num == 5) {
    num = 'L'
  }
  if (num == 6) {
    num = 'LX'
  }
  if (num == 7) {
    num = 'LXX'
  }
  if (num == 8) {
    num = 'LXXX'
  }
  if (num == 9) {
    num = 'XC'
  }
  if (num == 0) {
    num = ''
  }
  return num
}

function convD2(num) {
  if (num == 1) {
    num = 'C'
  }
  if (num == 2) {
    num = 'CC'
  }
  if (num == 3) {
    num = 'CCC'
  }
  if (num == 4) {
    num = 'CD'
  }
  if (num == 5) {
    num = 'D'
  }
  if (num == 6) {
    num = 'DC'
  }
  if (num == 7) {
    num = 'DCC'
  }
  if (num == 8) {
    num = 'DCCC'
  }
  if (num == 9) {
    num = 'CM'
  }
  if (num == 0) {
    num = ''
  }
  return num
}

function convD3(num) {
  if (num == 1) {
    num = 'M'
  }
  if (num == 2) {
    num = 'MM'
  }
  if (num == 3) {
    num = 'MMM'
  }
  return num
}


if (numArr.length == 1) {
  romArr.unshift(convD0(numArr[numArr.length - 1]));
}

if (numArr.length == 2) {
  romArr.unshift(convD0(numArr[numArr.length - 1]));
  romArr.unshift(convD1(numArr[numArr.length - 2]));
}

if (numArr.length == 3) {
  romArr.unshift(convD0(numArr[numArr.length - 1]));
  romArr.unshift(convD1(numArr[numArr.length - 2]));
  romArr.unshift(convD2(numArr[numArr.length - 3]));
}

if (numArr.length == 4) {
  romArr.unshift(convD0(numArr[numArr.length - 1]));
  romArr.unshift(convD1(numArr[numArr.length - 2]));
  romArr.unshift(convD2(numArr[numArr.length - 3]));
  romArr.unshift(convD3(numArr[numArr.length - 4]));
}

let romStr = romArr.join('')

return romStr;
}

console.log(convertToRoman(1000))
