function convertToRoman(num) {

let numStr = num.toString();

let numArr = numStr.split("");

let romArr = []


function convDigit(num, l1, l2, l3) {
  if (num == 1) {
    num = l1
  }
  if (num == 2) {
    num = l1 + l1
  }
  if (num == 3) {
    num = l1 + l1 + l1
  }
  if (num == 4) {
    num = l1 + l2
  }
  if (num == 5) {
    num = l2
  }
  if (num == 6) {
    num = l2 + l1
  }
  if (num == 7) {
    num = l2 + l1 + l1
  }
  if (num == 8) {
    num = l2 + l1 + l1 + l1
  }
  if (num == 9) {
    num = l1 + l3
  }
  if (num == 0) {
    num = ''
  }
  return num
}


if (numArr.length == 1) {
  romArr.unshift(convDigit(numArr[numArr.length - 1], 'I', 'V', 'X'));
}

if (numArr.length == 2) {
  romArr.unshift(convDigit(numArr[numArr.length - 1], 'I', 'V', 'X'));
  romArr.unshift(convDigit(numArr[numArr.length - 2], 'X', 'L', 'C'));
  

}

if (numArr.length == 3) {
  romArr.unshift(convDigit(numArr[numArr.length - 1], 'I', 'V', 'X'));
  romArr.unshift(convDigit(numArr[numArr.length - 2], 'X', 'L', 'C'));
  romArr.unshift(convDigit(numArr[numArr.length - 3], 'C', 'D', 'M'));
}

if (numArr.length == 4) {
  romArr.unshift(convDigit(numArr[numArr.length - 1], 'I', 'V', 'X'));
  romArr.unshift(convDigit(numArr[numArr.length - 2], 'X', 'L', 'C'));
  romArr.unshift(convDigit(numArr[numArr.length - 3], 'C', 'D', 'M'));
  romArr.unshift(convDigit(numArr[numArr.length - 4], 'M', ' ', ' '));
}

let romStr = romArr.join('')

return romStr;
}

console.log(convertToRoman(4))
