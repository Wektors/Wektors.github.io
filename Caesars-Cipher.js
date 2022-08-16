function rot13(str) {
  
  let arr = str.split('')

  function decodeLetter(letter) {
    let alphArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    return alphArr[alphArr.findIndex(element => element == letter) + 13]
  }
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
      let regex = /\w/;
      let letter = arr[i]
      if (regex.test(letter) == true) {
      newArr.push(decodeLetter(arr[i]))
      }
      else {
        newArr.push(letter)
      }
    }
  
  let newStr = newArr.join('');
    
  return newStr
}

console.log(rot13("SERR PBQR PNZC"));
