const big = require("bignumber.js");

var lastDigit = function (str1, str2) {
  var b = big.BigNumber(str2);
  last = str1.substr(-1);
  if (str2 == 0) {
    return 1;
  }
  switch (last) {
    case "1":
      return 1;
    case "2":
      b = parseInt(b.mod(4));
      switch (b) {
        case 1:
          return 2;
        case 2:
          return 4;
        case 3:
          return 8;
        default:
          return 6;
      }
    case "3":
      b = parseInt(b.mod(4));
      switch (b) {
        case 1:
          return 3;
        case 2:
          return 9;
        case 3:
          return 7;
        default:
          return 1;
      }
    case "4":
      b = parseInt(b.mod(2));
      switch (b) {
        case 1:
          return 4;
        default:
          return 6;
      }
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      b = parseInt(b.mod(4));
      switch (b) {
        case 1:
          return 7;
        case 2:
          return 9;
        case 3:
          return 3;
        default:
          return 1;
      }
    case "8":
      b = parseInt(b.mod(4));
      switch (b) {
        case 1:
          return 8;
        case 2:
          return 4;
        case 3:
          return 2;
        default:
          return 6;
      }
    case "9":
      b = parseInt(b.mod(2));
      switch (b) {
        case 1:
          return 9;
        default:
          return 1;
      }
    default:
      return 0;
  }
};


//Nice solution:

var lastDigit = function(str1, str2){

    // if exponent is 0, return 1
    
    if (parseInt(str2) === 0) return 1;
    
    // otherwise...
    // 0 always returns 0
    // 1 always returns 1
    // 2 rotates between 2, 4, 8, 6....
    // 3 rotates between 3, 9, 7, 1....
    // 4 rotates between 4, 6....
    // 5 always returns 5
    // 6 always returns 6
    // 7 rotates between 7, 9, 3, 1....
    // 8 rotates between 8, 4, 2, 6....
    // 9 rotates between 9, 1....
    
    // because we only need the final digit of str1 to determine the result, let's capture it
    var seed = parseInt(str1.slice(-1)) % 10;
    // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
    var exp = parseInt(str2.slice(-2)) % 4;
    if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.
  
  
    // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
    //
    
    return Math.pow(seed, exp) % 10;
  }