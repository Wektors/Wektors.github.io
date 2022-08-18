function telephoneCheck(str) {

  let result = true;



  if (str.length < 10 || str.length > 16) {
    result = false;
  }



  let numberRegex = /\d/gi;

  if (str.match(numberRegex).length !== 10 && str.match(numberRegex).length !== 11) {
    result = false;
  }
  if (str.match(numberRegex).length == 11 && str[0] !== '1') {
    result = false;
  }
   


  let badCharRegex = /[a-z_?!&#*+@]/gi;

  if (badCharRegex.test(str)) {
    result = false;
  }



  let countryCodeRegex = /^\d\D/g;

  if (countryCodeRegex.test(str) && str[0] !== '1') {
    result = false;
  }



  let beginOpenBracketsRegex = /^\(+/g;
  let pairBracketsRegex = /^\(+...\)+/g;

  if (beginOpenBracketsRegex.test(str) && pairBracketsRegex.test(str) == false) {
    result = false;
  }



  let hyphenRegex = /\-/gi;

  if (str.match(hyphenRegex) && str.match(hyphenRegex).length > 2) {
    result = false;
  }



  let closingBracketsRegex = /\)/gi;
  let openingBracketsRegex = /\(/gi;

  if (closingBracketsRegex.test(str) && openingBracketsRegex.test(str) == false) {
    result = false;
  }


  return result;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
