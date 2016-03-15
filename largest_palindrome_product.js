/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

function palindromeCheck (){


  function PalCheck(factor_0) {
    factor_0 = '' + factor_0;
    return factor_0 === factor_0.split("").reverse().join("");
}

    for ( factor_0 = 99; factor_0 > 1; factor_0--) {
      for (factor_1 = factor_0; factor_1 > 1; factor_1--) {
          var productCheck = factor_1 * factor_0;
          if (PalCheck(productCheck) && productCheck > palindromeNumber) {
              palindromeNumber = factor_0 * factor_1;
            }
        }
    }
}
  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

function largestPalindrome() {
    for ( factor_0 = 999; factor_0 > 100; factor_0--) {
      for (factor_1 = factor_0; factor_1 > 100; factor_1--) {
          var productCheck = factor_1 * factor_0;
          if (PalCheck(productCheck) && productCheck > palindromeNumber) {
              palindromeNumber = factor_0 * factor_1;
            }
        }
    }
    return palindromeNumber;
}
function PalCheck(factor_0) {
    factor_0 = '' + factor_0;
    return factor_0 === factor_0.split("").reverse().join("");
}
