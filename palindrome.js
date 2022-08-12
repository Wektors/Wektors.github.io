function palindrome(str) {
    let arr = str.match(/[a-z0-9]/gi);
  
    let invArr = []
    arr.forEach((el) => {
      invArr.unshift(el)
    })
  
    let newStr = arr.join('').toLowerCase()
  
    let invStr = invArr.join('').toLowerCase()
    
    if (invStr === newStr) {
      return true
    }
    else {
      return false
    }
  }
  
  console.log(palindrome("eye"));